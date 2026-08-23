'use client'

import { useRef, useState } from 'react'

type SpotlightCardProps = {
  children: React.ReactNode
  className?: string
  tilt?: boolean
}

const SpotlightCard = ({ children, className = '', tilt = false }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false })

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    setSpot({ x, y, active: true })

    if (tilt) {
      const rotateY = ((x / rect.width) - 0.5) * 12
      const rotateX = (0.5 - (y / rect.height)) * 12
      node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
  }

  const onLeave = () => {
    setSpot((prev) => ({ ...prev, active: false }))
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden card-glass transition-transform duration-200 will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(260px circle at ${spot.x}px ${spot.y}px, rgba(34,211,238,0.16), transparent 55%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

export default SpotlightCard
