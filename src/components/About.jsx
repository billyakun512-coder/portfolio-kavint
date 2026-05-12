import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView as useIntersectionView } from 'react-intersection-observer'
import { Code2, Palette, Zap, Globe } from 'lucide-react'

const skills = [
  { name: 'PhotoShop', percent: 92, color: 'from-neon-blue to-neon-cyan' },
  { name: 'Adobe Ilustrator', percent: 88, color: 'from-neon-purple to-neon-blue' },
  { name: 'Figma', percent: 85, color: 'from-neon-pink to-neon-purple' },
  { name: 'Cap Cut', percent: 95, color: 'from-neon-cyan to-neon-blue' },
  { name: 'Canva', percent: 80, color: 'from-neon-blue to-neon-purple' },
]

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience', icon: <Zap size={18} /> },
  { value: 20, suffix: '+', label: 'Projects Done', icon: <Code2 size={18} /> },
  { value: 15, suffix: '+', label: 'Happy Clients', icon: <Globe size={18} /> },
  { value: 100, suffix: '%', label: 'Dedication', icon: <Palette size={18} /> },
]

const services = [
  {
    icon: <Palette size={22} />,
    title: 'UI/UX Design',
    desc: 'Crafting intuitive, beautiful interfaces that users love.',
    color: 'from-neon-blue/20 to-neon-cyan/10',
    border: 'rgba(255, 0, 0, 0.42)',
    glow: 'rgba(10, 0, 0, 0.74)',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Frontend Dev',
    desc: 'Building performant, animated React applications.',
    color: 'from-neon-purple/20 to-neon-blue/10',
    border: 'rgba(179, 79, 255, 0.44)',
    glow: 'rgba(180, 79, 255, 0.3)',
  },
  {
    icon: <Zap size={22} />,
    title: 'Motion Design',
    desc: 'Creating smooth, captivating micro-interactions.',
    color: 'from-neon-pink/20 to-neon-purple/10',
    border: 'rgba(255, 45, 120, 0.2)',
    glow: 'rgba(255, 45, 120, 0.3)',
  },
]

function SkillBar({ name, percent, color, index }) {
  const { ref, inView } = useIntersectionView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
          {name}
        </span>
        <span className="text-xs font-semibold text-gradient">{percent}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
        />
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })
  const { ref: statsRef, inView: statsInView } = useIntersectionView({ triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="shape-blur absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, #eeff00, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.4em] uppercase text-neon-blue mb-4 block">
            Who Am I
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-px mx-auto" style={{
            background: 'linear-gradient(90deg, transparent, #ff0000, transparent)'
          }} />
        </motion.div>

        {/* Top grid: bio + skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 neon-border relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative z-10">
              {/* Mini avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(180,79,255,0.2))', border: '1px solid rgba(0,240,255,0.2)' }}>
                  <span className="font-display font-bold text-xl text-gradient">YN</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Kavint Rizaliano</h3>
                  <p className="text-neon-blue text-sm font-medium">Graphic Designer</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm mb-6">
                I'm a passionate UI/UX designer and frontend developer who believes that 
                great design is not just about how things look — it's about how they feel. 
                With 3+ years of experience, I craft digital experiences that are both 
                beautiful and functional.
              </p>
              <p className="text-white/40 leading-relaxed text-sm mb-8">
                My approach combines minimalist aesthetics with cutting-edge interactions, 
                creating products that stand out in the digital landscape.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Figma', 'Framer', 'Next.js', 'Node.js'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium text-neon-blue/80 hover:text-neon-blue transition-colors duration-300"
                    style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.15)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 neon-border"
          >
            <h3 className="font-display font-semibold text-lg text-white mb-8">
              Technical Skills
            </h3>
            <div className="flex flex-col gap-5">
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-default transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 text-neon-blue group-hover:text-neon-cyan transition-colors duration-300"
                style={{ background: 'rgba(0,240,255,0.08)' }}>
                {stat.icon}
              </div>
              <div className="font-display font-bold text-3xl text-white mb-1">
                {statsInView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-white/40 text-xs font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-3xl p-7 group relative overflow-hidden cursor-default"
              style={{ border: `1px solid ${s.border}` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${s.glow === 'rgba(0, 240, 255, 0.3)' ? '0,240,255' : s.glow === 'rgba(180, 79, 255, 0.3)' ? '180,79,255' : '255,45,120'}, 0.1)`,
                    color: s.glow === 'rgba(0, 240, 255, 0.3)' ? '#ff0000' : s.glow === 'rgba(180, 79, 255, 0.3)' ? '#b44fff' : '#ff2d78',
                  }}>
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
