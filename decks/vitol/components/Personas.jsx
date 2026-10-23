import Edges from '../../../shared/Edges.jsx'

/**
 * Who works with the platform, by pillar: a framed column to each, its name
 * in the middle of its top line, and in it a box to each persona, who they
 * are over what they can do. The boxes share the column's height.
 *
 * pillars: [{ id, name, personas: [{ who, does }] }]
 */
export default function Personas({ pillars }) {
  return (
    <ul className="personas" style={{ '--pillars': pillars.length }}>
      {pillars.map(({ id, name, personas }) => (
        <li className="edged personas__pillar" key={id}>
          <ul className="personas__list">
            {personas.map(({ who, does }) => (
              <li className="personas__persona" key={who}>
                <p className="personas__who">{who}</p>
                <p className="personas__does">{does}</p>
              </li>
            ))}
          </ul>
          <Edges top={<span className="plane__label">{name}</span>} centre="top" />
        </li>
      ))}
    </ul>
  )
}
