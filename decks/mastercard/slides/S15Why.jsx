import { ACCURACY, LATENCY } from '../../../shared/benchmarks.js'
import Mark from '../../../shared/Mark.jsx'
import Promises from '../../asp-pitch-v2/components/Promises.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// The ASP New Pitch's last slide, its figures said as on slide 12. A copy:
// a change there does not reach here. Its frame is still that deck's (its
// components/Promises.jsx).
export default function S15Why() {
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
        // slide 12's figures, said as there
        kpis={[
          { value: '2×', label: 'faster than ClickHouse' },
          { value: '<1s', label: 'query latency' },
          { value: '20%', label: 'savings on token costs' },
          { ...ACCURACY, label: 'higher AI accuracy' },
          { ...LATENCY, label: 'lower AI latency' },
        ]}
      />
    </DiagramLayout>
  )
}
