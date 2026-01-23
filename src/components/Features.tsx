import { Download, Search, Users, List, RefreshCw, Shield } from 'lucide-react'
import { motion } from 'motion/react'
import { BlueStripes } from './BlueStripes'

const FEATURES = [
  {
    icon: Download,
    title: '1-CLICK INSTALL',
    desc: 'Click any mod on GameBanana and it downloads + installs automatically. ZIP, 7z, and RAR supported.',
  },
  {
    icon: Search,
    title: 'BROWSE GAMEBANANA',
    desc: 'Search and browse the full SoH mod catalog without leaving the app.',
  },
  {
    icon: Users,
    title: 'PROFILES & MODPACKS',
    desc: 'Save mod setups as profiles. Share modpacks with friends and apply them instantly.',
  },
  {
    icon: List,
    title: 'LOAD ORDER',
    desc: 'Set mod priority. Later in list overrides earlier. Full control over conflicts.',
  },
  {
    icon: RefreshCw,
    title: 'AUTO-UPDATES',
    desc: 'Sailswift updates itself via Sparkle. Always on the latest version.',
  },
  {
    icon: Shield,
    title: 'SAFE & VERIFIED',
    desc: 'MD5 checksums on every download. Zip-slip and symlink protection built in.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-[1000px] mx-auto">
      <motion.h2
        className="font-pixel text-[clamp(0.8rem,2vw,1.1rem)] text-center mb-4"
        style={{ textShadow: '2px 2px 0 #8b1a1a' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-red-light">FEAT</span><span className="text-orange">URES</span>
      </motion.h2>
      <motion.p
        className="text-center text-retro-gray mb-16 text-[1.2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Everything you need to mod Ship of Harkinian on Mac.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="pixel-raised p-6 bg-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-blue-dark)] transition-all"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            <div className="feature-icon-box w-8 h-8 bg-blue flex items-center justify-center mb-3">
              <feature.icon size={16} className="text-retro-white" />
            </div>
            <h3 className={`font-pixel text-[0.6rem] mb-3 leading-relaxed ${i % 2 === 0 ? 'text-red-light' : 'text-orange'}`}>
              {feature.title}
            </h3>
            <p className="text-retro-gray text-[1.05rem] leading-normal">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Blue stripes divider after features */}
      <BlueStripes className="mt-20 px-4" />
    </section>
  )
}
