import PanelsLayout from '../layouts/PanelsLayout.jsx'

// Three products built on the plane, each over a screenshot of it
// (media.js): what it does, as the headline, and what it gives the client
// under it. Survey Studio and Signals Engine from their demos' write-ups,
// AI Publisher from the webinar deck's slide 11.
export default function S03Solutions() {
  return (
    <PanelsLayout
      title="What we’ve built recently using Agentic Serving Plane"
      titleFit
      shots
      panels={[
        {
          id: 'survey',
          media: 'surveyStudio',
          name: 'Survey Studio',
          heading: 'Analyzes survey data straight from vendors’ SPSS files.',
          body: 'New waves load on their own and your weighting, NET and top box are defined once, so trends are one question away.',
        },
        {
          id: 'publisher',
          media: 'aiPublisher',
          name: 'AI Publisher',
          heading: 'Turns dashboards into branded data decks for every client.',
          body: 'Personalized decks in a fraction of the time, so every client gets one and relationships grow.',
        },
        {
          id: 'signals',
          media: 'signalsEngine',
          name: 'Signals Engine',
          heading: 'Gives every client personal market signals.',
          body: 'Noise and false alarms filtered out, drivers explained and routed to the right people — and a growth engine you sell in tiers.',
        },
      ]}
    />
  )
}
