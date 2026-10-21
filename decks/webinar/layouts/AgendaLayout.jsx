import Img from '../components/Img.jsx'

/**
 * The running order down the left, numbered, the mark on the right. With no
 * items it is the agenda still to be written: its title and its first rule.
 *
 * items: [{ id, text, tag, items: [{ id, text, tag }] }] — each part, what
 *   it covers under it; tag, the demo that shows it, after its words
 */
export default function AgendaLayout({ title = 'Agenda', items = [] }) {
  return (
    <section className="slide slide--agenda">
      <Img name="artMark" className="art" />
      <h2 className="h2">{title}</h2>
      <ol className="agenda">
        {items.map(({ id, text, tag, items: subs = [] }, i) => (
          <li className="agenda__item" key={id}>
            <p className="agenda__head">
              <span className="agenda__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="agenda__text">{text}</span>
              {tag && <span className="tag">{tag}</span>}
            </p>
            {subs.length > 0 && (
              <ul className="agenda__subs">
                {subs.map((sub) => (
                  <li className="agenda__sub" key={sub.id}>
                    {sub.text}
                    {sub.tag && <span className="tag">{sub.tag}</span>}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
