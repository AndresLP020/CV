'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import AmbientBackground from '@/components/effects/AmbientBackground'
import CursorGlow from '@/components/effects/CursorGlow'
import ScrollProgress from '@/components/effects/ScrollProgress'

const Index = () => {
  const [certificateOpen, setCertificateOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      <AmbientBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navigation hidden={certificateOpen} />
      <div className="relative z-10 isolate">
        <Hero />
        <About />
        <Skills />
        <Certifications onOpenChange={setCertificateOpen} />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default Index
