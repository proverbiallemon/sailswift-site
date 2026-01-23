import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
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
      <Features />
      <Install />
      <Footer />
    </>
  )
}

export default App
