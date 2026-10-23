import Mark from '../../../shared/Mark.jsx'
import Rows, { Chips, Flow, Pile, Screen } from '../components/Rows.jsx'

// The ASP pitch's first pillar, its slide 6, its words on the left as there;
// on the right, in place of its clip, the ways it shows, from the Vitol
// deck's slide 6, as rows.
export default function S09Language() {
  return (
    <section className="slide slide--rows">
      <div className="split split--rows">
        <div className="split__text">
          <p className="eyebrow rows__kicker">Why any AI solution?</p>
          <h2 className="h1">
            It speaks the language of agents: <Mark>code.</Mark>
          </h2>
          <p className="body">
            So agents can naturally work with it and fully utilize its
            capabilities.
          </p>
        </div>
        <Rows
          ways={[
            {
              id: 'code',
              how: 'Analytics as code',
              text: 'Codex and Claude Code can develop for you.',
              art: (
                <div className="rows__pair">
                  <Screen name="ide" />
                  <Chips
                    stacked
                    items={[
                      { name: 'Claude Code', src: '/media/claude-code-logo.png' },
                      { name: 'Codex', src: '/media/icon-chatgpt.png' },
                    ]}
                  />
                </div>
              ),
            },
            {
              id: 'agents',
              how: 'MCP and A2A',
              text: 'Your agents can talk to GoodData.AI.',
              note: '30+ analytics tools, and adding.',
              art: (
                <Flow
                  from="Your agent"
                  via="MCP · A2A"
                  to="GoodData.AI"
                  tools={[
                    { name: 'Semantics' },
                    { name: 'Context' },
                    { name: 'Query' },
                    { name: 'Apps', soon: true },
                  ]}
                />
              ),
            },
            {
              id: 'build',
              how: 'Any UI & business logic',
              text: 'Ship products that look and work like yours, not like ours.',
              art: (
                <div className="rows__pair">
                  <Pile names={['aiPublisher', 'surveyStudio', 'signalsEngine']} />
                  <Chips stacked items={[{ name: 'APIs' }, { name: 'SDKs' }]} />
                </div>
              ),
            },
            {
              id: 'models',
              how: 'Any LLM',
              text: 'Select your LLM provider, or use our Native Inference.',
              art: (
                <Chips
                  items={[
                    { name: 'OpenAI', src: '/media/icon-chatgpt.png' },
                    { name: 'Claude', src: '/media/icon-claude.svg' },
                    { name: 'Bedrock', src: '/media/icon-bedrock.png' },
                    { name: 'Foundry', src: '/media/icon-foundry.png' },
                    { name: 'Native Inference', ours: true },
                  ]}
                />
              ),
            },
          ]}
        />
      </div>
    </section>
  )
}
