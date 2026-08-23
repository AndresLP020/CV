'use client'

import { motion, useInView } from 'framer-motion'
import { Code, Coffee, Lightbulb, Target } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import SpotlightCard from '@/components/ui/SpotlightCard'

const features = [
  {
    icon: Code,
    title: 'Desarrollo Moderno',
    description: 'Utilizo las últimas tecnologías y mejores prácticas en desarrollo web.',
  },
  {
    icon: Lightbulb,
    title: 'Soluciones Creativas',
    description: 'Busco constantemente formas innovadoras de resolver problemas complejos.',
  },
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description: 'Me centro en entregar productos que superen las expectativas del cliente.',
  },
  {
    icon: Coffee,
    title: 'Aprendizaje Continuo',
    description: 'Siempre explorando nuevas tecnologías y mejorando mis habilidades.',
  },
]

const stats = [
  { value: 23, suffix: '', label: 'Años' },
  { value: 5, suffix: '+', label: 'Proyectos' },
  { value: 8, suffix: '+', label: 'Tecnologías' },
]

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const duration = 1200
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container-max section-padding">
        <SectionTitle
          eyebrow="Perfil"
          title="Sobre Mí"
          subtitle="Desarrollador Full Stack con foco en productos web, datos y redes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 opacity-70 blur-sm"
            />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20">
              <motion.img
                src="/Yo.jpg"
                alt="Andrés López Piña"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.45 }}
              />
            </div>
            <motion.div
              animate={{ y: [-10, 12, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-8 px-3 py-1.5 rounded-full text-xs card-glass text-cyan-200"
            >
              Full Stack
            </motion.div>
            <motion.div
              animate={{ y: [8, -10, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-2 bottom-10 px-3 py-1.5 rounded-full text-xs card-glass text-violet-200"
            >
              TESJO
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 leading-relaxed"
            >
              Cursando el 9.º semestre de Ingeniería en Sistemas Computacionales.
              Especializado en desarrollo web Full Stack con dominio de{' '}
              <span className="font-semibold text-white">JavaScript, HTML, React y Next.js</span>,
              complementado con sólidas capacidades en el diseño y administración de bases de datos{' '}
              <span className="font-semibold text-white">(DBA)</span> relacionales{' '}
              <span className="font-semibold text-white">(SQL)</span> y no relacionales{' '}
              <span className="font-semibold text-white">(NoSQL con MongoDB)</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              Integro además conocimientos de infraestructura en redes mediante la configuración de{' '}
              <span className="font-semibold text-white">routers y switches</span> simulados en{' '}
              <span className="font-semibold text-white">Cisco Packet Tracer</span>.
              Con perfil analítico y proactivo, busco aplicar mis conocimientos técnicos para
              optimizar procesos y construir soluciones eficientes.
            </motion.p>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass p-4 text-center"
                >
                  <p className="display-font text-3xl font-bold gradient-text">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <SpotlightCard className="p-5 h-full">
                <feature.icon className="text-cyan-300 mb-3" size={28} />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
