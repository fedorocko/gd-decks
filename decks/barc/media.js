/**
 * Slide media. Drop the file into `public/media/` and point `src` at it;
 * while `src` is null a placeholder holds its place, captioned with `label`.
 * The slides copied from other decks brought their entries with them, so
 * these point at the same files but no longer depend on those decks.
 */
const media = {
  // Slide 1. The webinar's cover: the name, white on transparent, and its
  // circles, the slide's height on its right.
  wordmark: { src: '/media/webinar/gooddata-ai.png', label: 'Logo — GoodData.AI' },
  circles: { src: '/media/webinar/art-circles.webp', label: 'Art — circles' },
  // Slide 2. The investors, from the webinar's slide 5: dark on
  // transparent, shown white (styles.css).
  fundA16z: { src: '/media/webinar/fund-a16z.png', label: 'a16z' },
  fundIntelCapital: { src: '/media/webinar/fund-intel-capital.png', label: 'Intel Capital' },
  fundGeneralCatalyst: {
    src: '/media/webinar/fund-general-catalyst.png',
    label: 'General Catalyst',
  },
  // Slide 3. The customers' logos, white on transparent, as the slide shows
  // every logo white. Six were cut from the June booth leaflet, as wide as
  // the leaflet had them (about 250px); the other four were made white from
  // the brands' own files, Mastercard's circles each keeping a tone of its
  // own so the overlap still shows.
  logoDatev: { src: '/media/barc/logo-datev.png', label: 'Datev' },
  logoMastercard: { src: '/media/barc/logo-mastercard.png', label: 'Mastercard' },
  logoBlackrock: { src: '/media/barc/logo-blackrock.png', label: 'BlackRock' },
  logoBroadridge: { src: '/media/barc/logo-broadridge.png', label: 'Broadridge' },
  logoAlasco: { src: '/media/barc/logo-alasco.png', label: 'Alasco' },
  logoPayrails: { src: '/media/barc/logo-payrails.png', label: 'Payrails' },
  logoAklamio: { src: '/media/barc/logo-aklamio.png', label: 'Aklamio' },
  logoBoozt: { src: '/media/barc/logo-boozt.png', label: 'Boozt' },
  logoMedifox: { src: '/media/barc/logo-medifox.png', label: 'Medifox DAN' },
  logoPlancraft: { src: '/media/barc/logo-plancraft.png', label: 'plancraft' },
  // Slide 4. The webinar's speaker photo, 275 × 275: already round, grey on
  // an olive disc with a lime rim.
  speakerPeter: { src: '/media/webinar/speaker-peter.png', label: 'Photo — Peter Fedoročko' },
  // Slide 7. The case study photos: the Mastercard deck's (its slide 7) and
  // the ASP New Pitch's (its slide 3).
  datev: { src: '/media/datev.jpeg', label: 'Photo — Datev office' },
  paymentsNetwork: {
    src: '/media/payments-network.webp',
    label: 'Photo — Payments Network office',
  },
  // Slide 9. The offsite deck's mark for Claude Code, set in the line.
  claudeCodeLogo: { src: '/media/claude-code-logo.png', label: 'Logo — Claude Code' },
  // Slide 12. Over each column, what it is reached through, all white on
  // transparent: the two business tools' logos, made white from their own
  // files, and the two assistants' marks, named beside them (Brand.jsx) —
  // Claude's the repo's own, shown white on the slide; ChatGPT's its white
  // knot, lifted off its green disc.
  logoSalesforce: { src: '/media/barc/logo-salesforce.png', label: 'Salesforce' },
  logoWorkday: { src: '/media/barc/logo-workday.png', label: 'Workday' },
  markClaude: { src: '/media/icon-claude.svg', label: 'Claude' },
  markChatgpt: { src: '/media/barc/logo-chatgpt.png', label: 'ChatGPT' },
  // Slide 13. The offsite deck's slide 11: Claude's dashboards, 1920 × 1080.
  claudeDashboards: {
    src: '/media/claude-dashboards.png',
    label: 'Screenshot — Claude dashboards',
  },
  // Slide 18. The Mastercard deck's slide 2: the ASP pitch's pillar clips,
  // portrait, five seconds, dimmed behind the columns and played in turn.
  clipMonetize: { src: '/media/pil-4.mp4', kind: 'video', label: 'Video — a glowing model city' },
  clipAutomate: { src: '/media/pil-1.mp4', kind: 'video', label: 'Video — code on a screen' },
  clipRebuild: { src: '/media/pil-2.mp4', kind: 'video', label: 'Video — server racks' },
}

export default media
