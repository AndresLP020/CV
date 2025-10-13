/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones básicas para producción
  swcMinify: true,
  
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
  },

  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
