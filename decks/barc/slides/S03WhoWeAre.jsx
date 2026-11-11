import Logo from '../components/Logo.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

// The investors, as on the webinar's slide 5.
const FUNDERS = [
  ['fundA16z', 'a16z'],
  ['fundIntelCapital', 'intel'],
  ['fundGeneralCatalyst', 'gc'],
]

// Six cells, three to a row: the model, what it means and where it runs;
// then how long and how many, where from, and who backs us.
export default function S03WhoWeAre() {
  return (
    <FrameLayout title="Who we are">
      <div className="grid grid--3x2">
        <div className="cell cell--centre">
          <p className="who__model">B2B2B</p>
        </div>
        <div className="cell">
          <p className="big who__claim">We help customers serve AI to their clients.</p>
        </div>
        <div className="cell cell--centre">
          <ul className="badges">
            <li className="badge">Cloud</li>
            <li className="badge">On-premise</li>
          </ul>
        </div>
        <div className="cell cell--centre">
          <dl className="who__figures">
            <div>
              <dt className="who__value">2007</dt>
              <dd className="who__label">Founded</dd>
            </div>
            <div>
              <dt className="who__value">300</dt>
              <dd className="who__label">Employees</dd>
            </div>
          </dl>
        </div>
        <div className="cell cell--centre">
          <p className="who__cities">
            <span>Prague</span>
            <span>San Francisco</span>
          </p>
        </div>
        <div className="cell cell--centre">
          <ul className="funders">
            {FUNDERS.map(([name, id]) => (
              <li key={id}>
                <Logo name={name} className={`funders__logo funders__logo--${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FrameLayout>
  )
}
