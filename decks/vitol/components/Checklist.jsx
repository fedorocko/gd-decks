/**
 * Requirements, a row each: a box, ticked when the demo shows it and left
 * open when not, then the requirement's ID and its name.
 *
 * items:   [{ id, name, note? }], as in requirements.js; a note is a pill
 *          after the name
 * open:    none of them is shown yet, so the boxes stay empty
 * columns: how many columns the rows run down; more than one narrows the
 *          ID's, and more than six rows a column sets them a size down
 */
export default function Checklist({ items, open = false, columns = 1 }) {
  const rows = Math.ceil(items.length / columns)
  const cls = [
    'checklist',
    open && 'checklist--open',
    columns > 1 && 'checklist--split',
    rows > 6 && 'checklist--dense',
  ]

  return (
    <ol
      className={cls.filter(Boolean).join(' ')}
      style={{ '--columns': columns, '--rows': rows }}
    >
      {items.map(({ id, name, note }) => (
        <li className="checklist__item" key={id}>
          <span className="checklist__box">{open ? '' : '✓'}</span>
          <p className="checklist__id">{id}</p>
          <p className="checklist__name">
            <span>{name}</span>
            {note && <span className="checklist__note">{note}</span>}
          </p>
        </li>
      ))}
    </ol>
  )
}
