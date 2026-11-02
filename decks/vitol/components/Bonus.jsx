import Edges from '../../../shared/Edges.jsx'

/**
 * Something beyond the main journey, in a dashed frame of its own named
 * Bonus: another way to the same end, or a step past it. Each item is marked
 * with a plus where a journey step has its number, so their text lines up
 * with the journey's when one stands under the other.
 *
 * items: [{ step, note? }], as a journey's steps are
 * label: the frame's name, Bonus unless given
 */
export default function Bonus({ items, label = 'Bonus' }) {
  return (
    <div className="edged bonus">
      <ul className="bonus__items">
        {items.map(({ step, note }) => (
          <li className="bonus__item" key={step}>
            <span className="bonus__mark">+</span>
            <div>
              <p className="bonus__text">{step}</p>
              {note && <p className="bonus__note">{note}</p>}
            </div>
          </li>
        ))}
      </ul>
      <Edges top={<span className="plane__label">{label}</span>} />
    </div>
  )
}
