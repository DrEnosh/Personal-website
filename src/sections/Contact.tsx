import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, Copy, Check, FileDown } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [emailCopied, setEmailCopied] = useState(false)

  const emailAddress = 'enosh.paulson@example.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2500)
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000) // Reset status after 5s
    }, 1200)
  }

  return (
    <section id="contact" className="section-padding bg-void relative overflow-hidden border-t border-ink-900/60">
      {/* Accent glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-narrow">
        <ScrollReveal direction="up">
          <span className="text-section-label">06 / CONNECTION</span>
          <h2 className="text-display-lg text-white mt-3 mb-20 max-w-3xl">
            Let's build something meaningful.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Details Card */}
          <div className="lg:col-span-5 text-left space-y-8">
            <ScrollReveal direction="up" delay={0.1} className="space-y-6">
              <h3 className="text-display-sm text-white font-medium">
                Dossier &amp; Inbox
              </h3>
              <p className="text-xs sm:text-sm text-ink-400 leading-relaxed font-light">
                I speak the language of both medical professionals and software engineers. Let’s connect to build clinically compliant AI systems.
              </p>

              <div className="space-y-4">
                {/* Copyable Email Node */}
                <div className="p-5 rounded-xl border border-ink-900 bg-ink-900/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 rounded bg-ink-900 border border-ink-850 text-cyan-glow">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-ink-500 block uppercase tracking-wider">EMAIL</span>
                      <span className="text-xs sm:text-sm font-semibold text-white break-all">{emailAddress}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-ink-900 hover:bg-ink-850 border border-ink-800 text-ink-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy email address"
                    title="Copy email to clipboard"
                  >
                    {emailCopied ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Print CV Node */}
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-between p-5 rounded-xl border border-ink-900 bg-ink-900/10 text-left hover:border-cyan-glow/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 rounded bg-ink-900 border border-ink-850 text-cyan-glow">
                      <FileDown className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-ink-500 block uppercase tracking-wider">RESUME</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">Printable CV Profile</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-glow uppercase group-hover:translate-x-1 transition-transform">
                    Print &rarr;
                  </span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-ink-900 flex items-center space-x-6 text-xs font-mono">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-ink-500 hover:text-cyan-glow transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-ink-500 hover:text-cyan-glow transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Box */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal direction="up" delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-ink-900 bg-ink-900/10 backdrop-blur-sm space-y-6 text-left"
                noValidate
              >
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-success/10 border border-success/20 text-success text-xs font-semibold flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Message sent successfully! I will reply to you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[9px] font-mono font-bold text-ink-500 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-transparent border-b py-2 text-xs text-white focus:outline-none focus:border-cyan-glow transition-colors ${
                        errors.name ? 'border-danger focus:border-danger' : 'border-ink-800'
                      }`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className="text-[9px] text-danger font-mono font-semibold block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[9px] font-mono font-bold text-ink-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-transparent border-b py-2 text-xs text-white focus:outline-none focus:border-cyan-glow transition-colors ${
                        errors.email ? 'border-danger focus:border-danger' : 'border-ink-800'
                      }`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="text-[9px] text-danger font-mono font-semibold block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[9px] font-mono font-bold text-ink-500 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full bg-transparent border-b py-2 text-xs text-white focus:outline-none focus:border-cyan-glow transition-colors ${
                      errors.subject ? 'border-danger focus:border-danger' : 'border-ink-800'
                    }`}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <span className="text-[9px] text-danger font-mono font-semibold block">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[9px] font-mono font-bold text-ink-500 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-transparent border-b py-2 text-xs text-white focus:outline-none focus:border-cyan-glow transition-colors resize-none ${
                      errors.message ? 'border-danger focus:border-danger' : 'border-ink-800'
                    }`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="text-[9px] text-danger font-mono font-semibold block">{errors.message}</span>}
                </div>

                {/* Submit Container */}
                <div className="pt-2">
                  <MagneticButton
                    variant="primary"
                    className="w-full text-center"
                    onClick={() => {}}
                    title={status === 'submitting' ? 'Submitting message...' : 'Send message'}
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-3.5 w-3.5" />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
