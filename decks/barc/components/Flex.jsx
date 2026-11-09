import {
  BOUNDARY,
  CHAINS,
  GOVERNANCE,
  GOVERNED_WORDS,
  LINKS,
  LOOP,
  LOOP_BELOW,
  LOOP_MIDDLE,
  MARKS,
  NODES,
  words,
} from '../flex/layout.js'
import states, { TITLES } from '../flex/states.js'

const pts = (points) => points.map(({ x, y }) => `${x},${y}`).join(' ')

// The runs along the loop's sides, as the key names them, in its order.
const KINDS = { context: 'Context', inference: 'Inference', tools: 'Tools' }

/**
 * The schema of how Claude gets its flexibility: the agentic loop, what
 * feeds it context, the tools it reaches, and what stands behind those
 * (flex/layout.js). Every part is drawn all the time and only its tone
 * changes, hidden among them, so moving from one slide's state to the next
 * (flex/states.js) fades and recolours parts where they stand.
 *
 * It is the deck's overlay, mounted outside the keyed slide, so it stays on
 * the stage through the run of slides naming its states. Its title is here
 * too, rather than on those slides, so it holds still as they change; each
 * step's is in flex/states.js.
 *
 * state: the slide's `flex` — a state in flex/states.js
 */
export default function Flex({ state }) {
  const tones = states[state]
  const tone = (id) => tones[id] ?? 'off'
  const shown = (id) => id in tones

  // A line shows while the first box it reaches does, and fades with it.
  const reach = ({ from, to, under }) => {
    const box = shown(from) && !(under && shown(under)) && to.find(shown)
    if (!box) return 'off'
    return tone(box) === 'dim' ? 'dim' : 'on'
  }

  return (
    <div className="flex">
      <h2 className="frame__title flex__title">{TITLES[state]}</h2>

      <svg className="flex__art" viewBox="0 0 1600 900" aria-hidden="true">
        <line
          className={`fx fx--${tone('boundary')} flex__boundary`}
          x1={BOUNDARY.x}
          y1={BOUNDARY.top}
          x2={BOUNDARY.x}
          y2={BOUNDARY.bottom}
        />

        <g className={`fx fx--${tone('governance')}`}>
          <rect
            className="flex__frame"
            x={GOVERNANCE.x}
            y={GOVERNANCE.y}
            width={GOVERNANCE.w}
            height={GOVERNANCE.h}
            rx={14}
          />
          <text className="flex__frame-name" x={GOVERNANCE.x} y={GOVERNANCE.y - 14}>
            {GOVERNANCE.label}
          </text>
        </g>

        {LINKS.map((link) => (
          <g className={`fx fx--${reach(link)} flex__line`} key={link.id}>
            <polyline className="flex__link" points={pts(link.points)} />
            {link.head && <Head from={link.points.at(-2)} to={link.points.at(-1)} />}
            {link.tail && <Head from={link.points[1]} to={link.points[0]} />}
          </g>
        ))}

        <polygon className={`fx fx--${tone('loop')} flex__loop`} points={pts(LOOP)} />
        {/* Its two lines centred on the middle, from the first's capitals
            to the second's baseline. */}
        <text
          className={`fx fx--${tone('loop.name')} flex__loop-name`}
          x={LOOP_MIDDLE.x}
          y={LOOP_MIDDLE.y - 6}
        >
          <tspan x={LOOP_MIDDLE.x}>Agentic</tspan>
          <tspan x={LOOP_MIDDLE.x} dy="1.1em">
            Loop
          </tspan>
        </text>
        <text
          className={`fx fx--${tone('loop.below')} flex__word`}
          x={LOOP_BELOW.x}
          y={LOOP_BELOW.y}
        >
          {LOOP_BELOW.label}
        </text>

        {MARKS.map(({ kind, id, points }) => (
          <polyline
            key={`${kind}-${id}`}
            className={`fx fx--${CHAINS[id].some(shown) ? tone(`run.${kind}`) : 'off'} flex__mark flex__mark--${kind}`}
            points={pts(points)}
          />
        ))}

        {Object.entries(NODES).map(([id, node]) => (
          <Box key={id} id={id} node={node} tone={tone} />
        ))}
        <Words id="governed" {...GOVERNED_WORDS} tone={tone} />
      </svg>

      <ul className="flex__key" aria-hidden="true">
        {Object.entries(KINDS).map(([kind, name]) => (
          <li className={`fx fx--${tone(`run.${kind}`)} flex__kind flex__kind--${kind}`} key={kind}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** A box with its name, and the words over and under it, each in its tone. */
function Box({ id, node, tone }) {
  const { x, y, w, h, label, above, below } = node

  return (
    <>
      <g className={`fx fx--${tone(id)}`}>
        <rect className="flex__box" x={x} y={y - h / 2} width={w} height={h} rx={10} />
        <text className="flex__name" x={x + w / 2} y={y}>
          {label}
        </text>
      </g>
      <Words id={id} above={above} below={below} at={words(node)} tone={tone} />
    </>
  )
}

/** The words over and under a part, `id.above` and `id.below`, at `at`. */
function Words({ id, above, below, at, tone }) {
  return (
    <>
      {above && (
        <text className={`fx fx--${tone(`${id}.above`)} flex__word`} x={at.x} y={at.above}>
          {above}
        </text>
      )}
      {below && (
        <text className={`fx fx--${tone(`${id}.below`)} flex__word`} x={at.x} y={at.below}>
          {below}
        </text>
      )}
    </>
  )
}

/** An arrowhead at `to`, pointing the way from `from`. */
function Head({ from, to }) {
  const angle = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI

  return (
    <path
      className="flex__head"
      d="M0 0 -12 -6.5 -12 6.5Z"
      transform={`translate(${to.x} ${to.y}) rotate(${angle})`}
    />
  )
}
