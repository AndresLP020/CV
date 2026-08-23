'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react'
import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import SpotlightCard from '@/components/ui/SpotlightCard'
import MagneticButton from '@/components/ui/MagneticButton'
import {
  GitHubLogo,
  GmailLogo,
  LinkedInLogo,
  LocationLogo,
  PhoneLogo,
  WhatsAppLogo,
} from '@/components/icons/BrandLogos'

const EMAIL = 'andreslopezpina187@gmail.com'
const PHONE = '+52 712 153 7999'
const PHONE_TEL = '+527121537999'

const channels = [
  {
    label: 'WhatsApp',
    value: PHONE,
    hint: 'Respuesta más rápida',
    href: `https://wa.me/${PHONE_TEL}`,
    logo: WhatsAppLogo,
    logoClass: 'text-white',
    well: 'bg-[#25D366] shadow-[0_10px_24px_-8px_rgba(37,211,102,0.7)]',
    glow: 'hover:border-[#25D366]/40 hover:shadow-[0_0_36px_rgba(37,211,102,0.22)]',
    featured: true,
  },
  {
    label: 'Gmail',
    value: EMAIL,
    hint: 'Correo profesional',
    href: `mailto:${EMAIL}`,
    logo: GmailLogo,
    logoClass: '',
    well: 'bg-white shadow-[0_10px_24px_-8px_rgba(234,67,53,0.45)]',
    glow: 'hover:border-white/30 hover:shadow-[0_0_36px_rgba(234,67,53,0.18)]',
    featured: true,
    copy: EMAIL,
  },
  {
    label: 'GitHub',
    value: 'AndresLP020',
    hint: 'Código y proyectos',
    href: 'https://github.com/AndresLP020',
    logo: GitHubLogo,
    logoClass: 'text-white',
    well: 'bg-[#161B22] shadow-[0_10px_24px_-8px_rgba(255,255,255,0.2)]',
    glow: 'hover:border-white/25 hover:shadow-[0_0_32px_rgba(255,255,255,0.12)]',
  },
  {
    label: 'LinkedIn',
    value: 'Andrés López Piña',
    hint: 'Perfil profesional',
    href: 'https://linkedin.com/in/andres-lopez-pina',
    logo: LinkedInLogo,
    logoClass: 'text-white',
    well: 'bg-[#0A66C2] shadow-[0_10px_24px_-8px_rgba(10,102,194,0.7)]',
    glow: 'hover:border-[#0A66C2]/45 hover:shadow-[0_0_32px_rgba(10,102,194,0.28)]',
  },
  {
    label: 'Teléfono',
    value: PHONE,
    hint: 'Llamada directa',
    href: `tel:${PHONE_TEL}`,
    logo: PhoneLogo,
    logoClass: 'text-cyan-100',
    well: 'bg-gradient-to-br from-cyan-500 to-sky-600 shadow-[0_10px_24px_-8px_rgba(6,182,212,0.55)]',
    glow: 'hover:border-cyan-300/35 hover:shadow-[0_0_32px_rgba(34,211,238,0.2)]',
  },
  {
    label: 'Ubicación',
    value: 'Rayón #96',
    hint: '06200 Cuauhtémoc, CDMX',
    href: 'https://www.google.com/maps/search/Ray%C3%B3n+96,+06200+Cuauht%C3%A9moc,+Ciudad+de+M%C3%A9xico',
    logo: LocationLogo,
    logoClass: 'text-violet-100',
    well: 'bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_10px_24px_-8px_rgba(167,139,250,0.55)]',
    glow: 'hover:border-violet-300/35 hover:shadow-[0_0_32px_rgba(167,139,250,0.22)]',
    multiline: true,
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const body = [
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`

    window.setTimeout(() => {
      setIsSubmitting(false)
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 700)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const copyEmail = async (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="section-shell pb-28">
      <div className="container-max section-padding">
        <SectionTitle
          eyebrow="Hablemos"
          title="Contáctame"
          subtitle="Elige el canal que prefieras o déjame un mensaje. Estoy disponible para residencia profesional y proyectos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
            >
              <div>
                <p className="text-white font-medium">Andrés López Piña</p>
                <p className="text-white/45 text-sm">Desarrollador Full Stack</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Disponible
              </span>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {channels.map((item, index) => {
                const Logo = item.logo
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:p-5 transition-shadow ${item.glow} ${
                      item.featured ? 'col-span-2 sm:col-span-1' : ''
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.well}`}>
                        <Logo className={`h-7 w-7 ${item.logoClass}`} />
                      </div>
                      <div className="flex items-center gap-1">
                        {'copy' in item && item.copy ? (
                          <button
                            type="button"
                            onClick={copyEmail}
                            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
                            aria-label="Copiar correo"
                          >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                          </button>
                        ) : null}
                        <ArrowUpRight
                          size={16}
                          className="mt-1 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80"
                        />
                      </div>
                    </div>
                    <p className="relative mt-4 text-white font-semibold">{item.label}</p>
                    <p className={`relative mt-1 text-sm text-white/55 ${'multiline' in item && item.multiline ? 'leading-relaxed' : 'truncate'}`}>
                      {item.value}
                    </p>
                    <p className={`relative mt-2 text-xs text-white/30 ${'multiline' in item && item.multiline ? 'leading-relaxed' : 'uppercase tracking-[0.16em]'}`}>
                      {item.hint}
                    </p>
                  </motion.a>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 md:p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Mensaje directo</p>
                    <h3 className="display-font text-2xl md:text-3xl font-bold text-white mt-1">
                      Envíame un mensaje
                    </h3>
                  </div>
                  {copied ? (
                    <span className="text-xs text-emerald-300">Correo copiado</span>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Nombre</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-glow"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-glow"
                      placeholder="tu@email.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">Asunto</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-glow"
                    placeholder="Residencia, colaboración o proyecto"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">Mensaje</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="input-glow resize-none"
                    placeholder="Cuéntame sobre la vacante, el proyecto o la idea..."
                  />
                </label>

                <div className="flex flex-col sm:flex-row gap-3">
                  <MagneticButton type="submit" disabled={isSubmitting} className="button-primary w-full sm:flex-1">
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                        />
                        Abriendo correo...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {sent ? 'Listo, revisa tu correo' : 'Enviar mensaje'}
                      </>
                    )}
                  </MagneticButton>
                  <MagneticButton
                    href={`https://wa.me/${PHONE_TEL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary w-full sm:w-auto"
                  >
                    <WhatsAppLogo className="h-5 w-5 text-[#25D366]" />
                    WhatsApp
                  </MagneticButton>
                </div>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>

        <p className="text-center text-white/30 text-sm mt-16">
          © {new Date().getFullYear()} Andrés López Piña. Hecho con Next.js y mucha curiosidad.
        </p>
      </div>
    </section>
  )
}

export default Contact
