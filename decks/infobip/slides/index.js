// The Infobip deck: slides from three other decks, imported from their
// folders as they are, so they stay in step with them. To change one for
// Infobip alone, copy it into this folder first.
import S05Protect from '../../asp-pitch-v2/slides/S05Protect.jsx'
import S06Inference from '../../asp-pitch-v2/slides/S06Inference.jsx'
import S01Answer from '../../mastercard/slides/S08Answer.jsx'
import S02Pillars from '../../mastercard/slides/S10Pillars.jsx'
import S04Management from '../../mastercard/slides/S11Management.jsx'
import S03Solutions from '../../vitol/slides/S03Solutions.jsx'
import S07Agenda from '../../webinar/slides/S07Agenda.jsx'
import S08Builders from '../../webinar/slides/S08Builders.jsx'
import S09Interfaces from '../../webinar/slides/S09Interfaces.jsx'
import S10Copilot from '../../webinar/slides/S10Copilot.jsx'
import S11Publisher from '../../webinar/slides/S11Publisher.jsx'

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  // the Mastercard deck's slides 8 and 10
  S01Answer,
  S02Pillars,
  // the Vitol deck's slide 4
  S03Solutions,
  // the Mastercard deck's slides 11, 13 and 14, the last two the ASP New
  // Pitch's
  S04Management,
  S05Protect,
  S06Inference,
  // the webinar's slides 7–11
  S07Agenda,
  S08Builders,
  S09Interfaces,
  S10Copilot,
  S11Publisher,
]

export default slides
