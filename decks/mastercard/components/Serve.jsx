import assetUrl from '../../../shared/asset.js'
import Edges from '../../../shared/Edges.jsx'
import Shot from './Shot.jsx'

/**
 * The stack slide's story at its simplest, top to bottom: the client's
 * idea, in a dashed box as the stack draws what the client brings; the
 * plane, one box in the accent; and what comes out of it, framed together,
 * its name from the left of the top line, clear of the arrow in at the
 * middle, a screenshot to each solution. One of them is shown as instances, a page
 * to each client stacked one over another: the same product, served to
 * each client in their own brand.
 *
 * idea      — what goes in
 * plane     — what it goes through
 * label     — what comes out, on its frame's top line
 * solutions — [{ name, media }]: media, a screenshot from media.js
 * instances — { name, pages: [{ name, src }] }: src, a page in public/,
 *             the first in front
 */
export default function Serve({ idea, plane, label, solutions, instances }) {
  return (
    <div className="serve">
      <p className="serve__idea">{idea}</p>
      <span className="serve__down" />
      <p className="serve__plane">{plane}</p>
      <span className="serve__down" />
      <div className="edged serve__out">
        <ul className="serve__grid">
          {solutions.map(({ name, media }) => (
            <li className="serve__tile" key={name}>
              <Shot name={media} />
              <p className="serve__name">{name}</p>
            </li>
          ))}
          <li className="serve__stack">
            {instances.pages
              .map(({ name, src }) => (
                <div className="serve__tile serve__tile--page" key={name}>
                  <img className="serve__page" src={assetUrl(src)} alt="" />
                  <p className="serve__name">{name}</p>
                </div>
              ))
              .reverse()}
          </li>
        </ul>
        <Edges top={<span className="plane__label serve__label">{label}</span>} />
      </div>
    </div>
  )
}
