import AgendaLayout from '../../webinar/layouts/AgendaLayout.jsx'

// The deck's running order, in the webinar's agenda: a part to each run of
// slides, and under it what each slide answers, in their order.
const ITEMS = [
  {
    id: 'interfaces',
    text: 'New AI Interfaces and Agents',
    items: [
      { id: 'copilot', text: 'How can you build a new dashboard in seconds?' },
      {
        id: 'publisher',
        text: 'How can you deliver a personalized data deck to each client?',
      },
      {
        id: 'builders',
        text: 'How can product builders configure and monetize their agents?',
      },
    ],
  },
  { id: 'demos', text: 'Demos' },
  {
    id: 'plane',
    text: 'The Agentic Serving Plane',
    items: [
      { id: 'build', text: 'How can you build any AI solution?' },
      {
        id: 'control',
        text: 'How do you keep full control over agents and their context?',
      },
      {
        id: 'protect',
        text: 'How do you protect your data and run AI at predictable costs?',
      },
      {
        id: 'optimize',
        text: 'How do optimized inference and compute cut latency and cost?',
      },
    ],
  },
]

export default function S02Agenda() {
  return <AgendaLayout items={ITEMS} />
}
