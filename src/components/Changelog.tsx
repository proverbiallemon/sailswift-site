import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface ChangelogEntry {
  version: string
  date: string
  subtitle: string
  sections: { title: string; items: string[] }[]
  patch?: { version: string; note: string }
}

const CHANGELOG: ChangelogEntry[] = [
  {
    version: 'v1.1.4',
    date: '2026-01-24',
    subtitle: 'Mod updates and pixel UI',
    sections: [
      {
        title: 'Added',
        items: [
          'Mod Update Action — Click the orange Update badge to download latest version in-place',
          'Folder Context Menu — Right-click folders for Update Mod and Show in Finder',
          'Pixel Art UI — Retro pixel icons for action bar buttons and pixel boat branding',
        ],
      },
      {
        title: 'Fixed',
        items: [
          'Re-downloading a mod no longer creates duplicate files with _1 suffix',
          'Browse thumbnails no longer stretch with extreme aspect ratio images',
          'Download speeds now match browser speeds',
        ],
      },
    ],
  },
  {
    version: 'v1.1.2',
    date: '2026-01-21',
    subtitle: 'UI improvements and bug fixes',
    patch: { version: 'v1.1.3', note: 'New pixel sailboat app icon' },
    sections: [
      {
        title: 'Added',
        items: [
          'Action Bar — New bottom toolbar with multi-select toggle, toggle, delete, open folder, and refresh buttons',
          'Multi-Select Mode Toggle — Enter selection mode without holding Command',
          'Modpack to Profile Conversion — Save imported modpack as a profile',
          'Load Order Auto-Sync — All enabled mods automatically appear in load order',
        ],
      },
      {
        title: 'Fixed',
        items: [
          'Click Registration — Fixed folders not responding to clicks consistently',
          'Modpack Per-File States — Individual mod file states now preserved',
          'Modpack Export Count — Fixed misleading folder count warning',
          'Load Order Numbers — All enabled mods now show position number',
        ],
      },
      {
        title: 'Removed',
        items: [
          'Toolbar buttons moved to action bar',
        ],
      },
    ],
  },
  {
    version: 'v1.1.1',
    date: '2026-01-20',
    subtitle: 'Major feature release',
    sections: [
      {
        title: 'Added',
        items: [
          'Mod Profiles — Save and load different mod configurations with auto-download',
          'Modpack Export/Import — Share mod collections as .sailswiftpack files',
          'Mod Update Checker — Check installed mods for GameBanana updates',
          'Notification Ticker — Non-intrusive scrolling notification system',
          'Batch Deletion — Command+click to multi-select and delete folders',
          'Separate Download Systems — Independent UI for profile vs browse downloads',
          'Dynamic Category Filtering — Categories extracted from cached mods with counts',
          'Additional Sort Options — Most Views and Most Liked sorting',
        ],
      },
      {
        title: 'Fixed',
        items: [
          'Profile mods not disabling correctly',
          'Per-folder saving now saves all mods individually',
          'stableId collision between .otr and .o2r files',
          'Duplicate downloads for shared GameBanana IDs',
          'Folder toggle load order and path matching',
          'Load order pipe character sanitization',
        ],
      },
      {
        title: 'Improved',
        items: [
          'Download performance with throttled progress updates',
          'Browse downloads stay visible until manually cleared',
          'About view with Acknowledgments section',
        ],
      },
    ],
  },
  {
    version: 'v1.0.5',
    date: '2026-01-19',
    subtitle: 'App icon',
    sections: [
      {
        title: 'Added',
        items: [
          'Custom sailboat app icon with retro 16-bit style',
        ],
      },
    ],
  },
  {
    version: 'v1.0.4',
    date: '2026-01-19',
    subtitle: 'GameBanana integration icon',
    sections: [
      {
        title: 'Added',
        items: [
          'GameBanana 32x32 integration icon for 1-click mod manager feature',
        ],
      },
    ],
  },
  {
    version: 'v1.0.3',
    date: '2026-01-19',
    subtitle: 'Fast downloads',
    sections: [
      {
        title: 'Added',
        items: [
          'Fast Downloads — Browser-equivalent speeds using URLSessionDownloadTask',
          'Placeholder Icons — Context-aware SF Symbols for mods without images',
        ],
      },
      {
        title: 'Fixed',
        items: [
          'Memory leak — URLSession now properly invalidated after downloads',
          'User-Agent header restored for proper API identification',
        ],
      },
    ],
  },
  {
    version: 'v1.0.2',
    date: '2026-01-19',
    subtitle: 'RAR support',
    sections: [
      {
        title: 'Added',
        items: [
          'RAR Support — Extract .rar archives using 7-Zip with unar fallback',
          'Item Type Support — Correctly fetch Sound, Skin, Texture, and other types',
        ],
      },
      {
        title: 'Security',
        items: [
          'Item type validated against allowlist to prevent URL injection',
        ],
      },
    ],
  },
  {
    version: 'v1.0.1',
    date: '2026-01-19',
    subtitle: 'Security hardening',
    sections: [
      {
        title: 'Security',
        items: [
          'MD5 checksum verification on all downloads',
          'URL scheme input validation (numeric IDs, allowlist item types)',
          'Zip slip protection — prevents directory traversal on extraction',
          'Path sanitization with allowlist and unicode normalization',
        ],
      },
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-01-19',
    subtitle: 'First stable release',
    sections: [
      {
        title: 'Added',
        items: [
          'Auto-Updates via Sparkle framework with EdDSA signing',
          'Manual Check for Updates via menu',
          'DMG installer in addition to ZIP',
          'Homebrew support — brew install --cask sailswift',
        ],
      },
    ],
  },
  {
    version: 'v1.0.0-beta2',
    date: '2026-01-19',
    subtitle: 'Load order, downloads, 7-Zip',
    sections: [
      {
        title: 'Added',
        items: [
          'Load Order Management — Drag-and-drop reordering synced with SoH config',
          'Download Progress — Real-time MB downloaded / total MB tracking',
          '7-Zip Support — Extract .7z archives with auto-detection',
          'Import Confirmation popover with mod details',
          'Multiple simultaneous downloads with stacked progress',
          'Mod Metadata — .sailswift.json for accurate GameBanana lookups',
        ],
      },
    ],
  },
  {
    version: 'v1.0.0-beta1',
    date: '2026-01-18',
    subtitle: 'Initial public release',
    sections: [
      {
        title: 'Features',
        items: [
          'Core Mod Management — Enable, disable, and delete mods',
          'Hierarchical Folders — Collapsible tree view',
          'GameBanana Integration — Browse and search mods in-app',
          'URL Scheme — One-click install via shipofharkinian:// links',
          'ZIP Extraction using macOS ditto',
          'Game Launcher with AltAssets config',
          'Dark/Light Mode following system appearance',
        ],
      },
    ],
  },
]

const SECTION_COLORS: Record<string, string> = {
  Added: 'text-[#28c840]',
  Fixed: 'text-blue',
  Improved: 'text-orange',
  Security: 'text-red-light',
  Removed: 'text-retro-gray',
  Features: 'text-[#28c840]',
}

export function Changelog() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set([CHANGELOG[0].version]))
  const [showAll, setShowAll] = useState(false)
  const visibleEntries = showAll ? CHANGELOG : CHANGELOG.slice(0, 4)

  const toggle = (version: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(version)) next.delete(version)
      else next.add(version)
      return next
    })
  }

  return (
    <section id="changelog" className="py-24 px-6 max-w-[800px] mx-auto">
      <motion.h2
        className="font-pixel text-[clamp(0.8rem,2vw,1.1rem)] text-center mb-4"
        style={{ textShadow: '2px 2px 0 #8b1a1a' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-red-light">CHANGE</span><span className="text-orange">LOG</span>
      </motion.h2>
      <motion.p
        className="text-center text-retro-gray mb-12 text-[1.2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        What's new in each release.
      </motion.p>

      <div className="flex flex-col gap-2">
        {visibleEntries.map((entry, i) => (
          <motion.div
            key={entry.version}
            className="pixel-raised bg-dark overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            {/* Header - always visible */}
            <button
              onClick={() => toggle(entry.version)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue/5 transition-colors cursor-pointer"
            >
              <span className={`font-pixel text-[0.5rem] transition-transform duration-200 ${expanded.has(entry.version) ? 'rotate-90' : ''}`}>
                ▶
              </span>
              <span className="font-pixel text-[0.55rem] text-blue">{entry.version}</span>
              {entry.patch && (
                <span className="font-pixel text-[0.35rem] text-orange/70 border border-orange/30 px-1.5 py-0.5 rounded-sm hidden sm:inline">
                  {entry.patch.version}: {entry.patch.note}
                </span>
              )}
              <span className="text-retro-gray text-[0.9rem] flex-1">{entry.subtitle}</span>
              <span className="text-retro-gray/50 text-[0.8rem] hidden sm:block">{entry.date}</span>
              {i === 0 && (
                <span className="font-pixel text-[0.35rem] text-[#28c840] border border-[#28c840]/50 px-1.5 py-0.5 rounded-sm">
                  LATEST
                </span>
              )}
            </button>

            {/* Expandable content */}
            <AnimatePresence>
              {expanded.has(entry.version) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-1 border-t border-blue-dark/30 ml-6">
                    {entry.sections.map(section => (
                      <div key={section.title} className="mt-3 first:mt-1">
                        <h4 className={`font-pixel text-[0.4rem] mb-2 ${SECTION_COLORS[section.title] || 'text-retro-white'}`}>
                          {section.title.toUpperCase()}
                        </h4>
                        <ul className="flex flex-col gap-1.5">
                          {section.items.map((item, j) => (
                            <li key={j} className="text-retro-gray text-[0.95rem] leading-snug flex gap-2">
                              <span className="text-blue/50 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {!showAll && CHANGELOG.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 mx-auto block font-pixel text-[0.45rem] text-blue/70 border border-blue/30 px-4 py-2 rounded-sm hover:text-blue hover:border-blue transition-colors cursor-pointer"
        >
          SHOW {CHANGELOG.length - 4} OLDER RELEASES
        </button>
      )}

    </section>
  )
}
