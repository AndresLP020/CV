import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio - Andrés López Piña',
  description: 'Desarrollador Full Stack con 1 año de experiencia en React, Next.js, Node.js y MongoDB',
  keywords: 'desarrollador, full stack, react, nextjs, nodejs, mongodb, typescript',
  authors: [{ name: 'Andrés López Piña' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
