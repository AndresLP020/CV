'use client'

import { motion } from 'framer-motion'

const index = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'HTML' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Framer Motion' }
      ]
    },
    {
      title: 'Lenguajes de Programación',
      skills: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'PHP' },
        { name: 'C' },
        { name: 'C++' }
      ]
    },
    {
      title: 'Backend & Bases de Datos',
      skills: [
        { name: 'Node.js' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'SQL' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'AWS' },
        { name: 'Vercel' },
        { name: 'Netlify' },
        { name: 'Figma' },
        { name: 'VS Code' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-neutral-gray to-neutral-dark">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Habilidades
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones excepcionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="card-glass p-6 hover:bg-white/15 transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-xl font-bold text-primary-bright mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="text-white font-medium p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm text-center"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default index
