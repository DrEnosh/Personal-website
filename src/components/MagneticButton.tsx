import { useRef } from 'react'
import type { ReactNode } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  title?: string
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  title,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const offset = useMagnetic(buttonRef, 0.25)

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-glow to-cyan-500 hover:from-cyan-400 hover:to-cyan-500 text-ink-950 font-bold border border-transparent shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]'
      case 'secondary':
        return 'bg-ink-900/40 text-ink-100 font-semibold border border-ink-800 hover:border-cyan-glow/40 hover:text-white backdrop-blur-sm'
      case 'ghost':
        return 'bg-transparent text-ink-300 hover:text-cyan-glow font-medium border border-transparent'
    }
  }

  const transformStyle = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: offset.x === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={transformStyle}
      title={title}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer select-none active:scale-95 ${getVariantStyles()} ${className}`}
    >
      <span className="flex items-center pointer-events-none">{children}</span>
    </button>
  )
}
