import { useEffect, useState } from 'react'
import FrameLayout from '../layouts/FrameLayout.jsx'
import Arrow from './Arrow.jsx'

// How many of the two slides are on the stage. The deck mounts the slide it
// moves to while the one it leaves is still there, so a slide that finds the
// other on its way in knows it carries straight on from it.
let onStage = 0

/**
 * Where to start, and where that takes the P&L (slides 22 and 23), a column
 * each, filled down it: enabling first, on the left, the P&L up with
 * flexibility; tightening after, on the right, the P&L down with security.
 * The right column holds its half of the slide in dashed cells until it is
 * shown.
 *
 * Moving between the two, the slide holds still, so what both show stays
 * put and only the right column comes and goes; from any other slide it
 * comes in as every slide does.
 *
 * title — the slide's
 * tighten — show the right column
 */
export default function StartingPoint({ title, tighten = false }) {
  const [still] = useState(() => onStage > 0)

  useEffect(() => {
    onStage += 1
    return () => {
      onStage -= 1
    }
  }, [])

  return (
    <FrameLayout title={title} className={still ? 'slide--still' : undefined}>
      <div className="grid grid--start">
        <Column dir="up" corner="Flexibility" />
        {tighten ? (
          <Column dir="down" corner="Security" />
        ) : (
          <>
            <div className="cell cell--empty" />
            <div className="cell cell--empty" />
          </>
        )}
      </div>
    </FrameLayout>
  )
}

function Column({ dir, corner }) {
  return (
    <>
      <div className="cell cell--centre start__pnl">
        <Arrow dir={dir} />
        <p className="huge">P&amp;L</p>
      </div>
      <div className="cell cell--centre">
        <p className="huge">{corner}</p>
      </div>
    </>
  )
}
