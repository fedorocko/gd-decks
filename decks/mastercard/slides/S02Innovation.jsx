import PanelsLayout from '../layouts/PanelsLayout.jsx'

// Why now: what AI makes possible for a product company, three ways, each
// over one of the ASP pitch's pillar clips (the offsite deck's slide 15),
// dimmed and played in turn.
export default function S02Innovation() {
  return (
    <PanelsLayout
      title="AI sparks new possibilities in product & business innovation"
      titleFit
      centre
      panels={[
        {
          id: 'monetize',
          media: 'clipMonetize',
          name: 'Monetize',
          text: 'Build new monetization channels into existing products.',
        },
        {
          id: 'automate',
          media: 'clipAutomate',
          name: 'Automate',
          text: 'Build new products to automate more work.',
        },
        {
          id: 'rebuild',
          media: 'clipRebuild',
          name: 'Modernize',
          text: 'Rebuild legacy solutions into new products and save money.',
        },
      ]}
    />
  )
}
