import S00Title from './S00Title.jsx'
import S01Plane from './S01Plane.jsx'
import S03Solutions from './S03Solutions.jsx'
import S04Open from './S04Open.jsx'
import S04Pillars from './S04Pillars.jsx'
import S04Today from './S04Today.jsx'
import demo from './demo.js'

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  S00Title,
  S01Plane,
  S04Open,
  S03Solutions,
  S04Pillars,
  S04Today,
  // three slides to each persona slide 6 names, and the multi-tenancy
  // slide in the admin's (demo.js)
  ...demo,
]

export default slides
