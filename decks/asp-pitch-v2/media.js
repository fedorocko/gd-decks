/**
 * Slide media, each behind its own column (layouts/PanelsLayout.jsx and
 * PlaneLayout.jsx). Drop the file into `public/media/` and point `src` at it;
 * while `src` is null the column shows a labelled placeholder instead.
 */
const media = {
  // Slide 1 (layouts/PlaneLayout.jsx). Stills of two pillar clips, taken at
  // 2.5 s: the code from slide 4, the server racks from the ASP pitch's
  // slide 8. Portrait, 720 × 1280, like the clips.
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
  marketSignals: { src: null, label: 'Image — Market Signals' },
  surveyStudio: { src: null, label: 'Image — Survey Studio' },
  aiPublisher: { src: null, label: 'Image — AI Publisher' },
  // Slide 4. The offsite deck's pillar videos, the same files: portrait,
  // 9 : 16, five seconds. Played in turn, once each.
  pillarLanguage: {
    src: '/media/pil-1.mp4',
    kind: 'video',
    label: 'Video — code on a screen',
  },
  pillarCreativity: {
    src: '/media/pil-4.mp4',
    kind: 'video',
    label: 'Video — a glowing model city',
  },
}

export default media
