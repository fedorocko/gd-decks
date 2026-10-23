// Exports a deck as a PDF, one slide to a 16 : 9 page, as the room sees it
// when it is presented: internal slides left out, no speaker notes, no
// controls. Each slide is shot in headless Chrome against a dev server of
// its own, at twice the stage's size, and Chrome then prints the pictures,
// one to a page, so nothing else needs installing.
//
//   npm run pdf -- offsite           # → exports/offsite.pdf
//   npm run pdf -- offsite out.pdf   # → out.pdf
//
// The shooting follows scripts/previews.mjs. Chrome is looked for where macOS
// keeps it, or set CHROME.

import { spawn } from 'node:child_process'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')
const CHROME =
  process.env.CHROME ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// The stage's design size, shot at twice it so the text stays sharp when
// the page is zoomed or printed.
const STAGE = { width: 1600, height: 900 }
const SCALE = 2
const QUALITY = 90

// What the deck draws around the slide, kept out of the picture.
const HIDE = '.nav, .present, .close, .progress, .notes { display: none !important }'

const [deck, target] = process.argv.slice(2)
if (!deck) {
  console.error('Which deck? npm run pdf -- <deck> [out.pdf]')
  process.exit(1)
}
const out = resolve(root, target ?? join('exports', `${deck}.pdf`))

const pages = await running(deck)
console.log(`${deck}: ${pages.length} slides`)

const server = await createServer({
  configFile: join(root, 'vite.config.js'),
  logLevel: 'warn',
  server: { port: 5391 },
})
await server.listen()
const site = server.resolvedUrls.local[0]

const work = await mkdtemp(join(tmpdir(), 'gd-pdf-'))
const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--remote-debugging-port=0',
    `--user-data-dir=${join(work, 'profile')}`,
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
    deviceScaleFactor: SCALE,
    mobile: false,
  })
  // The slides then come in without their entrance, already at rest.
  await page.send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
  })

  const shots = []
  for (const n of pages) {
    // Through a blank page, so each slide loads afresh rather than only
    // changing the hash.
    await page.go('about:blank')
    await page.go(`${site}${deck}/#${n}`)
    await page.send('Runtime.evaluate', {
      expression: `(${settle})(${JSON.stringify(HIDE)})`,
      awaitPromise: true,
    })
    const { data } = await page.send('Page.captureScreenshot', {
      format: 'jpeg',
      quality: QUALITY,
      clip: { x: 0, y: 0, ...STAGE, scale: 1 },
    })
    const file = join(work, `${n}.jpg`)
    await writeFile(file, Buffer.from(data, 'base64'))
    shots.push(file)
    console.log(`  #${n}`)
  }

  // The pictures, one to a page the stage's size, printed by Chrome.
  const sheet = join(work, 'deck.html')
  await writeFile(sheet, book(shots))
  await page.send('Emulation.clearDeviceMetricsOverride')
  await page.go(pathToFileURL(sheet).href)
  await page.send('Runtime.evaluate', {
    expression: 'Promise.all([...document.images].map((img) => img.decode()))',
    awaitPromise: true,
  })
  const { stream } = await page.send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    transferMode: 'ReturnAsStream',
  })
  const pdf = await page.read(stream)
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, pdf)
  page.close()
  console.log(`→ ${out} (${(pdf.length / 1e6).toFixed(1)} MB)`)
} finally {
  // Chrome writes to its profile as it shuts down, so it is let go first.
  const gone = new Promise((done) => chrome.once('exit', done))
  if (chrome.exitCode === null && chrome.kill()) await gone
  await server.close()
  await rm(work, { recursive: true, force: true, maxRetries: 5 })
}

/**
 * The deck's slides as presented, by their 1-based number: the running order
 * from its slides/index.js, without the ones marked `internal = true`.
 */
async function running(name) {
  const dir = join(root, 'decks', name, 'slides')
  const index = await readFile(join(dir, 'index.js'), 'utf8').catch(() => {
    console.error(`No deck called ${name} (decks/${name}/slides/index.js).`)
    process.exit(1)
  })
  const from = new Map(
    [...index.matchAll(/import\s+(\w+)\s+from\s+'\.\/([^']+)'/g)].map(
      ([, id, file]) => [id, file],
    ),
  )
  const order = index
    .match(/const slides = \[([\s\S]*?)\]/)[1]
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)

  const shown = []
  for (const [i, id] of order.entries()) {
    const source = await readFile(join(dir, from.get(id)), 'utf8')
    if (!new RegExp(`${id}\\.internal\\s*=\\s*true`).test(source)) shown.push(i + 1)
  }
  return shown
}

/** A page of the pictures, each filling a page of its own. */
function book(files) {
  const { width, height } = STAGE
  const imgs = files
    .map((file) => `<img src="${pathToFileURL(file).href}">`)
    .join('\n')
  return `<!doctype html>
<meta charset="utf-8">
<style>
  @page { size: ${width}px ${height}px; margin: 0 }
  html, body { margin: 0; background: #000 }
  img { display: block; width: ${width}px; height: ${height}px; break-after: page }
  img:last-child { break-after: auto }
</style>
${imgs}
`
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
    /** All of a stream Chrome hands back, such as a printed PDF. */
    async read(handle) {
      const chunks = []
      for (;;) {
        const { data, base64Encoded, eof } = await send('IO.read', {
          handle,
          size: 1 << 20,
        })
        chunks.push(Buffer.from(data, base64Encoded ? 'base64' : 'utf8'))
        if (eof) break
      }
      await send('IO.close', { handle })
      return Buffer.concat(chunks)
    },
    close: () => socket.close(),
  }
}
