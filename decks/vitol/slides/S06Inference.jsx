import { ACCURACY, LATENCY } from '../../../shared/benchmarks.js'
import Inside, { Steps } from '../components/Inside.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After slide 6: its lower row, the Agentic Serving Plane, on its own, with
// the inference opened up to show what happens on every call. The models
// are several, so the routing has something to choose between. Routing and
// caching are the ASP pitch's own words, from its slide 26; the lines on
// safety and policy are a first draft. The figures are the shared
// benchmark's, starred with its note.
export default function S06Inference() {
  return (
    <DiagramLayout
      kicker="Local inference"
      title="Optimized pipeline for low latency and higher accuracy"
    >
      <Inside
        boxes={[{ name: 'Storage', quiet: true }, 'Agents']}
        model="LLM"
        models={3}
        edges={['Compute', 'Inference']}
        label="Agentic Serving Plane"
        host="Your reserved GPU"
        kpis={[ACCURACY, LATENCY]}
      >
        <Steps
          steps={[
            { name: 'Safety', text: 'Guardrails check every prompt and answer.' },
            { name: 'Caching', text: 'Repeated prompts are answered from cache.' },
            { name: 'Routing', text: 'Each prompt goes to the right model.' },
            { name: 'Policy', text: 'Your rules on who may use which model.' },
          ]}
        />
      </Inside>
    </DiagramLayout>
  )
}
