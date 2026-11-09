import FrameLayout from '../layouts/FrameLayout.jsx'

// What each way of opening AI up costs you: the claim on two lines broken
// where its phrases part, outlined badges under it in two rows, two and one,
// the same under both.
const SIDES = [
  {
    lines: ['Give agent tools', 'to access data'],
    costs: [['Higher workload', 'Footprint'], ['Questionable scope']],
  },
  {
    lines: ['Share your data', 'with LLMs'],
    costs: [['PII', 'Data residency'], ['IP leakage']],
  },
]

export default function S15Sacrifice() {
  return (
    <FrameLayout title="What is the sacrifice?">
      <div className="grid grid--cols">
        {SIDES.map(({ lines, costs }) => (
          <div className="cell cell--centre" key={lines[0]}>
            <p className="huge huge--long">
              {lines.map((line) => (
                <span className="huge__line" key={line}>
                  {line}
                </span>
              ))}
            </p>
            <div className="badges__rows">
              {costs.map((row) => (
                <ul className="badges" key={row.join()}>
                  {row.map((cost) => (
                    <li className="badge badge--outline" key={cost}>
                      {cost}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FrameLayout>
  )
}
