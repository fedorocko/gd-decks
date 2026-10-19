import { useId, useLayoutEffect, useRef, useState } from 'react'
import Kpis from '../../../shared/Kpis.jsx'
import Edges from './Edges.jsx'
import { Box, Edge, Tag } from './Versus.jsx'

/**
 * Ours from Versus on its own, with one of its arrows opened up: what
 * happens on it laid out in a panel under the row, a beam spreading down to
 * the panel from the arrow's pill. The model is several, the arrow to them
 * forking to each.
 *
 * boxes    — what the frame holds before the models: two, each a name or
 *            { name, tag, quiet }: tag, a badge under the name; quiet, set
 *            back in grey, where the slide is not about it
 * model    — what each model is called
 * models   — how many of them, stacked
 * edges    — what the arrows carry: between the boxes, and to the models
 * open     — which arrow is opened, 0 or 1: its pill is solid, the beam
 *            comes out of it, and the panel takes its name
 * label    — what the frame is, in the middle of its top line
 * host     — what the models run on, a dotted box round them
 * kpis     — what it comes to, figures under the panel: [{ value, label,
 *            footnote }]
 * benefits — or what it gives, a row of badges under the panel
 * children — what the panel holds
 */
export default function Inside({
  boxes,
  model,
  models = 3,
  edges,
  open = 1,
  label,
  host,
  kpis,
  benefits,
  children,
}) {
  const root = useRef(null)
  const firstBox = useRef(null)
  const lastBox = useRef(null)
  const betweenPill = useRef(null)
  const outPill = useRef(null)
  const hostBox = useRef(null)
  const panel = useRef(null)
  // what stands either side of the opened arrow, whose corners the beam
  // keeps clear of
  const [before, pill, after] =
    open === 0 ? [firstBox, betweenPill, lastBox] : [lastBox, outPill, hostBox]
  const beam = useBeam(root, before, pill, after, panel)
  const [first, last] = boxes.map((box) =>
    typeof box === 'string' ? { name: box } : box,
  )
  const [between, out] = edges
  const opened = (i) => (open === i ? ' versus__along--open' : '')

  return (
    <div className="versus versus--inside" ref={root} style={{ '--models': models }}>
      <div className="edged versus__frame versus__frame--ours">
        <Edges top={<span className="plane__label">{label}</span>} centre="top" />
      </div>
      {beam && <Beam {...beam} />}

      <div className="versus__row versus__row--ours">
        <Box {...first} column={2} boxRef={firstBox} />
        <div className={`versus__along versus__along--between${opened(0)}`}>
          <Edge via={between} pillRef={betweenPill} />
        </div>
        <Box {...last} column={4} boxRef={lastBox} />
        <div
          className={`versus__along versus__along--out versus__along--fork${opened(1)}`}
        >
          <Edge via={out} head={false} pillRef={outPill} />
          <span className="versus__fork">
            {Array.from({ length: models }, (_, i) => (
              <span className="versus__stub" key={i} />
            ))}
          </span>
        </div>
        <div className="edged versus__host" ref={hostBox}>
          <div className="versus__models">
            {Array.from({ length: models }, (_, i) => (
              <div className="versus__box versus__box--model" key={i}>
                <p className="versus__name">{model}</p>
              </div>
            ))}
          </div>
          <Edges
            top={<span className="versus__host-label">{host}</span>}
            centre="top"
          />
        </div>
      </div>

      <div className="edged inside__panel" ref={panel}>
        {children}
        <Edges
          top={<span className="plane__label inside__label">{edges[open]}</span>}
        />
      </div>

      {kpis && (
        <div className="inside__kpis">
          <Kpis items={kpis} />
        </div>
      )}

      {benefits && (
        <ul className="versus__benefits inside__benefits">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <Tag>{benefit}</Tag>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Steps in a row, an arrow from each to the next: [{ name, text }] */
export function Steps({ steps }) {
  return (
    <ol className="inside__steps" style={{ '--steps': steps.length }}>
      {steps.map(({ name, text }) => (
        <li className="inside__step" key={name}>
          <p className="inside__name">{name}</p>
          <p className="inside__text">{text}</p>
        </li>
      ))}
    </ol>
  )
}

/** Air the beam's sides keep from the corners they pass. */
const CLEAR = 24

/**
 * The beam's corners, in the diagram's own pixels. It starts across the
 * pill's middle, clear of its rounded ends, and spreads down to the panel's
 * top line as wide as it can: each side passes just clear of the bottom
 * corner beside it, of what stands before the pill and after it. The stage
 * is scaled, so what the browser measures on screen is scaled back.
 */
function useBeam(root, before, pill, after, panel) {
  const [beam, setBeam] = useState(null)

  useLayoutEffect(() => {
    let live = true
    const measure = () => {
      if (!live) return
      const frame = root.current.getBoundingClientRect()
      const k = root.current.offsetWidth / frame.width
      const at = (x, y) => [(x - frame.left) * k, (y - frame.top) * k]
      const [a, p, h, q] = [before, pill, after, panel].map((ref) =>
        ref.current.getBoundingClientRect(),
      )
      const mid = p.top + p.height / 2
      // where the line from (x, mid) past (cx, cy) meets the panel's top
      const reach = (x, cx, cy) => x + ((cx - x) * (q.top - mid)) / (cy - mid)
      const left = p.left + p.height / 2
      const right = p.right - p.height / 2
      setBeam({
        points: [
          at(left, mid),
          at(right, mid),
          at(reach(right, h.left - CLEAR, h.bottom), q.top),
          at(reach(left, a.right + CLEAR, a.bottom), q.top),
        ],
      })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root.current)
    document.fonts?.ready.then(measure)
    return () => {
      live = false
      observer.disconnect()
    }
  }, [root, before, pill, after, panel])

  return beam
}

/** A wash from the pill down to the panel, ruled along its sides. */
function Beam({ points }) {
  const fill = useId()
  const [a, b, c, d] = points

  return (
    <svg className="inside__beam" aria-hidden="true">
      <defs>
        <linearGradient id={fill} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="inside__beam-top" />
          <stop offset="1" className="inside__beam-foot" />
        </linearGradient>
      </defs>
      <polygon points={points.join(' ')} fill={`url(#${fill})`} />
      <line x1={a[0]} y1={a[1]} x2={d[0]} y2={d[1]} />
      <line x1={b[0]} y1={b[1]} x2={c[0]} y2={c[1]} />
    </svg>
  )
}
