import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { ExternalLink, Code2, Sparkles } from 'lucide-react'

export default function Projects() {
  const projectsList = [
    {
      title: 'Wound Segmentation using U-Net',
      tagline: 'Medical Computer Vision',
      desc: 'Developed a deep learning pipeline utilizing a U-Net architecture to automate the boundary detection and surface area measurement of chronic skin wounds. Enables clinical researchers and nurses to objectively track healing rates over time.',
      tech: ['PyTorch', 'U-Net', 'OpenCV', 'Python', 'Matplotlib'],
      github: 'https://github.com',
      demo: 'https://github.com',
      isFeature: true,
    },
    {
      title: 'DentoHub',
      tagline: 'Dental EHR & Clinical Support Platform',
      desc: 'Designed a comprehensive dental informatics web application that integrates digital charting, electronic dental records (EDR), and dental caries visualization. Includes clinical decision templates for treatment planning.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'FastAPI', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://github.com',
      isFeature: false,
    },
    {
      title: 'Mental Health Dashboard',
      tagline: 'Power BI Analytics',
      desc: 'Created an interactive visual analytics dashboard to analyze and track patient demographics, clinical symptoms, and medication compliance rates across psychiatric outpatient departments.',
      tech: ['Power BI', 'DAX', 'SQL Server', 'Python (Pandas)'],
      github: 'https://github.com',
      demo: 'https://github.com',
      isFeature: false,
    },
    {
      title: 'Future Healthcare AI Projects',
      tagline: 'LLM & Agentic AI Research',
      desc: 'Exploring the utility of Large Language Models (LLMs) to automate clinical summary generations and dental coding alignments from conversational audio transcripts.',
      tech: ['LangChain', 'OpenAI API', 'Vector DB', 'Python', 'Streamlit'],
      github: 'https://github.com',
      demo: 'https://github.com',
      isFuture: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-navy-950 border-b border-slate-100 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Projects"
          subtitle="Translating biomedical informatics concepts into practical, working software systems."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/60 dark:border-navy-900/80 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden group ${
                project.isFeature ? 'ring-2 ring-teal-500/20' : ''
              }`}
            >
              {/* Highlight badge for Featured or Future items */}
              {project.isFeature && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg">
                  Featured Research
                </div>
              )}
              {project.isFuture && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg flex items-center space-x-1">
                  <Sparkles className="h-3 w-3" />
                  <span>In Pipeline</span>
                </div>
              )}

              <div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-2">
                  {project.tagline}
                </span>
                
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-navy-800 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-navy-900 dark:text-navy-400 dark:hover:text-white transition-colors"
                  >
                    <svg
                      className="h-4 w-4 mr-1.5"
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
                    Source Code
                  </a>
                  
                  {!project.isFuture ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-xs font-semibold text-slate-400 dark:text-navy-600 cursor-not-allowed">
                      <Code2 className="h-4 w-4 mr-1.5" />
                      Pre-release
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
