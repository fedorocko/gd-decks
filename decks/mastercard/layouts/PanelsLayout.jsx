import { useEffect, useRef, useState } from 'react'
import assetUrl from '../../../shared/asset.js'
import Kpis from '../../../shared/Kpis.jsx'
import Shot from '../components/Shot.jsx'
import media from '../media.js'

/**
 * Columns side by side, filling the slide under an optional title, each over
 * its own picture or clip from media.js.
 *
 * title  — set over the columns
 * titleFit — hold the title to one line, sized down to fit the stage
 * centre — the columns' content sits in their middle, over evenly dimmed
 *          media, rather than at their foot, under media that shows clearer
 *          towards the top
 * grid   — two to a row instead of all side by side: landscape panels, the
 *          content at the foot of their left side, the media clearer
 *          towards their right
 * shots  — the media a screenshot, shown clear at the top of the panel with
 *          the content under it, rather than dimmed behind it. Its media.js
 *          entry can crop it: `zoom`, how far in, from `focus`, an
 *          object-position
 * panels: [{ id, media, ... }], each holding any of, top to bottom:
 *   name    — whose it is, in small caps
 *   heading — what it did, as a headline
 *   text    — one thought, set large
 *   body    — a few sentences behind it
 *   kpis    — figures that bear it out: [{ value, label }]
 *   pills   — what stands behind the thought, a filled pill each
 *   soon    — more of those, not out yet: outlined, after the filled ones
 *
 * The panels share their rows, so like parts start on one line across the
 * slide. Clips take turns, in the panels' order: each plays through once and
 * rests on its last frame, and then the next begins.
 */
export default function PanelsLayout({
  title,
  titleFit = false,
  panels,
  centre = false,
  grid = false,
  shots = false,
}) {
  const clips = panels
    .filter((panel) => media[panel.media]?.kind === 'video')
    .map((panel) => panel.id)
  const [turn, setTurn] = useState(0)

  const cls = [
    'panels',
    `panels--${panels.length}`,
    centre && 'panels--centre',
    grid && 'panels--grid',
    shots && 'panels--shots',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className="slide slide--panels">
      {title && (
        <h2 className={`h2${titleFit ? ' h2--fit' : ''} panels__title`}>
          {title}
        </h2>
      )}
      <ul className={cls}>
        {panels.map(({ id, ...panel }) => (
          <Panel
            key={id}
            {...panel}
            shot={shots}
            playing={clips[turn] === id}
            onPlayed={() => setTurn(clips.indexOf(id) + 1)}
          />
        ))}
      </ul>
    </section>
  )
}

function Panel({
  media: art,
  name,
  heading,
  text,
  body,
  kpis,
  pills,
  soon = [],
  shot,
  playing,
  onPlayed,
}) {
  return (
    <li className="panel">
      {shot ? (
        <PanelShot name={art} />
      ) : (
        <Art name={art} playing={playing} onPlayed={onPlayed} />
      )}
      {name && <p className="eyebrow panel__name">{name}</p>}
      {heading && <h3 className="panel__heading">{heading}</h3>}
      {text && <p className="panel__text">{text}</p>}
      {body && <p className="panel__body">{body}</p>}
      {kpis && (
        <div className="panel__kpis">
          <Kpis items={kpis} />
        </div>
      )}
      {pills && (
        <ul className="pills">
          {pills.map((pill) => (
            <li className="pill pill--filled" key={pill}>
              {pill}
            </li>
          ))}
          {soon.map((pill) => (
            <li className="pill pill--soon" key={pill}>
              {pill}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

/** The picture or clip behind a panel, or its placeholder until it exists. */
function Art({ name, playing, onPlayed }) {
  const asset = media[name]

  if (!asset?.src) {
    return (
      <div className="panel__art panel__art--empty">
        <p className="media__label">{asset?.label ?? name}</p>
      </div>
    )
  }

  if (asset.kind === 'video') {
    return <Clip src={asset.src} playing={playing} onPlayed={onPlayed} />
  }

  return <img className="panel__art" src={assetUrl(asset.src)} alt="" />
}

/** A screenshot over a panel's content, or its placeholder until it exists. */
function PanelShot({ name }) {
  const asset = media[name]

  if (!asset?.src) {
    return (
      <div className="panel__shot panel__shot--empty">
        <p className="media__label">{asset?.label ?? name}</p>
      </div>
    )
  }

  return (
    <div className="panel__shot">
      <Shot name={name} />
    </div>
  )
}

/**
 * A video behind a panel. It waits on its first frame until it is `playing`,
 * runs through once, and rests on its last frame.
 *
 * onPlayed: called when it has finished — or cannot be loaded at all, so
 *   that a missing file does not hold up the clips after it.
 */
function Clip({ src, playing, onPlayed }) {
  const video = useRef(null)

  useEffect(() => {
    // A browser that refuses to play it leaves it on its first frame.
    if (playing) video.current.play().catch(() => {})
  }, [playing])

  return (
    <video
      ref={video}
      className="panel__art panel__art--clip"
      src={assetUrl(src)}
      muted
      playsInline
      preload="auto"
      onEnded={onPlayed}
      onError={onPlayed}
    />
  )
}
