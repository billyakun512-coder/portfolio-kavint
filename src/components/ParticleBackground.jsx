import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const waves = [
      { amp: 60, freq: 0.012, speed: 0.018, y: 0.45, color: 'rgba(180,0,0,0.18)', width: 2.5 },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height * wave.y)

        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            canvas.height * wave.y +
            Math.sin(x * wave.freq + time * wave.speed) * wave.amp +
            Math.sin(x * wave.freq * 0.5 + time * wave.speed * 0.7) * (wave.amp * 0.4)
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = wave.color
        ctx.lineWidth = wave.width
        ctx.shadowBlur = 18
        ctx.shadowColor = 'rgba(200,0,0,0.4)'
        ctx.stroke()

        // Fill below wave for depth
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = wave.color.replace(')', ', 0.03)').replace('rgba', 'rgba').replace(/, 0\.[\d]+\)/, ', 0.02)')
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}
