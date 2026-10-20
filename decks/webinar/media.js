/**
 * Slide media, kept in `public/media/webinar/`. Most of it was taken from
 * the April 2026 webinar's deck (AI Skills). A slot set to null is still to
 * come: a striped placeholder holds its place (components/Img.jsx).
 */
const at = (file) => `/media/webinar/${file}`

const media = {
  // Slides 1 and 12. The name, white on transparent, 1024 × 184.
  wordmark: at('gooddata-ai.png'),
  // Slides 1, 7 and 12: the original's backgrounds, cut down to the art on
  // their right, the whole height of the slide. Their near-black ground is
  // made transparent, so only the rims, the mark and the glow lie over the
  // deck's own ground.
  artCircles: at('art-circles.webp'),
  artMark: at('art-mark.webp'),
  // Slide 2. Round cut-outs, a lime rim on their edge: each person in grey
  // on an olive disc. Peter's is 275 × 275, from the April deck. Michal's
  // is 550 × 550, made from his studio photo (speaker-michal.png, kept as
  // supplied): cut from its ground, then set the same way.
  speakerPeter: at('speaker-peter.png'),
  speakerMichal: at('speaker-michal-round.png'),
  // Slide 3. Lime line icons on black discs, 200 × 200.
  iconMuted: at('icon-muted.png'),
  iconQuestions: at('icon-questions.png'),
  iconRecording: at('icon-recording.png'),
  // Slide 4. The ASP New Pitch's stills, kept with its media in public/media/
  // and shared from there: code on a screen, and server racks. Portrait,
  // 720 × 1280.
  stillCode: '/media/pil-1-still.jpg',
  stillServers: '/media/pil-3-still.jpg',
  // Slide 5. The investors, dark on transparent: shown white (styles.css).
  fundA16z: at('fund-a16z.png'),
  fundGeneralCatalyst: at('fund-general-catalyst.png'),
  fundIntelCapital: at('fund-intel-capital.png'),
  // Slide 6. Gartner's name, white; the TrustRadius and G2 badges in their
  // own colours.
  badgeGartner: at('badge-gartner.png'),
  badgeTrustradius: at('badge-trustradius.png'),
  badgeG2: at('badge-g2.png'),
  // Slide 9. Screenshots of the two, 3024 × 1646 window captures, framed at
  // their own shape so nothing at their edges is cut: the co-pilot's chat
  // runs down the right side of its window.
  shotCopilot: at('screenshot-2026-10-19-10-08-20.png'),
  shotPublisher: at('screenshot-2026-10-19-10-15-08.png'),
}

export default media
