'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

class index extends React.Component {
  render() {
    return (
      <main className="min-h-screen bg-gradient-hero">
        <Navigation />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      </main>
    )
  }
}

export default index