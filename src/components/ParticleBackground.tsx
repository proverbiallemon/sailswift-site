import { useEffect, useRef } from 'react'

// CSS particles - GPU-optimized with transform-only animations + parallax
export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Apply different parallax speeds to particle groups
          const particles = container.children
          for (let i = 0; i < particles.length; i++) {
            const particle = particles[i] as HTMLElement
            // Alternate between slower (0.05) and faster (0.15) parallax
            const speed = i % 2 === 0 ? 0.05 : 0.12
            particle.style.transform = `translateY(${scrollY * speed}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />
      <div className="particle particle-7" />
      <div className="particle particle-8" />
    </div>
  )
}
