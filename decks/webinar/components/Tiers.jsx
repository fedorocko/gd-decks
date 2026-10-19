/**
 * Agents handed out, drawn small: a row of agents over a row of who gets
 * them, each over its own and joined to it by a line.
 *
 * agents, to: what the two rows are, named at their left
 * pairs: [[agent, recipient]]
 * ladder: the agents are tiers, the cheapest first, each led on to the next
 *   by an arrow — the up-sell — and lit a step more than the one before
 */
export default function Tiers({ agents, to, pairs, ladder = false }) {
  const tone = (i) => (ladder ? ['low', 'mid', 'top'][i] : 'mid')

  return (
    <div className="tiers">
      <p className="tiers__label">{agents}</p>
      {pairs.map(([agent], i) => (
        <span className={`tiers__agent tiers__agent--${tone(i)}`} key={agent}>
          {agent}
          {ladder && i < pairs.length - 1 && (
            <span className="tiers__step" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
      <span />
      {pairs.map(([agent]) => (
        <span className="tiers__link" key={`${agent}-link`} />
      ))}
      <p className="tiers__label">{to}</p>
      {pairs.map(([agent, recipient]) => (
        <span className="tiers__to" key={`${agent}-to`}>
          {recipient}
        </span>
      ))}
    </div>
  )
}
