import assetUrl from '../../../shared/asset.js'
import { personas, roleOf, tierOf, tiers } from '../demo.js'

/**
 * A persona's face, round. Without a photo, their initials stand in.
 * size: its width in the stage's pixels.
 */
export function Face({ persona, size, className = '' }) {
  const { name, photo } = persona
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <span
      className={`face ${photo ? '' : 'face--empty'} ${className}`.trim()}
      style={{ '--size': `${size}px` }}
    >
      {photo ? <img src={assetUrl(photo)} alt="" /> : initials}
    </span>
  )
}

/** Who a slide is about, over its top left: face, name and role. */
export function Who({ persona }) {
  return (
    <div className="who">
      <Face persona={persona} size={64} />
      <div>
        <p className="who__name">{persona.name}</p>
        <p className="who__role">{roleOf(persona)}</p>
      </div>
    </div>
  )
}

/** The tier a slide belongs to, in small capitals: "Tier 1 · …". */
export function TierTag({ persona, className = '' }) {
  const tier = tierOf(persona)
  return (
    <p className={`eyebrow tiertag ${className}`.trim()}>
      Tier {tier.n} · {tier.name}
    </p>
  )
}

/**
 * Every persona in the demo, by tier, along the foot of a slide: the one it
 * is about lit, the rest set back, so the room can see where we are.
 */
export function Roster({ current }) {
  return (
    <ol className="roster">
      {tiers.map((tier) => (
        <li className="roster__tier" key={tier.id}>
          <p className="roster__label">Tier {tier.n}</p>
          <ol className="roster__people">
            {personas
              .filter((p) => p.tier === tier.id)
              .map((p) => (
                <li
                  className={`roster__person${p.id === current.id ? ' roster__person--current' : ''}`}
                  key={p.id}
                >
                  <Face persona={p} size={40} />
                  <span>{p.role}</span>
                </li>
              ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
