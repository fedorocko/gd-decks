import asset from '../../../shared/asset.js'
import media from '../media.js'

// The cover, drawn as the webinar's is: the name in the corner, the two
// names in the accent, what this is under them, and the webinar's circles
// behind it on the right.
export default function S00Title() {
  return (
    <section className="slide slide--front">
      <img className="circles" src={asset(media.circles.src)} alt="" />
      <img
        className="front__logo"
        src={asset(media.wordmark.src)}
        alt="GoodData.AI"
      />
      <h1 className="front__title">
        GoodData.AI
        <br />+ Vitol
      </h1>
      <p className="front__sub">RFP Presentation and Demo</p>
    </section>
  )
}
