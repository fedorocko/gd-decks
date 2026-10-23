import Products from '../components/Products.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// What we could build for Mastercard's clients: the ASP New Pitch's slide 4,
// its three products, each under what it does for the client, from
// informing them to acting for them, and a fourth still open.
export default function S07Products() {
  return (
    <DiagramLayout title="New product ideas we can build for Mastercard clients">
      <Products
        products={[
          {
            id: 'signals',
            tag: 'Inform',
            media: 'signalsEngine',
            name: 'Signals Engine',
            heading: 'Gives every client personal market signals.',
            body: 'Noise and false alarms filtered out, drivers explained and routed to the right people — and a growth engine you sell in tiers.',
          },
          {
            id: 'survey',
            tag: 'Recommend',
            media: 'surveyStudio',
            name: 'Survey Studio',
            heading: 'Analyzes market surveys and proposes actions.',
            body: 'New waves load on their own and your weighting, NET and top box are defined once, so trends are one question away.',
          },
          {
            id: 'publisher',
            tag: 'Generate',
            media: 'aiPublisher',
            name: 'AI Publisher',
            heading: 'Turns dashboards into branded QBRs for every client.',
            body: 'Personalized decks in a fraction of the time, so every client gets one and relationships grow.',
          },
          { id: 'next', tag: 'Execute', name: 'Your next idea', yours: true },
        ]}
      />
    </DiagramLayout>
  )
}
