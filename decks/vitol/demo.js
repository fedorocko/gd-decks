/**
 * The demo: three tiers, the personas in each, and what each persona does.
 * Slide 3 (slides/S04Today.jsx) and the slides per persona from slide 7
 * (slides/demo.js) are all drawn from this list, so a change here reaches
 * every one of them.
 *
 * A persona:
 *   role     — what they do, shown in the accent
 *   access   — their permission level, a tag beside the role (optional)
 *   name     — made up, as is the face: photo, from public/
 *   story    — the business story, the claim of their journey slide
 *   journey  — the steps: [{ step, note? }]
 *   bonus    — beyond the journey: another way to the same end, or a step
 *              past it, in a box of its own under it (optional, as steps)
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
    access: 'View',
    name: 'Ingrid Vos',
    photo: '/media/vitol/desk-lead.jpg',
    story: 'Hear about a change first, understand it in seconds with AI, act on it in an app built for your desk.',
    journey: [
      {
        step: 'Gets an email alert about an unexpected change.',
        note: 'Or in Slack or Teams, or through any webhook.',
      },
      { step: 'Navigates to the existing dashboard.' },
      { step: 'Orientates quickly with AI Summary.' },
      { step: 'Explores the data and runs a key driver analysis.' },
    ],
    bonus: [{ step: 'Uses a purpose-built app for the desk and its workflow.' }],
    features: ['Automation framework', 'Dashboards', 'ML tools', 'SDK', 'Custom apps'],
  },
  {
    id: 'trader',
    tier: 'consume',
    role: 'Trader',
    name: 'Marco Ferreira',
    photo: '/media/vitol/trader.jpg',
    story: 'Understand and decide fast, just by asking AI in plain words. No coding needed.',
    journey: [
      { step: 'Receives a new tender and has to decide whether to accept it.' },
      { step: 'Opens AI Assistant and asks it to pull the data.' },
      { step: 'Asks for a break-down.' },
      { step: 'Runs a what-if analysis.' },
      { step: 'Makes the decision.' },
    ],
    bonus: [
      {
        step: 'Asks Claude, connected over MCP, to pull the data into a new Excel sheet and builds the model there.',
      },
    ],
    features: [
      'AI Assistant',
      'AI Skills',
      'MCP',
      'AI Memory',
      'AI Knowledge',
      'Personalization',
      'AI Governance',
    ],
  },
  {
    id: 'business-analyst',
    tier: 'consume',
    role: 'Business Analyst',
    name: 'Elena Rossi',
    photo: '/media/vitol/business-analyst.jpg',
    story: 'Turn a trader’s question into a governed dashboard and deck, without waiting on IT.',
    journey: [
      { step: 'A trader asks for a new analysis.' },
      { step: 'Uses semantic search to understand what is available.' },
      { step: 'Prototypes with Dashboard Copilot.' },
      { step: 'Refines and polishes with drag & drop.' },
      { step: 'Shares it with the trader.' },
    ],
    bonus: [
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
    story: 'Go beyond the dashboard: dig into data with Python, and put the results back where the desk can use them.',
    journey: [
      { step: 'The desk lead asks for contracts where P&L does not add up.' },
      { step: 'Uses Data Compass to understand data semantics, metadata and lineage.' },
      { step: 'Pulls the data into a Python notebook with the GoodData SDK.' },
      { step: 'Uses AI-assisted coding to spot a trader pattern or outliers.' },
      { step: 'Gives the desk the list of contracts to review.' },
    ],
    bonus: [{ step: 'Publishes the results back to GoodData with the SDK.' }],
    features: ['Data Catalog', 'GoodPandas', 'Python SDK'],
  },
  {
    id: 'developer',
    tier: 'build',
    role: 'Data & Analytics Developer',
    name: 'Sofia Marín',
    photo: '/media/vitol/developer.jpg',
    story: 'Ship analytics like software: every change versioned, reviewed, tested and released from DEV to PROD.',
    journey: [
      { step: 'A business analyst hands over a new prototype in DEV.' },
      { step: 'Reviews what is new or changed in Data Compass.' },
      { step: 'Runs the tests and evaluations.' },
      { step: 'Deploys to PROD with a Git action.' },
      { step: 'Monitors usage, errors and adoption.' },
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
      { step: 'Creates a new child workspace and sets its workspace filters.' },
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

