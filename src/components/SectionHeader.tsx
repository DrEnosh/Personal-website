import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy-900 dark:text-white">
          {title}
        </h2>
        
        {subtitle && (
          <p className="mt-2 text-md md:text-lg text-slate-500 dark:text-navy-400 font-sans max-w-2xl">
            {subtitle}
          </p>
        )}

        <div className={`mt-3 h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full ${center ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  )
}
