import Checks from '../components/Checks.jsx'
import Img from '../components/Img.jsx'
import People from '../components/People.jsx'

/**
 * A product, one question to a row: who it is for, how it is used, what it
 * does, what it brings. The questions run down the left, small; the answers
 * fill the rest.
 *
 * eyebrow — the part of the agenda it belongs to
 * title   — its name
 * tag     — the demo that shows it
 * rows: [{ id, label, ... }], each answering with one of:
 *   text   — a sentence, set large; with `shot`, a screenshot from media.js
 *            beside it, showing what the sentence says
 *   people — who it is for, a chip each
 *   uses   — ways to use it, side by side: [{ id, title, text, schema }],
 *            `schema` drawn under the words
 *   checks — what it does, a ticked badge each
 *   gains  — what it brings: the same, in solid lime
 */
export default function FeatureLayout({ eyebrow, title, tag, rows }) {
  return (
    <section className="slide slide--feature">
      <header className="feature__head">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <div className="feature__title">
          <h2 className="h2">{title}</h2>
          {tag && <span className="tag">{tag}</span>}
        </div>
      </header>
      <dl className="feature">
        {rows.map(({ id, label, text, shot, people, uses, checks, gains }) => (
          <div className="feature__row" key={id}>
            <dt className="eyebrow feature__label">{label}</dt>
            <dd
              className={shot ? 'feature__answer feature__answer--shot' : 'feature__answer'}
            >
              {text && <p className="feature__text">{text}</p>}
              {shot && <Img name={shot} alt={title} className="feature__shot" />}
              {people && <People items={people} />}
              {uses && (
                <ul className="uses">
                  {uses.map((use) => (
                    <li className="use" key={use.id}>
                      <h3 className="use__title">{use.title}</h3>
                      <p className="use__text">{use.text}</p>
                      <div className="use__schema">{use.schema}</div>
                    </li>
                  ))}
                </ul>
              )}
              {checks && <Checks items={checks} />}
              {gains && <Checks items={gains} lit />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
