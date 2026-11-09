import FrameLayout from '../layouts/FrameLayout.jsx'

// What the schema came to, a box each: what it is, and what it gets you.
const TAKES = [
  { name: 'On-premise', gain: 'No data in the cloud' },
  { name: 'Local LLM', gain: 'No data in the LLM, predictable costs' },
  { name: 'Additional Inference Pipeline', gain: 'Faster, cheaper and compliant' },
  { name: 'Data Accelerator', gain: 'Less DWH load and more secure' },
  { name: 'Sandboxed API', gain: 'More secure, with no footprint or leftovers' },
  { name: 'Deployable Apps', gain: 'Collaborative, shareable, no duplicates' },
  { name: 'Governance Framework', gain: 'Centrally managed and audited context' },
  { name: 'Evaluations Framework', gain: 'Assured quality, with no degradation' },
]

export default function S48WhatItTakes() {
  return (
    <FrameLayout title="What it takes">
      <div className="grid grid--takes">
        {TAKES.map(({ name, gain }) => (
          <div className="cell take" key={name}>
            <h3 className="take__name">{name}</h3>
            <p className="take__gain">{gain}</p>
          </div>
        ))}
      </div>
    </FrameLayout>
  )
}
