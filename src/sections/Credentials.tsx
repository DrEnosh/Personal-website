import { useState } from 'react'
import { Award, ExternalLink, ShieldCheck } from 'lucide-react'

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
      logoColor: 'from-sky-600 to-blue-600',
    },
  ]

  const categories = ['All', 'AI & ML', 'Informatics', 'Business & Leadership']

  const filteredCerts = certificationsList.filter((cert) => {
    return activeCategory === 'All' || cert.category === activeCategory
  })

  return (
    <section id="credentials" className="py-16 md:py-24 border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">05 / CERTIFICATIONS</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Professional Credentials &amp; Training
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Continuous specialized training from top global academic institutions to bridge clinical expertise with AI.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-500 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg bg-gradient-to-tr ${cert.logoColor} text-white shadow-sm`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-sky-400 font-semibold">
                    {cert.issuer}
                  </h3>
                  <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {cert.details}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
