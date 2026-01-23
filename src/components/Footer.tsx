export function Footer() {
  const barCount = 20
  const bars = Array.from({ length: barCount }, (_, i) => {
    const progress = i / (barCount - 1)
    const width = 100 - progress * 92 // 100% down to 8%
    return { width, delay: i * 0.15 }
  })

  return (
    <footer className="px-6 pb-10 pt-16">
      {/* Cascading bars - full width to tiny */}
      <div className="flex flex-col items-center gap-[6px] mb-12">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="h-[3px] stripe-shimmer rounded-full"
            style={{
              width: `${bar.width}%`,
              animationDelay: `${bar.delay}s`,
              opacity: 1 - (i / barCount) * 0.4,
            }}
          />
        ))}
      </div>

      {/* a familiar shape */}
      <div className="flex justify-center mb-6 opacity-15">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
          {/* Top triangle */}
          <polygon points="12,0 18,11 6,11" fill="#ff8c00" />
          {/* Bottom-left triangle */}
          <polygon points="6,11 12,22 0,22" fill="#ff8c00" />
          {/* Bottom-right triangle */}
          <polygon points="18,11 24,22 12,22" fill="#ff8c00" />
        </svg>
      </div>

      <p className="text-retro-gray text-[0.95rem] text-center">
        Made by{' '}
        <a href="https://github.com/proverbiallemon" target="_blank" rel="noopener" className="text-blue no-underline hover:text-orange transition-colors">
          PocketBear
        </a>
        {' '}// Not affiliated with Ship of Harkinian
      </p>
    </footer>
  )
}
