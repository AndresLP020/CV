'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      location: 'Ciudad, País',
      description: 'Lideré el desarrollo de aplicaciones web modernas utilizando React, Next.js y Node.js. Implementé arquitecturas escalables y optimicé el rendimiento de aplicaciones existentes.',
      achievements: [
        'Mejoré el rendimiento de la aplicación principal en un 40%',
        'Lideré un equipo de 5 desarrolladores junior',
        'Implementé CI/CD reduciendo tiempo de deployment en 60%'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB']
    },
    {
      company: 'Digital Innovations LLC',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      location: 'Ciudad, País',
      description: 'Desarrollé interfaces de usuario responsivas y atractivas para aplicaciones web y móviles. Colaboré estrechamente con diseñadores UX/UI para implementar experiencias de usuario excepcionales.',
      achievements: [
        'Desarrollé 15+ componentes reutilizables',
        'Implementé diseño responsive para 10+ proyectos',
        'Reduje tiempo de carga de páginas en 35%'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'JavaScript', 'Figma']
    },
    {
      company: 'StartUp Innovadora',
      position: 'Junior Developer',
      period: '2019 - 2020',
      location: 'Ciudad, País',
      description: 'Comencé mi carrera profesional contribuyendo al desarrollo de una plataforma SaaS desde cero. Aprendí mejores prácticas de desarrollo y metodologías ágiles.',
      achievements: [
        'Contribuí al desarrollo de MVP en 6 meses',
        'Implementé sistema de autenticación y autorización',
        'Desarrollé API RESTful con documentación completa'
      ],
      technologies: ['JavaScript', 'Express.js', 'MySQL', 'HTML', 'CSS']
    }
  ]

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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mi trayectoria profesional construyendo soluciones innovadoras
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-bright to-accent-turquoise rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Punto de la línea de tiempo */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 bg-gradient-blue rounded-full border-4 border-neutral-dark shadow-lg"
                  />
                </div>

                {/* Contenido */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card-glass p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-bright mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-white font-semibold mb-2">
                          <Building size={16} />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Logros Principales:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-accent-turquoise mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-bright/20 text-primary-bright text-xs rounded-full border border-primary-bright/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
