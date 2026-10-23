import Media from '../../../shared/Media.jsx'
import Ways, { Chips, Flow } from '../components/Ways.jsx'
import DiagramLayout from '../layouts/DiagramLayout.jsx'
import media from '../media.js'

// Before the stack: why the plane is open, three ways it speaks the
// language of agents, each with what shows it. The IDE's screenshot is not
// in yet (media.js).
export default function S04Open() {
  return (
    <DiagramLayout title="Open to build any AI solution because it speaks code">
      <Ways
        ways={[
          {
            id: 'code',
            how: 'Analytics as code',
            art: (
              <>
                <Chips
                  items={[
                    { name: 'Claude Code', src: '/media/claude-code-logo.png' },
                    { name: 'Codex', src: '/media/icon-chatgpt.png' },
                  ]}
                />
                <Media name="ide" from={media} className="ways__screen" />
              </>
            ),
            text: 'Codex and Claude Code can develop for you.',
          },
          {
            id: 'agents',
            how: 'MCP and A2A',
            art: (
              <Flow
                from="Your agent"
                via="MCP · A2A"
                to="GoodData.AI"
                note="30+ analytics tools, and adding"
                tools={[
                  { name: 'Semantics' },
                  { name: 'Context' },
                  { name: 'Query' },
                  { name: 'Apps', soon: true },
                ]}
              />
            ),
            text: 'Your agents can talk to GoodData.AI.',
          },
          {
            id: 'models',
            how: 'Any LLM',
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
            text: 'Select your LLM provider, or use our Native Inference.',
          },
        ]}
      />
    </DiagramLayout>
  )
}
