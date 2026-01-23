import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Install } from './components/Install'
import { Changelog } from './components/Changelog'
import { BlueStripes } from './components/BlueStripes'
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
      <Features />
      <Changelog />
      <BlueStripes className="max-w-[800px] mx-auto px-6" />
      <Install />
      <Footer />
    </>
  )
}

export default App
