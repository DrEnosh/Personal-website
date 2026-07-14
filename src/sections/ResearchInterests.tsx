import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Database, Scan, Clipboard, Smartphone, Cpu } from 'lucide-react'

export default function ResearchInterests() {
  const interests = [
    {
      icon: Database,
      title: 'Biomedical Data Science',
      desc: 'Analyzing high-dimensional clinical datasets, genomic data, and EHRs to uncover clinical insights and build predictive models.',
    },
    {
      icon: Scan,
      title: 'Medical Image Analysis',
      desc: 'Developing computer vision pipelines (such as U-Net, CNNs) for automated diagnosis, organ segmentations, and pathology detection.',
    },
    {
      icon: Clipboard,
      title: 'Healthcare Informatics',
      desc: 'Optimizing medical workflows, clinical coding, database architectures, and EHR interoperability to streamline healthcare systems.',
    },
    {
      icon: Smartphone,
      title: 'Digital Health',
      desc: 'Exploring tele-dentistry, mobile health monitoring apps (mHealth), and remote diagnostics to increase healthcare accessibility.',
    },
    {
      icon: Cpu,
      title: 'AI in Healthcare',
      desc: 'Deploying neural networks, machine learning algorithms, and Generative/Agentic AI to aid clinical decision support.',
    },
  ]

  return (
    <section id="interests" className="py-20 bg-slate-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Research Interests"
          subtitle="Investigating the frontier where computer science, data analytics, and patient care intersect."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-900 shadow-sm hover:shadow-md hover:border-teal-500/30 dark:hover:border-teal-500/20 transition-all duration-300 text-left group"
            >
              <div className="h-12 w-12 rounded-lg bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <interest.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {interest.title}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {interest.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
