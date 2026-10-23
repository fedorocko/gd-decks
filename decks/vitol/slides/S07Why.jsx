import {
  ACCURACY,
  CLICKHOUSE,
  IN_MEMORY_P90,
  LATENCY,
} from '../../../shared/benchmarks.js'
import Mark from '../../../shared/Mark.jsx'
import Promises from '../components/Promises.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The ASP pitch's last slide (its S32Why), word for word: the four promises
// its architecture run makes, with the figures behind them. A copy: a change
// there does not reach here. Drawn as slides 7–9 draw their subject: the
// promises in the plane's frame, the figures in a row under it.
export default function S07Why() {
  return (
    <DiagramLayout title="Why the Agentic Serving Plane">
      <Promises
        label="Agentic Serving Plane"
        cards={[
          {
            id: 'build',
            text: (
              <>
                It lets you implement new solutions{' '}
                <Mark keep>faster</Mark> and with{' '}
                <Mark keep>less risk.</Mark>
              </>
            ),
          },
          {
            id: 'lead',
            text: (
              <>
                It lets you build <Mark keep>new use-cases</Mark> and become
                an <Mark keep>AI leader.</Mark>
              </>
            ),
          },
          {
            id: 'compute',
            text: (
              <>
                It lets you run your compute workflow for{' '}
                <Mark keep>less.</Mark>
              </>
            ),
          },
          {
            id: 'tokens',
            text: (
              <>
                It gives you <Mark keep>predictable spend</Mark> on your AI
                tokens.
              </>
            ),
          },
        ]}
        kpis={[
          CLICKHOUSE,
          IN_MEMORY_P90,
          { value: '20%', label: 'savings on token costs' },
          ACCURACY,
          LATENCY,
        ]}
      />
    </DiagramLayout>
  )
}
