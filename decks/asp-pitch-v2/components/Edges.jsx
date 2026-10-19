/**
 * A box's border, drawn in pieces so that a label can stand in a gap in its
 * top or bottom line, the way a fieldset's legend does in its top one, with
 * nothing painted behind it. Goes inside an `.edged` box, which has no border
 * of its own.
 *
 * centre — the side, 'top' or 'bottom', whose label stands in the middle of
 *          its line rather than in from its start
 * end    — the side whose label stands in from the end of its line
 */
export default function Edges({ top, bottom, centre, end }) {
  const at = (side) =>
    centre === side ? 'centre' : end === side ? 'end' : undefined

  return (
    <>
      <Edge side="top" label={top} at={at('top')} />
      <span className="edges__sides" />
      <Edge side="bottom" label={bottom} at={at('bottom')} />
    </>
  )
}

function Edge({ side, label, at }) {
  // a line with no label is whole, so it has nowhere to place one
  const placed = label && at
  const cls = `edges__edge edges__edge--${side}${placed ? ` edges__edge--${at}` : ''}`

  return (
    <span className={cls}>
      {label ? (
        <>
          <span className="edges__lead" />
          <span className="edges__label">{label}</span>
          <span className="edges__run" />
        </>
      ) : (
        <span className="edges__run edges__run--whole" />
      )}
    </span>
  )
}
