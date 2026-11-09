/**
 * The AI deployment triangle (slides 10, 14, 16 and 20): what a deployment
 * has to balance, one at each corner, named a slide at a time. A corner not
 * named yet is an empty dashed box; the one named on this slide stands out.
 *
 * Drawn on the stage's own 1600 × 900, under the slide's title: equilateral,
 * its sides 620 long, the boxes on its corners centred together in the room
 * under the title.
 *
 * show  — the corners named so far, by id
 * fresh — the one named on this slide, set in the accent
 */
const SIDE = 620
const BOX = { w: 380, h: 130 }
const HEIGHT = (SIDE * Math.sqrt(3)) / 2
// the middle of the room under the title, from its foot to the slide's
const MIDDLE = 474
const TOP = { x: 800, y: MIDDLE - HEIGHT / 2 }
const BASE_Y = TOP.y + HEIGHT

const CORNERS = [
  { id: 'pnl', label: 'P&L', x: TOP.x, y: TOP.y },
  { id: 'flexibility', label: 'Flexibility', x: TOP.x - SIDE / 2, y: BASE_Y },
  { id: 'security', label: 'Security', x: TOP.x + SIDE / 2, y: BASE_Y },
]

export default function Triangle({ show = [], fresh }) {
  const outline = CORNERS.map(({ x, y }) => `${x},${y}`).join(' ')

  return (
    <svg className="triangle" viewBox="0 0 1600 900" aria-hidden="true">
      <polygon className="triangle__side" points={outline} />
      {CORNERS.map(({ id, label, x, y }) => {
        const named = show.includes(id)
        const cls = [
          'triangle__corner',
          named && 'triangle__corner--named',
          id === fresh && 'triangle__corner--fresh',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <g className={cls} key={id}>
            <rect
              className="triangle__box"
              x={x - BOX.w / 2}
              y={y - BOX.h / 2}
              width={BOX.w}
              height={BOX.h}
              rx={26}
            />
            {named && (
              <text className="triangle__label" x={x} y={y}>
                {label}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
