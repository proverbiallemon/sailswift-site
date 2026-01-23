import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { PixelBoat } from './PixelBoat'
import { AppMockup } from './AppMockup'
import { BlueStripes } from './BlueStripes'

// you're still reading this? go mod something
const TYPED_TEXT = 'Browse, download, and manage Ship of Harkinian mods with one click. Profiles, load order, and auto-updates. Built with Swift for Mac.'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < TYPED_TEXT.length) {
        setDisplayText(TYPED_TEXT.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  // Blink cursor after typing finishes
  useEffect(() => {
    if (displayText.length === TYPED_TEXT.length) {
      const blinkInterval = setInterval(() => setShowCursor(prev => !prev), 530)
      return () => clearInterval(blinkInterval)
    }
  }, [displayText])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-0 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <PixelBoat />
      </motion.div>

      <motion.h1
        className="font-pixel text-[clamp(1.5rem,5vw,3rem)] mt-8 mb-3 glitch-text"
        style={{ textShadow: '3px 3px 0 #8b1a1a, 6px 6px 0 rgba(0,0,0,0.3)' }}
        data-text="SAILSWIFT"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="text-red-light">SAIL</span>
        <span className="text-orange">SWIFT</span>
      </motion.h1>

      <motion.p
        className="font-pixel text-[clamp(0.5rem,1.5vw,0.7rem)] text-blue leading-loose mb-10"
        style={{ textShadow: '1px 1px 0 #0066cc' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        NATIVE macOS MOD MANAGER<br />FOR SHIP OF HARKINIAN
      </motion.p>

      <p className="text-[1.4rem] text-retro-gray max-w-[600px] mb-12 leading-relaxed min-h-[4.5rem]">
        {displayText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
      </p>

      <motion.div
        className="flex flex-wrap gap-4 justify-center mb-16"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <a
          href="https://gamebanana.com/tools/21731"
          target="_blank"
          rel="noopener"
          className="btn-pixel-primary font-pixel text-[0.65rem] px-6 py-4 bg-red text-retro-white no-underline inline-flex items-center gap-2.5 active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(224,80,80,0.4)]"
          style={{ textShadow: '1px 1px 0 #8b1a1a' }}
        >
          DOWNLOAD
        </a>
        <a
          href="https://github.com/proverbiallemon/Sailswift"
          target="_blank"
          rel="noopener"
          className="pixel-raised font-pixel text-[0.65rem] px-6 py-4 bg-dark text-retro-white no-underline inline-flex items-center gap-2.5 hover:bg-[#2a2a4e] active:scale-95 transition-transform"
        >
          VIEW SOURCE
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <AppMockup />
      </motion.div>

      {/* Blue water stripes matching the icon - 4 lines with gaps */}
      <BlueStripes className="w-full mt-16 px-4" />
    </section>
  )
}
