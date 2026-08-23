'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const allParticles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + (i % 4),
  duration: 8 + (i % 7),
  delay: i * 0.2,
}))

const AmbientBackground = () => {
  const [particleCount, setParticleCount] = useState(8)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)').matches
    setParticleCount(desktop ? 28 : 8)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="aurora-layer absolute inset-0" />
      <div className="grid-overlay absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />

      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-16 h-[18rem] w-[18rem] rounded-full bg-indigo-500/20 blur-[50px] md:h-[28rem] md:w-[28rem] md:blur-[90px]"
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -25, 0], scale: [1.1, 0.9, 1.2, 1.1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-24 h-[20rem] w-[20rem] rounded-full bg-cyan-400/15 blur-[50px] md:h-[32rem] md:w-[32rem] md:blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 left-1/3 hidden h-[26rem] w-[26rem] rounded-full bg-violet-500/15 blur-[90px] md:block"
      />

      {allParticles.slice(0, particleCount).map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-200/70"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -18, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default AmbientBackground
