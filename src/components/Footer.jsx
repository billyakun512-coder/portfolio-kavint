import { motion } from 'framer-motion'
import { X, Mail, Heart, Facebook, Instagram } from 'lucide-react'

const socials = [
  { icon: <X size={18} />, href: '#', label: 'Twitter', color: '#258bff' },
  { icon: <Mail size={18} />, href: 'mailto:kavintrizaliano@gmail.com', label: 'Email', color: '#ff1616' },
  { icon: <Facebook size={18} />, href: 'https://facebook.com/usernamekamu', label: 'Facebook', color: '#1877f2' },
  { icon: <Instagram size={18} />, href: 'https://instagram.com/pinn.____', label: 'Instagram', color: '#e1306c' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-10 overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.3), rgba(180,79,255,0.3), transparent)' }} />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 md:p-16 text-center mb-16 relative overflow-hidden"
          style={{ border: '1px solid rgba(0,240,255,0.1)' }}
        >
          {/* Glow blobs inside */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full shape-blur"
            style={{ background: 'radial-gradient(circle, #ff0000, transparent 70%)' }} />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full shape-blur"
            style={{ background: 'radial-gradient(circle, #b44fff, transparent 70%)' }} />

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-5xl mb-6"
            >
              👋
            </motion.div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto mb-10">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
            </p>
            <motion.a
              href="mailto:kavintrizaliano@gmail.com"
              className="inline-flex items-center gap-3 btn-primary px-10 py-4 rounded-full text-neon-blue font-semibold tracking-wide"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Say Hello
            </motion.a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                scale: 1.2,
                y: -4,
                boxShadow: `0 0 20px ${s.color}60, 0 0 40px ${s.color}20`,
              }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center glass transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.4)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}40` }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display tracking-wider"
          >
            &lt;Kavint Rizaliano&gt;
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5"
          >
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={12} className="text-neon-pink fill-neon-pink" />
            </motion.span>
            <span>using React & Framer Motion</span>
          </motion.div>

          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}
