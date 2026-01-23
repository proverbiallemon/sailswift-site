import { motion } from 'motion/react'

export function Install() {
  return (
    <section id="install" className="py-24 px-6 text-center">
      <motion.div
        className="max-w-[600px] mx-auto p-8 pixel-orange bg-dark"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-pixel text-[0.9rem] text-orange mb-2">GET IT NOW</h2>
        <p className="text-retro-gray mb-7 text-[1.1rem]">macOS 13.0+ required. Free &amp; open source.</p>

        <div className="flex flex-col gap-3 text-left">
          <motion.a
            href="https://gamebanana.com/tools/21731"
            target="_blank"
            rel="noopener"
            className="pixel-inset flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 bg-black/40 no-underline text-inherit hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-blue-dark)] transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="font-pixel text-[0.45rem] text-blue min-w-[90px]">DOWNLOAD</span>
            <span className="text-retro-white text-[1rem]">GameBanana (recommended)</span>
          </motion.a>

          <motion.div
            className="pixel-inset flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 bg-black/40 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-blue-dark)] transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="font-pixel text-[0.45rem] text-blue min-w-[90px]">HOMEBREW</span>
            <code className="font-terminal text-orange text-[1.1rem] break-all">
              brew tap PocketBearDev/sailswift && brew install --cask sailswift
            </code>
          </motion.div>

          <motion.div
            className="pixel-inset flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 bg-black/40 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-blue-dark)] transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="font-pixel text-[0.45rem] text-blue min-w-[90px]">SOURCE</span>
            <code className="font-terminal text-orange text-[1.1rem] break-all">
              git clone https://github.com/proverbiallemon/Sailswift.git
            </code>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
