// The BARC Conference deck. Slides 7, 13, 18 and 53 are copies of other
// decks' slides, and slides 2, 9 and 54 take parts of theirs: copied into
// this folder, so a change to those decks does not reach this one.
import S01Title from './S01Title.jsx'
import S02WhoWeAre from './S02WhoWeAre.jsx'
import S03WhoWeServe from './S03WhoWeServe.jsx'
import S04Speaker from './S04Speaker.jsx'
import S05NotHear from './S05NotHear.jsx'
import S06Goals from './S06Goals.jsx'
import S07BasedOn from './S07BasedOn.jsx'
import S08Decisions from './S08Decisions.jsx'
import S09BuildBuy from './S09BuildBuy.jsx'
import S10Triangle from './S10Triangle.jsx'
import S11Freedom from './S11Freedom.jsx'
import S12LimitedFlexible from './S12LimitedFlexible.jsx'
import S13Dashboards from './S13Dashboards.jsx'
import S14TriangleFlexibility from './S14TriangleFlexibility.jsx'
import S15Sacrifice from './S15Sacrifice.jsx'
import S16TriangleSecurity from './S16TriangleSecurity.jsx'
import S17Impact from './S17Impact.jsx'
import S18Innovation from './S18Innovation.jsx'
import S19ImpactCosts from './S19ImpactCosts.jsx'
import S20TrianglePnl from './S20TrianglePnl.jsx'
import S21Advice from './S21Advice.jsx'
import S22StartEnabling from './S22StartEnabling.jsx'
import S23StartTightening from './S23StartTightening.jsx'
import S24Flexibility from './S24Flexibility.jsx'
import S30Challenges from './S30Challenges.jsx'
import S37Address from './S37Address.jsx'
import S50WhatItTakes from './S50WhatItTakes.jsx'
import S51WhatWeDo from './S51WhatWeDo.jsx'
import S52BasedOnAgain from './S52BasedOnAgain.jsx'
import S53Pillars from './S53Pillars.jsx'
import S54Thanks from './S54Thanks.jsx'

// Where the schema's run turns (flex/states.js): from building it up to what
// it costs, where slide 30 stands, and from that to how each is answered,
// where slide 37 does.
const step = (name) => S24Flexibility.findIndex((Step) => Step.flex === name)
const RISKS = step('llmRisk')
const ANSWERS = step('llmFocus')

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  S01Title,
  // the webinar's investors, from its slide 5
  S02WhoWeAre,
  S03WhoWeServe,
  // the speaker, in the webinar's round photo
  S04Speaker,
  S05NotHear,
  S06Goals,
  // the Mastercard deck's slide 7, copied
  S07BasedOn,
  S08Decisions,
  // the offsite deck's slide 6, in its words
  S09BuildBuy,
  // the triangle, its corners named one at a time on slides 14, 16 and 20
  S10Triangle,
  S11Freedom,
  S12LimitedFlexible,
  // the offsite deck's slide 11, copied
  S13Dashboards,
  S14TriangleFlexibility,
  S15Sacrifice,
  S16TriangleSecurity,
  S17Impact,
  // the Mastercard deck's slide 2, copied
  S18Innovation,
  S19ImpactCosts,
  S20TrianglePnl,
  S21Advice,
  // where to start, then where to go from there
  S22StartEnabling,
  S23StartTightening,
  // the schema, a slide per step of flex/states.js: built up on slides
  // 24–29, what it costs on 31–36, and how each is answered on 38–49
  ...S24Flexibility.slice(0, RISKS),
  S30Challenges,
  ...S24Flexibility.slice(RISKS, ANSWERS),
  S37Address,
  ...S24Flexibility.slice(ANSWERS),
  S50WhatItTakes,
  // slide 50 again, GoodData.AI's logo over it
  S51WhatWeDo,
  // slide 7 again, the same slide
  S52BasedOnAgain,
  // the Mastercard deck's slide 3, copied
  S53Pillars,
  // the webinar's slide 12, copied, its events made the one ask
  S54Thanks,
]

export default slides
