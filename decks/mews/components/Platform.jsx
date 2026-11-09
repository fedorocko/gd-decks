import { A2A, ABOVE, AGENTS, ARROWS, COLUMNS, FRAME, LEFT, RIGHT } from '../layout.js'

// A name's lines, when it has two, a line apart round its middle.
const LINE = 24

/**
 * The platform as one schema (layout.js), drawn the way the other decks draw
 * theirs: the platform a lime frame, what it is made of solid lime boxes,
 * the client's own dashed, and what stands outside it frosted pills.
 *
 * The analytics agents sit across the top, reached over A2A, with Eval and
 * Observe pointing down at them; under them, the context, tools and
 * inference they run on, each taking in what the client brings from below.
 * Down the left, what the platform is, each pointing at what makes it so:
 * A2A, the frame, the client's own. Down the right, picked out, what it
 * gives.
 */
export default function Platform() {
  return (
    <svg
      className="platform"
      viewBox="0 0 1600 900"
      role="img"
      aria-label="Analytics agents on context, tools and inference, each extended by your own skills, tools and models"
    >
      <defs>
        <linearGradient id="platform-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(218, 254, 133, 0.12)" />
          <stop offset="0.7" stopColor="rgba(218, 254, 133, 0)" />
        </linearGradient>
        <linearGradient id="platform-part" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(218, 254, 133, 0.1)" />
          <stop offset="1" stopColor="rgba(218, 254, 133, 0.03)" />
        </linearGradient>
      </defs>

      <rect className="platform__frame" {...box(FRAME)} rx={22} />

      {/* the lines first, so the boxes they reach are drawn over their ends */}
      {ARROWS.map((arrow) => (
        <Arrow key={arrow.d} {...arrow} />
      ))}

      <Pill {...A2A} className="platform__pill" />
      {ABOVE.map((p) => (
        <Pill key={p.label} {...p} className="platform__pill" />
      ))}

      <g>
        <rect className="platform__part" {...box(AGENTS)} rx={14} />
        <text className="platform__agents" x={AGENTS.x + AGENTS.w / 2} y={AGENTS.y + AGENTS.h / 2}>
          {AGENTS.label}
        </text>
      </g>

      {COLUMNS.map(({ name, items, cx, nameY, yoursBox, ...column }) => (
        <g key={name}>
          <rect className="platform__part" {...box(column)} rx={14} />
          <text className="platform__column" x={cx} y={nameY}>
            {name}
          </text>
          {items.map((item) => (
            <g key={item.name}>
              <rect className="platform__item" {...box(item)} rx={10} />
              <Lines
                className="platform__item-name"
                text={item.name}
                x={item.x + item.w / 2}
                y={item.y + item.h / 2}
              />
              {item.soon && <Soon x={item.x + item.w} y={item.y} />}
            </g>
          ))}
          <rect className="platform__yours" {...box(yoursBox)} rx={12} />
          <text className="platform__yours-name" x={cx} y={yoursBox.y + yoursBox.h / 2}>
            {yoursBox.label}
          </text>
        </g>
      ))}

      {LEFT.map((p) => (
        <Pill key={p.label} {...p} className="platform__prop" />
      ))}
      {RIGHT.map((p) => (
        <Pill key={p.label} {...p} className="platform__prop platform__prop--lit" />
      ))}
    </svg>
  )
}

const box = ({ x, y, w, h }) => ({ x, y, width: w, height: h })

/** Text centred on x, y, a line per line break in it. */
function Lines({ text, x, y, className }) {
  const lines = text.split('\n')
  return (
    <text className={className} x={x} y={y}>
      {lines.map((line, i) => (
        <tspan key={line} x={x} y={y + (i - (lines.length - 1) / 2) * LINE}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

/** A label in a round-ended box. */
function Pill({ label, x, y, w, h, className }) {
  return (
    <g className={className}>
      <rect {...box({ x, y, w, h })} rx={h / 2} />
      <text x={x + w / 2} y={y + h / 2}>
        {label}
      </text>
    </g>
  )
}

/** A line with a chevron at its tip, [x, y], pointing `angle` degrees (0 is right). */
function Arrow({ d, tip: [x, y], angle }) {
  return (
    <g className="platform__arrow">
      <path d={d} />
      <path d="M-10 -7 0 0 -10 7" transform={`translate(${x} ${y}) rotate(${angle})`} />
    </g>
  )
}

/** Not out yet: the decks' Soon sticker, tilted on the corner at x, y. */
function Soon({ x, y }) {
  return (
    <g className="platform__soon" transform={`translate(${x - 10} ${y + 4}) rotate(8)`}>
      <rect x={-30} y={-12} width={60} height={24} rx={12} />
      <text x={0} y={1}>
        SOON
      </text>
    </g>
  )
}
