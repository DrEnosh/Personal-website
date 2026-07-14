import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import headshot from '../assets/headshot.png'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const stats = [
    { value: '5+', label: 'Years Clinical Foundation', detail: 'Patient-care insights' },
    { value: '5', label: 'Informatics Credentials', detail: 'Imperial, Oxford, Johns Hopkins' },
    { value: '4+', label: 'AI & Data Projects', detail: 'Vision, dashboards & NLP' },
    { value: '2', label: 'Research Preprints', detail: 'Biomedical image analysis' },
  ]

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/15 dark:bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-700 dark:text-teal-400"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Dentist &bull; Healthcare AI Researcher &bull; Informatics Innovator</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-navy-900 dark:text-white leading-tight">
                Dr. Enosh A. Paulson
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">
                BDS | PGDMI (AI & Data Science in Healthcare)
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-sans"
            >
              Translating clinical realities into medical intelligence. Leveraging a clinical dentistry background combined with biomedical data science to design, build, and audit AI systems for hospitals, diagnostics, and health platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-navy-900 hover:bg-slate-50 dark:hover:bg-navy-800 text-navy-900 dark:text-white border border-slate-200 dark:border-navy-800 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                title="Print Portfolio as CV"
              >
                Print CV
                <Download className="ml-2 h-4 w-4" />
              </button>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200/60 dark:border-navy-900/60"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl font-extrabold text-navy-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-navy-450 italic">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4 pt-4 w-fit"
            >
              <span className="text-[10px] font-bold text-slate-400 dark:text-navy-500 tracking-wider">CONNECT:</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-600 dark:text-navy-400 dark:hover:text-teal-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-600 dark:text-navy-400 dark:hover:text-teal-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Profile Headshot Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Outer glowing gradient rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/40 to-cyan-500/40 rounded-2xl transform rotate-6 scale-102 blur-md" />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-cyan-500 rounded-2xl transform rotate-3" />
              
              {/* Image Container */}
              <div className="absolute inset-0.5 bg-white dark:bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/20 dark:border-navy-800/20">
                <img
                  src={headshot}
                  alt="Dr. Enosh A. Paulson"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-navy-900 p-3 rounded-lg shadow-lg border border-slate-100 dark:border-navy-800 hidden sm:flex items-center space-x-2">
                <div className="h-2.5 w-2.5 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-navy-900 dark:text-white">Active Research Track</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scrolling Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 cursor-pointer no-print" onClick={() => scrollToSection('#about-details')}>
        <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-navy-500 uppercase">Explore</span>
        <div className="w-5 h-8 border-2 border-slate-300 dark:border-navy-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  )
}
