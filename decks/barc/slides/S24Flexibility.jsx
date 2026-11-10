import { RUN } from '../flex/states.js'

// Slides 24–29, 31–36 and 38–49: the schema built up, recoloured and
// resolved, one slide per step in flex/states.js. The schema and its title
// are the deck's overlay (components/Flex.jsx), so these slides show nothing
// of their own and the schema moves from each one's state into the next's.
// Slides 30 and 37, set between the parts in slides/index.js, take it off
// the stage, and it rises back in after each.
const S24Flexibility = RUN.map((state) => {
  const Step = () => null
  Step.flex = state
  return Step
})

export default S24Flexibility
