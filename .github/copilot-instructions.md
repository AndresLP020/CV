<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instrucciones de Copilot para CV Moderno

Este es un proyecto de CV/portafolio moderno construido con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Contexto del Proyecto

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con clases personalizadas
- **Animaciones**: Framer Motion para transiciones fluidas
- **Iconos**: Lucide React
- **Estructura**: Componentes modulares en `/src/components/`

## Paleta de Colores Personalizada

Utiliza siempre esta paleta de colores definida en `tailwind.config.js`:

- `primary-blue`: #4a90e2 (Azul Primario)
- `primary-sky`: #87ceeb (Azul Cielo)  
- `primary-bright`: #00bfff (Azul Brillante)
- `primary-light`: #e6f3ff (Azul Claro)
- `accent-turquoise`: #40e0d0 (Turquesa Luminoso)
- `neutral-dark`: #0a0a0a (Negro Profundo)
- `neutral-gray`: #2d3748 (Gris oscuro)

## Clases CSS Personalizadas

Utiliza estas clases definidas en `globals.css`:

- `.gradient-text`: Texto con gradiente de colores
- `.card-glass`: Efecto de cristal con backdrop blur
- `.button-primary`: Botón principal con gradiente
- `.button-secondary`: Botón secundario con borde
- `.section-padding`: Padding estándar para secciones
- `.container-max`: Contenedor con ancho máximo

## Patrones de Animación

Para animaciones con Framer Motion:

1. **Entrada de secciones**: Usar `initial={{ opacity: 0, y: 50 }}` y `whileInView={{ opacity: 1, y: 0 }}`
2. **Hover effects**: Usar `whileHover={{ scale: 1.05 }}`
3. **Stagger animations**: Usar `staggerChildren` para elementos múltiples
4. **Transiciones**: Duración estándar de 0.8s con easing 'easeOut'

## Estructura de Componentes

Cada componente debe:

- Ser un componente funcional con 'use client'
- Incluir motion de framer-motion
- Usar iconos de lucide-react
- Implementar diseño responsive (mobile-first)
- Tener animaciones de entrada y hover

## Responsive Design

- Mobile: Base (sin prefijo)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)

## Convenciones de Código

1. Usar arrow functions para componentes
2. Desestructurar props en la definición
3. Agrupar imports: React -> Third party -> Local
4. Usar TypeScript interfaces para props complejas
5. Comentar secciones principales del código

## Optimizaciones

- Usar `viewport={{ once: true }}` en animaciones para performance
- Implementar lazy loading donde sea apropiado
- Minimizar re-renders con useCallback/useMemo cuando sea necesario
- Usar Next.js Image component para imágenes

Cuando generes código, asegúrate de seguir estos patrones y mantener la consistencia visual y funcional del proyecto.
