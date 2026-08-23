'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import SpotlightCard from '@/components/ui/SpotlightCard'
import MagneticButton from '@/components/ui/MagneticButton'

const projects = [
  {
    title: 'VENDAPP - Sistema POS y E-commerce con IA',
    description: 'Sistema de punto de venta y tienda en línea con inventario en tiempo real, pagos con Stripe y un chatbot culinario que recomienda recetas y genera listas de compras según el stock disponible.',
      image: '/Vendapp.png',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'MongoDB Atlas', 'Gemini', 'Stripe'],
    features: [
      'POS y e-commerce con inventario sincronizado en tiempo real',
      'Pagos seguros integrados con la API de Stripe',
      'Chatbot culinario con recomendaciones y listas de compras',
      'Cruce de ingredientes disponibles contra el inventario',
    ],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completado',
    featured: true,
  },
  {
    title: 'LigaMaster - Sistema SaaS de Gestión Deportiva',
    description: 'Software como servicio para administrar eventos deportivos comunitarios, con interfaces responsivas y una arquitectura multi-inquilino que organiza de forma eficiente los servicios del backend.',
      image: '/LigaMaster.png',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'MongoDB Atlas'],
    features: [
      'SaaS escalable para control de eventos deportivos',
      'Interfaces responsivas para móvil y escritorio',
      'Arquitectura multi-tenant en el backend',
      'Administración centralizada de ligas y comunidades',
    ],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completado',
    featured: true,
  },
  {
    title: 'Plataforma de aprendizaje para niños con dislexia',
    description: 'Plataforma de aprendizaje desarrollada con React, Tailwind, Node.js, y MongoDB. Incluye panel inicial de información para los usuarios, test y ejercicios especiales para niños con dislexia.',
    image: '/DislexiaKids.png',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Panel inicial de información para usuarios',
      'Test especializados para diagnóstico',
      'Ejercicios adaptativos para dislexia',
      'Seguimiento de progreso personalizado',
    ],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completado',
    featured: false,
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
      'Dashboard con estadísticas de aprobados/reprobados',
    ],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completado',
    featured: false,
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
      'Gestión integral de pasantes y supervisores',
    ],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completado',
    featured: false,
  },
]

const ProjectCard = ({
  project,
  index,
  large = false,
}: {
  project: (typeof projects)[number]
  index: number
  large?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={large ? 'h-full' : ''}
    >
      <SpotlightCard tilt className="group h-full">
        <div className="relative h-56 md:h-64 shine-sweep overflow-hidden bg-gradient-to-br from-indigo-500/40 via-cyan-400/20 to-violet-500/30">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center px-6 text-center relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl"
              />
              <span className="relative display-font text-xl font-bold text-white/90">{project.title}</span>
            </div>
          )}

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/15 text-emerald-300 border border-emerald-300/30">
              {project.status}
            </span>
          </div>

          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-cyan-400 text-neutral-dark"
            >
              <ExternalLink size={18} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-black/70 text-white border border-white/20"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">{project.description}</p>
          <ul className="space-y-1 mb-4">
            {project.features.slice(0, 2).map((feature) => (
              <li key={feature} className="text-white/45 text-xs flex items-start gap-2">
                <span className="text-cyan-300 mt-1">✦</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-cyan-300/10 text-cyan-200 text-xs rounded-full border border-cyan-300/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

const Projects = () => {
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-shell">
      <div className="container-max section-padding">
        <SectionTitle
          eyebrow="Portfolio"
          title="Proyectos"
          subtitle="Una muestra de los sistemas que he construido, desde e-commerce con IA hasta soluciones educativas"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} large />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 2} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">¿Quieres ver más proyectos o colaborar en algo nuevo?</p>
          <MagneticButton
            href="https://github.com/AndresLP020"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            <Github size={18} />
            Ver más en GitHub
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
