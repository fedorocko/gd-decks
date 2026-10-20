import Edges from '../../../shared/Edges.jsx'

/**
 * The compute, opened up: the engines, framed together, and the pipeline
 * their answers go out through, an arrow from each engine to it. The
 * storage stands in the row over the panel, on its left; the near engine
 * starts at that side, and the far one is set further off from it, since it
 * holds its data itself and never goes back to the storage.
 *
 * label    — what the engines are, in the middle of their frame's top line
 * near     — { name, text, tags }: tags, who shares it, a badge each
 * far      — { name, text, facts }: facts, what it holds to, quieter, a
 *            pill each
 * pipeline — { name, items }: items, what it does, a pill each
 */
export default function Engines({ label, near, far, pipeline }) {
  return (
    <div className="engines">
      <div className="edged engines__group">
        <Edges top={<span className="engines__label">{label}</span>} centre="top" />
      </div>
      <Engine where="near" {...near}>
        <ul className="engines__tenants">
          {near.tags.map((tag) => (
            <li className="versus__badge" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </Engine>
      <Engine where="far" {...far}>
        <ul className="engines__tenants">
          {far.facts.map((fact) => (
            <li className="engines__fact" key={fact}>
              {fact}
            </li>
          ))}
        </ul>
      </Engine>

      <span className="engines__link engines__link--near" />
      <span className="engines__link engines__link--far" />
      <div className="engines__card engines__pipeline">
        <p className="engines__name">{pipeline.name}</p>
        <ul className="engines__items">
          {pipeline.items.map((item) => (
            <li className="engines__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/** An engine: its name and what it is for, and beside them what bears it out. */
function Engine({ where, name, text, children }) {
  return (
    <div className={`engines__card engines__engine engines__engine--${where}`}>
      <div>
        <p className="engines__name">{name}</p>
        <p className="engines__text">{text}</p>
      </div>
      {children}
    </div>
  )
}
