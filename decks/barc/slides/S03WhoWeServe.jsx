import Logo from '../components/Logo.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

const LARGE = ['logoDatev', 'logoMastercard', 'logoBlackrock', 'logoBroadridge']
const SMALL = [
  'logoAlasco',
  'logoPayrails',
  'logoAklamio',
  'logoBoozt',
  'logoMedifox',
  'logoPlancraft',
]

export default function S03WhoWeServe() {
  return (
    <FrameLayout title="Who we serve">
      <div className="serve">
        <ul className="serve__row serve__row--large">
          {LARGE.map((name) => (
            <li key={name}>
              <Logo name={name} className={`serve__logo--${name.slice(4).toLowerCase()}`} />
            </li>
          ))}
        </ul>
        <ul className="serve__row serve__row--small">
          {SMALL.map((name) => (
            <li key={name}>
              <Logo name={name} className={`serve__logo--${name.slice(4).toLowerCase()}`} />
            </li>
          ))}
        </ul>
      </div>
    </FrameLayout>
  )
}
