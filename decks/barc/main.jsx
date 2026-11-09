import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../shared/deck.css'
import '../../shared/slides.css'
import './styles.css'
import Deck from '../../shared/Deck.jsx'
import Flex from './components/Flex.jsx'
import slides from './slides/index.js'

// The schema of how Claude gets its flexibility is the deck's overlay, so it
// survives the slide change and moves into the next slide's state instead of
// being redrawn: slides that build it up in turn each name a state in
// flex/states.js.
const overlay = (Slide) => Slide.flex && <Flex state={Slide.flex} />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deck slides={slides} overlay={overlay} />
  </StrictMode>,
)
