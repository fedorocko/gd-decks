import PanelsLayout from '../layouts/PanelsLayout.jsx'

// The ASP pitch's three case studies, its slides 11–13, one to a column, in
// the same words, each with the figures behind it.
export default function S02Cases() {
  return (
    <PanelsLayout
      title="Case studies"
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
        {
          id: 'boozt',
          media: 'boozt',
          name: 'Boozt',
          heading:
            'Automating personalized insights that drive client success on the platform.',
          body: 'Boozt uses AI Publisher to automatically generate personalized brand reports, helping clients continuously improve performance and get more value from the platform.',
          kpis: [
            { value: '500', label: 'clients' },
            { value: '12 weeks', label: 'idea to production' },
          ],
        },
      ]}
    />
  )
}
