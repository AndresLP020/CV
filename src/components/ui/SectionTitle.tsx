'use client'

import { motion } from 'framer-motion'

type SectionTitleProps = {
  eyebrow: string
  title: string
  subtitle: string
}

const SectionTitle = ({ eyebrow, title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16 md:mb-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300/80"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-font text-4xl md:text-6xl font-bold mb-5 gradient-text"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

export default SectionTitle
