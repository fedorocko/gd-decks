/**
 * The geometry of the schema of how Claude gets its flexibility
 * (components/Flex.jsx), on the stage's own 1600 × 900.
 *
 * The agentic loop is a regular decagon, a vertex at the top. Each of its
 * ten sides leads to one box: the line leaves the middle of the side square
 * to it, then turns level and runs to the box. The boxes stand on five rows,
 * the same on both sides, so the lines on the left mirror those on the
 * right: the context and the governance on the left, Chat level with the
 * loop's middle; the conversation over the loop; the tools and the
 * inference on the right, each with what stands behind it beyond, and the
 * LLM beyond a boundary. The evaluation stands over the loop's top corner,
 * the observability under its bottom one.
 *
 * Angles are in degrees, counter-clockwise from the right, as on paper; the
 * stage's y runs down.
 */
const rad = (deg) => (deg * Math.PI) / 180

// The loop: its circumradius, and the apothem.
const R = 150
const APOTHEM = R * Math.cos(rad(18))
// Half the width of its outline (.flex__loop), which the lines leave from
// the outside of, so an arrowhead at the loop meets the outline and stops.
const EDGE = 2

// The rows, from the loop's middle: the inner three a step apart, the outer
// two further out, which leaves room for the arrow between the last two on
// the right and keeps the lines to the top and bottom sides from running
// almost level. The loop is in the middle of the stage's height.
const STEP = 130
const OUTER = 270
const CY = 450
const ROWS = [CY - OUTER, CY - STEP, CY, CY + STEP, CY + OUTER]

const BOX_H = 52
// how far a line runs level, from its turn to its box
const RUN = 32
// between two boxes in a chain, and between Chat and the frame
const GAP = 40
// inside the governance frame, round its boxes
const PAD = 16
// either side of the boundary
const MARGIN = 32
const WIDTH = {
  chat: 116,
  governed: 196,
  conversation: 196,
  first: 226,
  second: 190,
  llm: 150,
  evaluation: 164,
  observability: 204,
}

// The lines from the sides at 36° turn level this far from the middle, so
// the boxes of the second and fourth rows stand clear of it.
const TURN = STEP / Math.tan(rad(36))

// The schema is centred on the stage across its whole width, from Chat to
// the LLM, which puts the loop a little left of the middle.
const LEFT = TURN + RUN + 2 * PAD + WIDTH.governed + GAP + WIDTH.chat
const RIGHT = TURN + RUN + WIDTH.first + GAP + WIDTH.second + 2 * MARGIN + WIDTH.llm
const CX = (1600 + LEFT - RIGHT) / 2

/** The point `d` from the loop's middle, at `deg`. */
const at = (deg, d) => ({
  x: CX + d * Math.cos(rad(deg)),
  y: CY - d * Math.sin(rad(deg)),
})

// The columns, by the left edge of their boxes.
const FIRST = CX + TURN + RUN
const SECOND = FIRST + WIDTH.first + GAP
const BORDER = SECOND + WIDTH.second + MARGIN
const BEYOND = BORDER + MARGIN
const GOVERNED = CX - TURN - RUN - PAD - WIDTH.governed
const FRAME_X = GOVERNED - PAD
const CHAT = FRAME_X - GAP - WIDTH.chat
const CONVERSATION = CX + OUTER / Math.tan(rad(72)) + RUN

const box = (label, x, y, w, more) => ({ label, x, y, w, h: BOX_H, ...more })

/**
 * The boxes, each by its left edge and the middle of its height.
 *   side  — the angle of the loop's side it hangs off
 *   from  — or the box before it in its chain, to its left
 *   above, below — the words over and under it
 *   arrow — the ends of its line with an arrowhead: 'box', or 'both' for
 *           the loop's end too
 */
