import Edges from '../../../shared/Edges.jsx'

/**
 * A persona's journey, step by step down a framed column, each numbered on
 * a line that runs through them all. Anything beyond it goes in a Bonus box
 * (Bonus.jsx) instead.
 *
 * steps: [{ step, note? }]
 */
export default function Journey({ steps }) {
  return (
    <div className="edged journey">
      <ol className="journey__steps">
        {steps.map(({ step, note }, i) => (
          <li className="journey__step" key={step}>
            <span className="journey__n">{i + 1}</span>
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
      <p className="features__label">Under the Hood in GoodData.AI</p>
      <ul className="features__list">
        {features.map((f) => (
          <li className="features__item" key={f}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
