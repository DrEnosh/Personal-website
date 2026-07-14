import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Award, ExternalLink, ShieldCheck, Search } from 'lucide-react'

interface Certification {
  title: string
  issuer: string
  category: 'AI & ML' | 'Informatics' | 'Business & Leadership'
  link: string
  details: string
  logoColor: string
}

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'title' | 'issuer'>('title')

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

  const filteredCerts = certificationsList
    .filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory =
        activeCategory === 'All' || cert.category === activeCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      } else {
        return a.issuer.localeCompare(b.issuer)
      }
    })

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-navy-900 border-b border-slate-200/40 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Professional Credentials"
          subtitle="Continuous specialized training from top global academic institutions to bridge clinical expertise with technical AI audits."
          center
        />

        {/* Controls: Search, Filter tabs & Sorting */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 max-w-5xl mx-auto mb-10 text-left">
          {/* Search bar */}
          <div className="relative flex-grow max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <Search className="h-4.5 w-4.5" />
            </span>
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:text-white"
            />
          </div>

          {/* Filtering Tabs & Sort dropdown */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500'
                      : 'bg-white border-slate-200 text-slate-500 dark:bg-navy-900 dark:border-navy-800 dark:text-navy-450'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-slate-400 dark:text-navy-500 font-bold uppercase text-[10px]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'title' | 'issuer')}
                className="p-1.5 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-850 focus:outline-none text-xs font-semibold text-slate-600 dark:text-slate-350 cursor-pointer"
              >
                <option value="title">Credential Title</option>
                <option value="issuer">Issuer Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-900/50 shadow-sm hover:shadow-md hover:border-teal-500/20 dark:hover:border-teal-500/20 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Stylized Logo Badge */}
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-tr ${cert.logoColor} text-white flex items-center justify-center shadow-sm`}>
                      <Award className="h-5.5 w-5.5" />
                    </div>

                    <div className="flex items-center text-teal-600 dark:text-teal-400 text-[10px] font-bold uppercase tracking-wider space-x-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <h3 className="text-md font-bold text-navy-900 dark:text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-navy-400 mb-4">
                    {cert.issuer}
                  </h4>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-200/50 dark:border-navy-900/60">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cert.details}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-350 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredCerts.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-400 dark:text-navy-500">
              No certifications found matching search query.
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
