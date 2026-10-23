import { ACCURACY, LATENCY } from '../../../shared/benchmarks.js'
import Mark from '../../../shared/Mark.jsx'
import SplitLayout from '../../asp-pitch/layouts/SplitLayout.jsx'

// The ASP pitch's slide 8, its claim put as where the efficiency comes
// from, under the question it answers, and only its figures under that.
// A copy: a change there does not reach here. Its layout and clip are still
// that deck's.
export default function S12Efficiency() {
  return (
    <SplitLayout
      eyebrow="Why the most efficient?"
      titleClass="h2"
      title={
        <>
          10+ years of analytics innovation, now performing at agent{' '}
          <Mark>scale.</Mark>
        </>
      }
      // the shared benchmark's figures, said shorter; the AI ones keep its
      // footnote
      kpis={[
        { value: '2×', label: 'faster than ClickHouse' },
        { value: '<1s', label: 'query latency' },
        { value: '20%', label: 'savings on token costs' },
        { ...ACCURACY, label: 'higher AI accuracy' },
        { ...LATENCY, label: 'lower AI latency' },
      ]}
      mediaName="pillarEfficiency"
    />
  )
}
