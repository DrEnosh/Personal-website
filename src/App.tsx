import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ResearchInterests from './sections/ResearchInterests'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Experience from './sections/Experience'
import Publications from './sections/Publications'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar />

      {/* Main content elements */}
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <ResearchInterests />
        <Projects />
        <Certifications />
        <Experience />
        <Publications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
