import Img from '../components/Img.jsx'

const AWARDS = [
  {
    id: 'gartner',
    badge: 'badgeGartner',
    alt: 'Gartner',
    title: 'Recognized in the Magic Quadrant',
    text: 'for Analytics & BI Platforms',
  },
  {
    id: 'trustradius',
    badge: 'badgeTrustradius',
    alt: 'TrustRadius Top Rated 2025',
    title: 'No. 1 Rated Platform',
    text: 'TrustRadius for Embedded BI',
  },
  {
    id: 'g2',
    badge: 'badgeG2',
    alt: 'G2 Grid Leader, Spring 2025',
    title: 'Top 3 Vendor',
    text: 'G2 for Embedded BI',
  },
]

export default function S06Recognition() {
  return (
    <section className="slide slide--awards">
      <h2 className="h2 awards__title">
        Analyst-Endorsed. Award-Winning. Customer-Approved.
      </h2>
      <ul className="awards">
        {AWARDS.map(({ id, badge, alt, title, text }) => (
          <li className="award" key={id}>
            <div className="award__badge">
              <Img
                name={badge}
                alt={alt}
                className={`award__img award__img--${id}`}
              />
            </div>
            <h3 className="award__title">{title}</h3>
            <p className="award__text">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
