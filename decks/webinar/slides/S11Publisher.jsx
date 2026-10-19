import FeatureLayout from '../layouts/FeatureLayout.jsx'

export default function S11Publisher() {
  return (
    <FeatureLayout
      eyebrow="New AI Interfaces and Agents"
      title="AI Publisher"
      tag="Demo 4"
      rows={[
        {
          id: 'problem',
          label: 'The problem',
          text: 'Turning dashboards into a narrative deck for every client by hand takes days, so most never get one and relationships stagnate.',
        },
        {
          id: 'who',
          label: 'Who is it for?',
          people: ['Product builders', 'Account managers'],
        },
        {
          id: 'how',
          label: 'How can you use it?',
          text: 'Deliver personalized and branded data decks for all your clients in a fraction of the time.',
          shot: 'shotPublisher',
        },
        {
          id: 'what',
          label: 'What can you do?',
          checks: [
            'Create from template',
            'Apply branding',
            'Personalize per client',
            'Generate summaries',
            'Roll over to next period',
            'Export to PPTX or accessible PDF',
          ],
        },
        {
          id: 'gains',
          label: 'What do you get?',
          gains: [
            'Save time',
            'Serve everyone',
            'Personalized touch',
            'Better relationships',
          ],
        },
      ]}
    />
  )
}
