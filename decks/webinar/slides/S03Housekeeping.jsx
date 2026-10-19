import RoundsLayout from '../layouts/RoundsLayout.jsx'

export default function S03Housekeeping() {
  return (
    <RoundsLayout
      title="Housekeeping"
      size={200}
      items={[
        {
          id: 'muted',
          image: 'iconMuted',
          text: 'Attendees muted upon entry',
        },
        {
          id: 'questions',
          image: 'iconQuestions',
          text: 'Please send questions through the Zoom Q&A box',
        },
        {
          id: 'recording',
          image: 'iconRecording',
          text: 'Follow-up email and recording will be sent to attendees',
        },
      ]}
    />
  )
}
