import PanelsLayout from '../layouts/PanelsLayout.jsx'

// The Mastercard deck's slide 7, copied, under this slide's title, its
// second case study the ASP New Pitch's Payments Network (its slide 3) in
// place of Boozt. A change to either deck does not reach here.
export default function S07BasedOn() {
  return (
    <PanelsLayout
      title="What is it based on"
      panels={[
        {
          id: 'datev',
          media: 'datev',
          name: 'Datev',
          heading:
            'Helping one of Germany’s largest finance institutions deliver AI analytics to its clients.',
          body: 'Datev uses GoodData’s on-premise deployment and local inference to deliver completely private and secure AI analytics — compliant with strict German regulation.',
          kpis: [
            { value: '15M', label: 'payrolls' },
            { value: '100%', label: 'private' },
          ],
        },
        {
          id: 'payments',
          media: 'paymentsNetwork',
          name: 'Payments Network',
          heading:
            'Unlocking new revenue streams by up-selling personalized AI agents.',
          body: 'Payments Network uses GoodData’s AI Hub and agent builder to create agents with tiered capabilities and personalize them across its client base — under centralized governance.',
          kpis: [
            { value: '1st', label: 'vendor with AI Governance approval' },
            { value: '5,000+', label: 'banks with access' },
          ],
        },
      ]}
    />
  )
}
