'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 95 }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card-glass p-6 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-bright mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-sky text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="bg-gradient-to-r from-primary-bright to-accent-turquoise h-2 rounded-full shadow-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificaciones o logros adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Certificaciones & Logros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'React Developer',
              'AWS Cloud Practitioner',
              'Full Stack Certification',
              'UX/UI Design'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="card-glass p-4 text-center hover:bg-primary-bright/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-blue rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-white font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
