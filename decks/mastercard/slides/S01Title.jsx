import TitleLayout from '../../../shared/TitleLayout.jsx'

// The ASP New Pitch's title, with the two names on it.
export default function S01Title() {
  return (
    <TitleLayout
      title="GoodData.AI + Mastercard"
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
