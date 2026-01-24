import { useEffect, useRef } from 'react'

export function PixelBoat() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, 32, 32)

    // here be pixels, not dragons
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, 32, 32)

    // Mast/pole - RED (not gray)
    ctx.fillStyle = '#8b1a1a'
    ctx.fillRect(12, 4, 1, 17)

    // Sail - right triangle
    // Base red
    ctx.fillStyle = '#e04040'
    ctx.beginPath()
    ctx.moveTo(13, 5)
    ctx.lineTo(24, 14)
    ctx.lineTo(13, 17)
    ctx.closePath()
    ctx.fill()

    // Mid tone
    ctx.fillStyle = '#f07070'
    ctx.beginPath()
    ctx.moveTo(17, 8)
    ctx.lineTo(24, 14)
    ctx.lineTo(17, 17)
    ctx.closePath()
    ctx.fill()

    // Light pink highlight edge
    ctx.fillStyle = '#f0a0a0'
    ctx.beginPath()
    ctx.moveTo(20, 10)
    ctx.lineTo(24, 14)
    ctx.lineTo(20, 17)
    ctx.closePath()
    ctx.fill()

    // First water line drawn BEHIND the hull (halfway up bottom rect)
    ctx.fillStyle = '#0099ff'
    ctx.fillRect(2, 22, 28, 1)

    // Hull - TWO STACKED RECTANGLES (drawn on top of first stripe)
    // Bottom rectangle (wider, darker)
    ctx.fillStyle = '#6b1010'
    ctx.fillRect(7, 21, 18, 3)

    // Top rectangle (narrower, lighter, pushed down to intersect)
    ctx.fillStyle = '#8b1a1a'
    ctx.fillRect(9, 20, 14, 3)

    // Remaining 3 water lines below the hull
    ctx.fillStyle = '#0099ff'
    ctx.fillRect(2, 25, 28, 1)
    ctx.fillRect(2, 27, 28, 1)
    ctx.fillRect(2, 29, 28, 1)

    // Subtle lighter blue radial glow - only on the blue stripes themselves
    const gradient = ctx.createRadialGradient(16, 27, 0, 16, 27, 10)
    gradient.addColorStop(0, 'rgba(102, 204, 255, 0.35)')
    gradient.addColorStop(1, 'rgba(102, 204, 255, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(2, 25, 28, 1)
    ctx.fillRect(2, 27, 28, 1)
    ctx.fillRect(2, 29, 28, 1)
  }, [])

  return (
    <div className="animate-bob">
      <canvas
        ref={canvasRef}
        width={32}
        height={32}
        className="w-48 h-48 sm:w-40 sm:h-40"
      />
    </div>
  )
}
