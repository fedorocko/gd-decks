import Img from '../components/Img.jsx'

// The second part of the agenda, opened on the two it covers, each with the
// demo that shows it and the question it answers there.
const INTERFACES = [
  {
    id: 'copilot',
    name: 'Dashboard Co-pilot',
    tag: 'Demo 3',
    question: 'How can you build a new dashboard in seconds?',
    shot: 'shotCopilot',
  },
  {
    id: 'publisher',
    name: 'AI Publisher',
    tag: 'Demo 4',
    question:
      'How can you deliver a personalized data deck to each client in a fraction of the time?',
    shot: 'shotPublisher',
  },
]

export default function S09Interfaces() {
  return (
    <section className="slide slide--interfaces">
      <h2 className="h2">New AI Interfaces and Agents</h2>
      <ul className="interfaces">
        {INTERFACES.map(({ id, name, tag, question, shot }) => (
          <li className="interface" key={id}>
            <p className="interface__head">
              <span className="interface__name">{name}</span>
              <span className="tag">{tag}</span>
            </p>
            <p className="interface__question">{question}</p>
            <Img
              name={shot}
              alt={name}
              label={`Screenshot — ${name}`}
              className="interface__shot"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
