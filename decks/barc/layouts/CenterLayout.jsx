/**
 * One line of thought, set large in the middle of the stage, untitled.
 *
 * lines — the thought is set a part to a line (.center__line), each held
 *   whole, so it takes the stage's width rather than the text's measure
 */
export default function CenterLayout({ lines = false, children }) {
  return (
    <section className="slide slide--center">
      <p className={lines ? 'center__text center__text--lines' : 'center__text'}>{children}</p>
    </section>
  )
}
