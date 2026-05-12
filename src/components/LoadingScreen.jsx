import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      key="loading"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a0000]"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape-blur absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #eeff00, transparent 70%)' }} />
        <div className="shape-blur absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, #dc2626, transparent 70%)' }} />
      </div>

      {/* Logo / Brand */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        {/* Animated logo ring */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 rounded-full border-2 border-transparent"
            style={{
              background: 'linear-gradient(#030014, #030014) padding-box, linear-gradient(135deg, #ff0000, #410000, #ff2d78) border-box',
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-transparent"
            style={{
              background: 'linear-gradient(#030014, #030014) padding-box, linear-gradient(135deg, #ff2d78, #ff0000) border-box',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gradient font-display font-bold text-2xl">K</span>
          </div>
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-display font-bold text-2xl tracking-[0.3em] text-white/80 uppercase"
        >
          Portfolio
        </motion.h1>

        {/* Loading bar */}
        <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #ff0505, #ffffff, #ff2d78)',
            }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="text-white/30 text-xs tracking-[0.4em] uppercase font-light"
        >
          Loading Experience
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
