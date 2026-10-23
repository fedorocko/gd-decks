import Tools from '../../asp-pitch-v2/components/Tools.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The ASP New Pitch's slide 7, without the label over its title. A copy: a
// change there does not reach here. Its tools and their screenshots are
// still that deck's (its components/Tools.jsx and media.js), so they stay
// in step with it.
export default function S11Management() {
  return (
    <DiagramLayout title="You still get full control over agents, their context and access">
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
