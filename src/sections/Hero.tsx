import { useRef } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import NeuralCanvas from '../components/NeuralCanvas'
import MagneticButton from '../components/MagneticButton'
import TextReveal from '../components/TextReveal'
import ScrollReveal from '../components/ScrollReveal'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void pt-20"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-warm-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Neural Background */}
      <NeuralCanvas />

      <div className="container-narrow w-full z-10 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl text-left space-y-8">
          {/* Active Status Badge */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-cyan-glow/5 border border-cyan-glow/15 px-3 py-1.5 rounded-full text-[10px] font-mono font-semibold tracking-wider text-cyan-glow">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-glow"></span>
              </span>
              <span>CLINICAL DENTIST ➔ HEALTHCARE AI RESEARCHER</span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-display-hero text-white tracking-tighter">
              <TextReveal text="Dr. Enosh A. Paulson" delay={0.15} />
            </h1>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl font-medium tracking-tight bg-gradient-to-r from-cyan-glow to-cyan-300 bg-clip-text text-transparent">
                BDS | PGDMI (AI &amp; Data Science in Healthcare)
              </p>
            </ScrollReveal>
          </div>

          {/* Bio paragraph */}
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-body-lg text-ink-300 max-w-2xl font-light">
              Translating clinical realities into medical intelligence. Leveraging a clinical dentistry background combined with biomedical data science to design, build, and audit AI systems for hospitals, diagnostics, and health platforms.
            </p>
          </ScrollReveal>

          {/* Actions */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="flex flex-wrap gap-4 pt-4">
              <MagneticButton onClick={() => scrollToSection('#projects')} variant="primary">
                Explore Work
              </MagneticButton>
              <MagneticButton onClick={() => scrollToSection('#contact')} variant="secondary">
                Get in Touch
                <Mail className="ml-2 h-3.5 w-3.5" />
              </MagneticButton>
              <button
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center text-xs font-mono uppercase tracking-widest text-ink-500 hover:text-cyan-glow transition-colors ml-4 cursor-pointer"
              >
                Print CV <ArrowUpRight className="ml-1 h-3 w-3" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Social Floating quick links */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center space-x-6 z-10 no-print">
        <span className="text-[9px] font-mono font-bold tracking-widest text-ink-600 uppercase">Connect</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-500 hover:text-cyan-glow transition-colors"
          aria-label="LinkedIn Profile"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-500 hover:text-cyan-glow transition-colors"
          aria-label="GitHub Profile"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>

      {/* Cinematic scroll indicator */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-end space-y-2 cursor-pointer no-print z-10"
        onClick={() => scrollToSection('#about-details')}
      >
        <span className="text-[9px] font-mono tracking-widest text-ink-600 uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-ink-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-glow animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
