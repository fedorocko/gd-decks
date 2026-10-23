import Personas from '../components/Personas.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'

// After the stack: what the demo shows, by pillar, a box to each persona
// and what they can do. From the account team's notes, tightened; the team
// lead could fold into the business analyst.
export default function S04Today() {
  return (
    <DiagramLayout title="What you will see today">
      <Personas
        pillars={[
          {
            id: 'consume',
            name: 'Consumption & self-service',
            personas: [
              {
                who: 'Business consumer',
                does: 'View dashboards and ask questions.',
              },
              {
                who: 'Business analyst',
                does: 'Create ad hoc visualizations, explore data, build custom metrics and investigate business questions with Analyzer or AI Assistant.',
              },
              {
                who: 'Team lead',
                does: 'Build personal or team dashboards and share analyses with colleagues.',
              },
            ],
          },
          {
            id: 'build',
            name: 'Development & governance',
            personas: [
              {
                who: 'Data engineer',
                does: 'Configure data connections, manage the logical data model, relationships, semantic definitions and data quality. Validate that metrics return accurate, consistent results.',
              },
              {
                who: 'Analytics engineer / BI developer',
                does: 'Create standardized dashboards, reusable templates and reporting assets. Manage analytics as code: version control, testing and deployment from DEV to PROD.',
              },
            ],
          },
          {
            id: 'admin',
            name: 'Platform administration',
            personas: [
              {
                who: 'Platform admin',
                does: 'Manage organizations, workspaces, multitenancy, tenant provisioning, roles, permissions and platform configuration.',
              },
              {
                who: 'AI admin',
                does: 'Manage AI Hub, AI agents and AI configuration, access to AI capabilities, and its governance.',
              },
            ],
          },
        ]}
      />
    </DiagramLayout>
  )
}
