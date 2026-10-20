import Mark from '../../../shared/Mark.jsx'
import Img from '../components/Img.jsx'

// The close: thanks, where to follow us, and the name. The title's
// circles stand behind it on both sides, the left one mirrored.
export default function S12Thanks() {
  return (
    <section className="slide slide--thanks">
      <Img name="artCircles" className="art" />
      <Img name="artCircles" className="art art--left" />
      <h2 className="thanks__title">Thank you!</h2>
      <div className="thanks__lines">
        <p>
          Follow us on <Mark>LinkedIn</Mark> for info on upcoming events!
        </p>
      </div>
      <Img name="wordmark" alt="GoodData.AI" className="thanks__logo" />
    </section>
  )
}
