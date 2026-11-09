import Triangle from '../components/Triangle.jsx'
import FrameLayout from '../layouts/FrameLayout.jsx'

export default function S16TriangleSecurity() {
  return (
    <FrameLayout title="How to balance the AI deployment triangle?">
      <Triangle show={['flexibility', 'security']} fresh="security" />
    </FrameLayout>
  )
}
