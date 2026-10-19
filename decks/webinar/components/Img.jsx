import asset from '../../../shared/asset.js'
import media from '../media.js'

/**
 * An image from media.js. alt: what it shows, or nothing for decoration.
 * Until its file exists (null in media.js) a striped placeholder holds its
 * place, captioned with `label`.
 */
export default function Img({ name, alt = '', label, className = '' }) {
  if (!media[name]) {
    return (
      <div className={`media media--empty ${className}`.trim()}>
        <p className="media__label">{label ?? alt}</p>
      </div>
    )
  }

  return <img className={className} src={asset(media[name])} alt={alt} />
}
