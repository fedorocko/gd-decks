import asset from '../../../shared/asset.js'
import FrameLayout from '../layouts/FrameLayout.jsx'
import media from '../media.js'

// The speaker: the webinar's round photo with its orbit and the name under
// it on the left, three notes on the right, each a line or two.
const NOTES = [
  ['Field CTO @ GoodData.AI'],
  ['20 years in data — IBM, Merck, Workday'],
  ['Serial data & AI entrepreneur', '2× exited founder'],
]

export default function S04Speaker() {
  const photo = media.speakerPeter

  return (
    <FrameLayout title="Who I am">
      <div className="grid grid--cols">
        <div className="cell cell--centre speaker">
          <span className="speaker__frame">
            {photo.src ? (
              <img className="speaker__photo" src={asset(photo.src)} alt="Peter Fedoročko" />
            ) : (
              <span className="speaker__photo speaker__photo--empty">{photo.label}</span>
            )}
          </span>
          <p className="speaker__name">Peter Fedoročko</p>
        </div>
        <div className="cell">
          <ul className="speaker__notes">
            {NOTES.map((lines) => (
              <li key={lines[0]}>
                {lines.map((line, i) => (
                  <span className="speaker__line" key={i}>
                    {line}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FrameLayout>
  )
}
