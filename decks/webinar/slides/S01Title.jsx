import CoverLayout from '../layouts/CoverLayout.jsx'

export default function S01Title() {
  return (
    <CoverLayout
      title="GoodData.AI product journey:"
      // broken after the comma, so the line breaks between the topics
      // rather than inside one
      subtitle={
        <>
          Specialized AI Agents,
          <br />
          Cost control and AI-built reports
        </>
      }
      date="October 21, 2026"
    />
  )
}
