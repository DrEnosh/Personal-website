import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Highlight active section on scroll
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
      const top = (el as HTMLElement).offsetTop - 75
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-print ${
        scrolled
          ? 'bg-void/75 border-b border-ink-900/50 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-6'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Brand Logo / Monogram */}
          <div className="flex-shrink-0">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="group text-left block focus-visible:ring-1"
            >
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full border border-cyan-glow/20 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-cyan-glow transition-all duration-300">
                  EP
                </div>
                <div>
                  <span className="text-sm font-display font-bold tracking-tight text-white block">
                    Dr. Enosh A. Paulson
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-cyan-glow block uppercase">
                    Healthcare AI &amp; Informatics
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-[10px] font-mono uppercase tracking-widest transition-colors hover:text-cyan-glow focus-visible:ring-1 px-1 py-1 rounded relative ${
                  activeSection === item.href || (item.href === '#about' && activeSection === '')
                    ? 'text-cyan-glow font-semibold'
                    : 'text-ink-400'
                }`}
              >
                {item.label}
                {(activeSection === item.href || (item.href === '#about' && activeSection === '')) && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-cyan-glow" />
                )}
              </a>
            ))}
            <div className="pl-4 border-l border-ink-900">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center space-x-3 lg:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink-400 hover:text-white focus:outline-none focus-visible:ring-1 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Cinematic Overlay) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-void/98 backdrop-blur-lg z-40 transition-all duration-300">
          <div className="px-6 py-12 space-y-6 flex flex-col justify-center h-[80%] text-left">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block text-2xl font-display font-medium tracking-tight border-b border-ink-900/50 pb-2 ${
                  activeSection === item.href
                    ? 'text-cyan-glow font-semibold'
                    : 'text-ink-300'
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
