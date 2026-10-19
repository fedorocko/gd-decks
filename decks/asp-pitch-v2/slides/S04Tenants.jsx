import Mark from '../../../shared/Mark.jsx'
import Tree from '../components/Tree.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After the solutions on slide 3: each of them comes multi-tenant, one
// solution handed down to every client, drawn as a tree. The pictures are
// not in yet (media.js).
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
        root={{ media: 'tenantSolution', name: 'One solution' }}
        leaves={[
          { media: 'tenantA', name: 'Client A' },
          { media: 'tenantB', name: 'Client B' },
          { media: 'tenantC', name: 'Client C' },
          { media: 'tenantD', name: 'Client D' },
        ]}
      />
    </DiagramLayout>
  )
}
