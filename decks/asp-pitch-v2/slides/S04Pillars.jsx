import Stack from '../components/Stack.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The Agentic Serving Plane drawn as a stack: what the client brings, layer
// by layer, over what we run it on, and the solutions built on it. No
// subtitle, so the diagram has the room.
export default function S04Pillars() {
  return (
    <DiagramLayout title="Agentic Serving Plane lets you build any AI solution">
      <Stack
        label="Agentic Serving Plane"
        // slide 3's solutions, over the screenshots it shows them by, and
        // the client's own
        above={[
          { name: 'Survey Studio', media: 'surveyStudio' },
          { name: 'AI Publisher', media: 'aiPublisher' },
          { name: 'Signals Engine', media: 'signalsEngine' },
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
            right: { name: 'A2A + MCP', out: true },
          },
          {
            id: 'agents',
            label: 'AI Hub',
            text: 'Your Agents',
            builtIn: ['AI Analyst'],
            // the agents' standards on the right, under A2A and MCP; how
            // you build and check them on the left, with the SDK. Skills
            // come in to the agents, and they call tools out: both ways.
            left: { name: 'Evals' },
            right: { name: 'Skills + Tools', both: true, soon: true },
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
            label: 'Flows + Sandboxes',
            soon: true,
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
