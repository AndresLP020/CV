'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'

const index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-bright rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-turquoise rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-max section-padding text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Andrés López Piña</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl text-primary-sky mb-6"
            variants={itemVariants}
          >
            Desarrollador Full Stack
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Desarrollador Full Stack de 21 años, creando experiencias digitales excepcionales con tecnologías modernas.
            Especializado en React, Next.js, Node.js y diseño UX/UI innovador.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(64, 224, 208, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="button-primary flex items-center gap-2"
          >
            <Download size={20} />
            Descargar CV
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-secondary flex items-center gap-2"
          >
            <Mail size={20} />
            Contáctame
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, href: 'https://github.com/AndresLP020', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/andres-lopez-pina', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:andreslopezpina187@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 card-glass hover:bg-primary-bright/20 transition-all duration-300"
            >
              <social.icon size={24} className="text-primary-bright" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown size={32} className="text-primary-bright" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default index
