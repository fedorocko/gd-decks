import { useMemo, useRef } from 'react'
import assetUrl from '../../../shared/asset.js'
import Edges from '../../../shared/Edges.jsx'
import Media from '../../../shared/Media.jsx'
import media from '../media.js'
import Beam from './Beam.jsx'
import Shot from './Shot.jsx'
import Soon from './Soon.jsx'
import useBeam from './useBeam.js'

/**
 * How something is done, a few ways stacked as rows: the Vitol deck's
 * columns on their side. Each is framed, what makes it possible on its top
 * line; inside, what it lets you do on the left and what shows it on the
 * right.
 *
 * ways: [{ id, how, text, note, art }]
 *   note — a line under the text, quieter
 *   art  — what shows it: Chips, Flow, Screen, or any of them
 */
export default function Rows({ ways }) {
  return (
    <ul className="rows">
      {ways.map(({ id, how, text, note, art }) => (
        <li className="edged rows__row" key={id}>
          <div>
            <p className="rows__text">{text}</p>
            {note && <p className="rows__note">{note}</p>}
          </div>
          <div className="rows__art">{art}</div>
          <Edges top={<span className="plane__label">{how}</span>} />
        </li>
      ))}
    </ul>
  )
}

/**
 * Who or what a way works with, a chip each: [{ name, src, ours }]. src, a
 * logo in public/; ours, ours, in the accent. stacked, one under another.
 */
export function Chips({ items, stacked = false }) {
  return (
    <ul className={`rows__chips${stacked ? ' rows__chips--stacked' : ''}`}>
      {items.map(({ name, src, ours }) => (
        <li className={`rows__chip${ours ? ' rows__chip--ours' : ''}`} key={name}>
          {src && <img className="rows__logo" src={assetUrl(src)} alt="" />}
          {name}
        </li>
      ))}
    </ul>
  )
}

/**
 * Screenshots from media.js stacked one over another, each a step higher
 * and further right than the one in front: many products, one behind
 * another. names — the first in front.
 */
export function Pile({ names }) {
  return (
    <div className="rows__pile" style={{ '--count': names.length }}>
      {names
        .map((name, i) => (
          <div className="rows__card" style={{ '--i': i }} key={name}>
            <Shot name={name} />
          </div>
        ))
        .reverse()}
    </div>
  )
}

/** A screenshot from media.js, small, or its placeholder until it is in. */
export function Screen({ name }) {
  return <Media name={name} from={media} className="rows__screen" />
}

/**
 * One thing reaching another, left to right: from, the client's own, dashed
 * in the accent; via, what it goes through, a pill between the arrows; to,
 * ours, outlined in the accent. Under the line, the pill opens in a funnel
 * onto tools, what it reaches in ours, a pill each: [{ name, soon }].
 */
export function Flow({ from, via, to, tools }) {
  const root = useRef(null)
  const pill = useRef(null)
  const row = useRef(null)
  const ends = useMemo(() => [pill, row], [])
  const funnel = useBeam(root, ends, open)

  return (
    <div className="rflow" ref={root}>
      {funnel && <Beam points={funnel} />}
      <div className="rflow__line">
        <p className="rflow__box rflow__box--from">{from}</p>
        <span className="rflow__arrow" />
        <p className="rflow__via" ref={pill}>
          {via}
        </p>
        <span className="rflow__arrow rflow__arrow--head" />
        <p className="rflow__box rflow__box--to">{to}</p>
      </div>
      <ul className="rflow__tools" ref={row}>
        {tools.map(({ name, soon }) => (
          <li className="rflow__tool" key={name}>
            {name}
            {soon && <Soon />}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * The funnel's corners: across the pill's foot, clear of its round ends,
 * down to the top of the tools' row, as wide as it less its pills' ends.
 */
function open([p, r], at) {
  const end = r.height / 2
  return [
    at(p.left + p.height / 2, p.bottom),
    at(p.right - p.height / 2, p.bottom),
    at(r.right - end, r.top),
    at(r.left + end, r.top),
  ]
}
