import { useInView } from '../hooks/useInView'

interface SectionDividerProps {
  label?: string
  align?: 'left' | 'right' | 'center'
}

export default function SectionDivider({ label, align = 'left' }: SectionDividerProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true })

  return (
    <div ref={ref} className="w-full select-none py-16 no-print pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {align !== 'right' && (
          <div
            style={{
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left center',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
            className="h-[1px] bg-gradient-to-r from-cyan-glow/30 to-transparent flex-grow"
          />
        )}
        
        {label && (
          <span
            style={{
              opacity: inView ? 0.35 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
            className="text-[10px] font-mono tracking-widest text-cyan-glow uppercase whitespace-nowrap"
          >
            {label}
          </span>
        )}

        {align !== 'left' && (
          <div
            style={{
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'right center',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
            className="h-[1px] bg-gradient-to-l from-cyan-glow/30 to-transparent flex-grow"
          />
        )}
      </div>
    </div>
  )
}
