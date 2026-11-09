import PanelsLayout from '../layouts/PanelsLayout.jsx'

// The Mastercard deck's slide 2, copied: what AI makes possible for a
// product company, three ways, each over one of the ASP pitch's pillar
// clips, dimmed and played in turn. A change there does not reach here.
export default function S18Innovation() {
  return (
    <PanelsLayout
      title="AI sparks new possibilities in product & business innovation"
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
