import FrameLayout from '../layouts/FrameLayout.jsx'

// Both goals in the first row run on into the one under them: each ends on
// its last word, set small on a line of its own, that leads down to it.
export default function S06Goals() {
  return (
    <FrameLayout title="My goals">
      <div className="grid grid--goals">
        <div className="cell cell--centre">
          <p className="big">
            Share what we learn by building
            <span className="goals__on">about</span>
          </p>
        </div>
        <div className="cell cell--centre">
          <p className="big">
            Give you a playbook how to think
            <span className="goals__on">of</span>
          </p>
        </div>
        <div className="cell cell--centre cell--lead">
          <p className="big">
            Building AI at a level of quality that can be put into production in
            regulated companies
          </p>
        </div>
      </div>
    </FrameLayout>
  )
}
