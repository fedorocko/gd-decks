import Edges from '../../../shared/Edges.jsx'
import media from '../media.js'
import Shot from './Shot.jsx'

/**
 * Tools in groups, side by side. Each group is framed, its name in the
 * middle of its top line and a line on what it is for under it, its tools
 * stacked under that, sharing the height. A tool is a screenshot from
 * media.js filling its tile, its name over the foot; until the screenshot is
 * in, the deck's hatched placeholder.
 *
 * groups: [{ id, name, text, tools: [{ name, media }] }]
 */
export default function Tools({ groups }) {
  return (
    <div className="tools" style={{ '--groups': groups.length }}>
      {groups.map(({ id, name, text, tools }) => (
        <section className="edged tools__group" key={id}>
          {text && <p className="tools__text">{text}</p>}
          <ul className="tools__list">
            {tools.map((tool) => {
              const shot = media[tool.media]?.src
              return (
                <li
                  className={`tools__tool${shot ? '' : ' tools__tool--empty'}`}
                  key={tool.name}
                >
                  {shot && <Shot name={tool.media} />}
                  <p className="tools__name">{tool.name}</p>
                </li>
              )
            })}
          </ul>
          <Edges top={<span className="plane__label">{name}</span>} centre="top" />
        </section>
      ))}
    </div>
  )
}
