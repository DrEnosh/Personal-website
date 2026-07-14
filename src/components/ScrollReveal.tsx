import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05, once: true })

  const getDirectionStyles = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8'
      case 'down':
        return '-translate-y-8'
      case 'left':
        return 'translate-x-8'
      case 'right':
        return '-translate-x-8'
      default:
        return ''
    }
  }

  const styles = {
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  }

  return (
    <div
      ref={ref}
      style={styles}
      className={`${className} transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${getDirectionStyles()}`
      }`}
    >
      {children}
    </div>
  )
}
