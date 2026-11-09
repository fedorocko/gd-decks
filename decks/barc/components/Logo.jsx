import asset from '../../../shared/asset.js'
import media from '../media.js'

/**
 * A company's logo from media.js, shown white so a row of them reads as one.
 * Until its file exists, its name stands in a dashed box in its place.
 */
export default function Logo({ name, className = '' }) {
  const entry = media[name]

  if (!entry?.src) {
    return (
      <div className={`logo logo--empty ${className}`.trim()}>
        <span>{entry?.label ?? name}</span>
      </div>
    )
  }

  return (
    <div className={`logo ${className}`.trim()}>
      <img src={asset(entry.src)} alt={entry.label} />
    </div>
  )
}
