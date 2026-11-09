import Media from '../../../shared/Media.jsx'
import media from '../media.js'

// The offsite deck's slide 11, copied: Claude's dashboards, as large as the
// stage allows inside its 96 × 56 margins, which hold the picture clear of
// the arrow buttons. There it is the first of three slides that break the
// picture into copies; here it stands alone.
export default function S13Dashboards() {
  return (
    <section className="slide slide--dashboards">
      <Media name="claudeDashboards" from={media} className="dashboards" />
    </section>
  )
}
