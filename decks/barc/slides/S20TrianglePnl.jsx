import Triangle from '../components/Triangle.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

export default function S20TrianglePnl() {
  return (
    <FrameLayout title="How to balance the AI deployment triangle?">
      <Triangle show={['flexibility', 'security', 'pnl']} fresh="pnl" />
    </FrameLayout>
  )
}
