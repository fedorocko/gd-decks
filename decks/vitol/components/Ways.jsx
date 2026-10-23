import assetUrl from '../../../shared/asset.js'
import Edges from '../../../shared/Edges.jsx'
import Soon from './Soon.jsx'

/**
 * How something is done, a few ways side by side. Each is framed as the
 * plane is, what makes it possible in the middle of its top line; inside,
 * a picture of it, and under that what it lets you do, set large. The ways
 * share their rows, so what they let you do starts on one line.
 *
 * ways: [{ id, how, art, text }]
 *   how  — what makes it possible
 *   art  — what shows it: Chips, Flow, a screenshot, or any of them
 *   text — what it lets you do
 */
export default function Ways({ ways }) {
  return (
    <ul className="ways" style={{ '--ways': ways.length }}>
      {ways.map(({ id, how, art, text }) => (
        <li className="edged ways__way" key={id}>
          <div className="ways__art">{art}</div>
          <p className="ways__text">{text}</p>
          <Edges top={<span className="plane__label">{how}</span>} centre="top" />
        </li>
      ))}
    </ul>
  )
}

/**
 * Who or what a way works with, a chip each: [{ name, src, ours }]. src, a
 * logo in public/; ours, ours, picked out in the accent.
 */
export function Chips({ items }) {
  return (
    <ul className="ways__chips">
      {items.map(({ name, src, ours }) => (
        <li className={`ways__chip${ours ? ' ways__chip--ours' : ''}`} key={name}>
          {src && <img className="ways__logo" src={assetUrl(src)} alt="" />}
          {name}
        </li>
      ))}
    </ul>
  )
}

/**
 * One thing reaching another, top to bottom: from, the client's own, dashed
 * in the accent as the stack draws what the client brings; via, what it
 * goes through, a pill on the arrow; to, ours, outlined in the accent,
 * with note under its name and tools, a few of what it offers, a pill each
 * in it: [{ name, soon }], soon with the Soon sticker.
 */
export function Flow({ from, via, to, note, tools }) {
  return (
    <div className="flow">
      <p className="flow__box flow__box--from">{from}</p>
      <span className="flow__arrow" />
      <p className="flow__via">{via}</p>
      <span className="flow__arrow" />
      <div className="flow__box flow__box--to">
        <p>{to}</p>
        {note && <p className="flow__note">{note}</p>}
        {tools && (
          <ul className="flow__tools">
            {tools.map(({ name, soon }) => (
              <li className="flow__tool" key={name}>
                {name}
                {soon && <Soon />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
