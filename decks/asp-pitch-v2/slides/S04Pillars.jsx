import Mark from '../../../shared/Mark.jsx'
import Stack from '../components/Stack.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The Agentic Serving Plane drawn as a stack: what the client brings, layer
// by layer, over what we run it on, and the solutions built on it. The
// subtitle is the line from the first of the offsite deck's four pillars, its
// slide 15.
export default function S04Pillars() {
  return (
    <DiagramLayout
      title="Agentic Serving Plane lets you build any AI solution"
      text={
        <>
          It is open and flexible because it speaks the language of agents:{' '}
          <Mark>code.</Mark>
        </>
      }
    >
      <Stack
        label="Agentic Serving Plane"
        // slide 3's solutions, placeholders until they have pictures, and
        // the client's own
        above={[
          { name: 'Survey Studio' },
          { name: 'AI Publisher' },
          { name: 'Signals Engine' },
          { name: 'Market Pulse' },
          { name: 'Your solution?', yours: true },
        ]}
        below={[
          'Governance',
          'Context Management',
          'Permissions',
          'Lifecycle Management',
        ]}
        layers={[
          {
            id: 'ui',
            label: 'Shell apps',
            text: 'Your UI',
            builtIn: ['Dashboards', 'Publisher'],
            left: { name: 'SDK', out: true },
            right: { name: 'A2A', out: true },
          },
          {
            id: 'agents',
            label: 'AI Hub',
            text: 'Your Agents',
            builtIn: ['AI Analyst'],
            left: { name: 'Skills' },
            right: { name: 'Evals' },
          },
          {
            id: 'context',
            label: 'Catalog',
            text: 'Your Context',
            left: { name: 'Semantics' },
            right: { name: 'Knowledge' },
          },
          {
            id: 'logic',
            label: 'Flows',
            text: 'Your Business Logic',
            builtIn: ['Key Drivers', 'What-if', 'Forecasting'],
          },
          { id: 'inference', text: 'Local Inference', filled: true },
          { id: 'compute', text: 'Compute Engines', filled: true },
        ]}
      />
    </DiagramLayout>
  )
}
