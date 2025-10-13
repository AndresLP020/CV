'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const index = () => {
  const projects = [
    {
      title: 'Plataforma de aprendizaje para niños con dislexia',
      description: 'Plataforma de aprendizaje desarrollada con React, Tailwind, Node.js, y MongoDB. Incluye panel inicial de información para los usuarios, test y ejercicios especiales para niños con dislexia.',
      image: '/DislexiaKids.png',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      features: [
        'Panel inicial de información para usuarios',
        'Test especializados para diagnóstico',
        'Ejercicios adaptativos para dislexia',
        'Seguimiento de progreso personalizado'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completado'
    },
    {
      title: 'Implementación gráfica para el manejo de información de forma eficiente',
      description: 'Sitio web para el control de información de alumnos de nuevo ingreso de 2 planteles. Incluye diversas opciones de filtrado de información entre ellas se puede observar por carreras, promedio, aprobados, reprobados y planteles, desarrollado con HTML, CSS, JavaScript, PHP, MariaDB.',
      image: '/ImplementacionGrafica.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB'],
      features: [
        'Control de información de alumnos de nuevo ingreso',
        'Filtrado por carreras y planteles',
        'Análisis de promedios y rendimiento académico',
        'Dashboard con estadísticas de aprobados/reprobados'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completado'
    },
    {
      title: 'Sistema integral de servicio social',
      description: 'Página web de gestión de horas realizadas por los pasantes. Inicio de sesión con correo institucional, chequeo automático de horas, actividades realizadas que se pueden consultar por día gracias a un calendario interactivo. Desarrollado con React, Material UI, JavaScript y MongoDB.',
      image: '/ControlDeServicioSocial.png',
      technologies: ['React', 'JavaScript', 'Material UI', 'MongoDB'],
      features: [
        'Inicio de sesión con correo institucional',
        'Chequeo automático de horas de servicio',
        'Calendario interactivo para consulta de actividades',
        'Gestión integral de pasantes y supervisores'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completado'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-neutral-gray to-neutral-dark">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Proyectos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una muestra de los proyectos que he desarrollado, desde aplicaciones web hasta soluciones empresariales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-glass overflow-hidden hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 bg-gradient-blue overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
                
                {/* Estado del proyecto */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completado' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Overlay con acciones */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-primary-bright rounded-full text-white hover:bg-primary-bright/80 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-neutral-dark rounded-full text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-bright transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Características principales */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-accent-turquoise mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-bright/10 text-primary-bright text-xs rounded border border-primary-bright/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            ¿Quieres ver más proyectos o colaborar en algo nuevo?
          </p>
          <motion.a
            href="https://github.com/AndresLP020"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            Ver más en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default index
