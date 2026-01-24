import { motion } from 'motion/react'

export function Screenshot() {
  return (
    <section className="px-6 pb-20 -mt-8">
      <motion.div
        className="max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/screenshot.png"
          alt="Sailswift v1.1.2 showing mod list, profiles, load order, and GameBanana browser"
          className="w-full rounded-sm shadow-[0_8px_40px_rgba(0,102,204,0.15)] border border-blue-dark/20"
          loading="lazy"
        />
        <p className="text-center text-retro-gray/50 text-[0.8rem] mt-3 font-terminal">
          v1.1.2 — Profiles, Load Order, GameBanana Browser
        </p>
      </motion.div>
    </section>
  )
}
