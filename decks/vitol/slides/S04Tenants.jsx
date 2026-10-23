import Mark from '../../../shared/Mark.jsx'
import Tree from '../components/Tree.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After the solutions on slide 3: each of them comes multi-tenant, one
// solution handed down to every client, drawn as a tree: two pages of a
// report, and two clients' copies of them in their own brand (media.js).
export default function S04Tenants() {
  return (
    <DiagramLayout
      title="Every solution comes multi-tenant"
      text={
        <>
          One solution you can distribute to <Mark>all your clients.</Mark>
        </>
      }
    >
      <Tree
        root={{
          pages: ['solutionOverview', 'solutionSummary'],
          name: 'One solution',
        }}
        leaves={[
          { pages: ['clientAOverview', 'clientAReturns'], name: 'Client A' },
          { pages: ['clientBOverview', 'clientBReturns'], name: 'Client B' },
        ]}
      />
    </DiagramLayout>
  )
}
