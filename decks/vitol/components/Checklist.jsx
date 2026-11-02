/**
 * Requirements, a row each: a box, ticked when the demo shows it and left
 * open when not, then the requirement's ID and its name.
 *
 * items:   [{ id, name }], as in requirements.js
 * open:    none of them is shown yet, so the boxes stay empty
 * columns: how many columns the rows run down
 */
export default function Checklist({ items, open = false, columns = 1 }) {
  return (
    <ol
      className={`checklist${open ? ' checklist--open' : ''}`}
      style={{ '--columns': columns, '--rows': Math.ceil(items.length / columns) }}
    >
      {items.map(({ id, name }) => (
        <li className="checklist__item" key={id}>
          <span className="checklist__box">{open ? '' : '✓'}</span>
          <p className="checklist__id">{id}</p>
          <p className="checklist__name">{name}</p>
        </li>
      ))}
    </ol>
  )
}
