import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Classic Zelda item pixel art
function PixelSword({ className = '' }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 16 16" className={className}>
      {/* Blade */}
      <rect x="7" y="0" width="2" height="2" fill="#c0c0c0" />
      <rect x="7" y="2" width="2" height="2" fill="#e0e0e0" />
      <rect x="7" y="4" width="2" height="2" fill="#c0c0c0" />
      <rect x="7" y="6" width="2" height="2" fill="#e0e0e0" />
      <rect x="7" y="8" width="2" height="2" fill="#c0c0c0" />
      {/* Guard */}
      <rect x="4" y="10" width="2" height="2" fill="#8b4513" />
      <rect x="6" y="10" width="4" height="2" fill="#daa520" />
      <rect x="10" y="10" width="2" height="2" fill="#8b4513" />
      {/* Handle */}
      <rect x="7" y="12" width="2" height="2" fill="#8b4513" />
      <rect x="7" y="14" width="2" height="2" fill="#654321" />
    </svg>
  )
}

function PixelPotion({ className = '' }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 16 16" className={className}>
      {/* Cork */}
      <rect x="6" y="0" width="4" height="2" fill="#8b4513" />
      {/* Neck */}
      <rect x="6" y="2" width="4" height="2" fill="#87ceeb" />
      {/* Body */}
      <rect x="4" y="4" width="2" height="2" fill="#87ceeb" />
      <rect x="6" y="4" width="4" height="2" fill="#ff4444" />
      <rect x="10" y="4" width="2" height="2" fill="#87ceeb" />
      <rect x="3" y="6" width="2" height="2" fill="#87ceeb" />
      <rect x="5" y="6" width="6" height="2" fill="#ff4444" />
      <rect x="11" y="6" width="2" height="2" fill="#87ceeb" />
      <rect x="3" y="8" width="2" height="2" fill="#87ceeb" />
      <rect x="5" y="8" width="6" height="2" fill="#cc0000" />
      <rect x="11" y="8" width="2" height="2" fill="#87ceeb" />
      <rect x="3" y="10" width="2" height="2" fill="#87ceeb" />
      <rect x="5" y="10" width="6" height="2" fill="#cc0000" />
      <rect x="11" y="10" width="2" height="2" fill="#87ceeb" />
      {/* Bottom */}
      <rect x="4" y="12" width="2" height="2" fill="#87ceeb" />
      <rect x="6" y="12" width="4" height="2" fill="#990000" />
      <rect x="10" y="12" width="2" height="2" fill="#87ceeb" />
      <rect x="5" y="14" width="6" height="2" fill="#6ca6cd" />
    </svg>
  )
}

function PixelHeart({ className = '' }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 16 16" className={className}>
      <rect x="2" y="2" width="2" height="2" fill="#ff6666" />
      <rect x="4" y="2" width="2" height="2" fill="#ff4444" />
      <rect x="8" y="2" width="2" height="2" fill="#ff6666" />
      <rect x="10" y="2" width="2" height="2" fill="#ff4444" />
      <rect x="12" y="2" width="2" height="2" fill="#cc0000" />
      <rect x="1" y="4" width="2" height="2" fill="#ff6666" />
      <rect x="3" y="4" width="4" height="2" fill="#ff4444" />
      <rect x="7" y="4" width="2" height="2" fill="#ff6666" />
      <rect x="9" y="4" width="4" height="2" fill="#ff4444" />
      <rect x="13" y="4" width="2" height="2" fill="#cc0000" />
      <rect x="1" y="6" width="2" height="2" fill="#ff4444" />
      <rect x="3" y="6" width="10" height="2" fill="#cc0000" />
      <rect x="13" y="6" width="2" height="2" fill="#990000" />
      <rect x="2" y="8" width="2" height="2" fill="#ff4444" />
      <rect x="4" y="8" width="8" height="2" fill="#cc0000" />
      <rect x="12" y="8" width="2" height="2" fill="#990000" />
      <rect x="3" y="10" width="2" height="2" fill="#cc0000" />
      <rect x="5" y="10" width="6" height="2" fill="#990000" />
      <rect x="11" y="10" width="2" height="2" fill="#660000" />
      <rect x="4" y="12" width="2" height="2" fill="#cc0000" />
      <rect x="6" y="12" width="4" height="2" fill="#990000" />
      <rect x="10" y="12" width="2" height="2" fill="#660000" />
      <rect x="6" y="14" width="2" height="2" fill="#990000" />
      <rect x="8" y="14" width="2" height="2" fill="#660000" />
    </svg>
  )
}

