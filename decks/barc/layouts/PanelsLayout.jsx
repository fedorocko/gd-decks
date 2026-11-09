import { useEffect, useRef, useState } from 'react'
import assetUrl from '../../../shared/asset.js'
import Kpis from '../../../shared/Kpis.jsx'
import media from '../media.js'
import FrameLayout from './FrameLayout.jsx'

/**
 * The Mastercard deck's panels, copied with the two of its slides that stand
 * on them (slides 7 and 18), and cut down to what those use. Its title is
 * this deck's, small in the corner. A copy: a change there does not reach
 * here.
 *
 * Columns side by side, filling the slide under the title, each over its own
 * picture or clip from media.js.
 *
 * centre — the columns' content sits in their middle, over evenly dimmed
 *          media, rather than at their foot, under media that shows clearer
 *          towards the top
 * panels: [{ id, media, ... }], each holding any of, top to bottom:
 *   name    — whose it is, in small caps
 *   heading — what it did, as a headline
 *   text    — one thought, set large
 *   body    — a few sentences behind it
 *   kpis    — figures that bear it out: [{ value, label }]
 *
 * The panels share their rows, so like parts start on one line across the
 * slide. Clips take turns, in the panels' order: each plays through once and
 * rests on its last frame, and then the next begins.
 */
export default function PanelsLayout({ title, panels, centre = false }) {
  const clips = panels
    .filter((panel) => media[panel.media]?.kind === 'video')
    .map((panel) => panel.id)
  const [turn, setTurn] = useState(0)

  const cls = ['panels', `panels--${panels.length}`, centre && 'panels--centre']
    .filter(Boolean)
    .join(' ')

  return (
    <FrameLayout title={title}>
      <ul className={cls}>
        {panels.map(({ id, ...panel }) => (
          <Panel
            key={id}
            {...panel}
            playing={clips[turn] === id}
            onPlayed={() => setTurn(clips.indexOf(id) + 1)}
          />
        ))}
      </ul>
    </FrameLayout>
  )
}

function Panel({ media: art, name, heading, text, body, kpis, playing, onPlayed }) {
  return (
    <li className="panel">
      <Art name={art} playing={playing} onPlayed={onPlayed} />
      {name && <p className="eyebrow panel__name">{name}</p>}
      {heading && <h3 className="panel__heading">{heading}</h3>}
      {text && <p className="panel__text">{text}</p>}
      {body && <p className="panel__body">{body}</p>}
      {kpis && (
        <div className="panel__kpis">
          <Kpis items={kpis} />
        </div>
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
