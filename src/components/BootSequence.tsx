import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * CRT Boot Sequence - plays once on page load
 * Simulates an old CRT monitor powering on
 */
export function BootSequence() {
  const [phase, setPhase] = useState<'black' | 'flicker' | 'glow' | 'done'>('black')

  useEffect(() => {
    // Check if we've already shown the boot sequence this session
    if (sessionStorage.getItem('sailswift-booted')) {
      setPhase('done')
      return
    }

    // Phase timing
    const timers = [
      setTimeout(() => setPhase('flicker'), 200),
      setTimeout(() => setPhase('glow'), 600),
      setTimeout(() => {
        setPhase('done')
        sessionStorage.setItem('sailswift-booted', 'true')
      }, 1200),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] pointer-events-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Black screen */}
        {phase === 'black' && (
          <div className="absolute inset-0 bg-black" />
        )}

        {/* Flicker phase - rapid brightness changes */}
        {phase === 'flicker' && (
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{
              backgroundColor: [
                '#000000',
                '#0a0a0a',
                '#000000',
                '#111111',
                '#000000',
                '#0a0a0a',
              ],
            }}
            transition={{ duration: 0.4, times: [0, 0.2, 0.3, 0.5, 0.7, 1] }}
          />
        )}

        {/* Glow phase - CRT warmup with horizontal line */}
        {phase === 'glow' && (
          <div className="absolute inset-0 bg-black overflow-hidden">
            {/* Horizontal scan line expanding */}
            <motion.div
              className="absolute left-0 right-0 bg-blue/30"
              style={{ top: '50%', height: '2px' }}
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />

            {/* Screen glow expanding from center */}
            <motion.div
              className="absolute inset-0"
              initial={{
                background: 'radial-gradient(circle at center, rgba(0,153,255,0.3) 0%, transparent 0%)',
              }}
              animate={{
                background: 'radial-gradient(circle at center, rgba(0,153,255,0.1) 0%, transparent 70%)',
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Vignette fade out */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        )}

        {/* Scanlines overlay (always present during boot) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
