// Takes the slide pictures on the deck list (decks/index.html): every
// /previews/<deck>/<n>.webp it shows is slide n of that deck, shot in headless
// Chrome against a dev server of its own and saved in public/previews/.
//
//   npm run previews                  # every picture the list shows
//   npm run previews -- asp-pitch-v2  # only that deck's
//
// Run it again after the slides change; the pictures are committed, the build
// only copies them. Chrome is looked for where macOS keeps it, or set CHROME.

import { spawn } from 'node:child_process'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')
const OUT = join(root, 'public', 'previews')
const CHROME =
  process.env.CHROME ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// The stage's design size, shot at a little over a third of it: sharp at the
// size the list shows it on a retina screen, and small to load.
const STAGE = { width: 1600, height: 900 }
const SCALE = 0.6

// What the deck draws around the slide, kept out of the picture.
const HIDE = '.nav, .present, .close, .progress, .notes { display: none !important }'

const only = process.argv.slice(2)
const list = await readFile(join(root, 'decks', 'index.html'), 'utf8')
const shots = [...list.matchAll(/\/previews\/([\w-]+)\/(\d+)\.webp/g)]
  .map(([, deck, n]) => ({ deck, n }))
  .filter(({ deck }) => !only.length || only.includes(deck))

if (!shots.length) {
  console.error('No previews to take: decks/index.html shows none for that.')
  process.exit(1)
}

// A deck's folder is cleared first, so a picture the list stops showing goes.
for (const deck of new Set(shots.map((shot) => shot.deck))) {
  await rm(join(OUT, deck), { recursive: true, force: true })
  await mkdir(join(OUT, deck), { recursive: true })
}

const server = await createServer({
  configFile: join(root, 'vite.config.js'),
  logLevel: 'warn',
  server: { port: 5390 },
})
await server.listen()
const site = server.resolvedUrls.local[0]

const profile = await mkdtemp(join(tmpdir(), 'gd-previews-'))
const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    '--hide-scrollbars',
    '--mute-audio',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ],
  { stdio: ['ignore', 'ignore', 'pipe'] },
)

try {
  const page = await open(await listening(chrome))
  await page.send('Page.enable')
  await page.send('Emulation.setDeviceMetricsOverride', {
    ...STAGE,
    deviceScaleFactor: 1,
    mobile: false,
  })
  // The slides then come in without their entrance, already at rest.
  await page.send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
  })

  for (const { deck, n } of shots) {
    // Through a blank page, so a slide of the deck already open still loads
    // afresh rather than only changing the hash.
    await page.go('about:blank')
    await page.go(`${site}${deck}/#${n}`)
    await page.send('Runtime.evaluate', {
      expression: `(${settle})(${JSON.stringify(HIDE)})`,
      awaitPromise: true,
    })
    const { data } = await page.send('Page.captureScreenshot', {
      format: 'webp',
      quality: 82,
      clip: { x: 0, y: 0, ...STAGE, scale: SCALE },
    })
    const file = join(OUT, deck, `${n}.webp`)
    await writeFile(file, Buffer.from(data, 'base64'))
    console.log(`  ${deck} #${n} → public/previews/${deck}/${n}.webp`)
  }
  page.close()
} finally {
  // Chrome writes to its profile as it shuts down, so it is let go first.
  const gone = new Promise((done) => chrome.once('exit', done))
  if (chrome.exitCode === null && chrome.kill()) await gone
  await server.close()
  await rm(profile, { recursive: true, force: true, maxRetries: 5 })
}

/** Runs in the page: waits until the slide is drawn and still. */
async function settle(hide) {
  const pause = (ms) => new Promise((done) => setTimeout(done, ms))
  await pause(400)
  await document.fonts.ready
  await Promise.all(
    [...document.images].map((img) => img.decode().catch(() => {})),
  )
  await Promise.all(
    [...document.querySelectorAll('video')].map(
      (video) =>
        video.readyState >= 2 ||
        new Promise((done) => {
          video.addEventListener('loadeddata', done, { once: true })
          setTimeout(done, 5000)
        }),
    ),
  )
  const style = document.createElement('style')
  style.textContent = hide
  document.head.append(style)
  // what is measured once it is all in, like the beams, settles last
  await pause(600)
}

/** Chrome's DevTools address, once it says it is listening. */
function listening(browser) {
  return new Promise((ready, fail) => {
    let said = ''
    browser.stderr.on('data', (chunk) => {
      said += chunk
      const at = said.match(/DevTools listening on ws:\/\/([^/\s]+)/)
      if (at) ready(at[1])
    })
    browser.on('exit', () => fail(new Error(`Chrome quit before it was ready:\n${said}`)))
    browser.on('error', (error) =>
      fail(new Error(`Could not start Chrome at ${CHROME} (set CHROME): ${error.message}`)),
    )
  })
}

/** The blank tab Chrome opened, driven over the DevTools protocol. */
async function open(host) {
  const tabs = await (await fetch(`http://${host}/json/list`)).json()
  const tab = tabs.find((t) => t.type === 'page')
  const socket = new WebSocket(tab.webSocketDebuggerUrl)
  await new Promise((ready, fail) => {
    socket.addEventListener('open', ready, { once: true })
    socket.addEventListener('error', fail, { once: true })
  })

  let last = 0
  const replies = new Map()
  const waits = []
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data)
    if (message.id) {
      const reply = replies.get(message.id)
      replies.delete(message.id)
      if (message.error) reply.fail(new Error(message.error.message))
      else reply.done(message.result)
      return
    }
    const i = waits.findIndex((wait) => wait.method === message.method)
    if (i !== -1) waits.splice(i, 1)[0].done(message.params)
  })

  const send = (method, params = {}) =>
    new Promise((done, fail) => {
      replies.set(++last, { done, fail })
      socket.send(JSON.stringify({ id: last, method, params }))
    })
  const next = (method) => new Promise((done) => waits.push({ method, done }))

  return {
    send,
    async go(url) {
      const loaded = next('Page.loadEventFired')
      const { errorText } = await send('Page.navigate', { url })
      if (errorText) throw new Error(`${url}: ${errorText}`)
      await loaded
    },
    close: () => socket.close(),
  }
}
