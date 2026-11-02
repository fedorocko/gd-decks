/**
 * The demo: three tiers, the personas in each, and what each persona does.
 * Slide 7 (slides/S04Today.jsx) and the three slides per persona after it
 * (slides/demo.js) are all drawn from this list, so a change here reaches
 * every one of them.
 *
 * A persona:
 *   role     — what they do, shown in the accent
 *   access   — their permission level, a tag beside the role (optional)
 *   name     — made up, as is the face: photo, from public/
 *   story    — the business story, the claim of their journey slide
 *   journey  — the steps: [{ step, note?, alt? }]; alt marks another way to
 *              the same end, drawn apart from the main path
 *   features — the GoodData.AI features the journey shows, a pill each in a
 *              column beside it; they are not tied to any one step
 *
 * Which of Vitol's requirements each demo shows is in requirements.js.
 */

export const tiers = [
  {
    id: 'consume',
    n: 1,
    name: 'Business Consumption & Self-Service',
    short: 'Consumption & self-service',
    text: 'How business users consume, explore, create and act on analytics.',
  },
  {
    id: 'build',
    n: 2,
    name: 'Analytics Development & Governance',
    short: 'Development & governance',
    text: 'How technical users discover data, build models, validate results and deliver production-ready analytics.',
  },
  {
    id: 'admin',
    n: 3,
    name: 'Platform & AI Administration',
    short: 'Platform & AI administration',
    text: 'How administrators manage security, governance, environments and AI capabilities.',
  },
]

export const personas = [
  // ---------------------------------------------------------------- tier 1
  {
    id: 'desk-lead',
    tier: 'consume',
    role: 'Desk Lead',
    kind: 'Business consumer',
    access: 'View',
    name: 'Ingrid Vos',
    photo: '/media/vitol/desk-lead.jpg',
    story: 'Monitor, understand and act.',
    journey: [
      { step: 'Gets an email alert about an unexpected change.' },
      { step: 'Opens the dashboard behind it.' },
      {
        step: 'Understands what happened: summary, exploration, key driver analysis.',
      },
      { step: 'Resolves it in a purpose-built app.' },
    ],
    features: ['Automation framework', 'Dashboards', 'ML tools', 'SDK & custom apps'],
  },
  {
    id: 'trader',
    tier: 'consume',
    role: 'Trader',
    name: 'Marco Ferreira',
    photo: '/media/vitol/trader.jpg',
    story: 'Understand and decide fast and effortlessly, with help from AI.',
    journey: [
      { step: 'Receives a new tender and has to decide whether to accept it.' },
      { step: 'Opens AI Assistant and asks it to pull the data.' },
      { step: 'Asks for a break-down.' },
      { step: 'Runs a what-if analysis.' },
      { step: 'Makes the decision.' },
      {
        step: 'Asks Claude, connected over MCP, to pull the data into a new Excel sheet and builds the model there.',
        alt: true,
      },
    ],
    features: ['AI Assistant', 'AI Skills: what-if', 'MCP'],
  },
  {
    id: 'business-analyst',
    tier: 'consume',
    role: 'Business Analyst',
    name: 'Elena Rossi',
    photo: '/media/vitol/business-analyst.jpg',
    story: 'Turn a trader’s question into a governed metric, dashboard and deck, without waiting on IT.',
    journey: [
      { step: 'A trader asks for a new analysis.' },
      { step: 'Checks the catalog for what is already there.' },
      { step: 'Creates a new metric and dashboard with AI.' },
      { step: 'Shares it with the trader.' },
      {
        step: 'The trader wants it for others too: AI Publisher turns it into a narrative deck.',
      },
    ],
    features: ['AI Copilot', 'AI Publisher', 'Analytics Catalog', 'Semantic Model'],
  },
  // ---------------------------------------------------------------- tier 2
  {
    id: 'technical-analyst',
    tier: 'build',
    role: 'Technical Analyst',
    name: 'Daniel Tan',
    photo: '/media/vitol/technical-analyst.jpg',
    story: 'Go beyond the dashboard: dig in with Python on governed data, and put the results back where the desk can use them.',
    journey: [
      {
        step: 'A business analyst spots an unusual profitability pattern that needs exploring.',
      },
      {
        step: 'Uses Data Catalog and Data Compass to understand its semantics, lineage, ontology and metadata.',
      },
      { step: 'Opens a Python notebook and pulls the data in with the GoodData SDK.' },
      { step: 'Writes the analysis.' },
      { step: 'Publishes the results back to GoodData with the SDK.' },
    ],
    features: ['Data Catalog', 'GoodPandas', 'Python SDK'],
  },
  {
    id: 'developer',
    tier: 'build',
    role: 'Data & Analytics Developer',
    name: 'Sofia Marín',
    photo: '/media/vitol/developer.jpg',
    story: 'The prototype is valuable. How do we make it available to other desks without losing governance?',
    journey: [
      {
        step: 'Defines models, reusable metrics and dashboard templates, ready to share.',
        note: 'A profitability metric is defined once, and reused by dashboards, AI Assistant, Python and embedded apps.',
      },
      { step: 'Works in code, not the UI: in Data Compass or VS Code.' },
      {
        step: 'Releases through DEV → TEST → PROD.',
        note: 'Desks develop new definitions locally; shared production assets go through review and release.',
      },
    ],
    features: ['Analytics as code', 'Version control'],
  },
  // ---------------------------------------------------------------- tier 3
  {
    id: 'admin',
    tier: 'admin',
    role: 'Platform & AI Admin',
    name: 'Thomas Becker',
    photo: '/media/vitol/admin.jpg',
    story: 'Different desks need different data access and AI capabilities, without duplicating the platform.',
    journey: [
      { step: 'A new desk comes on board, with its own workspace on the shared platform.' },
      { step: 'Sets who sees which data, down to each desk and user.' },
      { step: 'Decides which agents, skills and models each desk gets.' },
      { step: 'Governs what the agents know and remember.' },
    ],
    features: [
      'Multitenancy',
      'Permissions',
      'Data filters',
      'AI Hub',
      'Agent Builder',
      'Knowledge',
      'Memory',
    ],
  },
]

export const tierOf = (persona) => tiers.find((t) => t.id === persona.tier)

/** The persona's role, with what kind of user they are where it adds to it. */
export const roleOf = ({ role, kind }) => (kind ? `${role} / ${kind}` : role)
