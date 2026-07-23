import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loaded sections for high-performance chunk loading
const Hero = React.lazy(() => import('./sections/Hero'))
const About = React.lazy(() => import('./sections/About'))
const Journey = React.lazy(() => import('./sections/Journey'))
const Projects = React.lazy(() => import('./sections/Projects'))
const Research = React.lazy(() => import('./sections/Research'))
const Credentials = React.lazy(() => import('./sections/Credentials'))
const Contact = React.lazy(() => import('./sections/Contact'))

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-sky-500/20 selection:text-sky-200">
      
      {/* Accessibility: Skip to Content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-500 text-zinc-950 px-4 py-2 rounded-lg font-mono text-xs font-bold z-50 no-print"
      >
        Skip to Content
      </a>

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-zinc-950">
            <div className="flex items-center space-x-3">
              <div className="h-5 w-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Loading...</span>
            </div>
          </div>
        }>
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Research />
          <Credentials />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
