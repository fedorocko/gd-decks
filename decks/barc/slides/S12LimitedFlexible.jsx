import asset from '../../../shared/asset.js'
import Brand from '../components/Brand.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'
import media from '../media.js'

// What each gives you over what you reach it through, under a row of the
// tools of each kind: business software over the first column, the AI
// assistants over the second. The first row of cells is three quarters of
// the height left; under them, outlined in the accent, what each kind of
// system sits on.
export default function S12LimitedFlexible() {
  return (
    <FrameLayout title="Limited vs. Flexible">
      <div className="grid grid--tall">
        <ul className="makers">
          {['logoSalesforce', 'logoWorkday'].map((name) => (
            <li key={name}>
              <img
                className={`makers__logo makers__logo--${name.slice(4).toLowerCase()}`}
                src={asset(media[name].src)}
                alt={media[name].label}
              />
            </li>
          ))}
        </ul>
        <ul className="makers">
          {['markClaude', 'markChatgpt'].map((name) => (
            <li key={name}>
              <Brand logo={name}>{media[name].label}</Brand>
            </li>
          ))}
        </ul>
        <div className="cell cell--centre">
          <p className="huge huge--long">Limited set of functions and forms</p>
        </div>
        <div className="cell cell--centre">
          <p className="huge huge--long">Absolutely anything</p>
        </div>
        <div className="cell cell--centre cell--base">
          <p className="big">Curated APIs &amp; UIs</p>
        </div>
        <div className="cell cell--centre cell--base">
          <p className="big">Generate Code</p>
        </div>
      </div>
    </FrameLayout>
  )
}
