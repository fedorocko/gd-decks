import Media from '../../../shared/Media.jsx'
import media from '../media.js'

/**
 * One thing handed down to many: a root over a row of leaves, joined by a
 * line that runs down from the root and branches, with an arrow down to each
 * leaf. Every node is a 16 : 9 picture from media.js, or its labelled
 * placeholder until the file is in, with its name under it.
 *
 * root:   { media, name } — framed in the accent, as the one the rest
 *         come from
 * leaves: [{ media, name }]
 */
export default function Tree({ root, leaves }) {
  return (
    <div className="tree" style={{ '--leaves': leaves.length }}>
      <figure className="tree__node tree__node--root">
        <Media name={root.media} from={media} className="tree__media" />
        <figcaption className="tree__name">{root.name}</figcaption>
      </figure>
      <span className="tree__stem" />
      <ul className="tree__leaves">
        {leaves.map((leaf) => (
          <li className="tree__leaf" key={leaf.media}>
            <span className="tree__drop" />
            <figure className="tree__node">
              <Media name={leaf.media} from={media} className="tree__media" />
              <figcaption className="tree__name">{leaf.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
