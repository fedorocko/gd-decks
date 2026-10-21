import { useLayoutEffect, useState } from 'react'

/**
 * A beam's corners over `root`, in the diagram's own pixels. `corners` is
 * handed the browser's rect of each of `refs`, and `at`, which takes a point
 * on screen into the diagram, as the stage is scaled; it returns the four
 * corners. Both stay the same from one render to the next (a list made once,
 * a function outside the component), so drawing the beam does not set off
 * measuring it again. Measured again when the diagram changes size, and once
 * the fonts are in, which moves the text. Nothing while one of `refs` has
 * nothing in it.
 */
export default function useBeam(root, refs, corners) {
  const [beam, setBeam] = useState(null)

  useLayoutEffect(() => {
    let live = true
    const measure = () => {
      if (!live) return
      if (refs.some((ref) => !ref.current)) {
        setBeam(null)
        return
      }
      const frame = root.current.getBoundingClientRect()
      const k = root.current.offsetWidth / frame.width
      const at = (x, y) => [(x - frame.left) * k, (y - frame.top) * k]
      setBeam(corners(refs.map((ref) => ref.current.getBoundingClientRect()), at))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root.current)
    document.fonts?.ready.then(measure)
    return () => {
      live = false
      observer.disconnect()
    }
  }, [root, refs, corners])

  return beam
}
