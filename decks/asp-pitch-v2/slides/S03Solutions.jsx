import PanelsLayout from '../layouts/PanelsLayout.jsx'

// Placeholder copy, as long as the case studies' on slide 2, so the columns
// already sit as they will. The pictures are not chosen yet (media.js).
const placeholder = (product) => ({
  heading: `One line on what ${product} does for your clients.`,
  body: 'Placeholder. Two or three sentences on who it is for, how it works and what it changes for them, about as long as a case study’s.',
})

export default function S03Solutions() {
  return (
    <PanelsLayout
      title="New solutions"
      panels={[
        {
          id: 'signals',
          media: 'marketSignals',
          name: 'Market Signals',
          ...placeholder('Market Signals'),
        },
        {
          id: 'survey',
          media: 'surveyStudio',
          name: 'Survey Studio',
          ...placeholder('Survey Studio'),
        },
        {
          id: 'publisher',
          media: 'aiPublisher',
          name: 'AI Publisher',
          ...placeholder('AI Publisher'),
        },
      ]}
    />
  )
}
