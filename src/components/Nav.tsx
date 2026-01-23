export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 py-3 flex items-center justify-between bg-black border-b-4 border-blue shadow-[0_4px_0_var(--color-blue-dark)] relative">
      {/* Orange sweep accents on nav corners */}
      <div className="absolute bottom-0 left-0 w-5 h-[4px] bg-orange" />
      <div className="absolute bottom-0 right-0 w-5 h-[4px] bg-orange" />
      <div className="font-pixel text-[0.75rem] text-orange flex items-center gap-3" style={{ textShadow: '2px 2px 0 #8b1a1a' }}>
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          {/* Mast - red */}
          <rect x="11" y="4" width="1" height="17" fill="#8b1a1a" />
          {/* Sail - triangle pointing right */}
          <polygon points="12,5 24,14 12,17" fill="#e04040" />
          <polygon points="17,8 24,14 17,17" fill="#f07070" />
          <polygon points="20,10 24,14 20,17" fill="#f0a0a0" />
          {/* Subtle lighter blue glow in center of stripes */}
          <defs>
            <radialGradient id="stripeGlow" cx="50%" cy="80%" r="40%">
              <stop offset="0%" stopColor="#66ccff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#66ccff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* First water stripe - behind hull, halfway up bottom rect */}
          <rect x="2" y="22" width="28" height="1" fill="#0099ff" />
          {/* Hull - top smaller, intersecting into wider bottom (covers first stripe) */}
          <rect x="7" y="21" width="18" height="3" fill="#6b1010" />
          <rect x="9" y="20" width="14" height="3" fill="#8b1a1a" />
          {/* Remaining 3 water stripes below hull */}
          <rect x="2" y="25" width="28" height="1" fill="#0099ff" />
          <rect x="2" y="27" width="28" height="1" fill="#0099ff" />
          <rect x="2" y="29" width="28" height="1" fill="#0099ff" />
          {/* Glow overlay - only on the blue stripes */}
          <rect x="2" y="25" width="28" height="1" fill="url(#stripeGlow)" />
          <rect x="2" y="27" width="28" height="1" fill="url(#stripeGlow)" />
          <rect x="2" y="29" width="28" height="1" fill="url(#stripeGlow)" />
        </svg>
        SAILSWIFT
      </div>
      <div className="hidden sm:flex gap-1">
        <a href="#features" className="font-pixel text-[0.55rem] text-retro-white px-3.5 py-2 border-2 border-transparent hover:text-orange hover:border-orange transition-all">
          FEATURES
        </a>
        <a href="#install" className="font-pixel text-[0.55rem] text-retro-white px-3.5 py-2 border-2 border-transparent hover:text-orange hover:border-orange transition-all">
          INSTALL
        </a>
        <a href="https://github.com/proverbiallemon/Sailswift" target="_blank" rel="noopener" className="font-pixel text-[0.55rem] text-retro-white px-3.5 py-2 border-2 border-transparent hover:text-orange hover:border-orange transition-all">
          SOURCE
        </a>
      </div>
    </nav>
  )
}
