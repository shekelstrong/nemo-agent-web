// Hook for scroll-triggered animations
import { useEffect, useRef, useState } from 'react'

export function useInView(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(element)
        }
      },
      options
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return scrollY
}
