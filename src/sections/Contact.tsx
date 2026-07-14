import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Mail, Send, CheckCircle, Copy, Check, FileDown } from 'lucide-react'

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
    <section id="contact" className="py-20 bg-slate-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Connect"
          subtitle="Get in touch to discuss clinical machine learning, audit pipelines, or informatics collaborations."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Card */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-200/50 dark:border-navy-900 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                Contact Details
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I speak the language of both medical professionals and software engineers. Let’s connect to build clinically compliant AI systems.
              </p>

              <div className="space-y-4">
                {/* Copyable Email Node */}
                <div className="flex flex-col space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-100 dark:border-navy-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded bg-white dark:bg-navy-900 text-teal-600 dark:text-teal-400 border border-slate-100 dark:border-navy-800">
                        <Mail className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-navy-500 block uppercase">EMAIL</span>
                        <span className="text-sm font-semibold break-all text-slate-700 dark:text-slate-250">{emailAddress}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded bg-white dark:bg-navy-900 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                      aria-label="Copy email address"
                      title="Copy email to clipboard"
                    >
                      {emailCopied ? (
                        <Check className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Resume Download Node */}
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-100 dark:border-navy-800 text-left hover:border-teal-500/25 dark:hover:border-teal-500/20 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded bg-white dark:bg-navy-900 text-teal-600 dark:text-teal-400 border border-slate-100 dark:border-navy-800">
                      <FileDown className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-navy-500 block uppercase">RESUME</span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-250">Printable CV Profile</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform">
                    Print &darr;
                  </span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 dark:border-navy-800 flex items-center space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-teal-600 dark:text-navy-450 dark:hover:text-teal-400 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none; currentColor"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
                  className="flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-teal-600 dark:text-navy-450 dark:hover:text-teal-400 transition-colors"
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
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-200/50 dark:border-navy-900 shadow-sm space-y-5 text-left"
              noValidate
            >
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 text-teal-800 dark:text-teal-400 rounded-xl flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-xs font-semibold">Message sent successfully! I will reply to you within 24 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-slate-500 dark:text-navy-450 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                    }`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="text-[9px] text-red-500 font-semibold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-slate-500 dark:text-navy-450 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                    }`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="text-[9px] text-red-500 font-semibold">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-bold text-slate-500 dark:text-navy-450 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                  }`}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <span className="text-[9px] text-red-500 font-semibold">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-500 dark:text-navy-450 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                  }`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="text-[9px] text-red-500 font-semibold">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white text-xs font-semibold transition-colors duration-200 shadow disabled:bg-slate-400 cursor-pointer uppercase tracking-wider"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
