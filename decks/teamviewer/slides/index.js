// The TeamViewer deck: its own title and agenda, then slides from two other
// decks, imported from their folders as they are, so they stay in step with
// them. To change one for TeamViewer alone, copy it into this folder first.
import S08Pillars from '../../asp-pitch-v2/slides/S04Pillars.jsx'
import S09Management from '../../asp-pitch-v2/slides/S04Management.jsx'
import S10Protect from '../../asp-pitch-v2/slides/S05Protect.jsx'
import S11Inference from '../../asp-pitch-v2/slides/S06Inference.jsx'
import S12Compute from '../../asp-pitch-v2/slides/S06Compute.jsx'
import S06Builders from '../../webinar/slides/S08Builders.jsx'
import S03Interfaces from '../../webinar/slides/S09Interfaces.jsx'
import S04Copilot from '../../webinar/slides/S10Copilot.jsx'
import S05Publisher from '../../webinar/slides/S11Publisher.jsx'
import S01Title from './S01Title.jsx'
import S02Agenda from './S02Agenda.jsx'
import S07Demos from './S07Demos.jsx'

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  S01Title,
  S02Agenda,
  // the webinar's slides 9–11, then its 8
  S03Interfaces,
  S04Copilot,
  S05Publisher,
  S06Builders,
  S07Demos,
  // the ASP New Pitch's slides 6–10
  S08Pillars,
  S09Management,
  S10Protect,
  S11Inference,
  S12Compute,
]

export default slides
