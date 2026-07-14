import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

interface InViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: InViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  const [inView, setInView] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting && once) {
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => {
      if (element && !once) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
