import Img from '../components/Img.jsx'

const FIGURES = [
  ['200+', 'Customers'],
  ['140K', 'Global Businesses'],
  ['3.6M', 'End Users'],
  ['10x', 'YoY Cloud Growth'],
  ['275+', 'Employees and Hiring'],
  ['23', 'Countries Operated In'],
]

const FUNDERS = [
  ['fundA16z', 'Andreessen Horowitz', 'a16z'],
  ['fundGeneralCatalyst', 'General Catalyst', 'gc'],
  ['fundIntelCapital', 'Intel Capital', 'intel'],
]

export default function S05Trusted() {
  return (
    <section className="slide slide--figures">
      <h2 className="h2">Trusted by Enterprises Worldwide</h2>
      <ul className="figures">
        {FIGURES.map(([value, label]) => (
          <li className="figure" key={label}>
            <p className="figure__value">{value}</p>
            <p className="figure__label">{label}</p>
          </li>
        ))}
      </ul>
      <div className="funders">
        <p className="eyebrow funders__label">Funded by</p>
        <ul className="funders__logos">
          {FUNDERS.map(([name, alt, id]) => (
            <li key={id}>
              <Img
                name={name}
                alt={alt}
                className={`funders__logo funders__logo--${id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
