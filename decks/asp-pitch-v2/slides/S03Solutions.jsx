import PanelsLayout from '../layouts/PanelsLayout.jsx'

// Placeholder copy, about as long as the real copy will be, so the panels
// already sit as they will. The pictures are not chosen yet (media.js).
const placeholder = (product) => ({
  heading: `One line on what ${product} does for your clients.`,
  body: 'Placeholder. Two sentences on who it is for, how it works and what it changes for them.',
})

const solutions = [
  { id: 'survey', media: 'surveyStudio', name: 'Survey Studio' },
  { id: 'publisher', media: 'aiPublisher', name: 'AI Publisher' },
  { id: 'signals', media: 'signalsEngine', name: 'Signals Engine' },
  { id: 'pulse', media: 'marketPulse', name: 'Market Pulse' },
]

export default function S03Solutions() {
  return (
    <PanelsLayout
      title="What we’ve built recently using Agentic Serving Plane"
      titleFit
      grid
      panels={solutions.map((solution) => ({
        ...solution,
        ...placeholder(solution.name),
      }))}
    />
  )
}
