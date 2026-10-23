/**
 * The media of this deck's own slides (layouts/PanelsLayout.jsx and the
 * components). Drop the file into `public/media/` and point `src` at it;
 * while `src` is null a labelled placeholder holds its place. The slides
 * this deck takes from other decks keep theirs.
 */
const media = {
  // Slide 2. The ASP pitch's pillar clips, portrait, five seconds, dimmed
  // behind the columns and played in turn, once.
  clipMonetize: { src: '/media/pil-4.mp4', kind: 'video', label: 'Video — a glowing model city' },
  clipAutomate: { src: '/media/pil-1.mp4', kind: 'video', label: 'Video — code on a screen' },
  clipRebuild: { src: '/media/pil-2.mp4', kind: 'video', label: 'Video — server racks' },
  // Slide 4. Stills of two pillar clips, behind the plane's two cards, as on
  // the ASP New Pitch's slide 2.
  stillCode: { src: '/media/pil-1-still.jpg', label: 'Still — code on a screen' },
  stillServers: { src: '/media/pil-3-still.jpg', label: 'Still — server racks' },
  // Slide 5. What we have built for Mastercard, in public/media/mc/: the
  // assistant's start screen, padded with white top and bottom to 16 : 10
  // so its suggestions stay whole (from mc1.png); a report's AI summary,
  // shown from a little above its middle so the summary is whole (mc3.png);
  // the assistant's chart creator saving to a dashboard, the caption round
  // the capture cut off (from mc2.png).
  builtA: { src: '/media/mc/assistant.png', label: 'Screenshot — AI Assistant' },
  builtB: {
    src: '/media/mc/mc3.png',
    label: 'Screenshot — AI Summaries',
    focus: '50% 75%',
  },
  builtC: { src: '/media/mc/copilot.png', label: 'Screenshot — Dashboard Builder Copilot' },
  // Slide 6. Two of the case studies' office photos.
  datev: { src: '/media/datev.jpeg', label: 'Photo — Datev office' },
  boozt: { src: '/media/boozt.jpeg', label: 'Photo — Boozt office' },
  // Slide 7. The products' screenshots, cropped as the ASP New Pitch crops
  // them: Survey Studio's and Signals Engine's leave out the caption their
  // demo video burned in at the foot.
  surveyStudio: {
    src: '/media/survey.png',
    label: 'Screenshot — Survey Studio',
    zoom: 1.25,
    focus: '18% top',
  },
  aiPublisher: { src: '/media/ss-publisher.png', label: 'Screenshot — AI Publisher' },
  signalsEngine: {
    src: '/media/signals.png',
    label: 'Screenshot — Signals Engine',
    zoom: 1.15,
    focus: '30% top',
  },
  // Slide 9. Analytics as code: the still of code on a screen from slide 4,
  // standing in for an IDE. Portrait, cropped to its middle.
  ide: { src: '/media/pil-1-still.jpg', label: 'IDE' },
}

export default media
