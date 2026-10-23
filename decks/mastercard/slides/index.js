// The Mastercard deck. Its own slides are in this folder; the rest are the
// ASP pitch's and the ASP New Pitch's, imported from their folders as they
// are, so they stay in step with them. To change one for Mastercard alone,
// copy it into this folder first.
import S13Protect from '../../asp-pitch-v2/slides/S05Protect.jsx'
import S14Inference from '../../asp-pitch-v2/slides/S06Inference.jsx'
import S01Title from './S01Title.jsx'
import S02Innovation from './S02Innovation.jsx'
import S03Readiness from './S03Readiness.jsx'
import S04Offer from './S04Offer.jsx'
import S05Built from './S05Built.jsx'
import S06Clients from './S06Clients.jsx'
import S07Products from './S07Products.jsx'
import S08Answer from './S08Answer.jsx'
import S09Language from './S09Language.jsx'
import S10Pillars from './S10Pillars.jsx'
import S11Management from './S11Management.jsx'
import S12Efficiency from './S12Efficiency.jsx'
import S15Why from './S15Why.jsx'

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  S01Title,
  S02Innovation,
  // the ASP pitch's slide 4, copied
  S03Readiness,
  S04Offer,
  S05Built,
  S07Products,
  S06Clients,
  // the ASP pitch's slide 5, copied
  S08Answer,
  S09Language,
  // the ASP New Pitch's slides 6 and 7, copied
  S10Pillars,
  S11Management,
  // the ASP pitch's slide 8, copied
  S12Efficiency,
  // the ASP New Pitch's slides 8, 9 and 11, the last copied
  S13Protect,
  S14Inference,
  S15Why,
]

export default slides
