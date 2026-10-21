import Img from '../components/Img.jsx'

/**
 * The webinar's title: the name over the corner, the topic in two voices —
 * what it covers in the accent, what that adds up to in paper — and the
 * date. The original's circles stand behind it on the right. The subtitle
 * and the date can be left out.
 */
export default function CoverLayout({ title, subtitle, date }) {
  return (
    <section className="slide slide--cover">
      <Img name="artCircles" className="art" />
      <Img name="wordmark" alt="GoodData.AI" className="cover__logo" />
      <div className="cover__block">
        <h1 className="cover__title">{title}</h1>
        {subtitle && <p className="cover__sub">{subtitle}</p>}
        {date && <p className="eyebrow cover__date">{date}</p>}
      </div>
    </section>
  )
}
