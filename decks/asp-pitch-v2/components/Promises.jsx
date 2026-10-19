import Kpis from '../../../shared/Kpis.jsx'
import Edges from './Edges.jsx'

/**
 * What the plane promises: a card to each promise, two to a row, in the
 * plane's frame as slides 7–9 draw their subject, and the figures that bear
 * them out in a row under it.
 *
 * label — what the frame is, in the middle of its top line
 * cards — [{ id, text }]: text, the promise, set large
 * kpis  — [{ value, label, footnote }]
 */
export default function Promises({ label, cards, kpis }) {
  return (
    <div className="promises">
      <div className="edged promises__frame">
        <ul className="promises__cards">
          {cards.map(({ id, text }) => (
            <li className="promises__card" key={id}>
              <p className="promises__text">{text}</p>
            </li>
          ))}
        </ul>
        <Edges top={<span className="plane__label">{label}</span>} centre="top" />
      </div>
      {kpis && (
        <div className="promises__kpis">
          <Kpis items={kpis} />
        </div>
      )}
    </div>
  )
}
