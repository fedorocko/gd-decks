import Mark from '../../../shared/Mark.jsx'

// The deck's one sentence, split into its three parts, a column each: what we
// give you, what you do with it, and what we take care of.
const CLAIMS = [
  {
    id: 'agents',
    text: (
      <>
        {/* "accurate": the decks' benchmark, 25% higher accuracy than
            GPT-5.2 on production customer data (shared/benchmarks.js) */}
        We give you <Mark>accurate, governed and extensible</Mark> data agents
      </>
    ),
  },
  {
    id: 'interfaces',
    text: (
      <>
        You plug them into <Mark keep>any interface</Mark> or{' '}
        <Mark>build your own apps</Mark> around them
      </>
    ),
  },
  {
    id: 'operations',
    text: (
      <>
        We make them <Mark>safe, fast and cheap</Mark> to operate at scale
      </>
    ),
  },
]

// The agenda under them, one row, in the order the talk takes it.
const AGENDA = [
  'How you quickly build and deploy any analytics interface that fits your flow',
  // a non-breaking hyphen, so "ready-made" is not split across lines
  'How you plug ready‑made data agents into your chats',
  'What you get out of the box with our data agents',
  'How we make data agents safe, fast and cheap to operate at scale',
]

export default function S00Statement() {
  return (
    <section className="slide slide--thesis">
      <h2 className="h2 thesis__title">How we help Mews to lead with AI</h2>
      <div className="thesis">
        {CLAIMS.map(({ id, text }) => (
          <p className="thesis__claim" key={id}>
            {text}
          </p>
        ))}
      </div>
      <p className="eyebrow thesis__eyebrow">What you will see today</p>
      <div className="thesis__agenda">
        {AGENDA.map((item) => (
          <p className="thesis__item" key={item}>
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
