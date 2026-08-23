'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import MagneticButton from '@/components/ui/MagneticButton'

const roles = ['Full Stack', 'Frontend', 'Backend']
const name = 'Andrés López Piña'
const marquee = [
  'Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Stripe', 'Gemini',
  'Tailwind', 'PHP', 'MariaDB', 'AWS', 'Framer Motion',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-cyan-300/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-[12%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-violet-400/10"
        />
      </div>

      <div className="container-max section-padding relative z-10 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-200 text-sm"
        >
          <Sparkles size={16} className="animate-pulse" />
          En búsqueda de residencia profesional
        </motion.div>

        <h1 className="display-font text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-[0.95] flex flex-wrap justify-center gap-x-4 md:gap-x-6">
          {name.split(' ').map((word, wordIndex) => (
            <span key={word} className="inline-flex">
              {word.split('').map((char, index) => (
                <motion.span
                  key={`${word}-${char}-${index}`}
                  initial={{ opacity: 0, y: 48, rotateX: 80 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 + (wordIndex * 7 + index) * 0.03, ease: 'easeOut' }}
                  className="inline-block gradient-text"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <div className="h-14 mb-6 flex items-center justify-center">
          <p className="text-2xl md:text-4xl text-white/80">
            Desarrollador{' '}
            <span className="relative inline-grid text-left align-bottom">
              <span className="invisible font-semibold">Full Stack</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 gradient-text font-semibold"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Desarrollo web Full Stack con JavaScript, React y Next.js.
          También trabajo bases de datos SQL y NoSQL, y redes en Cisco Packet Tracer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <MagneticButton
            href={`/${encodeURIComponent('Desarrollador Web Full Stack _ Residente de Ingeniería en Sistemas.pdf')}`}
            download="Desarrollador Web Full Stack _ Residente de Ingeniería en Sistemas.pdf"
            className="button-primary"
          >
            <Download size={18} />
            Descargar CV
          </MagneticButton>
          <MagneticButton href="#contact" className="button-secondary">
            <Mail size={18} />
            Contáctame
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="flex justify-center gap-4 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/AndresLP020', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/andres-lopez-pina', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:andreslopezpina187@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -6, scale: 1.08 }}
              className="p-3 rounded-2xl card-glass hover:border-cyan-300/40"
            >
              <social.icon size={22} className="text-cyan-300" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.1 }}
          className="inline-flex flex-col items-center gap-2 text-cyan-200/70"
        >
          <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={22} />
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-md py-3">
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((tech, index) => (
            <span key={`${tech}-${index}`} className="text-sm tracking-[0.2em] uppercase text-white/40">
              {tech}
              <span className="ml-10 text-cyan-300/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
