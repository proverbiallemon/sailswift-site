import { useState } from 'react'

function playSecretChime() {
  const ctx = new AudioContext()
  // 3 descending arpeggios, then one ascending resolve
  const pattern = [
    { freq: 880.00, time: 0,    dur: 0.15 }, // A5 ↓
    { freq: 739.99, time: 0.12, dur: 0.15 }, // F#5 ↓
    { freq: 587.33, time: 0.24, dur: 0.15 }, // D5 ↓
    { freq: 987.77, time: 0.44, dur: 0.4  }, // B5 ↑ (resolve, held longer)
  ]
  pattern.forEach(({ freq, time, dur }) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.09, ctx.currentTime + time)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(ctx.currentTime + time)
    osc.stop(ctx.currentTime + time + dur)
  })
}

export function Footer() {
  const [shimmer, setShimmer] = useState(false)

  const handleTriforceClick = () => {
    playSecretChime()
    setShimmer(true)
    setTimeout(() => setShimmer(false), 800)
  }

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
      <div
        className={`flex justify-center mb-6 cursor-pointer transition-all duration-300 ${shimmer ? 'opacity-90 drop-shadow-[0_0_8px_#ff8c00]' : 'opacity-15 hover:opacity-30'}`}
        onClick={handleTriforceClick}
      >
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" className={shimmer ? 'animate-[triforce-shimmer_0.8s_ease-out]' : ''}>
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
