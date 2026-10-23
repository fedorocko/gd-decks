import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../shared/deck.css'
import '../../shared/slides.css'
import '../../shared/plane.css'
// Some slides come from these two decks as they are, so their styles do
// too; this deck's own slides are built on the ASP New Pitch's.
import '../asp-pitch/styles.css'
import '../asp-pitch-v2/styles.css'
import './styles.css'
import Deck from '../../shared/Deck.jsx'
import slides from './slides/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
)
