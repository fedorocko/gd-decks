import S00Title from './S00Title.jsx'
import S01Plane from './S01Plane.jsx'
import S02Cases from './S02Cases.jsx'
import S03Solutions from './S03Solutions.jsx'
import S04Open from './S04Open.jsx'
import S04Pillars from './S04Pillars.jsx'
import S04Today from './S04Today.jsx'
import demo from './demo.js'

/** Presentation order. Reorder here to reorder the deck. */
const slides = [
  S00Title,
  S01Plane,
  S02Cases,
  S03Solutions,
  S04Open,
  S04Pillars,
  S04Today,
  // three slides to each persona slide 7 names, then the requirements none
  // of them shows (demo.js)
  ...demo,
]

export default slides
