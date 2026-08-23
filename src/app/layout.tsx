import type { Metadata, Viewport } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Portafolio - Andrés López Piña',
  description: 'Estudiante de Ingeniería en Sistemas Computacionales, desarrollador Full Stack en búsqueda de residencia profesional.',
  keywords: 'desarrollador, full stack, react, nextjs, nodejs, mongodb, typescript',
  authors: [{ name: 'Andrés López Piña' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${syne.variable} font-body`}>{children}</body>
    </html>
  )
}
