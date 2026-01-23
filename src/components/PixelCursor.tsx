import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
}

// I see you 👀
const COLORS = ['#0099ff', '#ff8c00', '#e05050', '#f07070', '#66ccff']

export function PixelCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const animFrame = useRef<number>(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      const now = Date.now()
      if (now - lastSpawn.current > 50) {
        lastSpawn.current = now
        for (let i = 0; i < 2; i++) {
          particles.current.push({
            x: e.clientX + (Math.random() - 0.5) * 8,
            y: e.clientY + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 2,
            vy: Math.random() * -1.5 - 0.5,
            life: 1,
            maxLife: 0.6 + Math.random() * 0.4,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: Math.random() > 0.5 ? 4 : 3,
          })
        }
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current = particles.current.filter(p => {
        p.life -= 0.02
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05 // gravity

        if (p.life <= 0) return false

        const alpha = Math.min(p.life / p.maxLife, 1)
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size)

        return true
      })

      ctx.globalAlpha = 1
      animFrame.current = requestAnimationFrame(animate)
    }
    animFrame.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrame.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9997]"
      style={{ imageRendering: 'pixelated' }}
    />
  )
}
