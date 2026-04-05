import { useEffect, useRef } from 'react'

/**
 * Custom hook that adds a fade-in animation when the element scrolls into view.
 * Uses the Intersection Observer API.
 *
 * Usage:
 *   const ref = useFadeIn()
 *   <div ref={ref} className="fade-in">...</div>
 *
 * The element needs the "fade-in" CSS class from index.css.
 * When it enters the viewport, "visible" class is added automatically.
 */
export default function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(element)

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
