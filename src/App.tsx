import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Screenshot } from './components/Screenshot'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Changelog } from './components/Changelog'
import { FAQ } from './components/FAQ'
import { BlueStripes } from './components/BlueStripes'
import { Install } from './components/Install'
import { Footer } from './components/Footer'
import { PixelCursor } from './components/PixelCursor'
import { AnimatedFavicon } from './components/AnimatedFavicon'

function App() {
  return (
    <>
      <AnimatedFavicon />
      <PixelCursor />
      <Nav />
      <Hero />
      <HowItWorks />
      <Screenshot />
      <Features />
      <Changelog />
      <BlueStripes className="max-w-[800px] mx-auto px-6" />
      <FAQ />
      <Install />
      <Footer />
    </>
  )
}

export default App
