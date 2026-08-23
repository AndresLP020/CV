'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Languages, Wrench } from 'lucide-react'
import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import SpotlightCard from '@/components/ui/SpotlightCard'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    accent: 'from-cyan-400/30 to-transparent',
    skills: ['React', 'Next.js', 'HTML', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
  },
  {
    title: 'Lenguajes',
    icon: Languages,
    accent: 'from-violet-400/30 to-transparent',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'PHP', 'C', 'C++'],
  },
  {
    title: 'Backend & Datos',
    icon: Database,
    accent: 'from-teal-400/30 to-transparent',
    skills: ['Node.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    title: 'Herramientas',
    icon: Wrench,
    accent: 'from-pink-400/30 to-transparent',
    skills: ['Git', 'GitHub', 'AWS', 'Stripe', 'Gemini', 'Vercel', 'Netlify', 'Figma', 'VS Code'],
  },
]

const skillLogos: Record<string, string> = {
  React: 'https://cdn.simpleicons.org/react/61DAFB',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
  HTML: 'https://cdn.simpleicons.org/html5/E34F26',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  Bootstrap: 'https://cdn.simpleicons.org/bootstrap/7952B3',
  'Framer Motion': 'https://cdn.simpleicons.org/framer/0055FF',
  TypeScript: 'https://cdn.simpleicons.org/typescript/3178C6',
  JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  Python: 'https://cdn.simpleicons.org/python/3776AB',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  PHP: 'https://cdn.simpleicons.org/php/777BB4',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/47A248',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql/4169E1',
  MySQL: 'https://cdn.simpleicons.org/mysql/4479A1',
  SQL: 'https://cdn.simpleicons.org/sqlite/003B57',
  Git: 'https://cdn.simpleicons.org/git/F05032',
  GitHub: 'https://cdn.simpleicons.org/github/FFFFFF',
  AWS: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg',
  Stripe: 'https://cdn.simpleicons.org/stripe/635BFF',
  Gemini: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
  Vercel: 'https://cdn.simpleicons.org/vercel/FFFFFF',
  Netlify: 'https://cdn.simpleicons.org/netlify/00C7B7',
  Figma: 'https://cdn.simpleicons.org/figma/F24E1E',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
}

const lightLogos = new Set(['AWS'])

const SkillBadge = ({ name }: { name: string }) => {
  const [failed, setFailed] = useState(false)
  const src = skillLogos[name]

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-cyan-300/40 hover:text-cyan-100 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-colors">
      {src && !failed ? (
        <img
          src={src}
          alt=""
          width={16}
          height={16}
          className={`h-4 w-4 object-contain ${lightLogos.has(name) ? 'brightness-0 invert' : ''}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-cyan-300/20 text-[9px] font-bold text-cyan-200">
          {name.charAt(0)}
        </span>
      )}
      {name}
    </span>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="container-max section-padding">
        <SectionTitle
          eyebrow="Stack"
          title="Habilidades"
          subtitle="Tecnologías y herramientas que uso para crear productos con impacto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
            >
              <SpotlightCard tilt className="p-6 h-full">
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${category.accent}`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <category.icon size={20} className="text-cyan-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.04 }}
                        whileHover={{ scale: 1.08, y: -3 }}
                      >
                        <SkillBadge name={skill} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
