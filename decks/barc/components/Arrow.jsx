/**
 * A block arrow: up in the gain colour, down in the loss colour (styles.css).
 * Sized by its height in CSS; it keeps its own shape.
 */
export default function Arrow({ dir = 'up', className = '' }) {
  return (
    <svg
      className={`arrow arrow--${dir} ${className}`.trim()}
      viewBox="0 0 100 120"
      aria-hidden="true"
    >
      <path d="M50 0 100 54H67v66H33V54H0Z" />
    </svg>
  )
}
