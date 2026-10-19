import Mark from '../../../shared/Mark.jsx'
import PlaneLayout from '../layouts/PlaneLayout.jsx'

// What we do and why us, stacked, beside how we do it: the Agentic Serving
// Plane itself, framed, over stills of the pillar clips from the offsite
// deck's slide 15 and from the ASP pitch's slide 8.
export default function S01Plane() {
  return (
    <PlaneLayout
      title="Meet GoodData.AI"
      stack={[
        {
          id: 'serve',
          heading: 'What we do',
          badge: 'B2B2B',
          text: (
            <>
              We help <Mark>you</Mark> serve AI to <Mark>your</Mark> clients.
            </>
          ),
          lead: true,
        },
        {
          id: 'deliver',
          heading: 'Why us',
          text: (
            <>
              Our team helps you deliver AI to production <Mark>FAST.</Mark>
            </>
          ),
          kpis: [{ value: '12 weeks', label: 'idea to production' }],
        },
      ]}
      label="Agentic Serving Plane"
      heading="How we do it"
      framed={[
        {
          id: 'build',
          media: 'stillCode',
          text: (
            <>
              Open and flexible platform lets you build{' '}
              <Mark keep>
                <Mark variant="rule">any AI solution</Mark>.
              </Mark>
            </>
          ),
        },
        {
          id: 'keep',
          media: 'stillServers',
          text: (
            <>
              {/* Each marked word starts its line, and "agent scale" stays
                  whole, so "scale." is not left on a line of its own. */}
              Keeps your data
              <br />
              <Mark>protected</Mark>, AI under
              <br />
              <Mark>control</Mark> and drives
              <br />
              <Mark>efficiency</Mark> at agent&nbsp;scale.
            </>
          ),
        },
      ]}
    />
  )
}
