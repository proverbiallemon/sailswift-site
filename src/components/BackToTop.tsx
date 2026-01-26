import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-dark pixel-raised flex items-center justify-center cursor-pointer hover:bg-blue/20 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-blue-dark)] transition-all group"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
        >
          {/* Pixel arrow pointing up */}
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue group-hover:text-orange transition-colors">
            <rect x="7" y="2" width="2" height="2" fill="currentColor" />
            <rect x="5" y="4" width="2" height="2" fill="currentColor" />
            <rect x="9" y="4" width="2" height="2" fill="currentColor" />
            <rect x="3" y="6" width="2" height="2" fill="currentColor" />
            <rect x="11" y="6" width="2" height="2" fill="currentColor" />
            <rect x="7" y="6" width="2" height="8" fill="currentColor" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
