import { useId } from 'react'

/**
 * A wash spreading from one thing to another across a diagram, the accent
 * fading as it goes, ruled along its sides: the ASP New Pitch's, copied, here
 * opening from the MCP pill down to the tools (Rows.jsx). Drawn over the
 * whole diagram, which must be positioned; its corners come from
 * useBeam.js.
 *
 * points — its four corners, the two at the top first, left to right, then
 *          the two at the foot, right to left
 */
export default function Beam({ points }) {
  const fill = useId()
  const [a, b, c, d] = points

  return (
    <svg className="beam" aria-hidden="true">
      <defs>
        <linearGradient id={fill} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="beam__top" />
          <stop offset="1" className="beam__foot" />
        </linearGradient>
      </defs>
      <polygon points={points.join(' ')} fill={`url(#${fill})`} />
      <line x1={a[0]} y1={a[1]} x2={d[0]} y2={d[1]} />
      <line x1={b[0]} y1={b[1]} x2={c[0]} y2={c[1]} />
    </svg>
  )
}
