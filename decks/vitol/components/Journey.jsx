import Edges from '../../../shared/Edges.jsx'

/**
 * A persona's journey, step by step down a framed column, each numbered on
 * a line that runs through them all. A step marked alt is another way to the
 * same end: set off under the main path, dashed.
 *
 * steps: [{ step, note?, alt? }]
 */
export default function Journey({ steps }) {
  let n = 0

  return (
    <div className="edged journey">
      <ol className="journey__steps">
        {steps.map(({ step, note, alt }) => (
          <li className={`journey__step${alt ? ' journey__step--alt' : ''}`} key={step}>
            <span className="journey__n">{alt ? 'or' : ++n}</span>
            <div className="journey__what">
              <p className="journey__text">{step}</p>
              {note && <p className="journey__note">{note}</p>}
            </div>
          </li>
        ))}
      </ol>
      <Edges top={<span className="plane__label">User journey</span>} />
    </div>
  )
}

/** The GoodData.AI features a journey shows, a pill each, down a column. */
export function Features({ features }) {
  return (
    <div className="features">
      <p className="features__label">GoodData.AI in action</p>
      <ul className="features__list">
        {features.map((f) => (
          <li className="feature" key={f}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
