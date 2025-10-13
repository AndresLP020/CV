'use client'

import { motion } from 'framer-motion'

const index = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-neutral-dark to-neutral-gray">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Experiencia
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Mi primer año como desarrollador: proyectos reales en el sector educativo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glass p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-bright mb-4">
                1 Año de Experiencia como Desarrollador Full Stack
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Presente | Especializado en Soluciones Educativas
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Durante mi primer año como desarrollador, me he especializado en 
                <span className="text-primary-bright font-semibold"> soluciones educativas</span>, 
                desarrollando tres proyectos principales que demuestran mi versatilidad técnica.
              </p>

              <p className="text-lg">
                Creé una <span className="text-accent-turquoise font-semibold">plataforma de aprendizaje para niños con dislexia</span> con React y Node.js, 
                un <span className="text-accent-turquoise font-semibold">sistema de gestión estudiantil</span> con PHP y MariaDB para 2 planteles, 
                y un <span className="text-accent-turquoise font-semibold">sistema de servicio social</span> con React y MongoDB.
              </p>

              <p className="text-lg">
                Mi experiencia abarca desde <span className="text-primary-bright font-semibold">tecnologías tradicionales hasta frameworks modernos</span>, 
                enfocándome en crear soluciones que impacten positivamente en la educación.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'React & Next.js',
                'Node.js & MongoDB', 
                'PHP & MariaDB',
                'JavaScript & TypeScript',
                'Tailwind CSS',
                'Material UI',
                'HTML & CSS',
                'Git & GitHub'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-bright/10 text-primary-bright text-sm px-3 py-2 rounded-lg text-center border border-primary-bright/20"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default index
