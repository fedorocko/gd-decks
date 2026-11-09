import Arrow from './Arrow.jsx'

// The gains, by the names of the Mastercard deck's slide 2 (slide 18 here),
// which says what each is; and what they cost.
const GAINS = ['Modernize', 'Automate', 'Monetize']

const COSTS = ['Token cost', 'System workload', 'New tools']

/**
 * What AI does to the P&L (slides 17 and 19): what it brings in on the
 * left, under an arrow up; what it costs on the right, under an arrow down.
 * Each column its arrow in the middle and its badges stacked under it, one
 * width, in the arrow's colour. The right column holds its half of the slide
 * until it is shown.
 *
 * costs — show the right column
 */
export default function Impact({ costs = false }) {
  return (
    <div className="grid grid--cols">
      <Side dir="up" tone="gain" badges={GAINS} />
      {costs ? (
        <Side dir="down" tone="loss" badges={COSTS} fresh />
      ) : (
        <div className="cell cell--empty" />
      )}
    </div>
  )
}

function Side({ dir, tone, badges, fresh = false }) {
  return (
    <div className={fresh ? 'cell impact impact--fresh' : 'cell impact'}>
      <Arrow dir={dir} />
      <ul className="impact__badges">
        {badges.map((badge) => (
          <li className={`badge impact__badge impact__badge--${tone}`} key={badge}>
            {badge}
          </li>
        ))}
      </ul>
    </div>
  )
}
