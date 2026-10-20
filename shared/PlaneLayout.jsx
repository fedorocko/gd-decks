import assetUrl from './asset.js'
import Edges from './Edges.jsx'
import Kpis from './Kpis.jsx'

/**
 * Two thoughts in a narrow first column, set on the ground, beside two cards
 * framed together, all under an optional title. The ASP New Pitch's slide 2,
 * and the webinar's slide 4.
 *
 * title   — set over the columns
 * stack:  two [{ id, heading, ... }]: the first at the top of the column, the
 *         second level with the framed cards' thoughts
 *   heading — what the thought answers, in small caps over it
 * label   — what the framed cards are part of, in the middle of the frame's
 *           top line
 * heading — what they answer, in small caps in its bottom line
 * framed: two [{ id, art, ... }]
 *   art   — a still behind the card, a path in public/, clear at its top
 *           and dimmed under the text at its foot
 *
 * Any thought holds, top to bottom:
 *   badge — a small lime pill over the text
 *   text  — one thought, set large; `lead` sets it larger still, as the
 *           slide's main one
 *   kpis  — figures under the text: [{ value, label }]
 *
 * The heading over the first thought stands on one line with the frame's
 * label, and the second thought starts on one line with the framed ones.
 */
export default function PlaneLayout({ title, stack, heading, label, framed }) {
  const [upper, lower] = stack

  return (
    <section className="slide slide--plane">
      {title && <h2 className="h2 plane__title">{title}</h2>}
      <div className="plane">
        <Heading at="upper">{upper.heading}</Heading>
        <Thought at="upper" {...upper} />
        <Heading at="lower">{lower.heading}</Heading>
        <Thought at="lower" {...lower} />
        <div className="edged plane__frame">
          {framed.map(({ id, art, ...thought }) => (
            <div className="plane__card" key={id}>
              <img className="plane__art" src={assetUrl(art)} alt="" />
              <Thought {...thought} />
            </div>
          ))}
          <Edges
            top={<span className="plane__label">{label}</span>}
            centre="top"
            bottom={heading && <Heading>{heading}</Heading>}
          />
        </div>
      </div>
    </section>
  )
}

function Heading({ at, children }) {
  const cls = `eyebrow plane__heading${at ? ` plane__heading--${at}` : ''}`
  return <span className={cls}>{children}</span>
}

function Thought({ at, badge, text, lead, kpis }) {
  return (
    <div className={`plane__thought${at ? ` plane__thought--${at}` : ''}`}>
      {badge && <p className="plane__badge">{badge}</p>}
      <p className={`plane__text${lead ? ' plane__text--lead' : ''}`}>{text}</p>
      {kpis && (
        <div className="plane__kpis">
          <Kpis items={kpis} />
        </div>
      )}
    </div>
  )
}
