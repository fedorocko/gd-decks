import Mark from '../../../shared/Mark.jsx'
import PanelsLayout from '../layouts/PanelsLayout.jsx'

// The first two of the offsite deck's four pillars, its slide 15, in the same
// words and over the same clips. A copy: a change there does not reach here.
export default function S04Pillars() {
  return (
    <PanelsLayout
      centre
      panels={[
        {
          id: 'language',
          media: 'pillarLanguage',
          text: (
            <>
              It speaks the language of agents: <Mark>code.</Mark>
            </>
          ),
          pills: [
            'Semantics as code',
            'Context as code',
            'APIs',
            'MCPs',
            'SDKs',
          ],
        },
        {
          id: 'creativity',
          media: 'pillarCreativity',
          text: (
            <>
              It unlocks creativity and <Mark>sets no limits.</Mark>
            </>
          ),
          pills: [
            'Shell apps',
            'Flex marts',
            'Flex Connect',
            'Flow API',
            'Skills',
          ],
          soon: ['Sandboxes'],
        },
      ]}
    />
  )
}
