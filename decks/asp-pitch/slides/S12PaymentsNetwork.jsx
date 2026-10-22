import SplitLayout from '../layouts/SplitLayout.jsx'

export default function S12PaymentsNetwork() {
  return (
    <SplitLayout
      eyebrow="Case study — Payments Network"
      titleClass="h3"
      variant="case"
      title="Unlocking new revenue streams by up-selling personalized AI agents."
      subtitle="Payments Network uses GoodData’s AI Hub and agent builder to create agents with tiered capabilities and personalize them across its client base — under centralized governance."
      quietBadges
      badges={['AI Hub', 'Agent Builder']}
      mediaName="paymentsNetwork"
    />
  )
}
