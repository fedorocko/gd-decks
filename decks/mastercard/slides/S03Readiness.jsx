import Mark from '../../../shared/Mark.jsx'
import ColumnsLayout from '../layouts/ColumnsLayout.jsx'

// The ASP pitch's slide 4, word for word, without its icons: its title at
// the top as on this deck's other slides, each pillar a card under it. A
// copy: a change there does not reach here.
export default function S03Readiness() {
  return (
    <ColumnsLayout
      title="Lasting AI transformation will depend on 4 key pillars (4S):"
      titleFit
      itemsSmall
      headLarge
      columns={[
        {
          head: (
            <>
              <Mark>Start</Mark> with agentic-ready systems
            </>
          ),
          items: [
            'Can you let agents into your systems, or will they hold them back?',
            'Does most of the knowledge live in human heads?',
          ],
        },
        {
          head: (
            <>
              Keep your data <Mark>Secure</Mark>
            </>
          ),
          items: [
            'Once you let agents in, how do you keep your data and IP safe and private?',
            'How do you make sure they can access only what you authorize?',
          ],
        },
        {
          head: (
            <>
              Grow usage and control <Mark>Spend</Mark>
            </>
          ),
          items: [
            'Once it is safe and agents start working, how will their actions impact your budgets?',
            'How will your systems perform under 10× load?',
          ],
        },
        {
          head: (
            <>
              <Mark>Succeed</Mark> through real value
            </>
          ),
          items: [
            'Once they work economically at scale, what measurable results do they deliver?',
            'More activity needs to translate to tangible outcomes.',
          ],
        },
      ]}
    />
  )
}
