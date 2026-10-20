import Media from '../../../shared/Media.jsx'
import media from '../media.js'

/**
 * One thing handed down to many: a root over a row of leaves, joined by a
 * line that runs down from the root and branches, with an arrow down to each
 * leaf. Every node is a frame of 16 : 9 pages side by side, each a picture
 * from media.js or its labelled placeholder until the file is in, with the
 * node's name under it.
 *
 * root:   { pages, name } — framed in the accent, as the one the rest
 *         come from
 * leaves: [{ pages, name }]
 */
export default function Tree({ root, leaves }) {
  return (
    <div className="tree" style={{ '--leaves': leaves.length }}>
      <Node {...root} root />
      <span className="tree__stem" />
      <ul className="tree__leaves">
        {leaves.map((leaf) => (
          <li className="tree__leaf" key={leaf.name}>
            <span className="tree__drop" />
            <Node {...leaf} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function Node({ pages, name, root = false }) {
  return (
    <figure className={`tree__node${root ? ' tree__node--root' : ''}`}>
      <div className="tree__pages" style={{ '--pages': pages.length }}>
        {pages.map((page) => (
          <Media name={page} from={media} className="tree__media" key={page} />
        ))}
      </div>
      <figcaption className="tree__name">{name}</figcaption>
    </figure>
  )
}
