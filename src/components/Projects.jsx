import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Lock, Sparkles, Star } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Luxury Perfume Branding',
    category: 'Brand Design',
    description: 'A sophisticated branding identity for a high-end luxury perfume house. Featuring elegant typography and premium visual aesthetics.',
    tags: ['Branding', 'Figma', 'Typography', 'Identity'],
    accent: '#00f0ff',
    accentRgb: '0, 240, 255',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    icon: '🌸',
    emoji_bg: 'from-cyan-500/30 to-blue-500/20',
  },
  {
    id: 2,
    title: 'Modern UI Design',
    category: 'UI/UX Design',
    description: 'A comprehensive design system and user interface kit focused on modern aesthetics, accessibility, and developer experience.',
    tags: ['UI Kit', 'Design System', 'Components', 'Figma'],
    accent: '#b44fff',
    accentRgb: '180, 79, 255',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    icon: '🎨',
    emoji_bg: 'from-purple-500/30 to-violet-500/20',
  },
  {
    id: 3,
    title: 'Personal Web App',
    category: 'Full Stack Dev',
    description: 'A feature-rich personal productivity application built with React, featuring real-time sync, beautiful animations, and offline support.',
    tags: ['React', 'Node.js', 'MongoDB', 'Motion'],
    accent: '#ff2d78',
    accentRgb: '255, 45, 120',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    icon: '⚡',
    emoji_bg: 'from-pink-500/30 to-rose-500/20',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className="relative group"
    >
      <div
        className="relative rounded-3xl overflow-hidden glass-card transition-all duration-500"
        style={{
          border: `1px solid rgba(${project.accentRgb}, ${isHovered ? 0.4 : 0.12})`,
          boxShadow: isHovered
            ? `0 0 40px rgba(${project.accentRgb}, 0.2), 0 20px 60px rgba(0,0,0,0.4)`
            : '0 0 0 rgba(0,0,0,0)',
          transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Center emoji / icon */}
          <motion.div
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${project.emoji_bg} flex items-center justify-center text-5xl backdrop-blur-sm`}
              style={{ border: `1px solid rgba(${project.accentRgb}, 0.2)` }}>
              {project.icon}
            </div>
          </motion.div>

          {/* Coming soon badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-md"
            style={{
              background: 'rgba(0,0,0,0.4)',
              border: `1px solid rgba(${project.accentRgb}, 0.3)`,
            }}>
            <Lock size={10} style={{ color: project.accent }} />
            <span className="text-xs font-semibold tracking-wider" style={{ color: project.accent }}>
              COMING SOON
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium text-white/50 glass px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(${project.accentRgb}, 0.1), transparent 70%)`,
            }}
          />
        </div>

        {/* Card body */}
        <div className="p-7">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display font-bold text-xl text-white leading-tight pr-4">
              {project.title}
            </h3>
            <motion.div
              animate={isHovered ? { rotate: 15, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Star size={16} className="text-white/20 mt-1 flex-shrink-0" />
            </motion.div>
          </div>

          <p className="text-white/40 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-300"
                style={{
                  background: `rgba(${project.accentRgb}, 0.08)`,
                  color: `rgba(${project.accentRgb}, 0.8)`,
                  border: `1px solid rgba(${project.accentRgb}, 0.15)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all duration-300"
            style={{
              background: isHovered
                ? `rgba(${project.accentRgb}, 0.15)`
                : 'rgba(255,255,255,0.04)',
              border: `1px solid rgba(${project.accentRgb}, ${isHovered ? 0.3 : 0.1})`,
              color: isHovered ? project.accent : 'rgba(255,255,255,0.4)',
            }}
          >
            <span>View Project</span>
            <ExternalLink size={14} />
          </motion.button>
        </div>

        {/* Bottom glow line */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="shape-blur absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, #ff2d78, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6 neon-border">
            <Sparkles size={12} className="text-neon-purple" />
            <span className="text-xs font-medium tracking-widest uppercase text-white/50">
              My Work
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/30 text-base max-w-md mx-auto">
            A selection of my recent work. Each project is crafted with attention to detail and a passion for quality.
          </p>
          <div className="w-16 h-px mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #b44fff, transparent)' }} />
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/20 text-sm mb-4">More projects coming soon...</p>
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #00f0ff, #b44fff)' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
