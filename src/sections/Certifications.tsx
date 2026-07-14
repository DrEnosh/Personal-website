import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { ShieldCheck, Award } from 'lucide-react'

export default function Certifications() {
  const certificationsList = [
    {
      title: 'Introduction to Digital Health',
      issuer: 'Imperial College London',
      details: 'Key topics: Telemedicine, electronic medical records, digital health evaluation, and regulatory frameworks.',
    },
    {
      title: 'Machine Learning for Healthcare Professionals',
      issuer: 'Northeastern University London',
      details: 'Key topics: Clinical predictive analytics, diagnostic machine learning, data preparation, and ethical considerations.',
    },
    {
      title: 'Mini MBA in Artificial Intelligence',
      issuer: 'AI Business & Leadership Academy',
      details: 'Key topics: AI strategy, technology management, machine learning implementation, and business integration.',
    },
    {
      title: 'Oxford Generative & Agentic AI',
      issuer: 'University of Oxford',
      details: 'Key topics: LLMs, prompt engineering, AI agents, healthcare chatbots, and technical evaluation of generative models.',
    },
    {
      title: 'Johns Hopkins Health Informatics',
      issuer: 'Johns Hopkins University',
      details: 'Key topics: EHR systems, medical databases, terminologies (SNOMED, LOINC), and clinical decision support system design.',
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Professional Certifications"
          subtitle="Continuous learning and specialized training at the intersection of medicine, data, and technology."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-900/50 shadow-sm hover:shadow-md hover:border-teal-500/25 dark:hover:border-teal-500/25 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex items-center text-teal-600 dark:text-teal-400 text-xs font-semibold space-x-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Verified Credential</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-semibold text-slate-500 dark:text-navy-400 mb-4">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-navy-900 pt-3">
                {cert.details}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
