import S00Title from './S00Title.jsx'
import S01Plane from './S01Plane.jsx'
import S03Solutions from './S03Solutions.jsx'
import S04Open from './S04Open.jsx'
import S04Pillars from './S04Pillars.jsx'
import S04Today from './S04Today.jsx'
import S05Protect from './S05Protect.jsx'
import S06Compute from './S06Compute.jsx'
import S06Inference from './S06Inference.jsx'
import S08Thanks from './S08Thanks.jsx'
import demo from './demo.js'

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  S00Title,
  S01Plane,
  S04Today,
  S04Open,
  S04Pillars,
  S03Solutions,
  // three slides to each persona slide 3 names, and the multi-tenancy
  // slide in the admin's (demo.js)
  ...demo,
  // the local inference, as the TeamViewer deck's slides 10–12 show it
  S05Protect,
  S06Inference,
  S06Compute,
  S08Thanks,
]

export default slides
