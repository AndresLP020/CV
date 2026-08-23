'use client'

import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orb = orbRef.current
    if (!orb || window.matchMedia('(pointer: coarse)').matches) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y
    let frame = 0
    let running = true

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const tick = () => {
      if (!running) return
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block mix-blend-screen">
      <div ref={orbRef} className="cursor-orb will-change-transform" />
    </div>
  )
}

export default CursorGlow
