/**
 * Who something is for: a chip for each, a figure before the name, so the
 * row reads as people at a glance rather than as one more sentence.
 */
export default function People({ items }) {
  return (
    <ul className="people">
      {items.map((item) => (
        <li className="person" key={item}>
          <svg className="person__icon" viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="6.6" r="3.3" />
            <path d="M3.6 17.2c.9-3.4 3.4-5.3 6.4-5.3s5.5 1.9 6.4 5.3" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  )
}
