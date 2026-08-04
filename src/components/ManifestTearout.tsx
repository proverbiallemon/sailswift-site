// A paper scrap from the Manifest world, torn and pinned to the corner of
// the ship's site. Obvious enough to find, hidden enough to feel found.
export function ManifestTearout() {
  return (
    <a
      href="https://manifest.sailswift.app"
      className="manifest-tearout"
      aria-label="Manifest: a load order ledger for your mods"
    >
      <span className="mt-title">MANIFEST</span>
      <span className="mt-rule" aria-hidden="true" />
      <span className="mt-line">found tucked in the hold: a cargo ledger for your mods</span>
      <span className="mt-go">tear here to inspect &#9656;</span>
      <img className="mt-seal" src="/manifest/seal.png" alt="" />
    </a>
  )
}
