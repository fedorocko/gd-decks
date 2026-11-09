import Mark from '../../../shared/Mark.jsx'
import Brand from '../components/Brand.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

// The left column is the offsite deck's slide 6, in its words.
export default function S09BuildBuy() {
  return (
    <FrameLayout title="Build vs. buy?">
      <div className="grid grid--cols">
        <div className="cell cell--centre">
          <p className="huge huge--long">
            What can it do that <Brand logo="claudeCodeLogo">Claude Code</Brand>
            <br />
            can not?
          </p>
        </div>
        <div className="cell cell--centre">
          <p className="huge huge--long">
            Should I just
            <br />
            <Mark>vibe code</Mark> it now?
          </p>
        </div>
      </div>
    </FrameLayout>
  )
}
