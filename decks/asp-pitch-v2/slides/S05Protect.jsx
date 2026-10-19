import Versus from '../components/Versus.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// Other solutions send the data out to models billed per token; the Agentic
// Serving Plane runs the models inside, on the client's own GPU, next to the
// data and the agents.
export default function S05Protect() {
  return (
    <DiagramLayout
      kicker="Local inference"
      title="Protects your data and runs AI at predictable costs"
    >
      <Versus
        boxes={['Storage', 'Agents']}
        model="LLMs"
        edges={['Compute', 'Inference']}
        theirs={{
          label: 'Other solutions',
          problems: ['Data leaves', 'Price per token'],
        }}
        ours={{
          label: 'Agentic Serving Plane',
          host: 'Your reserved GPU',
          benefits: ['Data protected', 'Predictable cost'],
        }}
      />
    </DiagramLayout>
  )
}
