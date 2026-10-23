import PanelsLayout from '../layouts/PanelsLayout.jsx'

// The ASP New Pitch's case studies, its slide 3, without its middle one:
// that one is Mastercard's own. A copy: a change there does not reach here.
export default function S06Clients() {
  return (
    <PanelsLayout
      title="What we built for other clients"
      titleFit
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
