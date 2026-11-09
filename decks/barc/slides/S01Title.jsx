import asset from '../../../shared/asset.js'
import media from '../media.js'

// The cover, drawn as the webinar's is: the name in the corner, the title in
// the accent, what the talk gives under it and the playbook that comes with
// it, the event where the webinar has its date, and the webinar's circles
// behind it on the right.
export default function S01Title() {
  return (
    <section className="slide slide--cover">
      <img className="cover__art" src={asset(media.circles.src)} alt="" />
      <img className="cover__logo" src={asset(media.wordmark.src)} alt="GoodData.AI" />
      <div className="cover__block">
        <h1 className="cover__title">Notes from the field</h1>
        <p className="cover__sub">
          How we put AI into production in regulated companies, and how you can
          do it too.
        </p>
        <p className="cover__extra">Playbook included.</p>
        <p className="eyebrow cover__event">BARC Data &amp; AI Summit 2026</p>
      </div>
    </section>
  )
}
