import { useState } from 'react'
import { motion } from 'motion/react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="font-pixel text-[0.35rem] px-2 py-1 text-blue/70 border border-blue/30 rounded-sm hover:text-blue hover:border-blue transition-colors cursor-pointer shrink-0"
    >
      {copied ? 'COPIED!' : 'COPY'}
    </button>
  )
}

export function Install() {
  return (
    <section id="install" className="py-24 px-6 text-center">
      <motion.div
        className="max-w-[600px] mx-auto p-8 pixel-orange bg-dark shadow-[0_0_30px_rgba(255,140,0,0.08)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-pixel text-[0.9rem] mb-2"><span className="text-red-light">GET IT</span> <span className="text-orange">NOW</span></h2>
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
            <code className="font-terminal text-orange text-[1.1rem] break-all flex-1 select-all">
              brew trust --cask pocketbeardev/sailswift/sailswift && brew install --cask pocketbeardev/sailswift/sailswift
            </code>
            <CopyButton text="brew trust --cask pocketbeardev/sailswift/sailswift && brew install --cask pocketbeardev/sailswift/sailswift" />
          </motion.div>

          <motion.div
            className="pixel-inset flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 bg-black/40 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-blue-dark)] transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="font-pixel text-[0.45rem] text-blue min-w-[90px]">SOURCE</span>
            <code className="font-terminal text-orange text-[1.1rem] break-all flex-1">
              git clone https://github.com/proverbiallemon/Sailswift.git
            </code>
            <CopyButton text="git clone https://github.com/proverbiallemon/Sailswift.git" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
