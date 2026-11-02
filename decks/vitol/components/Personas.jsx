import Edges from '../../../shared/Edges.jsx'
import { Face } from './Persona.jsx'

/**
 * Who the demo follows, by tier: a framed column to each, "Tier n" in the
 * middle of its top line, its name and what it covers under that, then a
 * card to each persona: face, name and role over their business story. The
 * columns share their rows, so the first cards start on one line.
 *
 * pillars: [{ id, n, name, text, personas }], personas as in demo.js
 */
export default function Personas({ pillars }) {
  return (
    <ul className="personas" style={{ '--pillars': pillars.length }}>
      {pillars.map(({ id, n, name, text, personas }) => (
        <li className="edged personas__pillar" key={id}>
          <div className="personas__tier">
            <p className="personas__name personas__tiername">{name}</p>
            <p className="personas__tiertext">{text}</p>
          </div>
          <ul className="personas__list">
            {personas.map((persona) => (
              <li className="personas__persona" key={persona.id}>
                <div className="personas__head">
                  <Face persona={persona} size={56} />
                  <div>
                    <p className="personas__name">{persona.name}</p>
                    <p className="personas__who">{persona.role}</p>
                  </div>
                </div>
                <p className="personas__does">{persona.story}</p>
              </li>
            ))}
          </ul>
          <Edges top={<span className="plane__label">Tier {n}</span>} centre="top" />
        </li>
      ))}
    </ul>
  )
}
