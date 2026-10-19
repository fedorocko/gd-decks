import Img from '../components/Img.jsx'

// Who works through the platform, over it; what it reads from, under it.
const USERS = [
  ['logoPerson', 'People'],
  ['logoCursor', 'Cursor'],
  ['logoOpenai', 'OpenAI'],
  ['logoStar', ''],
]

const SOURCES = [
  ['logoDatabricks', 'Databricks'],
  ['logoSnowflake', 'Snowflake'],
  ['logoPostgres', 'PostgreSQL'],
  ['logoPdf', 'PDF'],
  ['logoPowerpoint', 'PowerPoint'],
]

const STACKS = [
  {
    id: 'data',
    title: 'Data Infrastructure',
    items: [
      'Data Connectivity',
      'API & Custom Integrations',
      'Query Acceleration & Caching',
      'Data Federation',
    ],
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    items: [
      'Dashboards & Self Service',
      'Semantics & Metrics',
      'Machine Learning',
      'Embedded Analytics',
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    items: ['AI Interfaces', 'Agents', 'Context Management', 'AI Infrastructure'],
  },
]

export default function S04MeetGoodData() {
  return (
    <section className="slide slide--platform">
      <header className="platform__head">
        <h2 className="h2">Meet GoodData</h2>
        <p className="platform__kicker">
          One governed AI-enabled analytics platform for people and agents.
        </p>
      </header>
      <Logos items={USERS} />
      <div className="platform">
        <p className="platform__access">Analytics as code, API, SDK &amp; MCP</p>
        <ul className="stacks">
          {STACKS.map(({ id, title, items }) => (
            <li className="stack" key={id}>
              <h3 className="stack__head">{title}</h3>
              <ul className="stack__items">
                {items.map((item) => (
                  <li className="stack__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Logos items={SOURCES} />
    </section>
  )
}

function Logos({ items }) {
  return (
    <ul className="logos">
      {items.map(([name, alt]) => (
        <li className="logos__tile" key={name}>
          <Img name={name} alt={alt} className="logos__img" />
        </li>
      ))}
    </ul>
  )
}
