import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { href: '#features', label: 'FEATURES' },
  { href: '#changelog', label: 'CHANGELOG' },
  { href: '#install', label: 'INSTALL' },
  { href: 'https://github.com/proverbiallemon/Sailswift', label: 'SOURCE', external: true },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      setHidden(y > 200 && y > lastScroll.current && !menuOpen)
      lastScroll.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`fixed left-0 right-0 z-100 px-6 flex items-center justify-between border-b-4 border-blue transition-all duration-300 ${
        hidden ? '-top-20' : 'top-0'
      } ${
        scrolled || menuOpen
          ? 'py-2 bg-black/95 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,153,255,0.3)]'
          : 'py-3 bg-black shadow-[0_4px_0_var(--color-blue-dark)]'
      }`}>
        {/* Orange sweep accents on nav corners */}
        <div className={`absolute bottom-0 left-0 h-[4px] bg-orange transition-all duration-300 ${scrolled ? 'w-8' : 'w-5'}`} />
        <div className={`absolute bottom-0 right-0 h-[4px] bg-orange transition-all duration-300 ${scrolled ? 'w-8' : 'w-5'}`} />

        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false) }}
          className="font-pixel text-[0.75rem] flex items-center gap-3 no-underline cursor-pointer"
          style={{ textShadow: '2px 2px 0 #8b1a1a' }}
        >
          <svg className={`transition-all duration-300 ${scrolled ? 'w-5 h-5' : 'w-6 h-6'}`} viewBox="0 0 32 32" fill="none">
            <rect x="11" y="4" width="1" height="17" fill="#8b1a1a" />
            <polygon points="12,5 24,14 12,17" fill="#e04040" />
            <polygon points="17,8 24,14 17,17" fill="#f07070" />
            <polygon points="20,10 24,14 20,17" fill="#f0a0a0" />
            <defs>
              <radialGradient id="stripeGlow" cx="50%" cy="80%" r="40%">
                <stop offset="0%" stopColor="#66ccff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#66ccff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="2" y="22" width="28" height="1" fill="#0099ff" />
            <rect x="7" y="21" width="18" height="3" fill="#6b1010" />
            <rect x="9" y="20" width="14" height="3" fill="#8b1a1a" />
            <rect x="2" y="25" width="28" height="1" fill="#0099ff" />
            <rect x="2" y="27" width="28" height="1" fill="#0099ff" />
            <rect x="2" y="29" width="28" height="1" fill="#0099ff" />
            <rect x="2" y="25" width="28" height="1" fill="url(#stripeGlow)" />
            <rect x="2" y="27" width="28" height="1" fill="url(#stripeGlow)" />
            <rect x="2" y="29" width="28" height="1" fill="url(#stripeGlow)" />
          </svg>
          <span><span className="text-red-light">SAIL</span><span className="text-orange">SWIFT</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
              className="font-pixel text-[0.55rem] text-retro-white px-3.5 py-2 border-2 border-transparent hover:text-orange hover:border-orange transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger - blue water stripes */}
        <button
          className="sm:hidden flex flex-col gap-[4px] p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-5 h-[3px] bg-blue transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <div className={`w-5 h-[3px] bg-blue transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <div className={`w-5 h-[3px] bg-blue transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center justify-center gap-6 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener' : undefined}
                onClick={() => setMenuOpen(false)}
                className="font-pixel text-[1rem] text-retro-white no-underline px-6 py-3 border-2 border-transparent hover:text-orange hover:border-orange transition-colors"
                style={{ textShadow: '2px 2px 0 #0066cc' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Decorative blue stripes at bottom of mobile menu */}
            <motion.div
              className="absolute bottom-12 left-8 right-8 flex flex-col gap-[6px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-[3px] stripe-shimmer w-full" />
              <div className="h-[3px] stripe-shimmer w-full" style={{ animationDelay: '0.5s' }} />
              <div className="h-[3px] stripe-shimmer w-full" style={{ animationDelay: '1s' }} />
              <div className="h-[3px] stripe-shimmer w-full" style={{ animationDelay: '1.5s' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
