import { useState } from 'react'
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
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">06 / GET IN TOUCH</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Connect &amp; Collaborate
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Get in touch to discuss clinical machine learning, audit pipelines, or informatics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Contact Details
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Whether you represent a hospital network, health-tech startup, or academic research group, feel free to reach out directly.
              </p>

              <div className="space-y-3">
                {/* Copyable Email Node */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-zinc-800 text-sky-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 block uppercase">EMAIL</span>
                      <span className="text-xs font-semibold text-zinc-200">{emailAddress}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Print CV Node */}
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-left hover:border-zinc-700 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-zinc-800 text-sky-400">
                      <FileDown className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 block uppercase">RESUME</span>
                      <span className="text-xs font-semibold text-zinc-200">Printable CV Profile</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-sky-400 group-hover:translate-x-0.5 transition-transform">
                    Print &rarr;
                  </span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800/60 flex items-center space-x-4 text-xs font-mono">
                <a
                  href="https://linkedin.com/in/enosh-paulson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/DrEnosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-4"
              noValidate
            >
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Message sent successfully! I will reply to you within 24 hours.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-mono text-zinc-400 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-sky-400 focus:outline-none"
                  />
                  {errors.name && <span className="text-[10px] text-red-400 font-mono">{errors.name}</span>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-mono text-zinc-400 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-sky-400 focus:outline-none"
                  />
                  {errors.email && <span className="text-[10px] text-red-400 font-mono">{errors.email}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] font-mono text-zinc-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-sky-400 focus:outline-none"
                />
                {errors.subject && <span className="text-[10px] text-red-400 font-mono">{errors.subject}</span>}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] font-mono text-zinc-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-sky-400 focus:outline-none resize-none"
                />
                {errors.message && <span className="text-[10px] text-red-400 font-mono">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-2.5 px-4 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-sky-500/20"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
