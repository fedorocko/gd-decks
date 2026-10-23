import assetUrl from '../../../shared/asset.js'
import Edges from '../../../shared/Edges.jsx'
import Kpis from '../../../shared/Kpis.jsx'
import media from '../media.js'

/**
 * What we bring, as a sum: the plane, framed round its two cards as the ASP
 * New Pitch's slide 2 draws it, plus our services, framed alike round one
 * card of their own. The plane is the subject: its frame in the full accent
 * and its name a solid pill on its line; the services' frame stays quiet.
 *
 * plane:    { label, cards: [{ id, art, text }] } — art, a still from
 *           media.js behind the card
 * services: { label, heading, text, kpis } — heading, if any, small caps
 *           over the text; kpis, figures under it
 */
export default function Offer({ plane, services }) {
  return (
    <div className="offer">
      <div className="edged offer__frame offer__frame--plane">
        {plane.cards.map(({ id, art, text }) => (
          <div className="offer__card" key={id}>
            <img className="plane__art" src={assetUrl(media[art].src)} alt="" />
            <p className="plane__text">{text}</p>
          </div>
        ))}
        <Edges
          top={<span className="plane__label offer__name">{plane.label}</span>}
          centre="top"
        />
      </div>
      <span className="offer__plus" aria-hidden="true">
        +
      </span>
      <div className="edged offer__frame offer__frame--services">
        <div className="offer__card offer__card--plain">
          {services.heading && (
            <p className="eyebrow offer__heading">{services.heading}</p>
          )}
          <p className="plane__text">{services.text}</p>
          {services.kpis && (
            <div className="plane__kpis">
              <Kpis items={services.kpis} />
            </div>
          )}
        </div>
        <Edges
          top={<span className="plane__label">{services.label}</span>}
          centre="top"
        />
      </div>
    </div>
  )
}
