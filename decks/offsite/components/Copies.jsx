import Media from '../../../shared/Media.jsx'
import { STAGE_H, STAGE_W } from '../../../shared/useStageScale.js'
import copies from '../copies.js'
import media from '../media.js'

// The copies keep the screenshot's margins (slide 8), which hold them clear
// of the deck's arrow buttons.
const MARGIN_X = 96
const MARGIN_Y = 56
// The space between copies, and between groups of them, and how round a
// copy's corners are, each as a share of a copy's width, so that a grid
// keeps its look at any size.
const GAP = 0.06
const GUTTER = 0.4
const ROUND = 0.03

/**
 * Every place a copy can stand in an arrangement, as a box on the stage, with
 * its centre as a share of the whole grid's width (u) and height (v).
 */
function slots({ columns, rows, groups = 1 }) {
  const across =
    groups * columns + groups * (columns - 1) * GAP + (groups - 1) * GUTTER
  const down = (rows * STAGE_H) / STAGE_W + (rows - 1) * GAP
  const w = Math.min(
    (STAGE_W - 2 * MARGIN_X) / across,
    (STAGE_H - 2 * MARGIN_Y) / down,
  )
  const h = (w * STAGE_H) / STAGE_W
  const gap = w * GAP
  const width = w * across
  const height = w * down
  const left = (STAGE_W - width) / 2
  const top = (STAGE_H - height) / 2

  const list = []
  for (let g = 0; g < groups; g += 1) {
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const x =
          left + g * (columns * (w + gap) - gap + w * GUTTER) + col * (w + gap)
        const y = top + row * (h + gap)
        const u = (x + w / 2 - left) / width
        const v = (y + h / 2 - top) / height
        list.push({ x, y, w, h, r: w * ROUND, u, v })
      }
    }
  }
  return list
}

const SLOTS = Object.fromEntries(
  Object.entries(copies).map(([name, arrangement]) => [name, slots(arrangement)]),
)

// The arrangement with the most places gives each copy one of its own:
// where a copy ends up there decides where it waits in the others.
const FINEST = Object.values(SLOTS).reduce((a, b) =>
  b.length > a.length ? b : a,
)

const distance = (a, b) => (a.u - b.u) ** 2 + (a.v - b.v) ** 2

/** Index of the place in `list` nearest to `to`, among those `ok` allows. */
function nearest(list, to, ok = () => true) {
  let best = -1
  list.forEach((place, i) => {
    if (ok(i) && (best === -1 || distance(place, to) < distance(list[best], to)))
      best = i
  })
  return best
}

/**
 * Where each copy stands in an arrangement, and whether it shows. Each place
 * is shown by the copy that will end up nearest it in the finest
 * arrangement. The other copies wait hidden under the place nearest to where
 * they are going. So moving to more copies, each copy splits into the ones
 * that will stand around it, and moving back they merge into it again.
 */
function arrange(list) {
  const shownAt = new Map()
  list.forEach((place, i) => {
    shownAt.set(nearest(FINEST, place, (copy) => !shownAt.has(copy)), i)
  })

  return FINEST.map((end, copy) => {
    const shown = shownAt.has(copy)
    return { ...list[shown ? shownAt.get(copy) : nearest(list, end)], shown }
  })
}

/**
 * An arrangement seen up close: zoomed in on its copy nearest the middle
 * until that one fills the stage within the margins. The others stand around
 * it, spread just far enough apart to be off the stage.
 */
function closeUp(places) {
  const shown = places.filter((place) => place.shown)
  const focus = shown[nearest(shown, { u: 0.5, v: 0.5 })]
  const k = Math.min(
    (STAGE_W - 2 * MARGIN_X) / focus.w,
    (STAGE_H - 2 * MARGIN_Y) / focus.h,
  )
  const w = focus.w * k
  const h = focus.h * k
  const left = (STAGE_W - w) / 2
  const top = (STAGE_H - h) / 2

  // How far the copies' places are scaled from the focus: the zoom itself,
  // or more where a copy would otherwise show in the margins. A copy is off
  // the stage once it is past any one of its edges.
  const spread = shown.reduce((most, place) => {
    const dx = place.x - focus.x
    const dy = place.y - focus.y
    const off = [
      dx < 0 && (left + w) / -dx,
      dx > 0 && (STAGE_W - left) / dx,
      dy < 0 && (top + h) / -dy,
      dy > 0 && (STAGE_H - top) / dy,
    ].filter(Boolean)
    return off.length ? Math.max(most, Math.min(...off)) : most
  }, k)

  return places.map((place) => ({
    ...place,
    x: left + (place.x - focus.x) * spread,
    y: top + (place.y - focus.y) * spread,
    w: place.w * k,
    h: place.h * k,
    r: place.r * k,
  }))
}

// A single copy is the arrangement after it seen up close, so leaving it
// is a zoom out: the picture shrinks into the grid's middle and the rest of
// the grid comes in around it.
const NAMES = Object.keys(SLOTS)
const PLACES = {}
NAMES.forEach((name) => {
  PLACES[name] = arrange(SLOTS[name])
})
NAMES.forEach((name, i) => {
  const next = NAMES[i + 1] ?? NAMES[i - 1]
  if (SLOTS[name].length === 1 && next) PLACES[name] = closeUp(PLACES[next])
})

/**
 * Claude's dashboards on slides 11–13: once, as large as slide 8's
 * screenshot, then 25 and 90 copies.
 *
 * It is mounted once, outside the keyed slide, so it survives the slide
 * changes inside that run and moves from one arrangement to the next instead
 * of being redrawn. Every copy is in the DOM the whole time and only its box
 * changes, so plain CSS transitions do the moving. From 11 to 12 the view
 * pulls back from one copy to the whole grid; from 12 to 13 each copy splits
 * into the ones that stand around it. A hidden copy waits exactly under a
 * shown one, so it can show the moment it sets off and hide the moment it
 * arrives without the change being seen.
 *
 * show: the slide's `copies` — an arrangement in copies.js
 */
export default function Copies({ show }) {
  return (
    <div className="copies" aria-hidden="true">
      {PLACES[show].map(({ x, y, w, h, r, shown }, copy) => (
        <Media
          key={copy}
          name="claudeDashboards"
          from={media}
          className={shown ? 'copies__copy' : 'copies__copy copies__copy--hidden'}
          style={{ left: x, top: y, width: w, height: h, borderRadius: r }}
        />
      ))}
    </div>
  )
}
