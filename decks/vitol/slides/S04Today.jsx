import Personas from '../components/Personas.jsx'
import { personas, tiers } from '../demo.js'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After the stack: what the demo shows, by tier, a card to each persona with
// their business story. The slides after it take them one by one (demo.js).
export default function S04Today() {
  return (
    <DiagramLayout title="What you will see today">
      <Personas
        pillars={tiers.map((tier) => ({
          ...tier,
          personas: personas.filter((p) => p.tier === tier.id),
        }))}
      />
    </DiagramLayout>
  )
}
