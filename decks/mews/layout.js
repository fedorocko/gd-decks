// The platform schema's geometry on the stage's 1600 × 900, and its words.
// Everything hangs off the frame and its three columns, so moving or
// resizing the frame moves what is inside it, over it and under it.

const MID = 800

// What is out to the sides: the deck's 88px margin, then the props' width.
const MARGIN = 88
const SIDE_W = 200

/** The platform: a frame round the agents and the three columns under them. */
export const FRAME = { x: 368, y: 184, w: 864, h: 552 }
const INSET = 32
const GAP = 28

const inner = { x: FRAME.x + INSET, w: FRAME.w - 2 * INSET }

/** The agents, across the frame's top. */
export const AGENTS = {
  x: inner.x,
  y: FRAME.y + INSET,
  w: inner.w,
  h: 88,
  label: 'Analytics Agents',
}

// The columns, side by side under the agents, down to the frame's inset.
const COL_W = (inner.w - 2 * GAP) / 3
const COL_TOP = AGENTS.y + AGENTS.h + GAP
const COL_BOTTOM = FRAME.y + FRAME.h - INSET

// Within a column: its name, then its parts, each a frosted box tall
// enough for a name on two lines.
const NAME_Y = 38
const ITEM = { top: 74, h: 62, gap: 10, inset: 16 }

// The client's own, under the frame, an arrow rising from each into its
// column.
const YOURS = { y: 828, w: 200, h: 72 }

/**
 * The three columns of the platform, each with what the client brings to
 * it. An item may be `{ name, soon }`: not out yet, under the Soon sticker.
 * A line break in a name sets it on two lines.
 */
export const COLUMNS = [
  {
    name: 'Context',
    items: ['Semantics', 'Memory', 'Skills', 'Learning'],
    yours: 'Your Skills',
  },
  {
    name: 'Tools',
    items: [
      '40+ analytics\ntools over MCP',
      'Data Accelerators',
      'Flows',
      { name: 'Sandboxes', soon: true },
    ],
    yours: 'Your Tools',
  },
  {
    name: 'Inference',
    items: ['Local Models', 'Safety', 'Caching', 'Routing'],
    yours: 'Your Models',
  },
].map((column, i) => {
  const x = inner.x + i * (COL_W + GAP)
  const cx = x + COL_W / 2
  return {
    ...column,
    x,
    y: COL_TOP,
    w: COL_W,
    h: COL_BOTTOM - COL_TOP,
    cx,
    nameY: COL_TOP + NAME_Y,
    items: column.items.map((item, j) => ({
      ...(typeof item === 'string' ? { name: item } : item),
      x: x + ITEM.inset,
      y: COL_TOP + ITEM.top + j * (ITEM.h + ITEM.gap),
      w: COL_W - 2 * ITEM.inset,
      h: ITEM.h,
    })),
    yoursBox: { label: column.yours, x: cx - YOURS.w / 2, y: YOURS.y - YOURS.h / 2, w: YOURS.w, h: YOURS.h },
  }
})

/** A pill, by its middle. */
const pill = (label, cx, cy, w, h) => ({ label, x: cx - w / 2, y: cy - h / 2, w, h, cx, cy })

/**
 * Over the frame: A2A, where the agents are reached from, an arrow rising
 * to it from them through the frame's top; Eval and Observe either side,
 * over the outer columns, each pointing down at the agents.
 */
export const A2A = pill('A2A', MID, 52, 116, 48)
export const ABOVE = [
  pill('Eval', COLUMNS[0].cx, 132, YOURS.w, 52),
  pill('Observe', COLUMNS[2].cx, 132, YOURS.w, 52),
]

// What the platform is, down the left, and what it gives, down the right:
// level with the columns, the outer two a pill's height in from their ends.
const PROP_H = 60
const propY = [COL_TOP + 48, (COL_TOP + COL_BOTTOM) / 2, COL_BOTTOM - 48]

export const LEFT = ['Pluggable', 'Governed', 'Extensible'].map((label, i) =>
  pill(label, MARGIN + SIDE_W / 2, propY[i], SIDE_W, PROP_H),
)
/** What it gives: the slide's payoff, picked out. */
export const RIGHT = ['Faster', 'Safer', 'Cheaper'].map((label, i) =>
  pill(label, 1600 - MARGIN - SIDE_W / 2, propY[i], SIDE_W, PROP_H),
)

// How far a line starts from what it leaves, and the radius of its turn.
const OFF = 10
const TURN = 56

const [pluggable, governed, extensible] = LEFT
const firstYours = COLUMNS[0].yoursBox

/**
 * The arrows, each a path and its tip, pointing `angle` degrees (0 is
 * right, 90 down). A tip stops just short of a pill and on a box's line.
 */
export const ARROWS = [
  // the agents, reached over A2A: up the middle through the frame's top
  { d: `M${MID} ${AGENTS.y} V${A2A.y + A2A.h + 6}`, tip: [MID, A2A.y + A2A.h + 6], angle: -90 },
  // Eval and Observe, down to the agents
  ...ABOVE.map(({ cx, y, h }) => ({
    d: `M${cx} ${y + h + OFF} V${AGENTS.y - 2}`,
    tip: [cx, AGENTS.y - 2],
    angle: 90,
  })),
  // the client's own, up into its column
  ...COLUMNS.map(({ cx, y, h, yoursBox }) => ({
    d: `M${cx} ${yoursBox.y - OFF} V${y + h + 2}`,
    tip: [cx, y + h + 2],
    angle: -90,
  })),
  // Pluggable: up from its pill, turning along the top to A2A
  {
    d: [
      `M${pluggable.cx} ${pluggable.y - OFF}`,
      `V${A2A.cy + TURN}`,
      `Q${pluggable.cx} ${A2A.cy} ${pluggable.cx + TURN} ${A2A.cy}`,
      `H${A2A.x - OFF}`,
    ].join(' '),
    tip: [A2A.x - OFF, A2A.cy],
    angle: 0,
  },
  // Governed: across to the frame, the platform as a whole
  {
    d: `M${governed.x + governed.w + OFF} ${governed.cy} H${FRAME.x - 2}`,
    tip: [FRAME.x - 2, governed.cy],
    angle: 0,
  },
  // Extensible: down from its pill, turning into the row of the client's
  // own, and along it to the first of them
  {
    d: [
      `M${extensible.cx} ${extensible.y + extensible.h + OFF}`,
      `V${YOURS.y - TURN}`,
      `Q${extensible.cx} ${YOURS.y} ${extensible.cx + TURN} ${YOURS.y}`,
      `H${firstYours.x - OFF}`,
    ].join(' '),
    tip: [firstYours.x - OFF, YOURS.y],
    angle: 0,
  },
]
