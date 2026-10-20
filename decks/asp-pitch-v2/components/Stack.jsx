import Edges from '../../../shared/Edges.jsx'
import Shot from './Shot.jsx'

/**
 * A platform drawn as a stack of layers, top to bottom, framed together,
 * each with what plugs into it from either side, and what is built on it
 * standing over the frame.
 *
 * label  — what the layers make up, in the middle of the frame's bottom
 *          line, leaving the top one to the arrows that rise from it
 * above  — what is built on it, in a row of 16 : 9 boxes as wide as the
 *          layers, an arrow rising to each: [{ name, media, yours }]
 *   media  — a screenshot of it from media.js filling the box, its name
 *            over the foot; without one the box is a hatched placeholder
 *   yours  — the client's own, drawn as its layers' contents are: a dashed
 *            line and the accent
 * below  — what the plane gives, in a row of lime pills under the frame,
 *          clear of its label: [name]
 * layers: [{ id, text, ... }]
 *   text   — what the layer holds, in its middle
 *   label  — what it is called, in its top line
 *   builtIn — what comes with it, each with a plus, at the end of its
 *            bottom line: [name]
 *   filled — a solid layer for the ones above to stand on, with no lines
 *   left, right — what plugs into it on that side, outside the frame:
 *     { name, out }
 *     out  — the arrow runs out of the layer to it, not into the layer
 *
 * The layers share the height between them; the plugs on each side share a
 * width, so they stand in a column. The arrows cross the frame's line.
 */
export default function Stack({ label, above, below, layers }) {
  return (
    <div
      className={`stack${below ? ' stack--below' : ''}`}
      style={{ '--layers': layers.length }}
    >
      {above && (
        <ul className="stack__above" style={{ '--count': above.length }}>
          {above.map(({ name, media, yours }) => (
            <li className="stack__solution" key={name}>
              <span
                className={`stack__solution-box${yours ? ' stack__solution-box--yours' : ''}${media ? ' stack__solution-box--shot' : ''}`}
              >
                {media && <Shot name={media} />}
                {name}
              </span>
              <span className="stack__rise" />
            </li>
          ))}
        </ul>
      )}
      {/* from its top, over the layers, to its foot: not the row below */}
      <div
        className="edged stack__frame"
        style={{ gridRow: `2 / ${layers.length + 4}` }}
      >
        <Edges
          bottom={label && <span className="plane__label">{label}</span>}
          centre="bottom"
        />
      </div>
      {layers.map(({ id, text, label: name, builtIn, filled, left, right }, i) => (
        // the row over the frame, and the frame's top, come first
        <div className="stack__row" key={id} style={{ gridRow: i + 3 }}>
          {left && <Plug side="left" {...left} />}
          {filled ? (
            <div className="stack__layer stack__layer--filled">
              <p className="stack__text">{text}</p>
            </div>
          ) : (
            <div
              className={`edged stack__layer${builtIn ? ' stack__layer--built' : ''}`}
            >
              <p className="stack__text">{text}</p>
              <Edges
                top={name && <span className="stack__label">{name}</span>}
                bottom={
                  builtIn &&
                  builtIn.map((feature) => (
                    <span className="stack__built" key={feature}>
                      {feature}
                    </span>
                  ))
                }
                end="bottom"
              />
            </div>
          )}
          {right && <Plug side="right" {...right} />}
        </div>
      ))}
      {below && (
        // after the frame's foot
        <ul className="stack__below" style={{ gridRow: layers.length + 4 }}>
          {below.map((name) => (
            <li className="stack__benefit" key={name}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Plug({ side, name, out }) {
  // An arrow into the layer points away from the plug's side of it.
  const towards = (side === 'left') !== Boolean(out) ? 'right' : 'left'

  return (
    <>
      <span className={`pill pill--filled stack__plug stack__plug--${side}`}>
        {name}
      </span>
      <span
        className={`stack__arrow stack__arrow--${side} stack__arrow--to-${towards}`}
      />
    </>
  )
}
