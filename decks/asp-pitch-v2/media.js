/**
 * Slide media, each behind its own column (layouts/PanelsLayout.jsx and
 * ../../shared/PlaneLayout.jsx). Drop the file into `public/media/` and
 * point `src` at it; while `src` is null the column shows a labelled
 * placeholder instead.
 */
const tenancy = (page) => `/media/multitenancy/${page}.png`

const media = {
  // Slide 1 (shared/PlaneLayout.jsx). Stills of two pillar clips, taken at
  // 2.5 s: the code from the offsite deck's slide 15, the server racks from
  // the ASP pitch's slide 8. Portrait, 720 × 1280, like the clips.
  stillCode: { src: '/media/pil-1-still.jpg', label: 'Still — code on a screen' },
  stillServers: { src: '/media/pil-3-still.jpg', label: 'Still — server racks' },
  // Slide 2. The ASP pitch's case study photos. Landscape, and Datev's and
  // Boozt's are small (600 × 401, 487 × 410), so filling a portrait column
  // blows them up by half again: soft, but the scrim over them hides most of
  // that.
  datev: { src: '/media/datev.jpeg', label: 'Photo — Datev office' },
  paymentsNetwork: { src: '/media/payments-network.webp', label: 'Photo — Payments Network office' },
  boozt: { src: '/media/boozt.jpeg', label: 'Photo — Boozt office' },
  // Slide 3. A screenshot of each product, landscape, about 1.6 : 1, shown
  // whole at the top of its panel. Survey Studio's and Signals Engine's are
  // frames of their demo videos, the video's caption burned in at the foot:
  // `zoom` crops in from `focus` just far enough to leave it out.
  // from a little in from the left: the player's back button left out too
  surveyStudio: {
    src: '/media/survey.png',
    label: 'Screenshot — Survey Studio',
    zoom: 1.25,
    focus: '18% top',
  },
  aiPublisher: { src: '/media/ss-publisher.png', label: 'Screenshot — AI Publisher' },
  // from a little left of centre: the headline and the agent thread both in
  signalsEngine: {
    src: '/media/signals.png',
    label: 'Screenshot — Signals Engine',
    zoom: 1.15,
    focus: '30% top',
  },
  // Slide 4 (components/Tree.jsx). Two pages of one report: the solution's,
  // and two clients' copies of it, branded and filled with their own
  // numbers. Cut from multitenancy.png, a row of it to each node, 556 × 313.
  solutionOverview: { src: tenancy('solution-1'), label: 'Page — the solution' },
  solutionSummary: { src: tenancy('solution-2'), label: 'Page — the solution' },
  clientAOverview: { src: tenancy('client-a-1'), label: 'Page — Client A' },
  clientAReturns: { src: tenancy('client-a-2'), label: 'Page — Client A' },
  clientBOverview: { src: tenancy('client-b-1'), label: 'Page — Client B' },
  clientBReturns: { src: tenancy('client-b-2'), label: 'Page — Client B' },
  // Slide 4b, the management tools (components/Tools.jsx). Window captures,
  // 3024 × 1646, shown from their top left: Agent Builder's and Analytics
  // Catalog's are the shared diagram's. Evals is a side panel, 1064 × 1706,
  // so only its top shows: the question, its verdict and checks.
  toolMemory: { src: '/media/memory.png', label: 'Screenshot — Memory' },
  toolKnowledge: { src: '/media/know.png', label: 'Screenshot — Knowledge' },
  toolBuilder: { src: '/media/builder.png', label: 'Screenshot — Agent Builder' },
  toolCatalog: { src: '/media/catalog.png', label: 'Screenshot — Analytics Catalog' },
  toolObservability: { src: '/media/observ.png', label: 'Screenshot — Observability' },
  toolEvals: { src: '/media/evals.png', label: 'Screenshot — Evals' },
}

export default media
