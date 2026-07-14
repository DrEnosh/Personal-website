import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Stethoscope, Brain, Heart } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      icon: Stethoscope,
      title: 'Clinical Foundation',
      desc: 'Formative dental education (BDS) providing real-world clinical experience and a deep understanding of patient care workflows.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Brain,
      title: 'Technical Integration',
      desc: 'Expertise in medical informatics, applying Python, AI models, and data analytics tools to solve biomedical challenges.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Digital Health Vision',
      desc: 'Dedicated to designing clinical decision support systems, smart diagnostics, and scalable healthcare products.',
      color: 'from-cyan-500 to-sky-500',
    },
  ]

  return (
    <section id="about-details" className="py-20 bg-white dark:bg-navy-900 border-y border-slate-100 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="About Me"
          subtitle="Bridging clinical experience with cutting-edge medical artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative description */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-slate-600 dark:text-slate-300"
            >
              <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white">
                The Dentist-to-AI Transition
              </h3>
              
              <p className="leading-relaxed">
                As a trained dentist (BDS) who went on to pursue a Post Graduate Diploma in Medical Informatics (PGDMI) focusing on AI & Data Science in Healthcare, I occupy a unique space. I speak both the clinical language of healthcare providers and the technical language of data scientists.
              </p>

              <p className="leading-relaxed">
                This duality is essential in modern medicine. Medical AI cannot succeed in a silo; it requires domain-expert validation to ensure safety, efficacy, and ease of adoption in actual clinics. My goal is to build, validate, and scale digital health tools that directly support healthcare practitioners and improve patient outcomes.
              </p>

              <p className="leading-relaxed">
                Whether analyzing medical images using deep learning (e.g. U-Net models for wound segmentation) or leveraging healthcare management frameworks (MAHE Online MBA), I strive to create holistic, clinically viable, and technologically sound solutions.
              </p>
            </motion.div>
          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-1 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start p-5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-900/50 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${pillar.color} text-white mr-4 shadow-sm`}>
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
