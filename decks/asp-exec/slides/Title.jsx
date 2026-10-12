import TitleLayout from '../../../shared/TitleLayout.jsx'

export default function Title() {
  return (
    <TitleLayout
      title="GoodData.AI"
      variant="lead"
      subtitle={
        <>
          <span className="accent sub-lede">Agentic Serving Plane</span>
          <br />
          Executive Pitch
        </>
      }
    />
  )
}
