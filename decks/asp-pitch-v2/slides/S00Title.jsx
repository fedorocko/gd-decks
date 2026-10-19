import TitleLayout from '../../../shared/TitleLayout.jsx'

// The ASP pitch's slide 2, word for word. A copy: a change there does not
// reach here.
export default function S00Title() {
  return (
    <TitleLayout
      title="GoodData.AI"
      variant="lead"
      subtitle={
        <>
          <span className="accent sub-lede">Agentic serving plane</span>
          <br />
          Enterprise data environment for the agentic era.
        </>
      }
    />
  )
}
