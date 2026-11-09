import Mark from '../../../shared/Mark.jsx'
import CenterLayout from '../layouts/CenterLayout.jsx'

// A line to each part: the claim, why, set small between them, and what AI
// gives, its point in the accent.
export default function S11Freedom() {
  return (
    <CenterLayout lines>
      <span className="center__line">AI challenges traditional software</span>
      <span className="center__line center__line--link">because it provides</span>
      <span className="center__line">
        absolute <Mark>freedom and flexibility</Mark>
      </span>
    </CenterLayout>
  )
}