export const NODES = {
  chat: box('Chat', CHAT, ROWS[2], WIDTH.chat, { side: 180, arrow: 'both' }),
  skills: box('Skills', GOVERNED, ROWS[0], WIDTH.governed, { side: 108 }),
  systemPrompt: box('System Prompt', GOVERNED, ROWS[1], WIDTH.governed, { side: 144 }),
  memory: box('Memory', GOVERNED, ROWS[3], WIDTH.governed, { side: 216 }),
  metadata: box('Metadata', GOVERNED, ROWS[4], WIDTH.governed, { side: 252 }),
  conversation: box('Conversation', CONVERSATION, ROWS[0], WIDTH.conversation, { side: 72 }),
  inference: box('Inference', FIRST, ROWS[1], WIDTH.first, {
    side: 36,
    above: 'Safety',
    below: 'Caching',
  }),
  localLlm: box('Local LLM', SECOND, ROWS[1], WIDTH.second, {
    from: 'inference',
    above: 'Secure',
    below: 'Flat cost',
  }),
  llm: box('LLM', BEYOND, ROWS[1], WIDTH.llm, {
    from: 'localLlm',
    above: 'Data leaves',
    below: 'Price per token',
    arrow: 'both',
  }),
  files: box('Files', FIRST, ROWS[2], WIDTH.first, {
    side: 0,
    above: 'Localhost',
    below: 'Sharing',
    arrow: 'box',
  }),
  deployedApp: box('Deployed App', SECOND, ROWS[2], WIDTH.second, {
    from: 'files',
    above: 'Hosted',
    below: 'Shareable',
    arrow: 'box',
  }),
  dataAccelerator: box('Data Accelerator', FIRST, ROWS[3], WIDTH.first, {
    side: 324,
    above: 'No DWH load',
    below: 'Secure',
  }),
  data: box('DWH', SECOND, ROWS[3], WIDTH.second, {
    from: 'dataAccelerator',
    above: 'More load',
    below: 'Permissions',
    arrow: 'box',
  }),
  sandboxedApi: box('Sandboxed API', FIRST, ROWS[4], WIDTH.first, {
    side: 288,
    above: 'Secure',
    below: 'Ephemeral',
  }),
  computer: box('Computer', SECOND, ROWS[4], WIDTH.second, {
    from: 'sandboxedApi',
    above: 'Footprint',
    below: 'Permissions',
    arrow: 'box',
  }),
  // Over the loop's top corner, a box's height above the top row: clear of
  // the title, and of the turns of the lines to Skills and Conversation.
  evaluation: box('Evaluation', CX - WIDTH.evaluation / 2, ROWS[0] - BOX_H, WIDTH.evaluation, {
    h: 44,
  }),
  // Its mirror under the loop's bottom corner, as far below the bottom row:
  // clear of the turns of the lines to Metadata and Sandboxed API.
  observability: box(
    'Observability',
    CX - WIDTH.observability / 2,
    ROWS[4] + BOX_H,
    WIDTH.observability,
    { h: 44 },
  ),
}

// The words over a box sit this far above it, to their baseline; those
// under it this far below, to their baseline, which clears their capitals.
const ABOVE = 12
const BELOW = 27

/** Where a box's words over and under it stand: their middle and baseline. */
export const words = (node) => ({
  x: node.x + node.w / 2,
  above: node.y - node.h / 2 - ABOVE,
  below: node.y + node.h / 2 + BELOW,
})

/**
 * The words over and under the governed boxes as one, where a box's would
 * stand over the first of them and under the last.
 */
export const GOVERNED_WORDS = {
  above: 'Unmanaged',
  below: 'No audit trail',
  at: { ...words(NODES.skills), below: words(NODES.metadata).below },
}

/** The decagon's ten corners. */
export const LOOP = Array.from({ length: 10 }, (_, i) => at(90 + 36 * i, R))
export const LOOP_MIDDLE = { x: CX, y: CY }
// The word under the loop's name, inside it, to its baseline: the name
// stays on the middle, this below it.
export const LOOP_BELOW = { label: 'Lifecycle', x: CX, y: CY + 68 }

/** The point where a line leaves the side at `side`, and where it turns. */
function fromSide(side, y) {
  const start = at(side, APOTHEM + EDGE)
  if (side % 180 === 0) return [start]
  return [start, at(side, (CY - y) / Math.sin(rad(side)))]
}

/** A box, then the boxes chained after it, in order. */
function chain(id) {
  const next = Object.keys(NODES).find((other) => NODES[other].from === id)
  return next ? [id, ...chain(next)] : [id]
}

/** The boxes down each side's line, by the box the side leads to, nearest first. */
export const CHAINS = Object.fromEntries(
  Object.entries(NODES)
    .filter(([, node]) => node.side !== undefined)
    .map(([id]) => [id, chain(id)]),
)

