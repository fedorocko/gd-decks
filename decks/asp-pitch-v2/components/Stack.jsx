import { useMemo, useRef } from 'react'
import Edges from '../../../shared/Edges.jsx'
import Beam from './Beam.jsx'
import useBeam from './useBeam.js'
import Shot from './Shot.jsx'
import Soon from './Soon.jsx'

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
 * below  — what the plane gives, in a row of pills under the frame, clear
 *          of its label, a beam opening down to them from it: [name]
 * layers: [{ id, text, ... }]
 *   text   — what the layer holds, in its middle
 *   label  — what it is called, in its top line
 *   soon   — that is not out yet: the Soon sticker on its name
 *   builtIn — what comes with it, each with a plus, at the end of its
 *            bottom line: [name]
 *   filled — a solid layer for the ones above to stand on, with no lines
 *   left, right — what plugs into it on that side, outside the frame:
 *     { name, out, both, soon }
 *     out  — the arrow runs out of the layer to it, not into the layer
 *     both — two arrows, one each way: in over out, for a plug that names
 *            what goes in and what comes out
 *     soon — not out yet: the Soon sticker on its corner
 *
 * The layers share the height between them; the plugs on each side share a
 * width, so they stand in a column. The arrows cross the frame's line.
 */
export default function Stack({ label, above, below, layers }) {
  const root = useRef(null)
  const named = useRef(null)
  const gives = useRef(null)
  const ends = useMemo(() => [named, gives], [])
  const beam = useBeam(root, ends, fan)

  return (
    <div
      className={`stack${below ? ' stack--below' : ''}`}
      style={{ '--layers': layers.length }}
      ref={root}
    >
      {/* first, so the frame and its name are drawn over it */}
      {beam && <Beam points={beam} />}
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
          bottom={
            label && (
              <span className="plane__label stack__name" ref={named}>
                {label}
              </span>
            )
          }
          centre="bottom"
        />
      </div>
      {layers.map(({ id, text, label: name, soon, builtIn, filled, left, right }, i) => (
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
                top={
                  name && (
                    <span className="stack__label">
                      {name}
                      {soon && <Soon />}
                    </span>
                  )
                }
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
        <ul
          className="stack__below"
          style={{ gridRow: layers.length + 4 }}
          ref={gives}
        >
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

/**
 * The beam's corners: across the plane's name, a pill on the frame's line,
 * at its middle and clear of its round ends, as slide 9's leaves its pill,
 * down to the top of the row of what it gives, as wide as the row less its
 * pills' round ends.
 */
function fan([name, row], at) {
  const mid = name.top + name.height / 2
  const end = row.height / 2
  return [
    at(name.left + name.height / 2, mid),
    at(name.right - name.height / 2, mid),
    at(row.right - end, row.top),
    at(row.left + end, row.top),
  ]
}

function Plug({ side, name, out, both, soon }) {
  // An arrow into the layer points away from the plug's side of it.
  const inward = side === 'left' ? 'right' : 'left'
  const outward = side === 'left' ? 'left' : 'right'

  return (
    <>
      <span className={`pill pill--filled stack__plug stack__plug--${side}`}>
        {name}
        {soon && <Soon />}
      </span>
      {both ? (
        <span className={`stack__arrows stack__arrows--${side}`}>
          <span className={`stack__arrow stack__arrow--to-${inward}`} />
          <span className={`stack__arrow stack__arrow--to-${outward}`} />
        </span>
      ) : (
        <span
          className={`stack__arrow stack__arrow--${side} stack__arrow--to-${out ? outward : inward}`}
        />
      )}
    </>
  )
}
