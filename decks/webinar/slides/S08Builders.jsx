import Tiers from '../components/Tiers.jsx'
import FeatureLayout from '../layouts/FeatureLayout.jsx'

// The internal use's sentence is a draft: the brief left it open.
export default function S08Builders() {
  return (
    <FeatureLayout
      eyebrow="What’s new in AI Analyst"
      title="How can product builders configure and monetize their agents?"
      rows={[
        {
          id: 'problem',
          label: 'The problem',
          // "use cases" held together, so the line never breaks inside it
          text: 'One agent does not fit complex use cases: nothing to tailor, nothing to up-sell.',
        },
        {
          id: 'who',
          label: 'Who is it for?',
          people: ['Product builders', 'Workspace admins'],
        },
        {
          id: 'how',
          label: 'How can you use it?',
          uses: [
            {
              id: 'tenants',
              title: 'Multi-tenant',
              text: 'Create different tiers of agents and (up)-sell them to your clients.',
              schema: (
                <Tiers
                  ladder
                  agents="Agents"
                  to="Clients"
                  pairs={[
                    ['Basic', 'Client A'],
                    ['Pro', 'Client B'],
                    ['Premium', 'Client C'],
                  ]}
                />
              ),
            },
            {
              id: 'internal',
              title: 'Internal',
              text: 'Give each team its own agents, set up for the work it does.',
              schema: (
                <Tiers
                  agents="Agents"
                  to="Groups"
                  pairs={[
                    ['Sales', 'Group A'],
                    ['Finance', 'Group B'],
                    ['Support', 'Group C'],
                  ]}
                />
              ),
            },
          ],
        },
        {
          id: 'what',
          label: 'What can you do?',
          checks: [
            'Select skills',
            'Define personalities',
            'Give instructions',
            'Assign users / groups',
          ],
        },
      ]}
    />
  )
}
