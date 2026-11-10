import Mark from '../../../shared/Mark.jsx'
import asset from '../../../shared/asset.js'
import media from '../media.js'

// The close, drawn as the webinar's (its slide 12): everything centred, the
// cover's circles framing it from both sides, the name at the foot. Where the
// webinar lists its next events, one thing to do, set large: come to the
// booth, its number in a lime pill, the badge voice, so it reads as the ask.
export default function S54Thanks() {
  return (
    <section className="slide slide--thanks">
      <img className="cover__art" src={asset(media.circles.src)} alt="" />
      <img className="cover__art cover__art--left" src={asset(media.circles.src)} alt="" />
      <p className="thanks__title">Thank you!</p>
      <div className="thanks__ask">
        <h2 className="thanks__question">Want to learn more?</h2>
        <p className="thanks__cta">
          Meet us at{' '}
          <Mark variant="pill" keep>
            booth 7
          </Mark>
        </p>
      </div>
      <img className="thanks__logo" src={asset(media.wordmark.src)} alt="GoodData.AI" />
    </section>
  )
}
