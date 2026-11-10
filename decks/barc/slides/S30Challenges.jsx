import Mark from '../../../shared/Mark.jsx'
import CenterLayout from '../layouts/CenterLayout.jsx'

// The pause between the schema built up and its risks, set as slide 11 is:
// what the loop is, a line to each part, then, set small, the turn, and what
// it brings, its point in the accent.
export default function S30Challenges() {
  return (
    <CenterLayout lines>
      <span className="center__line">A powerful architecture.</span>
      <span className="center__line">A new OS.</span>
      <span className="center__line center__line--link">but it comes with</span>
      <span className="center__line">
        new <Mark>challenges</Mark>
      </span>
    </CenterLayout>
  )
}
