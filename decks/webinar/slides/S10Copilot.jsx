import FeatureLayout from '../layouts/FeatureLayout.jsx'

export default function S10Copilot() {
  return (
    <FeatureLayout
      eyebrow="New AI Interfaces and Agents"
      title="Dashboard Co-pilot"
      tag="Demo 3"
      rows={[
        {
          // a draft: the brief left it open
          id: 'problem',
          label: 'The problem',
          text: 'A new dashboard takes hours of manual work, or a ticket to the analytics team.',
        },
        {
          id: 'who',
          label: 'Who is it for?',
          people: ['Business users', 'Analysts'],
        },
        {
          id: 'how',
          label: 'How can you use it?',
          text: 'Prompt the agent for a dashboard and refine it together in the chat.',
          shot: 'shotCopilot',
        },
        {
          id: 'gains',
          label: 'What do you get?',
          gains: [
            'Build in seconds',
            'No manual work',
            'Fully editable',
            'Agent understands your changes',
            'No analytics as code needed',
          ],
        },
      ]}
    />
  )
}
