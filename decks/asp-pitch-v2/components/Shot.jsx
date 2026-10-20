import assetUrl from '../../../shared/asset.js'
import media from '../media.js'

/**
 * A screenshot from media.js filling the box it is in, which clips it. Its
 * entry can crop it, to leave out what was burned in at its edges: `zoom`,
 * how far in, from `focus`, an object-position. Slides 4 and 6 show the
 * same products, so they crop them alike.
 */
export default function Shot({ name }) {
  const asset = media[name]

  return (
    <img
      className="shot"
      src={assetUrl(asset.src)}
      alt=""
      style={{ '--zoom': asset.zoom ?? 1, '--focus': asset.focus ?? 'left top' }}
    />
  )
}
