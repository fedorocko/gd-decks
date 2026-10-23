import Serve from '../components/Serve.jsx'

// The ASP pitch's slide 5, word for word, its art swapped for the stack
// slide's story at its simplest: the client's idea through the plane to AI
// solutions, the products of slide 10 and one served to each client, the
// multi-tenant pages of the ASP New Pitch's slide 5. Laid out as the shared
// title slide is beside its art.
export default function S08Answer() {
  return (
    <section className="slide slide--title slide--title--art slide--serve">
      <div className="titleblock">
        <h1 className="display accent">Agentic Serving Plane</h1>
        <p className="titleblock__sub titleblock__sub--lead">
          The most native, secure and efficient enterprise data environment
          for the agentic era.
        </p>
      </div>
      <Serve
        idea="Your product ideas"
        plane="Agentic Serving Plane"
        label="AI solutions"
        solutions={[
          { name: 'Survey Studio', media: 'surveyStudio' },
          { name: 'AI Publisher', media: 'aiPublisher' },
          { name: 'Signals Engine', media: 'signalsEngine' },
        ]}
        instances={{
          name: 'Your product',
          pages: [
            { name: 'Client A', src: '/media/multitenancy/client-a-1.png' },
            { name: 'Client B', src: '/media/multitenancy/client-b-1.png' },
          ],
        }}
      />
    </section>
  )
}
