import Tools from '../components/Tools.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After slide 6's stack: the management tools under its pills, two to each.
// Redoes the ASP pitch's slides 19–21 (its S29Context, S31GovernanceTools
// and S20Lifecycle), their claims cut down to a line under each group.
// A screenshot of each tool (media.js).
export default function S04Management() {
  return (
    <DiagramLayout
      kicker="Management tools"
      title="Get full control over agents and their context"
    >
      <Tools
        groups={[
          {
            id: 'context',
            name: 'Context',
            text: 'Definitions and context specific to your business, behind every app and agent.',
            tools: [
              { name: 'Memory', media: 'toolMemory' },
              { name: 'Knowledge', media: 'toolKnowledge' },
            ],
          },
          {
            id: 'governance',
            name: 'Governance & permissions',
            text: 'Centralized control across data, context and agents.',
            tools: [
              { name: 'Agent Builder', media: 'toolBuilder' },
              { name: 'Analytics Catalog', media: 'toolCatalog' },
            ],
          },
          {
            id: 'lifecycle',
            name: 'Lifecycle',
            text: 'Quality and accuracy from inception through production.',
            tools: [
              { name: 'Evals', media: 'toolEvals' },
              { name: 'Observability', media: 'toolObservability' },
            ],
          },
        ]}
      />
    </DiagramLayout>
  )
}
