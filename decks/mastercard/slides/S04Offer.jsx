import Mark from '../../../shared/Mark.jsx'
import Offer from '../components/Offer.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// What we bring: the plane, two cards on what it is, plus our services,
// the "why us" of the ASP New Pitch's slide 2.
export default function S04Offer() {
  return (
    <DiagramLayout
      title="Build new products and serve AI to your clients with GoodData.AI"
      long
    >
      <Offer
        plane={{
          label: 'Agentic Serving Plane',
          cards: [
            {
              id: 'build',
              art: 'stillCode',
              text: (
                <>
                  Open platform to build <Mark keep>any AI solution.</Mark>
                </>
              ),
            },
            {
              id: 'keep',
              art: 'stillServers',
              text: (
                <>
                  <Mark>Secure</Mark> and <Mark>efficient</Mark> even at
                  agentic&nbsp;scale.
                </>
              ),
            },
          ],
        }}
        services={{
          label: 'AI services',
          text: (
            <>
              Our team helps you deliver AI to production <Mark>FAST.</Mark>
            </>
          ),
          kpis: [{ value: '12 weeks', label: 'idea to production' }],
        }}
      />
    </DiagramLayout>
  )
}
