import asset from '../../../shared/asset.js'
import FrameLayout from '../layouts/FrameLayout.jsx'
import media from '../media.js'

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

/**
 * ours — slide 51: the boxes stay where slide 50 left them and fade back,
 *   and GoodData.AI's logo rises in large over them
 */
export default function S50WhatItTakes({ ours = false }) {
  return (
    <FrameLayout title="What it takes" className={ours ? 'slide--still takes--ours' : undefined}>
      <div className="grid grid--takes">
        {TAKES.map(({ name, gain }) => (
          <div className="cell take" key={name}>
            <h3 className="take__name">{name}</h3>
            <p className="take__gain">{gain}</p>
          </div>
        ))}
      </div>
      {ours && (
        <div className="takes__ours">
          <img className="takes__logo" src={asset(media.wordmark.src)} alt="GoodData.AI" />
        </div>
      )}
    </FrameLayout>
  )
}
