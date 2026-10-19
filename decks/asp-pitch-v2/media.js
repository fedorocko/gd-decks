/**
 * Slide media, each behind its own column (layouts/PanelsLayout.jsx and
 * PlaneLayout.jsx). Drop the file into `public/media/` and point `src` at it;
 * while `src` is null the column shows a labelled placeholder instead.
 */
const media = {
  // Slide 1 (layouts/PlaneLayout.jsx). Stills of two pillar clips, taken at
  // 2.5 s: the code from the offsite deck's slide 15, the server racks from
  // the ASP pitch's slide 8. Portrait, 720 × 1280, like the clips.
  stillCode: { src: '/media/pil-1-still.jpg', label: 'Still — code on a screen' },
  stillServers: { src: '/media/pil-3-still.jpg', label: 'Still — server racks' },
  // Slide 2. The ASP pitch's case study photos. Landscape, and Datev's and
  // Boozt's are small (600 × 401, 487 × 410), so filling a portrait column
  // blows them up by half again: soft, but the scrim over them hides most of
  // that.
  datev: { src: '/media/datev.jpeg', label: 'Photo — Datev office' },
  mastercard: { src: '/media/mastercard.webp', label: 'Photo — Mastercard office' },
  boozt: { src: '/media/boozt.jpeg', label: 'Photo — Boozt office' },
  // Slide 3. Not chosen yet.
  surveyStudio: { src: null, label: 'Image — Survey Studio' },
  aiPublisher: { src: null, label: 'Image — AI Publisher' },
  signalsEngine: { src: null, label: 'Image — Signals Engine' },
  marketPulse: { src: null, label: 'Image — Market Pulse' },
  // Slide 4 (components/Tree.jsx). The solution and four clients' copies of
  // it, each a 16 : 9 node of the tree. Not in yet.
  tenantSolution: { src: null, label: 'Image — the solution' },
  tenantA: { src: null, label: 'Image — Client A' },
  tenantB: { src: null, label: 'Image — Client B' },
  tenantC: { src: null, label: 'Image — Client C' },
  tenantD: { src: null, label: 'Image — Client D' },
}

export default media
