import PanelsLayout from '../layouts/PanelsLayout.jsx'

// What we have built for Mastercard so far. Placeholders: the names, copy
// and screenshots are not in yet (media.js).
const placeholder = {
  heading: 'One line on what it does for Mastercard’s clients.',
  body: 'Placeholder. Two sentences on who uses it, how it works and what it changed.',
}

export default function S05Built() {
  return (
    <PanelsLayout
      title="What we have already built for Mastercard clients"
      titleFit
      shots
      panels={[
        { id: 'a', media: 'builtA', name: 'Product name', ...placeholder },
        { id: 'b', media: 'builtB', name: 'Product name', ...placeholder },
        { id: 'c', media: 'builtC', name: 'Product name', ...placeholder },
      ]}
    />
  )
}
