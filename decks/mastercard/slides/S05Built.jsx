import PanelsLayout from '../layouts/PanelsLayout.jsx'

// What we have built for Mastercard's clients so far, each over a
// screenshot of it (media.js).
export default function S05Built() {
  return (
    <PanelsLayout
      title="What we have already built for Mastercard clients"
      titleFit
      shots
      panels={[
        {
          id: 'assistant',
          media: 'builtA',
          name: 'AI Assistant',
          heading: 'Answers any question about your portfolio in plain language.',
          body: 'Bank users ask in their own words and get a chart, benchmark or explanation in seconds, built only from governed Mastercard metrics. No more hunting through dashboards for an answer.',
        },
        {
          id: 'summaries',
          media: 'builtB',
          name: 'AI Summaries',
          heading: 'Tells you what changed before you start scrolling.',
          body: 'A short summary at the top of each dashboard highlights the key movements in spend, transactions and approval rates. Users see the story first, then dig into the detail.',
        },
        {
          id: 'copilot',
          media: 'builtC',
          name: 'Dashboard Builder Copilot',
          heading: 'Turns a conversation into a dashboard you can keep.',
          body: 'Users describe what they need or refine it by chatting, and the copilot drafts the dashboard for them to save. What took hours of manual building now takes minutes.',
        },
      ]}
    />
  )
}
