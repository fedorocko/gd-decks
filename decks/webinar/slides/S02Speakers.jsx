import RoundsLayout from '../layouts/RoundsLayout.jsx'

export default function S02Speakers() {
  return (
    <RoundsLayout
      title="Today’s Speakers"
      size={260}
      items={[
        {
          id: 'peter',
          image: 'speakerPeter',
          alt: 'Peter Fedoročko',
          name: 'Peter Fedoročko',
          text: 'Field CTO',
        },
        {
          id: 'michal',
          image: 'speakerMichal',
          alt: 'Michal Zavřel',
          name: 'Michal Zavřel',
          text: 'AI Solution Engineer',
        },
      ]}
    />
  )
}
