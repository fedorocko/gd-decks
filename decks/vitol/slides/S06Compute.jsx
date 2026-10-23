import Engines from '../components/Engines.jsx'
import Inside from '../components/Inside.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After the inference slide, the same row with the compute opened instead:
// the two engines — the MPP shared by clients, reading from the storage,
// the data marts set off from it, since they never go back to it — and the
// pipeline the answers go out through. The storage, in the row, carries
// what it is built on.
export default function S06Compute() {
  return (
    <DiagramLayout
      kicker="Compute engines"
      title="Optimized compute for lower cost and less data workloads"
    >
      <Inside
        boxes={[{ name: 'Storage', tag: 'Open table format' }, 'Agents']}
        model="LLM"
        models={3}
        edges={['Compute', 'Inference']}
        open={0}
        label="Agentic Serving Plane"
        host="Your reserved GPU"
        benefits={[
          'Lower query cost',
          'Less DWH workload',
          'Less data transfer',
          'Simpler queries',
        ]}
      >
        <Engines
          label="Engines"
          near={{
            name: 'MPP',
            text: 'Shared engine for cheaper big data analytics',
            tags: ['Client 1', 'Client 2', 'Client 3'],
          }}
          far={{
            name: 'Data marts',
            text: 'Smaller data, more frequent queries. No trip to storage.',
            facts: ['Up to 10GB', '100ms latency'],
          }}
          pipeline={{
            name: 'Optimized query pipeline',
            items: ['Pre-aggregations', 'Query caching', 'Query learning'],
          }}
        />
      </Inside>
    </DiagramLayout>
  )
}
