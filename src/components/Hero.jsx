import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Sparkles } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

const createRipple = (e) => {
  const button = e.currentTarget
  const ripple = document.createElement('span')
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`
  ripple.classList.add('ripple')
  button.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
}

const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      <ParticleBackground />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="shape-blur absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, #991b1b, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="shape-blur absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, #dc2626, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="shape-blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, #7f1d1d, transparent 70%)' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 neon-border"
        >
          <Sparkles size={14} style={{ color: '#ff6b6b' }} className="animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-white/70">
            Available for Work
          </span>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#ff6b6b' }} />
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200 }}
          className="relative w-28 h-28 mx-auto mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #ff6b6b, #dc2626, #7f1d1d, #ff6b6b)',
              padding: '2px',
            }}
          >
            <div className="w-full h-full rounded-full" style={{ background: '#0a0000' }} />
          </motion.div>
          <div className="absolute inset-1 rounded-full overflow-hidden">
  <img 
    src="/src/assets/photo.png" 
    alt="Profile" 
    className="w-full h-full object-cover object-top scale-100"
    style={{objectPosition: 'center 60%' }}
  />
</div>
          <div className="absolute inset-0 rounded-full neon-glow-blue opacity-60" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1
            className="font-display font-bold leading-none mb-2"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
          >
            <span className="block text-white">Kavint</span>
            <span className="block text-gradient glow-text">Rizaliano</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="h-10 flex items-center justify-center mb-4"
        >
          <span className="text-xl md:text-2xl font-light text-white/50 mr-2">I'm a</span>
          <TypeAnimation
            sequence={[
              'UI/UX Designer', 2000,
              'Frontend Developer', 2000,
              'Creative Coder', 2000,
              'Visual Artist', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl font-semibold text-gradient"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Crafting digital experiences that blend cutting-edge design with
          seamless functionality. Where aesthetics meets performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={(e) => { createRipple(e); scrollTo('#about') }}
            className="relative overflow-hidden btn-primary px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide"
            style={{ color: '#ff6b6b' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">About Me</span>
          </motion.button>

          <motion.button
            onClick={(e) => { createRipple(e); scrollTo('#projects') }}
            className="relative overflow-hidden px-8 py-3.5 rounded-full text-sm font-semibold text-white tracking-wide transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(153,27,27,0.15))',
              border: '1px solid rgba(220,38,38,0.4)',
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: '0 0 30px rgba(220,38,38,0.4), 0 0 60px rgba(153,27,27,0.2)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            My Projects
          </motion.button>

          <motion.button
            onClick={(e) => { createRipple(e); scrollTo('#contact') }}
            className="relative overflow-hidden px-8 py-3.5 rounded-full text-sm font-semibold text-white/70 tracking-wide hover:text-white transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/20 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
