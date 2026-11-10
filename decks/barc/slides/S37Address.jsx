import Mark from '../../../shared/Mark.jsx'
import CenterLayout from '../layouts/CenterLayout.jsx'

// The pause between the schema's risks and how each is answered, set as
// slide 11 is: the question, then, set small, its condition, and what is
// kept, in the accent.
export default function S37Address() {
  return (
    <CenterLayout lines>
      <span className="center__line">How can we address them</span>
      <span className="center__line center__line--link">without sacrificing</span>
      <span className="center__line">
        the <Mark>benefits</Mark>?
      </span>
    </CenterLayout>
  )
}
