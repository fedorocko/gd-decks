import Mark from '../../../shared/Mark.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

// The Mastercard deck's slide 3, copied, under this deck's small title: a
// card to each pillar, its head large, the questions under it. A change
// there does not reach here.
const PILLARS = [
  {
    head: (
      <>
        <Mark>Start</Mark> with agentic-ready systems
      </>
    ),
    items: [
      'Can you let agents into your systems, or will they hold them back?',
      'Does most of the knowledge live in human heads?',
    ],
  },
  {
    head: (
      <>
        Keep your data <Mark>Secure</Mark>
      </>
    ),
    items: [
      'Once you let agents in, how do you keep your data and IP safe and private?',
      'How do you make sure they can access only what you authorize?',
    ],
  },
  {
    head: (
      <>
        Grow usage and control <Mark>Spend</Mark>
      </>
    ),
    items: [
      'Once it is safe and agents start working, how will their actions impact your budgets?',
      'How will your systems perform under 10× load?',
    ],
  },
  {
    head: (
      <>
        <Mark>Succeed</Mark> through real value
      </>
    ),
    items: [
      'Once they work economically at scale, what measurable results do they deliver?',
      'More activity needs to translate to tangible outcomes.',
    ],
  },
]

export default function S53Pillars() {
  return (
    <FrameLayout title="Lasting AI transformation will depend on 4 key pillars (4S):">
      <div className="cols">
        {PILLARS.map(({ head, items }, i) => (
          <div className="col" key={i}>
            <h3 className="colhead">{head}</h3>
            <ul className="col__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FrameLayout>
  )
}
