import assetUrl from '../../../shared/asset.js'
import Edges from '../../../shared/Edges.jsx'

/**
 * Two ways of running agents, one over the other: theirs, with the model
 * outside the frame the data and agents sit in, and ours, with it inside.
 *
 * boxes — what both frames hold, left to right: two names
 * model — what the agents call, at the right of both rows
 * edges — what the arrows carry, in a pill on each: the first from one box
 *         to the other, the second from the last box to the model
 * theirs: { label, problems, logos }
 *   label    — what the frame is, in the middle of its top line
 *   problems — two, what goes wrong on the way to the model: one over the
 *              arrow, one under it
 *   logos    — whose models they are, in a row under the model's name:
 *              [{ name, src }], src a path in public/
 * ours: { label, host, benefits }
 *   label    — what the frame is, in the middle of its bottom line
 *   host     — what the model runs on, a dotted box round it
 *   benefits — what it gives, a row of badges under the label
 *
 * Theirs is set back in grey, its problems marked in red; ours is in the
 * accent, its benefits lime badges. The two models stand one over the
 * other.
 */
export default function Versus({ boxes, model, edges, theirs, ours }) {
  const [first, last] = boxes
  const [between, out] = edges

  return (
    <div className="versus versus--compare">
      <div className="edged versus__frame versus__frame--theirs">
        <Edges
          top={<span className="plane__label versus__label">{theirs.label}</span>}
          centre="top"
        />
      </div>
      <div className="edged versus__frame versus__frame--ours">
        <Edges
          bottom={<span className="plane__label">{ours.label}</span>}
          centre="bottom"
        />
      </div>
      <p className="versus__vs">vs</p>

      <div className="versus__row versus__row--theirs">
        <Box name={first} column={2} />
        <div className="versus__along versus__along--between">
          <Edge via={between} />
        </div>
        <Box name={last} column={4} />
        <div className="versus__along versus__along--out">
          <Tag bad>{theirs.problems[0]}</Tag>
          <Edge via={out} />
          <Tag bad>{theirs.problems[1]}</Tag>
        </div>
        <div className="versus__box versus__box--model">
          <p className="versus__name">{model}</p>
          {theirs.logos && (
            <ul className="versus__logos">
              {theirs.logos.map(({ name, src }) => (
                <li key={name}>
                  <img className="versus__logo" src={assetUrl(src)} alt={name} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="versus__row versus__row--ours">
        <Box name={first} column={2} />
        <div className="versus__along versus__along--between">
          <Edge via={between} />
        </div>
        <Box name={last} column={4} />
        <div className="versus__along versus__along--out">
          <Edge via={out} />
        </div>
        <div className="edged versus__host">
          <div className="versus__box versus__box--model">
            <p className="versus__name">{model}</p>
          </div>
          <Edges
            top={<span className="versus__host-label">{ours.host}</span>}
            centre="top"
          />
        </div>
      </div>

      <ul className="versus__benefits">
        {ours.benefits.map((benefit) => (
          <li key={benefit}>
            <Tag>{benefit}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * What the client brings, dashed, in its column either side of the arrow.
 *
 * tag    — what it is built on, a badge under its name
 * quiet  — set back in grey, where the slide is not about it
 * boxRef — a ref to it, for whatever is drawn round it
 */
export function Box({ name, tag, quiet = false, column, boxRef }) {
  return (
    <div
      className={`versus__box versus__box--brought${quiet ? ' versus__box--quiet' : ''}`}
      ref={boxRef}
      style={{ gridColumn: column }}
    >
      <p className="versus__name">{name}</p>
      {tag && <p className="versus__badge">{tag}</p>}
    </div>
  )
}

/**
 * An arrow with what it carries in a pill, the line stopping either side.
 *
 * head    — false leaves the chevron off, for an arrow that forks on
 * pillRef — a ref to the pill, for whatever is drawn from it
 */
export function Edge({ via, head = true, pillRef }) {
  return (
    <span className="versus__edge">
      <span className="versus__line" />
      <span className="versus__via" ref={pillRef}>
        {via}
      </span>
      <span className={`versus__line${head ? ' versus__line--head' : ''}`} />
    </span>
  )
}

/** A problem, crossed and in red, or a benefit, ticked and in lime. */
export function Tag({ bad = false, children }) {
  return (
    <span className={`versus__tag versus__tag--${bad ? 'bad' : 'good'}`}>
      <svg className="versus__sign" viewBox="0 0 16 16" aria-hidden="true">
        <path d={bad ? 'M4 4l8 8M12 4l-8 8' : 'M2.5 8.5l3.5 3.5 7.5-8'} />
      </svg>
      {children}
    </span>
  )
}
