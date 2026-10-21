import AgendaLayout from '../layouts/AgendaLayout.jsx'

// Two parts, each with what it covers under it. The demos are named apart
// from what they show, as a tag after it, numbered in the order they come.
const ITEMS = [
  {
    id: 'analyst',
    text: 'What’s new in AI Analyst',
    tag: 'Demo 1',
    items: [
      {
        id: 'builders',
        text: 'How can product builders configure and monetize their agents?',
      },
      {
        id: 'users',
        text: 'How can business users select context, reasoning effort and agents?',
      },
      {
        id: 'observability',
        text: 'How can admins observe AI usage, adoption and cost?',
        tag: 'Demo 2',
      },
    ],
  },
  {
    id: 'interfaces',
    text: 'New AI Interfaces and Agents',
    items: [
      {
        id: 'copilot',
        text: 'How can you build a new dashboard in seconds?',
        tag: 'Demo 3',
      },
      {
        id: 'publisher',
        text: 'How can you deliver a personalized data deck to each client in a fraction of the time?',
        tag: 'Demo 4',
      },
    ],
  },
]

export default function S07Agenda() {
  return <AgendaLayout items={ITEMS} />
}
