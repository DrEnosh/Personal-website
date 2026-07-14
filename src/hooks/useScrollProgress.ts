import { useState, useEffect, useCallback } from 'react'

interface ScrollProgress {
  progress: number       // 0 to 1
  scrollY: number        // raw pixel value
  direction: 'up' | 'down' | null
  velocity: number       // px per frame
}

export function useScrollProgress(): ScrollProgress {
  const [state, setState] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
    direction: null,
    velocity: 0,
  })

  const update = useCallback(() => {
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0

    setState(prev => ({
      progress,
      scrollY,
      direction: scrollY > prev.scrollY ? 'down' : scrollY < prev.scrollY ? 'up' : prev.direction,
      velocity: Math.abs(scrollY - prev.scrollY),
    }))
  }, [])

  useEffect(() => {
    let rafId: number
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // Initial read

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [update])

  return state
}
