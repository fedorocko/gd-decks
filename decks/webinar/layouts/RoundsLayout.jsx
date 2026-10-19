import Img from '../components/Img.jsx'

/**
 * A title over a row of round pictures, each with what it stands for under
 * it, centred on the slide.
 *
 * size: the rounds' diameter
 * items: [{ id, image, alt, label, name, text }]
 *   image — from media.js, already round; until it exists, a placeholder
 *           captioned with `label`
 *   name  — set over the text, when the round is someone
 *   text  — the caption
 */
export default function RoundsLayout({ title, items, size }) {
  return (
    <section className="slide slide--rounds">
      <h2 className="h2">{title}</h2>
      <ul className="rounds" style={{ '--round': `${size}px` }}>
        {items.map(({ id, image, alt, label, name, text }) => (
          <li className="round" key={id}>
            <span className="round__frame">
              <Img name={image} alt={alt} label={label} className="round__image" />
            </span>
            {name && <p className="round__name">{name}</p>}
            <p className={name ? 'round__text round__text--role' : 'round__text'}>
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
