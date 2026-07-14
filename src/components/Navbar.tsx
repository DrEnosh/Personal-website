import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Blog', href: '#blog' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Track active section for highlight
      const scrollPosition = window.scrollY + 120
      for (const item of navItems) {
        const el = document.querySelector(item.href)
        if (el) {
          const top = (el as HTMLElement).offsetTop
          const height = (el as HTMLElement).offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = (el as HTMLElement).offsetTop - 75 // offset for sticky navbar
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-white/80 dark:bg-navy-950/80 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-navy-900/50 py-3'
          : 'bg-transparent py-5'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="text-lg md:text-xl font-display font-bold tracking-tight text-navy-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus-visible:ring-2"
            >
              Dr. Enosh A. Paulson
              <span className="text-xs block font-sans font-medium text-slate-500 dark:text-navy-450">
                Healthcare AI & Informatics
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-teal-600 dark:hover:text-teal-400 focus-visible:ring-2 px-1 py-1.5 rounded ${
                  activeSection === item.href
                    ? 'text-teal-600 dark:text-teal-400 font-bold'
                    : 'text-slate-500 dark:text-slate-350'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pl-2 border-l border-slate-200 dark:border-navy-800">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center space-x-3 lg:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 focus:outline-none focus-visible:ring-2 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200 dark:border-navy-900 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold uppercase tracking-wider transition-colors ${
                  activeSection === item.href
                    ? 'bg-teal-50 dark:bg-navy-900/50 text-teal-600 dark:text-teal-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-900/35'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
