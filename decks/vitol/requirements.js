/**
 * Vitol's requirements (Vitol Requirements.xlsx), each against the persona
 * whose demo shows it (demo.js). A persona's requirements slide lists theirs;
 * those no demo shows are on none.
 *
 *   id      — Vitol's
 *   name    — short, for the slide
 *   text    — Vitol's own words, for reference
 *   shownBy — the id of the persona whose demo shows it, a list of them
 *             where more than one does, or null
 *   note    — a word on how it is shown, beside its name (optional)
 */
export const requirements = [
  {
    id: 'BR-CON-01',
    name: 'Simple for business users, extensible for technical users',
    text: 'Cross-domain analysis, data consumption and exploration must feel simple for non-technical users such as brokers and traders while remaining flexible and extensible for technical users such as analysts and desk developers',
    shownBy: 'desk-lead',
  },
  {
    id: 'BR-CON-02',
    name: 'Lineage, code-first and LLM access for desk analysts',
    text: 'Lineage + code first / all as code + LLM access for analysts on the desk',
    shownBy: 'technical-analyst',
  },
  {
    id: 'BR-CON-03',
    name: 'Visualisation components for custom Python dashboards',
    text: 'Nice to Have: Visualisation components that could be integrated into custom python dashboards',
    shownBy: 'technical-analyst',
  },
  {
    id: 'BR-CON-04',
    name: 'Large data access, e.g. 100M rows for backtesting',
    text: 'Supports large data access (ie: read 100m rows to backtest a trading model)',
    shownBy: null,
  },
  {
    id: 'BR-CON-05',
    name: 'Surface test results, incidents, data quality and errors',
    text: 'Surfaces test results, known incidents, data quality test results, errors',
    shownBy: 'developer',
  },
  {
    id: 'BR-CON-06',
    name: 'Entra ID authentication pushdown',
    text: 'EntraID authentication pushdown',
    shownBy: 'admin',
    note: 'Tested',
  },
  {
    id: 'BR-CON-07',
    name: 'Ontology to guide AI agents',
    text: 'COULD: Support ontology to help guide AI agent',
    shownBy: 'admin',
  },
  {
    id: 'BR-CON-08',
    name: 'From AI question to chart, pivot table and dashboard',
    text: 'Deliver a seamless experience from AI Question producing a chart, into a pivot table the user can work on, and onwards to an asset to be added on a dashboard',
    shownBy: 'business-analyst',
  },
  {
    id: 'BR-CON-09',
    name: 'AI-assisted dashboard development',
    text: 'AI assisted dashboard development',
    shownBy: 'business-analyst',
  },
  {
    id: 'BR-CON-10',
    name: 'Full MCP integration, MS Teams optional',
    text: 'Full MCP integration; COULD integrate with MSTeams',
    shownBy: 'trader',
  },
  {
    id: 'BR-CON-11',
    name: 'Eager fetch: polling or push on data changes',
    text: 'Supports some form of "eager fetch" (ie: polling every second to process changes ASAP, or "push" mechanism)',
    shownBy: null,
  },
  {
    id: 'BR-CON-12',
    name: 'AI grounded in the semantic layer, no raw SQL',
    text: 'Enforce some level of deterministic grounding through a data dict + semantic layer; AI must use semantic layer, ie: not write SQL',
    shownBy: 'trader',
  },
  {
    id: 'BR-CON-13',
    name: 'Immediate answers and summaries in a few clicks',
    text: 'Easy to get an immediate answer on anything "simple enough", simple chart or summary with minimal clicks.',
    shownBy: 'desk-lead',
  },
  {
    id: 'BR-CON-14',
    name: 'Build and change analysis without Python or SQL',
    text: 'Easy to build and modify analysis without writing Python or SQL.',
    shownBy: 'business-analyst',
  },
  {
    id: 'BR-CON-15',
    name: 'Share an analysis without a formal production release',
    text: 'Allow users to share a small dashboard or analysis with another user or desk without requiring a formal production release.',
    shownBy: 'business-analyst',
  },
  {
    id: 'BR-CON-16',
    name: 'Develop and preview in isolation before publishing',
    text: 'Allow users to develop, test and preview reports and dashboards in an isolated or local environment before publishing.',
    shownBy: 'developer',
  },
  {
    id: 'BR-CON-17',
    name: 'Scheduled reports, sent by email and MS Teams',
    text: 'Support scheduled refresh, report generation and distribution, through common channels (email, MSTeams).',
    shownBy: 'desk-lead',
  },
  {
    id: 'BR-CON-18',
    name: 'Share and auto-refresh Python notebooks',
    text: 'Would allow business users to share and automatically refresh Python Notebooks',
    shownBy: 'technical-analyst',
  },
  {
    id: 'BR-GOV-01',
    name: 'Trust levels on data assets',
    text: 'Data assets should have trust levels associated so users understand the level of confidence they can put on any given metric/dataset (eg. Official, supported, desk, user, AI generated)',
    shownBy: ['technical-analyst', 'admin'],
  },
  {
    id: 'BR-GOV-02',
    name: 'Users only see the metadata they may see',
    text: 'Ensure users only discover or inspect metadata/semantic definitions they’re authorised to see',
    shownBy: 'admin',
  },
  {
    id: 'TR-CON-01',
    name: 'Governed semantic layer: KPIs defined once, reused everywhere',
    text: 'The platform should provide a governed semantic layer so KPIs are defined once and reused across tools.',
    shownBy: 'technical-analyst',
  },
  {
    id: 'TR-CON-02',
    name: 'Connectors to Power BI, Tableau and Looker',
    text: 'The semantic layer shall provide native or certified connectors to Power BI, Tableau and Looker or other majors BI tools',
    shownBy: null,
  },
  {
    id: 'TR-CON-03',
    name: 'All data and functionality exposed via APIs',
    text: 'The semantic layer should expose data and all functionalities via APIs to downstream applications.',
    shownBy: 'technical-analyst',
  },
  {
    id: 'TR-CON-04',
    name: 'Excel connectivity for business users',
    text: 'The platform shall provide Excel connectivity for business users.',
    shownBy: 'trader',
  },
  {
    id: 'TR-CON-05',
    name: 'ML workloads: feature engineering, training, deployment',
    text: 'The platform should support ML workloads (feature engineering, model training and deployment).',
    shownBy: null,
  },
  {
    id: 'TR-CON-06',
    name: 'AI and LLM use cases on governed enterprise data',
    text: 'The platform should support AI/LLM use cases on enterprise data (vector search, secure access to governed data).',
    shownBy: 'trader',
  },
  {
    id: 'TR-CON-07',
    name: 'Rich modelling: hierarchies, grain, joins, aggregation',
    text: 'Model business entities, dimensions, measures, hierarchies (incl. alternative hierarchies, role-playing dimensions), reusable calculations; define grain per entity/measure; model relationships (cardinality, joins); define aggregation behaviour (additive/semi-additive/non-additive) and time-based aggregation across grains',
    shownBy: 'developer',
  },
  {
    id: 'TR-CON-08',
    name: 'External AI agents, and Vitol’s own LLM',
    text: 'Integrate with external AI agents/dev tools (Codex, VitolGPT); use Vitol’s own LLM/proxy rather than a vendor-controlled model;',
    shownBy: 'admin',
  },
  {
    id: 'TR-CON-09',
    name: 'Show which metrics, filters and joins produced a result',
    text: 'Show which metrics/dimensions/filters/joins/calculations/assumptions produced a result; expose generated SQL/semantic layer plan',
    shownBy: 'technical-analyst',
  },
  {
    id: 'TR-CON-10',
    name: 'Desk-level definitions, promoted to enterprise under governance',
    text: 'Local desk scenarios/assumptions/metrics allowed without silently altering official definitions or source data; Isolate local/desk-level semantic assets within controlled boundaries, with a governed process to promote to matrix-wide/enterprise',
    shownBy: 'developer',
  },
  {
    id: 'TR-CON-11',
    name: 'Detect schema drift and broken relationships',
    text: 'Keep definitions synchronised with underlying DB structures; detect schema drift, missing fields, broken relationships, unavailable sources',
    shownBy: 'technical-analyst',
  },
  {
    id: 'TR-CON-12',
    name: 'Automated tests, incl. AI prompt regression tests',
    text: 'Automated tests for measures/joins/aggregation/filters; AI prompt-and-answer regression tests; independent per-domain testing to control duration/cost/impact',
    shownBy: 'admin',
  },
  {
    id: 'TR-CON-13',
    name: 'Pushdown to the database, low query overhead',
    text: 'Small overhead on query performance; scalable; Push filtering/joins/aggregations down to the database, avoid unnecessary data movement/duplication, translate into efficient MPP queries',
    shownBy: null,
  },
  {
    id: 'TR-CON-15',
    name: 'Everything as code, versioned in Git',
    text: 'All definitions stored in code/machine-readable exportable format; Git-based versioning, branching, comparison, rollback; full bi-directional code representation',
    shownBy: 'developer',
  },
  {
    id: 'TR-GOV-01',
    name: 'Searchable catalogue with glossary, SLA and ownership',
    text: 'Must have a unified, easily searchable and convenient data catalogue, with consistent Glossary, and document SLA, criticality, business ownership, when was last refreshed',
    shownBy: 'technical-analyst',
  },
  {
    id: 'TR-GOV-02',
    name: 'End-to-end, column-level lineage',
    text: 'The platform shall provide automated end-to-end lineage from source to report, at column level.',
    shownBy: 'technical-analyst',
  },
  {
    id: 'TR-GOV-04',
    name: 'Reference and master data management',
    text: 'The platform should support management of reference and master data (counterparties, commodities, legal entities, books).',
    shownBy: 'admin',
  },
  {
    id: 'TR-GOV-05',
    name: 'Audit trail of data changes and transformations',
    text: 'The platform shall keep an audit trail of data changes and transformations.',
    shownBy: null,
  },
  {
    id: 'TR-SEC-05',
    name: 'OAuth 2.0 / token auth for APIs and machines',
    text: 'The platform shall support OAuth 2.0 / token-based authentication for all programmatic, API and machine-to-machine communication.',
    shownBy: 'desk-lead',
  },
  {
    id: 'TR-SEC-04',
    name: 'SSO over SAML / OIDC, with SCIM provisioning',
    text: 'The platform shall integrate with the enterprise identity provider for single sign-on using open standards (SAML 2.0 and/or OIDC), including automated user lifecycle provisioning and de-provisioning (e.g. SCIM).',
    shownBy: null,
  },
  {
    id: 'TR-SEC-02',
    name: 'Strict segregation of DEV, TEST and PROD',
    text: 'The platform shall support strict segregation of development, test and production environments',
    shownBy: 'developer',
  },
  {
    id: 'TR-SEC-03',
    name: 'Break-glass admin account with hardware MFA',
    text: 'The platform shall allow a root / break-glass administrative account to be protected by hardware-based multi-factor authentication, with secure offline custody of credentials and alerting on every use.',
    shownBy: null,
  },
]

const showing = (r) => [r.shownBy ?? []].flat()

/** What a persona's demo shows, in the spreadsheet's order. */
export const shownBy = (persona) =>
  requirements.filter((r) => showing(r).includes(persona.id))
