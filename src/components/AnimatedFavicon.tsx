import { useEffect } from 'react'

function drawBoat(ctx: CanvasRenderingContext2D, yOffset: number) {
  ctx.clearRect(0, 0, 32, 32)

  // Background
  ctx.fillStyle = '#0a0a0a'
  ctx.fillRect(0, 0, 32, 32)

  const y = Math.round(yOffset)

  // Mast
  ctx.fillStyle = '#8b1a1a'
  ctx.fillRect(12, 4 + y, 1, 17)

  // Sail - base red
  ctx.fillStyle = '#e04040'
  ctx.beginPath()
  ctx.moveTo(13, 5 + y)
  ctx.lineTo(24, 14 + y)
  ctx.lineTo(13, 17 + y)
  ctx.closePath()
  ctx.fill()

  // Sail - mid tone
  ctx.fillStyle = '#f07070'
  ctx.beginPath()
  ctx.moveTo(17, 8 + y)
  ctx.lineTo(24, 14 + y)
  ctx.lineTo(17, 17 + y)
  ctx.closePath()
  ctx.fill()

  // Sail - highlight
  ctx.fillStyle = '#f0a0a0'
  ctx.beginPath()
  ctx.moveTo(20, 10 + y)
  ctx.lineTo(24, 14 + y)
  ctx.lineTo(20, 17 + y)
  ctx.closePath()
  ctx.fill()

  // First water stripe (behind hull)
  ctx.fillStyle = '#0099ff'
  ctx.fillRect(2, 22, 28, 1)

  // Hull - bottom (wider)
  ctx.fillStyle = '#6b1010'
  ctx.fillRect(7, 21 + y, 18, 3)

  // Hull - top (narrower, overlapping)
  ctx.fillStyle = '#8b1a1a'
  ctx.fillRect(9, 20 + y, 14, 3)

  // Remaining water stripes (fixed, don't bob)
  ctx.fillStyle = '#0099ff'
  ctx.fillRect(2, 25, 28, 1)
  ctx.fillRect(2, 27, 28, 1)
  ctx.fillRect(2, 29, 28, 1)
}

export function AnimatedFavicon() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.imageSmoothingEnabled = false

    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/png'
      document.head.appendChild(link)
    }

    let frame = 0
    const interval = setInterval(() => {
      const yOffset = Math.sin(frame * 0.08) * 1.5
      drawBoat(ctx, yOffset)
      link!.href = canvas.toDataURL('image/png')
      frame++
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return null
}
