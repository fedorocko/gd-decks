/**
 * A line in someone's own words that weighs two things against each other,
 * set in the middle of the stage.
 * lead: how the line opens, set small.
 * claims: the two things, each large and in the accent on a line of its own.
 * hinge: the word that joins them, small between the two.
 * points: what it leads to, a box each, in a row under the quote. Two to four.
 * The quotation marks are added here, hung outside the lines they belong to
 * so that each line stays centred on its words.
 */
export default function QuoteLayout({ lead, claims, hinge, points }) {
  const [first, second] = claims

  return (
    <section className="slide slide--centered">
      <blockquote className="quote">
        <p className="quote__text">
          <span className="quote__lead">
            <span className="quote__mark quote__mark--open">“</span>
            {lead}
          </span>{' '}
          <span className="quote__claim">{first}</span>{' '}
          <span className="quote__hinge">{hinge}</span>{' '}
          <span className="quote__claim">
            {second}
            <span className="quote__mark">”</span>
          </span>
        </p>
      </blockquote>
      {points && (
        <ul className={`cards cards--${points.length} quote__points`}>
          {points.map((point) => (
            <li className="card" key={point}>
              <p className="card__text">{point}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
