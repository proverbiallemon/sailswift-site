import { BlueStripes } from './BlueStripes'

export function Footer() {
  return (
    <footer className="px-6 pb-10">
      <BlueStripes className="mb-10" />
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
