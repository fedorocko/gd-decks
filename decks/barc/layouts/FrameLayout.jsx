/**
 * Every slide of this deck that has a title: the title set small and quiet
 * in the top left corner, so whatever is under it gets the stage. The body
 * fills the rest of the slide.
 *
 * title — what the slide asks or says
 * className — the slide's own modifier, for its body's layout
 */
export default function FrameLayout({ title, className, children }) {
  return (
    <section className={`slide slide--frame ${className ?? ''}`.trim()}>
      {title && <h2 className="frame__title">{title}</h2>}
      <div className="frame__body">{children}</div>
    </section>
  )
}
