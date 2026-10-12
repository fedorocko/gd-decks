import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../shared/deck.css'
import '../../shared/slides.css'
import '../../shared/schema.css'
import '../offsite/styles.css'
import Deck from '../../shared/Deck.jsx'
import slides from './slides/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
)
