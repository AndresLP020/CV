'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#certifications', label: 'Certificaciones' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

const Navigation = ({ hidden = false }: { hidden?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
      let current = '#hero'
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.slice(1))
        if (section && section.getBoundingClientRect().top <= 140) {
          current = item.href
        }
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${hidden ? 'pointer-events-none' : ''}`}
    >
      <div className="container-max section-padding pt-4">
        <div
          className={`flex items-center justify-between h-16 px-4 md:px-6 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-black/45 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_-20px_rgba(34,211,238,0.45)]'
              : 'bg-transparent'
          }`}
        >
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04 }}
            className="display-font text-xl font-bold gradient-text"
          >
            ALP
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.06 }}
                className={`relative px-3.5 py-2 text-sm rounded-full transition-colors duration-300 ${
                  active === item.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-cyan-300/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              className="md:hidden mt-2 overflow-hidden rounded-2xl bg-black/70 backdrop-blur-2xl border border-white/10"
            >
              <div className="py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
