import Mark from '../../../shared/Mark.jsx'
import Tree from '../components/Tree.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The ASP New Pitch's slide 5, said of desks: in the admin's run (demo.js),
// one solution handed down to every desk, drawn as a tree: two pages of a
// report, and two desks' copies of them, each with its own data (media.js).
export default function S04Tenants() {
  return (
    <DiagramLayout
      title="Every solution comes multi-tenant"
      text={
        <>
          One solution you can distribute to <Mark>all your desks.</Mark>
        </>
      }
    >
      <Tree
        root={{
          pages: ['solutionOverview', 'solutionSummary'],
          name: 'One solution',
        }}
        leaves={[
          { pages: ['clientAOverview', 'clientAReturns'], name: 'Desk A' },
          { pages: ['clientBOverview', 'clientBReturns'], name: 'Desk B' },
        ]}
      />
    </DiagramLayout>
  )
}
