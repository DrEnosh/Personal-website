import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
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
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Contact Me"
          subtitle="Get in touch for research collaborations, project consultations, or general inquiries."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Card */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-200/50 dark:border-navy-900 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I am always open to discussing new research opportunities, AI integrations in medicine, and digital health software development.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:enosh.paulson@example.com"
                  className="flex items-center space-x-3 text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-850 border border-slate-100 dark:border-navy-800 text-teal-600 dark:text-teal-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-navy-500 block">EMAIL ME</span>
                    <span className="text-sm font-semibold break-all">enosh.paulson@example.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-850 border border-slate-100 dark:border-navy-800 text-teal-600 dark:text-teal-400">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-navy-500 block">LINKEDIN</span>
                    <span className="text-sm font-semibold">linkedin.com/in/enosh-paulson</span>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-navy-850 border border-slate-100 dark:border-navy-800 text-teal-600 dark:text-teal-400">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-navy-500 block">GITHUB</span>
                    <span className="text-sm font-semibold">github.com/enosh-paulson</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-200/50 dark:border-navy-900 shadow-sm space-y-5 text-left"
            >
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 text-teal-800 dark:text-teal-400 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Message sent successfully! I will get back to you soon.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-navy-400 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-navy-400 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-navy-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                  }`}
                />
                {errors.subject && <span className="text-[10px] text-red-500 font-semibold">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-navy-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-navy-800'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white text-sm font-semibold transition-colors duration-200 shadow disabled:bg-slate-400 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 h-4 w-4" />
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
