import { useInView } from '../hooks/useInView'

interface TextRevealProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
}

export default function TextReveal({
  text,
  tag: Tag = 'h2',
  className = '',
  delay = 0,
}: TextRevealProps) {
  const [ref, inView] = useInView<any>({ threshold: 0.1, once: true })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={`flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, idx) => (
        <span
          key={idx}
          style={{
            display: 'inline-block',
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 110%, 0)',
            opacity: inView ? 1 : 0,
            transition: inView
              ? `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * 0.05}s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * 0.05}s`
              : 'none',
          }}
          className="mr-[0.25em] py-[0.1em]"
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}
