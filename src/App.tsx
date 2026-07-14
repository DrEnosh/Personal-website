import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

// Lazy loaded sections for code splitting and bundle optimization
const Hero = React.lazy(() => import('./sections/Hero'))
const About = React.lazy(() => import('./sections/About'))
const Education = React.lazy(() => import('./sections/Education'))
const Projects = React.lazy(() => import('./sections/Projects'))
const Research = React.lazy(() => import('./sections/Research'))
const Blog = React.lazy(() => import('./sections/Blog'))
const Certifications = React.lazy(() => import('./sections/Certifications'))
const Experience = React.lazy(() => import('./sections/Experience'))
const Contact = React.lazy(() => import('./sections/Contact'))

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* Accessibility: Skip to Content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-xs uppercase z-50 no-print"
      >
        Skip to Content
      </a>

      {/* Sticky Header */}
      <Navbar />

      {/* Main content elements */}
      <main id="main-content" className="relative">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-navy-950">
            <div className="flex flex-col items-center space-y-4">
              {/* Spinner */}
              <div className="h-8 w-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-bold text-slate-400 dark:text-navy-500 uppercase tracking-widest animate-pulse">
                Initializing Portfolio...
              </span>
            </div>
          </div>
        }>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Research />
          <Blog />
          <Certifications />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
