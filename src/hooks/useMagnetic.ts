import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

export function useMagnetic(ref: RefObject<HTMLElement | null>, strength = 0.3) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const { left, top, width, height } = element.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      // If mouse is within active zone (e.g., 80px radius around center)
      const distance = Math.hypot(distanceX, distanceY)
      const activeRadius = Math.max(width, height, 80)

      if (distance < activeRadius) {
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength,
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    const element = ref.current
    if (element) {
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (element) {
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [ref, strength])

  return position
}
