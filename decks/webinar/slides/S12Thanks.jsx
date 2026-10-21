import Mark from '../../../shared/Mark.jsx'
import Img from '../components/Img.jsx'

// Where to find us next: a card to each event, what it is and when or where
// on its first line, then its date, its name, what we do there and who or
// where.
const EVENTS = [
  {
    id: 'webinar',
    kind: 'Webinar',
    at: '9 AM PST / 6 PM CET',
    date: 'November 11',
    title: 'Stop choosing between AI and data security',
    sub: 'GoodData.AI Native Inference',
    note: 'With Zdeněk Musil and Jan Kadlec',
  },
  {
    id: 'barc',
    kind: 'Conference',
    at: 'Würzburg, Germany',
    date: 'November 11–12',
    title: 'BARC Data & AI Summit',
    sub: 'Visit our booth and catch our session with DATEV',
    note: 'VCC Vogel Convention Center',
  },
]

// The close: thanks, the events to join us at next, where to follow us,
// and the name. The title's circles stand behind it on both sides, the left
// one mirrored.
export default function S12Thanks() {
  return (
    <section className="slide slide--thanks">
      <Img name="artCircles" className="art" />
      <Img name="artCircles" className="art art--left" />
      <h2 className="thanks__title">Thank you!</h2>
      <p className="eyebrow thanks__next">Join us next</p>
      <ul className="events">
        {EVENTS.map(({ id, kind, at, date, title, sub, note }) => (
          <li className="event" key={id}>
            <p className="event__meta">
              <span className="tag">{kind}</span>
              <span>{at}</span>
            </p>
            <p className="event__date">{date}</p>
            <h3 className="event__title">{title}</h3>
            <p className="event__sub">{sub}</p>
            <p className="event__note">{note}</p>
          </li>
        ))}
      </ul>
      <div className="thanks__lines">
        <p>
          Follow us on <Mark>LinkedIn</Mark> for more upcoming events!
        </p>
      </div>
      <Img name="wordmark" alt="GoodData.AI" className="thanks__logo" />
    </section>
  )
}
