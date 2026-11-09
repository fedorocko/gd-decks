import { RUN } from '../flex/states.js'

// Slides 24 on: the schema built up, recoloured and resolved, one slide per
// step in flex/states.js. The schema and its title are the deck's overlay
// (components/Flex.jsx), so these slides show nothing of their own and the
// schema moves from each one's state into the next's.
const S24Flexibility = RUN.map((state) => {
  const Step = () => null
  Step.flex = state
  return Step
})

export default S24Flexibility
