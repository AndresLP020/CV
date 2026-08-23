'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Award, Calendar, Clock, Download, GraduationCap, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import SpotlightCard from '@/components/ui/SpotlightCard'

const certifications = [
  {
    title: 'Fundamentos de Linux',
    holder: 'Andrés López Piña',
    issuer: 'Cisco Networking Academy',
    academy: 'Tecnológico de Estudios Superiores de Jocotitlán',
    instructor: 'Adriana Reyes Nava',
    date: '13 dic 2024',
    hours: 70,
    description: 'Desarrolla habilidades fundamentales en Linux y prepárate para el examen de certificación Linux Essentials del Linux Professional Institute.',
    skills: ['Linux Essentials', 'Information Technology'],
    image: 'https://images.credly.com/size/340x340/images/e8fe3d67-2967-43d0-bc4a-7a268a37f47b/image.png',
    file: '/certificates/fundamentos-linux.pdf',
  },
  {
    title: 'CCNA: Introducción a las redes',
    holder: 'Andrés López Piña',
    issuer: 'Cisco Networking Academy',
    academy: 'Tecnológico de Estudios Superiores de Jocotitlán',
    instructor: 'M. en C.C. Juan Carlos Suárez Sánchez',
    date: '23 jun 2025',
    hours: 70,
    description: 'El primero de una serie de tres cursos para desarrollar habilidades en redes y prepararse para la certificación CCNA y trabajos de nivel asociado.',
    skills: ['CCNA: Introduction to Networks'],
    image: 'https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png',
    file: '/certificates/introduccion-redes.pdf',
  },
  {
    title: 'Introducción al Internet de las Cosas',
    holder: 'Andrés López Piña',
    issuer: 'Cisco Networking Academy',
    academy: 'Networking Academy',
    instructor: '',
    date: '6 oct 2025',
    hours: 6,
    description: 'Miles de millones de dispositivos se conectan a la red todos los días. Aprende cómo IoT está transformando digitalmente el mundo y abriendo nuevos trabajos.',
    skills: ['Introduction to IoT and Digital Transformation'],
    image: 'https://images.credly.com/size/340x340/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png',
    file: '/certificates/introduccion-iot.pdf',
  },
  {
    title: 'Introducción a la Ciberseguridad',
    holder: 'Andrés López Piña',
    issuer: 'Cisco Networking Academy',
    academy: 'Tecnológico de Estudios Superiores de Jocotitlán',
    instructor: 'Juan Alberto Antonio Velazquez',
    date: '22 oct 2025',
    hours: 6,
    description: 'Explora el campo de la ciberseguridad y por qué es una carrera preparada para el futuro.',
    skills: ['Introduction to Cybersecurity'],
    image: 'https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
    file: '/certificates/introduccion-ciberseguridad.pdf',
  },
]

type Certification = (typeof certifications)[number]

const isImage = (file: string) => /\.(png|jpe?g|webp)$/i.test(file)

const CertificateViewer = ({
  cert,
  onClose,
}: {
  cert: Certification
  onClose: () => void
}) => {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md pt-6 pb-6 px-4"
      onClick={onClose}
    >
      <div className="fixed right-4 top-5 z-[100] flex items-center gap-2 sm:right-6">
        <a
          href={cert.file}
          download
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-[#07131d] px-4 py-2.5 text-sm text-cyan-100 shadow-lg hover:bg-cyan-300/10"
        >
          <Download size={16} />
          Descargar
        </a>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#07131d] text-white shadow-lg hover:bg-white/10"
          aria-label="Cerrar certificado"
        >
          <X size={22} />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
        className="relative mt-16 w-full max-w-6xl overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#07131d]"
      >
        <div className="border-b border-white/10 px-5 py-3">
          <h3 className="text-base font-semibold text-white sm:text-lg">{cert.title}</h3>
          <p className="text-sm text-white/55">Otorgado a {cert.holder}</p>
        </div>

        <div className="relative h-[min(72vh,640px)] overflow-hidden bg-neutral-200">
          {isImage(cert.file) ? (
            <img
              src={cert.file}
              alt={`Certificado de ${cert.title} otorgado a ${cert.holder}`}
              className="h-full w-full object-contain"
            />
          ) : (
            <iframe
              src={`${cert.file}#toolbar=0&navpanes=0&view=Fit`}
              title={`Certificado de ${cert.title}`}
              className="h-full w-full border-0"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Certifications = ({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) => {
  const [selected, setSelected] = useState<Certification | null>(null)

  useEffect(() => {
    onOpenChange?.(Boolean(selected))
    return () => onOpenChange?.(false)
  }, [selected, onOpenChange])

  return (
    <section id="certifications" className="section-shell">
      <div className="container-max section-padding">
        <SectionTitle
          eyebrow="Logros"
          title="Certificaciones"
          subtitle="Certificados oficiales de Cisco Networking Academy, visibles aquí sin iniciar sesión."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Award size={16} />
            Cisco Networking Academy
          </span>
          <img
            src="https://cdn.simpleicons.org/cisco/1BA0D7"
            alt="Cisco"
            width={22}
            height={22}
            className="h-5 w-5"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.file}
              type="button"
              onClick={() => setSelected(cert)}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="block w-full text-left"
            >
              <SpotlightCard tilt className="p-6 group h-full">
                <div className="grid grid-cols-1 sm:grid-cols-[112px_1fr] gap-5 items-start">
                  <div className="relative mx-auto h-28 w-28">
                    <div className="absolute inset-0 rounded-full bg-cyan-300/20 blur-xl" />
                    <img
                      src={cert.image}
                      alt={cert.title}
                      width={112}
                      height={112}
                      className="relative h-28 w-28 object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                    />
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
                      {cert.issuer}
                    </p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-lg text-white/80">
                      Otorgado a <span className="font-semibold text-white">{cert.holder}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{cert.description}</p>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/55">
                      <span className="inline-flex items-center gap-2">
                        <Calendar size={15} className="text-cyan-300" />
                        {cert.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock size={15} className="text-cyan-300" />
                        {cert.hours} horas
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <GraduationCap size={15} className="text-cyan-300" />
                        {cert.academy}
                      </span>
                      {cert.instructor && (
                        <span className="text-white/45">Instructor: {cert.instructor}</span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm text-cyan-300">Ver certificado</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertificateViewer cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications
