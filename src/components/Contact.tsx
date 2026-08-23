'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import SpotlightCard from '@/components/ui/SpotlightCard'
import MagneticButton from '@/components/ui/MagneticButton'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1600)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andreslopezpina187@gmail.com',
      href: 'mailto:andreslopezpina187@gmail.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 712 153 7999',
      href: 'tel:+527121537999',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+52 712 153 7999',
      href: 'https://wa.me/527121537999',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'México',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/AndresLP020' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/andres-lopez-pina' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/527121537999' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/andreslopez' },
  ]

  return (
    <section id="contact" className="section-shell pb-28">
      <div className="container-max section-padding">
        <SectionTitle
          eyebrow="Hablemos"
          title="Contáctame"
          subtitle="¿Tienes un proyecto en mente? Convirtamos esa idea en un producto memorable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="block"
              >
                <SpotlightCard className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-cyan-300 font-semibold">{item.label}</p>
                      <p className="text-white/70">{item.value}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.a>
            ))}

            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.08 }}
                  className="p-3 card-glass text-cyan-200"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="display-font text-2xl font-bold text-white mb-2">Envíame un mensaje</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-glow"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-glow"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 font-medium mb-2">Asunto *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-glow"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-medium mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-glow resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>
                <MagneticButton type="submit" disabled={isSubmitting} className="button-primary w-full">
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {sent ? '¡Mensaje listo!' : 'Enviar Mensaje'}
                    </>
                  )}
                </MagneticButton>
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