function PixelRupee({ className = '' }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 16 16" className={className}>
      <rect x="7" y="1" width="2" height="2" fill="#00ff00" />
      <rect x="6" y="3" width="2" height="2" fill="#00ff00" />
      <rect x="8" y="3" width="2" height="2" fill="#00aa00" />
      <rect x="5" y="5" width="2" height="2" fill="#00ff00" />
      <rect x="7" y="5" width="2" height="2" fill="#00dd00" />
      <rect x="9" y="5" width="2" height="2" fill="#008800" />
      <rect x="4" y="7" width="2" height="2" fill="#00ff00" />
      <rect x="6" y="7" width="2" height="2" fill="#00dd00" />
      <rect x="8" y="7" width="2" height="2" fill="#00aa00" />
      <rect x="10" y="7" width="2" height="2" fill="#006600" />
      <rect x="5" y="9" width="2" height="2" fill="#00dd00" />
      <rect x="7" y="9" width="2" height="2" fill="#00aa00" />
      <rect x="9" y="9" width="2" height="2" fill="#006600" />
      <rect x="6" y="11" width="2" height="2" fill="#00aa00" />
      <rect x="8" y="11" width="2" height="2" fill="#006600" />
      <rect x="7" y="13" width="2" height="2" fill="#006600" />
    </svg>
  )
}

const ZELDA_ITEMS = [
  { component: PixelSword, name: 'Wooden Sword' },
  { component: PixelPotion, name: 'Red Potion' },
  { component: PixelHeart, name: 'Heart Container' },
  { component: PixelRupee, name: 'Green Rupee' },
]

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
]

function playSecretFanfare() {
  const ctx = new AudioContext()
  // Classic "secret found" jingle - ascending arpeggio
  const pattern = [
    { freq: 523.25, time: 0, dur: 0.1 },     // C5
    { freq: 659.25, time: 0.1, dur: 0.1 },   // E5
    { freq: 783.99, time: 0.2, dur: 0.1 },   // G5
    { freq: 1046.50, time: 0.3, dur: 0.3 },  // C6 (held)
    { freq: 783.99, time: 0.5, dur: 0.1 },   // G5
    { freq: 1046.50, time: 0.6, dur: 0.4 },  // C6 (resolve)
  ]
  pattern.forEach(({ freq, time, dur }) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.08, ctx.currentTime + time)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(ctx.currentTime + time)
    osc.stop(ctx.currentTime + time + dur)
  })
}

export function KonamiCode() {
  const [inputSequence, setInputSequence] = useState<string[]>([])
  const [activated, setActivated] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [itemIndex, setItemIndex] = useState(0)

  // Pick a random item when activated
  const currentItem = ZELDA_ITEMS[itemIndex]
  const ItemComponent = currentItem.component

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Ignore if typing in an input
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

    const key = e.code
    const newSequence = [...inputSequence, key].slice(-KONAMI_CODE.length)
    setInputSequence(newSequence)

    // Check if sequence matches
    if (newSequence.length === KONAMI_CODE.length &&
        newSequence.every((k, i) => k === KONAMI_CODE[i])) {
      setItemIndex(Math.floor(Math.random() * ZELDA_ITEMS.length))
      setActivated(true)
      setShowMessage(true)
      playSecretFanfare()

      // Reset after animation
      setTimeout(() => {
        setShowMessage(false)
      }, 4000)

      setInputSequence([])
    }
  }, [inputSequence])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Dramatic background flash */}
          <motion.div
            className="absolute inset-0 bg-blue/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.1, 0.3, 0] }}
            transition={{ duration: 0.8, times: [0, 0.1, 0.3, 0.5, 1] }}
          />

          {/* Secret message */}
          <motion.div
            className="relative text-center"
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 200 }}
          >
            {/* Glowing container */}
            <div className="pixel-orange bg-dark p-8 shadow-[0_0_60px_rgba(255,140,0,0.4)]">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="font-pixel text-[1.5rem] text-orange mb-4" style={{ textShadow: '3px 3px 0 #8b1a1a' }}>
                  SECRET FOUND!
                </div>
                <div className="font-pixel text-[0.7rem] text-blue mb-6 tracking-wider">
                  ▲▲▼▼◄►◄►BA
                </div>
                <div className="font-terminal text-retro-gray text-[1.1rem] leading-relaxed max-w-[300px]">
                  "It's dangerous to go alone! Take this."
                </div>
                <motion.div
                  className="mt-6 flex flex-col items-center gap-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.3, 1] }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {/* Random Zelda item */}
                  <ItemComponent className="drop-shadow-[0_0_12px_#ff8c00]" />
                  <span className="font-pixel text-[0.4rem] text-orange/70">{currentItem.name}</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((i / 8) * Math.PI * 2) * 150,
                  y: Math.sin((i / 8) * Math.PI * 2) * 150,
                  opacity: 0,
                  scale: [1, 0],
                }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
