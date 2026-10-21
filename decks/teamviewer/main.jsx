import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../shared/deck.css'
import '../../shared/slides.css'
import '../../shared/plane.css'
// The slides come from these two decks, so their styles do too.
import '../webinar/styles.css'
import '../asp-pitch-v2/styles.css'
import Deck from '../../shared/Deck.jsx'
import slides from './slides/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
)
