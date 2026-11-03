import asset from '../../../shared/asset.js'
import media from '../media.js'

// The close, drawn as the webinar's is: thanks, centred, between the
// cover's circles on both sides, the left one mirrored; the name under it.
export default function S08Thanks() {
  const circles = asset(media.circles.src)

  return (
    <section className="slide slide--finale">
      <img className="circles" src={circles} alt="" />
      <img className="circles circles--left" src={circles} alt="" />
      <h2 className="finale__title">Thank you!</h2>
      <p className="finale__line">Questions and discussion</p>
      <img
        className="finale__logo"
        src={asset(media.wordmark.src)}
        alt="GoodData.AI"
      />
    </section>
  )
}
