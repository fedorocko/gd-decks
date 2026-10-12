import Title from './Title.jsx'
import S11Quote from '../../offsite/slides/S11Quote.jsx'
import S12Pillars from '../../offsite/slides/S12Pillars.jsx'
import S13Launch from '../../offsite/slides/S13Launch.jsx'
import S25Why from '../../offsite/slides/S25Why.jsx'

// This deck has no speaker notes.
delete S11Quote.notes
delete S12Pillars.notes
delete S13Launch.notes

/** Presentation order. */
const slides = [Title, S11Quote, S12Pillars, S13Launch, S25Why]

export default slides
