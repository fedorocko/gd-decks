import Mark from '../../../shared/Mark.jsx'
import StatementLayout from '../../../shared/StatementLayout.jsx'

// The ASP pitch's slide 18, word for word.
export default function S19Management() {
  return (
    <StatementLayout
      statement={
        <>
          Management tools help you configure and launch new solutions to
          production with <Mark>confidence.</Mark>
        </>
      }
    />
  )
}

S19Management.schema = 'management'
