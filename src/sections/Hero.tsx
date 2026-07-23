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
    { value: '5+', label: 'Clinical Years', detail: 'Patient care insights' },
    { value: '5', label: 'Informatics Credentials', detail: 'Imperial, Oxford, Johns Hopkins' },
    { value: '4+', label: 'AI & Data Projects', detail: 'Vision, analytics & NLP' },
    { value: '2', label: 'Research Preprints', detail: 'Biomedical image models' },
  ]

  return (
    <section id="about" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Healthcare AI &amp; Informatics Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Dr. Enosh A Paulson
              </h1>
              <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                BDS | PGDMI (AI &amp; Data Science in Healthcare)
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
              Translating clinical realities into medical intelligence. Leveraging a clinical dentistry background combined with biomedical data science to design, build, and audit AI systems for hospitals, diagnostics, and health platforms.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-sky-500/20 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium text-sm transition-all cursor-pointer"
              >
                <Mail className="h-4 w-4 text-zinc-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-medium text-sm transition-all cursor-pointer"
              >
                <Download className="h-4 w-4 text-zinc-400" />
                <span>Print CV</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-5 pt-4 text-xs font-mono text-zinc-500">
              <span className="uppercase tracking-widest text-zinc-600 font-semibold">CONNECT:</span>
              <a
                href="https://linkedin.com/in/enosh-paulson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/DrEnosh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Profile Headshot Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              
              {/* Card Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
                <img
                  src={headshot}
                  alt="Dr. Enosh A Paulson"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex items-center space-x-2 text-xs">
                  <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-zinc-200 font-medium truncate">Bangalore, India &bull; Clinical AI</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-zinc-900">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-sky-400 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5 font-mono">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
