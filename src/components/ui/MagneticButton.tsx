'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

type MagneticButtonProps = {
  children: React.ReactNode
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  target?: string
  rel?: string
  download?: boolean | string
}

const MagneticButton = ({
  children,
  className = '',
  href,
  type = 'button',
  onClick,
  disabled,
  target,
  rel,
  download,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    node.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 transition-transform duration-200 will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )

  const isFull = className.includes('w-full')
  const wrapperClass = isFull ? 'w-full' : 'inline-block'

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} onClick={onClick} className={wrapperClass}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${wrapperClass} disabled:opacity-50`}>
      {inner}
    </button>
  )
}

export default MagneticButton
