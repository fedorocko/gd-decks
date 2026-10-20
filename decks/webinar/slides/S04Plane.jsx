import Mark from '../../../shared/Mark.jsx'
import PlaneLayout from '../../../shared/PlaneLayout.jsx'
import media from '../media.js'

// The ASP New Pitch's slide 2, word for word: what we do and why us, beside
// how we do it, the Agentic Serving Plane over its two stills. A copy: a
// change there does not reach here.
export default function S04Plane() {
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
          art: media.stillCode,
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
          art: media.stillServers,
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