/**
 * The lines, in pieces, so each can reach only as far as its boxes have
 * come. A piece leaves `from` for the first of `to` that shows: the boxes
 * further down its line, nearest first. One with `under` runs across that
 * box, carrying the line on to those beyond while it is hidden. `head` puts
 * an arrowhead at a piece's far end, `tail` one at its start.
 */
export const LINKS = [
  ...Object.entries(CHAINS).flatMap(([first, boxes]) => {
    const { side, y } = NODES[first]
    const right = Math.cos(rad(side)) > 0
    const near = (id) => ({ x: right ? NODES[id].x : NODES[id].x + NODES[id].w, y })
    const far = (id) => ({ x: right ? NODES[id].x + NODES[id].w : NODES[id].x, y })
    // The arrowhead at the loop is on the first piece, whichever box down
    // the line asks for it.
    const back = boxes.some((id) => NODES[id].arrow === 'both')

    return boxes.flatMap((id, i) => [
      {
        id: `to-${id}`,
        from: 'loop',
        to: boxes.slice(i),
        head: NODES[id].arrow !== undefined,
        tail: i === 0 && back,
        points: i === 0 ? [...fromSide(side, y), near(id)] : [far(boxes[i - 1]), near(id)],
      },
      ...(i < boxes.length - 1
        ? [{ id: `under-${id}`, from: 'loop', to: boxes.slice(i + 1), under: id, points: [near(id), far(id)] }]
        : []),
    ])
  }),
  // The evaluation, straight down to the loop's top corner; the outline's
  // mitre stands out past the corner itself, so the arrow stops there.
  {
    id: 'to-evaluation',
    from: 'loop',
    to: ['evaluation'],
    tail: true,
    points: [
      at(90, R + EDGE / Math.sin(rad(72))),
      { x: CX, y: NODES.evaluation.y + NODES.evaluation.h / 2 },
    ],
  },
  // And the observability, straight up to the loop's bottom corner.
  {
    id: 'to-observability',
    from: 'loop',
    to: ['observability'],
    tail: true,
    points: [
      at(270, R + EDGE / Math.sin(rad(72))),
      { x: CX, y: NODES.observability.y - NODES.observability.h / 2 },
    ],
  },
  // The sandbox reaches the data through the accelerator: up, from the
  // left of their column, clear of the words between them.
  {
    id: 'sandboxedApi-dataAccelerator',
    from: 'sandboxedApi',
    to: ['dataAccelerator'],
    head: true,
    points: [
      { x: FIRST + 36, y: ROWS[4] - BOX_H / 2 },
      { x: FIRST + 36, y: ROWS[3] + BOX_H / 2 },
    ],
  },
]

// The runs that mark the sides by what they bring the loop: context and
// inference inside the decagon, tools outside it, each this far off the
// side. They run on a decagon of their own, so the runs along neighbouring
// sides meet at its corners.
const MARK = 14
const MARKED = {
  context: { off: -MARK, ids: ['conversation', 'skills', 'systemPrompt', 'chat', 'memory', 'metadata'] },
  inference: { off: -MARK, ids: ['inference'] },
  tools: { off: MARK, ids: ['files', 'dataAccelerator', 'sandboxedApi', 'metadata'] },
}

const along = (side, off) => {
  const r = (APOTHEM + off) / Math.cos(rad(18))
  return [at(side - 18, r), at(side + 18, r)]
}

/** One run per marked side: its kind, the box it leads to, and its two ends. */
export const MARKS = Object.entries(MARKED).flatMap(([kind, { off, ids }]) =>
  ids.map((id) => ({ kind, id, points: along(NODES[id].side, off) })),
)

/** The frame round the governed boxes, its name over its top left corner. */
export const GOVERNANCE = {
  x: FRAME_X,
  y: ROWS[0] - BOX_H / 2 - PAD,
  w: WIDTH.governed + 2 * PAD,
  h: ROWS[4] - ROWS[0] + BOX_H + 2 * PAD,
  label: 'Governance',
}

/** The boundary the LLM stands beyond: a line down the schema's height. */
export const BOUNDARY = {
  x: BORDER,
  top: GOVERNANCE.y,
  bottom: GOVERNANCE.y + GOVERNANCE.h,
}
