import Stack from '../../asp-pitch-v2/components/Stack.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The ASP New Pitch's slide 6, its title saying what is the client's and
// what is ours. A copy: a change there does not reach here. Its diagram is
// still that deck's (its components/Stack.jsx and media.js), so it stays in
// step with it.
export default function S10Pillars() {
  return (
    <DiagramLayout title="Your ideas, built on our infrastructure, tools and harness">
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
