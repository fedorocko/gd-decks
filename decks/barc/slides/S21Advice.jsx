import Mark from '../../../shared/Mark.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

// Set as slide 5 is: a claim to each cell, large and centred, broken where
// its phrases part, three lines to each so the two stand level; what each
// gives you in the accent.
const ADVICE = [
  {
    id: 'build',
    lines: [
      'How to architect',
      'if you decide',
      <>
        to <Mark>vibe code</Mark>
      </>,
    ],
  },
  {
    id: 'buy',
    lines: [
      <>
        What to <Mark>checklist</Mark>
      </>,
      'if you decide',
      'to buy',
    ],
  },
]

export default function S21Advice() {
  return (
    <FrameLayout title="My advice">
      <div className="grid grid--cols">
        {ADVICE.map(({ id, lines }) => (
          <div className="cell cell--centre" key={id}>
            <p className="huge huge--long">
              {lines.map((line, i) => (
                <span className="huge__line" key={i}>
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </FrameLayout>
  )
}
