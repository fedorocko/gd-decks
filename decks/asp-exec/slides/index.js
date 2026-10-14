import Title from './Title.jsx'
import S14Quote from '../../offsite/slides/S14Quote.jsx'
import S15Pillars from '../../offsite/slides/S15Pillars.jsx'
import S16Launch from '../../offsite/slides/S16Launch.jsx'
import S28Why from '../../offsite/slides/S28Why.jsx'

// This deck has no speaker notes.
delete S14Quote.notes
delete S15Pillars.notes
delete S16Launch.notes

/** Presentation order. */
const slides = [Title, S14Quote, S15Pillars, S16Launch, S28Why]

export default slides
