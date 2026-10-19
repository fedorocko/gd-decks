/**
 * A diagram as the slide's subject, the full width of the slide under its
 * title.
 *
 * kicker   — what the claim is about, in small lime capitals over it, so a
 *            long claim can start from its verb and keep to one line
 * title    — the slide's claim, held to one line
 * text     — a subtitle under it
 * children — the diagram, taking the rest of the slide
 */
export default function DiagramLayout({ kicker, title, text, children }) {
  return (
    <section className="slide slide--diagram">
      {kicker && <p className="eyebrow diagram__kicker">{kicker}</p>}
      <h2 className="h2 h2--fit">{title}</h2>
      {text && <p className="diagram__text">{text}</p>}
      <div className="diagram__art">{children}</div>
    </section>
  )
}
