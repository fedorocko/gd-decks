/**
 * A row of badges, each ticked.
 * lit: solid lime, for what a product brings rather than what it does.
 */
export default function Checks({ items, lit = false }) {
  return (
    <ul className={lit ? 'checks checks--lit' : 'checks'}>
      {items.map((item) => (
        <li className="check" key={item}>
          <svg className="check__icon" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4.5 10.5l3.6 3.6 7.4-8.2" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  )
}
