import { createElement } from 'react'
import { personas } from '../demo.js'
import {
  GapsLayout,
  IntroLayout,
  NeedsLayout,
  StoryLayout,
} from '../layouts/PersonaLayouts.jsx'

/**
 * The demo after slide 7: three slides to each persona in demo.js, in its
 * order (layouts/PersonaLayouts.jsx), then the requirements none of them
 * shows yet (requirements.js).
 */
const slide = (Layout, persona) => () => createElement(Layout, { persona })

const demo = [
  ...personas.flatMap((persona) => [
    slide(IntroLayout, persona),
    slide(StoryLayout, persona),
    slide(NeedsLayout, persona),
  ]),
  () => createElement(GapsLayout),
]

export default demo
