'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Lightbulb, Target } from 'lucide-react'

const index = () => {
  const features = [
    {
      icon: Code,
      title: 'Desarrollo Moderno',
      description: 'Utilizo las últimas tecnologías y mejores prácticas en desarrollo web.'
    },
    {
      icon: Lightbulb,
      title: 'Soluciones Creativas',
      description: 'Busco constantemente formas innovadoras de resolver problemas complejos.'
    },
    {
      icon: Target,
      title: 'Enfoque en Resultados',
      description: 'Me centro en entregar productos que superen las expectativas del cliente.'
    },
    {
      icon: Coffee,
      title: 'Aprendizaje Continuo',
      description: 'Siempre explorando nuevas tecnologías y mejorando mis habilidades.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-neutral-dark to-neutral-gray">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soy Andrés López Piña, un desarrollador apasionado de 21 años por crear experiencias digitales excepcionales.
            Con experiencia en tecnologías modernas como React, Next.js y Node.js, me especializo en desarrollo Full Stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary-bright/20">
                <motion.img
                  src="/Yo.jpg"
                  alt="Andrés López Piña"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            {/* Elementos decorativos flotantes */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 -right-4 w-20 h-20 bg-accent-turquoise/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-bright/30 rounded-full blur-xl"
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi pasión por la tecnología comenzó desde temprana edad, y desde entonces
              he estado construyendo soluciones digitales que marcan la diferencia.
              Me encanta trabajar en proyectos desafiantes que me permitan crecer
              profesionalmente.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              A mis 21 años, he desarrollado experiencia en el stack de desarrollo moderno,
              desde frontend con React y Next.js hasta backend con Node.js. Siempre busco
              aprender nuevas tecnologías y contribuir a la comunidad de desarrolladores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card-glass p-4 hover:bg-white/15 transition-all duration-300"
                >
                  <feature.icon className="text-primary-bright mb-3" size={32} />
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default index
