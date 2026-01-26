import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FAQS = [
  {
    q: 'What macOS versions are supported?',
    a: 'macOS 13.0 (Ventura) and later. Built for Apple Silicon (M1/M2/M3/M4).',
  },
  {
    q: 'Which Ship of Harkinian versions work?',
    a: 'Sailswift works with any SoH version that uses the standard mods folder. Both .otr and .o2r mod formats are supported.',
  },
  {
    q: 'Is it safe? Will it break my game?',
    a: 'Every download is verified with MD5 checksums. Zip-slip and symlink protection prevents malicious archives. Mods are just files in a folder — disabling them is one click.',
  },
  {
    q: 'Do I need to install anything else?',
    a: 'Just Ship of Harkinian. For .7z and .rar mods, you\'ll need 7-Zip (brew install 7zip). Sailswift will prompt you if needed.',
  },
  {
    q: 'Can I use mods from sources other than GameBanana?',
    a: 'Yes. Drop any .otr or .o2r file into the mods folder and Sailswift will pick it up. The 1-click install feature is GameBanana-specific though.',
  },
  {
    q: 'Is Sailswift affiliated with Ship of Harkinian?',
    a: 'No. Sailswift is an independent community tool. It\'s free, open source, and not affiliated with the SoH team.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-6 max-w-[700px] mx-auto">
      <motion.h2
        className="font-pixel text-[clamp(0.8rem,2vw,1.1rem)] text-center mb-12"
        style={{ textShadow: '2px 2px 0 #8b1a1a' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-red-light">F</span><span className="text-orange">AQ</span>
      </motion.h2>

      <div className="flex flex-col gap-2">
        {FAQS.map((faq, i) => (
          <motion.div
            key={i}
            className="pixel-raised bg-dark overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue/5 transition-colors cursor-pointer"
            >
              <span className={`font-pixel text-[0.5rem] transition-transform duration-200 ${openIndex === i ? 'rotate-90' : ''}`}>
                ▶
              </span>
              <span className="text-retro-white text-[0.95rem]">{faq.q}</span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 pt-1 ml-6 text-retro-gray text-[0.95rem] leading-relaxed border-t border-blue-dark/30">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
