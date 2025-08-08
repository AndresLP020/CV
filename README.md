# CV Moderno - Next.js

Un CV profesional moderno creado con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante con gradientes y efectos visuales atractivos
- **Animaciones Fluidas**: Transiciones suaves y efectos de hover con Framer Motion
- **Responsive**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Paleta de Colores Personalizada**: Colores azules y turquesas vibrantes
- **Secciones Completas**: Hero, Sobre Mí, Experiencia, Habilidades, Proyectos y Contacto
- **Optimizado**: Construcción con Next.js para máximo rendimiento
- **TypeScript**: Tipado estático para mayor confiabilidad

## 🎨 Paleta de Colores

- **Azul Primario**: `#4a90e2`
- **Azul Cielo**: `#87ceeb`
- **Azul Brillante**: `#00bfff`
- **Azul Claro**: `#e6f3ff`
- **Turquesa Luminoso**: `#40e0d0`
- **Negro Profundo**: `#0a0a0a`

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuentes**: Inter (Google Fonts)

## 📦 Instalación

1. Clona el repositorio:
\`\`\`bash
git clone [tu-repositorio]
cd cv-moderno
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Scripts Disponibles

- \`npm run dev\` - Inicia el servidor de desarrollo
- \`npm run build\` - Construye la aplicación para producción
- \`npm run start\` - Inicia el servidor de producción
- \`npm run lint\` - Ejecuta ESLint para revisar el código

## 📱 Secciones del CV

### 🎯 Hero
- Presentación principal con nombre y título
- Botones de acción (Descargar CV, Contacto)
- Enlaces a redes sociales
- Animaciones de fondo dinámicas

### 👤 Sobre Mí
- Descripción personal y profesional
- Características principales
- Avatar/imagen personalizable
- Elementos decorativos animados

### 💼 Experiencia
- Línea de tiempo interactiva
- Detalles de cada posición laboral
- Logros y responsabilidades
- Tecnologías utilizadas

### ⚡ Habilidades
- Categorías organizadas (Frontend, Backend, Herramientas)
- Barras de progreso animadas
- Porcentajes de dominio
- Certificaciones

### 🚀 Proyectos
- Galería de proyectos con imágenes
- Descripciones y características
- Enlaces a demos y código fuente
- Tecnologías utilizadas

### 📞 Contacto
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales
- Validación de formularios

## 🎨 Personalización

### Colores
Modifica los colores en \`tailwind.config.js\`:
\`\`\`javascript
colors: {
  primary: {
    blue: '#4a90e2',    // Tu color primario
    sky: '#87ceeb',     // Color secundario
    // ...más colores
  }
}
\`\`\`

### Contenido
Actualiza la información personal en cada componente:
- \`Hero.tsx\` - Nombre y título
- \`About.tsx\` - Descripción personal
- \`Experience.tsx\` - Experiencia laboral
- \`Skills.tsx\` - Habilidades técnicas
- \`Projects.tsx\` - Portafolio de proyectos
- \`Contact.tsx\` - Información de contacto

### Animaciones
Las animaciones están configuradas con Framer Motion y se pueden personalizar en cada componente.

## 📁 Estructura del Proyecto

\`\`\`
cv-moderno/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── Navigation.tsx   # Barra de navegación
│       ├── Hero.tsx         # Sección hero
│       ├── About.tsx        # Sobre mí
│       ├── Experience.tsx   # Experiencia
│       ├── Skills.tsx       # Habilidades
│       ├── Projects.tsx     # Proyectos
│       └── Contact.tsx      # Contacto
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts
\`\`\`

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify
1. Sube tu repositorio a GitHub
2. Conecta con Netlify
3. Configura el comando de build: \`npm run build\`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo \`LICENSE\` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, puedes:
- Abrir un issue en GitHub
- Contactarme por email: [tu-email@ejemplo.com]

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!
