import { motion } from 'motion/react'

const STEPS = [
  {
    number: '01',
    title: 'INSTALL',
    desc: 'Download from GameBanana or install via Homebrew. One command, done.',
  },
  {
    number: '02',
    title: 'BROWSE',
    desc: 'Search the full SoH mod catalog in-app. Or click any mod on GameBanana — it opens in Sailswift automatically.',
  },
  {
    number: '03',
    title: 'PLAY',
    desc: 'Hit the play button. Your mods are loaded in the right order. That\'s it.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-6 max-w-[800px] mx-auto">
      <motion.h2
        className="font-pixel text-[clamp(0.8rem,2vw,1.1rem)] text-center mb-12"
        style={{ textShadow: '2px 2px 0 #8b1a1a' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-red-light">HOW IT</span> <span className="text-orange">WORKS</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex-1 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="font-pixel text-[2rem] text-blue/20 mb-2">{step.number}</div>
            <h3 className={`font-pixel text-[0.6rem] mb-2 ${i % 2 === 0 ? 'text-red-light' : 'text-orange'}`}>
              {step.title}
            </h3>
            <p className="text-retro-gray text-[1rem] leading-relaxed">{step.desc}</p>
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-6 -right-3 font-pixel text-blue/30 text-[1rem]">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
