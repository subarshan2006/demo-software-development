import { useEffect } from 'react'

export function useGlowText(ref) {
  useEffect(() => {
    const node = ref.current
    if (!node) return

    const elements = node.querySelectorAll('.glow-text')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}
