import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

// Lazy loaded sections for code splitting and bundle optimization
const Hero = React.lazy(() => import('./sections/Hero'))
const About = React.lazy(() => import('./sections/About'))
const Journey = React.lazy(() => import('./sections/Journey'))
const Projects = React.lazy(() => import('./sections/Projects'))
const Research = React.lazy(() => import('./sections/Research'))
const Credentials = React.lazy(() => import('./sections/Credentials'))
const Contact = React.lazy(() => import('./sections/Contact'))

export default function App() {
  return (
    <div className="min-h-screen bg-void text-ink-200 transition-colors duration-300 antialiased selection:bg-cyan-glow/20 selection:text-white">
      
      {/* Accessibility: Skip to Content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-glow text-ink-950 px-4 py-2 rounded-lg font-mono text-[10px] uppercase font-bold z-50 no-print"
      >
        Skip to Content
      </a>

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main content elements */}
      <main id="main-content" className="relative">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-void">
            <div className="flex flex-col items-center space-y-4">
              {/* Spinner */}
              <div className="h-6 w-6 border-2 border-cyan-glow border-t-transparent rounded-full animate-spin" />
              <span className="text-[9px] font-mono font-bold text-ink-500 uppercase tracking-widest animate-pulse">
                Initializing Narrative...
              </span>
            </div>
          </div>
        }>
          <Hero />
          
          <SectionDivider label="Perspective" />
          <About />
          
          <SectionDivider label="Chronology" />
          <Journey />
          
          <SectionDivider label="Case Studies" />
          <Projects />
          
          <SectionDivider label="Scholarship" />
          <Research />
          
          <SectionDivider label="Validations" />
          <Credentials />
          
          <SectionDivider label="Connection" />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
