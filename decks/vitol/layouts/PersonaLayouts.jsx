import Bonus from '../components/Bonus.jsx'
import Checklist from '../components/Checklist.jsx'
import Journey, { Features } from '../components/Journey.jsx'
import { Face, Roster, TierTag, Who } from '../components/Persona.jsx'
import { tierOf } from '../demo.js'
import { shownBy } from '../requirements.js'

/**
 * The three slides each persona in the demo gets (slides/demo.js), given
 * the persona from demo.js: who they are; their story and journey, with the
 * features it shows; and which of Vitol's requirements their demo shows.
 */

/** 1 — who they are: their tier, their role, their name and face. */
export function IntroLayout({ persona }) {
  const tier = tierOf(persona)

  return (
    <section className="slide slide--persona">
      <div className="intro">
        <div className="intro__text">
          <p className="eyebrow intro__tier">Tier {tier.n}</p>
          <p className="intro__tiername">{tier.name}</p>
          <p className="intro__tiertext">{tier.text}</p>
          <div className="intro__who">
            <p className="intro__role">
              {persona.role}
              {persona.access && <span className="intro__access">{persona.access}</span>}
            </p>
            <h2 className="intro__name">{persona.name}</h2>
          </div>
        </div>
        <Face persona={persona} size={460} className="intro__face" />
      </div>
      <Roster current={persona} />
    </section>
  )
}

/** 2 — their business story, as the claim, over their journey (and any
 *  bonus under it) and the features it shows, side by side. */
export function StoryLayout({ persona }) {
  return (
    <section className="slide slide--persona">
      <Head persona={persona} />
      <p className="eyebrow pslide__kicker">Business story</p>
      <h2 className="pslide__title pslide__title--story">{persona.story}</h2>
      <div className="pslide__body">
        <div className="pslide__path">
          <Journey steps={persona.journey} />
          {persona.bonus && <Bonus items={persona.bonus} />}
        </div>
        <Features features={persona.features} />
      </div>
    </section>
  )
}

/** 3 — which of Vitol's requirements their demo shows, ticked; down two
 *  columns once there are more than one fits. */
export function NeedsLayout({ persona }) {
  const items = shownBy(persona)

  return (
    <section className="slide slide--persona">
      <Head persona={persona} />
      <p className="eyebrow pslide__kicker">Requirements</p>
      <h2 className="pslide__title">What you asked for</h2>
      <Checklist items={items} columns={items.length > 6 ? 2 : 1} />
    </section>
  )
}

/** The header the story and requirements share: who, and in which tier. */
function Head({ persona }) {
  return (
    <header className="phead">
      <Who persona={persona} />
      <TierTag persona={persona} />
    </header>
  )
}
