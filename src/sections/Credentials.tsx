import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

interface Certification {
  title: string
  issuer: string
  category: 'AI & ML' | 'Informatics' | 'Business & Leadership'
  link: string
  details: string
  logoColor: string
}

export default function Credentials() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const certificationsList: Certification[] = [
    {
      title: 'Introduction to Digital Health',
      issuer: 'Imperial College London',
      category: 'Informatics',
      link: 'https://coursera.org',
      details: 'Key topics: Telemedicine, electronic medical records evaluation, digital health diagnostics validation, and global regulatory compliance.',
      logoColor: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Machine Learning for Healthcare Professionals',
      issuer: 'Northeastern University London',
      category: 'AI & ML',
      link: 'https://coursera.org',
      details: 'Key topics: Clinical predictive analytics, diagnostic machine learning architectures (CNNs), data cleansing pipelines, and clinical ethics.',
      logoColor: 'from-teal-600 to-emerald-600',
    },
    {
      title: 'Mini MBA in Artificial Intelligence',
      issuer: 'AI Business & Leadership Academy',
      category: 'Business & Leadership',
      link: 'https://coursera.org',
      details: 'Key topics: AI integration strategies, hospital management metrics, machine learning cost models, and tech roadmap forecasting.',
      logoColor: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Oxford Generative & Agentic AI',
      issuer: 'University of Oxford',
      category: 'AI & ML',
      link: 'https://ox.ac.uk',
      details: 'Key topics: Large Language Models (LLMs), prompt-engineering safety standards, autonomous agents, and auditing LLM hallucinations.',
      logoColor: 'from-amber-600 to-red-600',
    },
    {
      title: 'Johns Hopkins Health Informatics',
      issuer: 'Johns Hopkins University',
      category: 'Informatics',
      link: 'https://jhu.edu',
      details: 'Key topics: EHR systems, medical databases (SQL), semantic terminologies (SNOMED-CT, LOINC, ICD-10), and decision support frameworks.',
      logoColor: 'from-cyan-600 to-blue-600',
    },
  ]

  const categories = ['All', 'AI & ML', 'Informatics', 'Business & Leadership']

  const filteredCerts = certificationsList.filter((cert) => {
    return activeCategory === 'All' || cert.category === activeCategory
  })

  return (
    <section id="certifications" className="section-padding bg-void relative overflow-hidden border-t border-ink-900/60">
      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-narrow">
        <ScrollReveal direction="up">
          <span className="text-section-label">05 / VALIDATIONS</span>
          <h2 className="text-display-lg text-white mt-3 mb-16 max-w-2xl">
            Specialized Informatics Credentials.
          </h2>
        </ScrollReveal>

        {/* Categories Underlined Toggles */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-wrap items-center gap-6 border-b border-ink-900 pb-4 mb-12 text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono tracking-widest uppercase pb-2 relative cursor-pointer ${
                activeCategory === cat ? 'text-cyan-glow font-bold' : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </ScrollReveal>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl border border-ink-900 bg-ink-900/10 hover:border-cyan-glow/30 flex flex-col justify-between text-left transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-tr ${cert.logoColor} text-white`}>
                      <Award className="h-4.5 w-4.5" />
                    </div>

                    <div className="flex items-center text-cyan-glow text-[9px] font-mono tracking-wider space-x-1 uppercase">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <h3 className="text-xs font-mono font-bold tracking-wider text-white">
                    {cert.issuer}
                  </h3>
                  <h4 className="text-sm font-semibold text-ink-300 tracking-tight leading-snug mt-1.5 mb-4">
                    {cert.title}
                  </h4>
                </div>

                <div className="space-y-4 pt-3 border-t border-ink-900/60">
                  <p className="text-xs text-ink-450 leading-relaxed font-light">
                    {cert.details}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-mono tracking-widest text-cyan-glow hover:text-cyan-300 uppercase"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
