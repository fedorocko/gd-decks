import { createElement } from 'react'
import { personas } from '../demo.js'
import {
  IntroLayout,
  NeedsLayout,
  StoryLayout,
} from '../layouts/PersonaLayouts.jsx'
import S04Tenants from './S04Tenants.jsx'

/**
 * The demo, from slide 7: three slides to each persona in demo.js, in its
 * order (layouts/PersonaLayouts.jsx), and any of the deck's own slides a
 * persona's story goes on to, between their story and their requirements.
 */
const slide = (Layout, persona) => () => createElement(Layout, { persona })

// the ASP New Pitch's multi-tenancy slide, for the admin's new desk
const more = { admin: [S04Tenants] }

const demo = personas.flatMap((persona) => [
  slide(IntroLayout, persona),
  slide(StoryLayout, persona),
  ...(more[persona.id] ?? []),
  slide(NeedsLayout, persona),
])

export default demo
