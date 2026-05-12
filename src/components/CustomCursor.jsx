import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x,
        y,
        translateX: '-4px',
        translateY: '-2px',
      }}
    >
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pen tool body */}
        <path
          d="M4 28 L14 4 L18 14 L26 10 L4 28Z"
          fill="rgba(10,0,0,0.85)"
          stroke="#ff4444"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Pen nib tip */}
        <path
          d="M4 28 L8 22 L10 26 Z"
          fill="#ff4444"
          strokeLinejoin="round"
        />
        {/* Anchor point dot at tip */}
        <circle
          cx="4"
          cy="28"
          r="2"
          fill="#ff6b6b"
          style={{ filter: 'drop-shadow(0 0 4px #ff2a2a)' }}
        />
        {/* Anchor point at top */}
        <circle
          cx="14"
          cy="4"
          r="1.5"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="1"
        />
        {/* Handle line */}
        <line
          x1="14" y1="4"
          x2="26" y2="10"
          stroke="rgba(255,107,107,0.5)"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
        {/* Handle dot */}
        <circle
          cx="26"
          cy="10"
          r="2"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  )
}
