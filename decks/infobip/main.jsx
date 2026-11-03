import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../shared/deck.css'
import '../../shared/slides.css'
import '../../shared/plane.css'
// The slides come from these decks, so their styles do too: the Mastercard
// deck's as it loads them (the ASP pitch's, the ASP New Pitch's, its own),
// then Vitol's, then the webinar's. Vitol's began as a copy of the ASP New
// Pitch's and comes after it, so its own changes to that deck's rules win
// on its slide here as they do there; a change it makes to a rule the
// Mastercard slides use reaches them too, so check them after one.
import '../asp-pitch/styles.css'
import '../asp-pitch-v2/styles.css'
import '../mastercard/styles.css'
import '../vitol/styles.css'
import '../webinar/styles.css'
import Deck from '../../shared/Deck.jsx'
import slides from './slides/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
)
