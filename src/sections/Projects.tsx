import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { ExternalLink, Code2, X, Activity, Cpu, ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  tagline: string
  problem: string
  solution: string
  impact: string
  tech: string[]
  github: string
  demo: string
  status: 'Production' | 'Active Development' | 'Research Prototype' | 'In Pipeline'
  isFeature: boolean
  caseStudy: {
    overview: string
    architecture: string[]
    results: string[]
    nextSteps: string
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projectsList: Project[] = [
    {
      title: 'Wound Segmentation using U-Net',
      tagline: 'Computer Vision in Clinical Wound Care',
      problem: 'Chronic wound assessment in outpatient clinics is highly subjective and depends on manual ruler tracing, introducing inter-clinician variance and delaying diagnostic interventions.',
      solution: 'Developed a medical computer vision pipeline utilizing a customized U-Net convolutional neural network (PyTorch) trained on diverse skin-tone dermatological datasets to automatically isolate wound borders and calculate area metrics.',
      impact: 'Achieved a Jaccard index of 0.89 and reduced clinical assessment time by 75% while providing objective, longitudinal metrics of healing rates.',
      tech: ['PyTorch', 'U-Net', 'OpenCV', 'Python', 'NumPy', 'Matplotlib'],
      github: 'https://github.com',
      demo: 'https://github.com',
      status: 'Research Prototype',
      isFeature: true,
      caseStudy: {
        overview: 'Manual evaluation of decubitus and diabetic ulcers is error-prone. By automating boundary detection, this research enables reproducible wound mapping across multiple follow-up visits.',
        architecture: [
          'Pre-processing: Contrast adjustment via CLAHE and image resize resizing to 256x256.',
          'Model Structure: U-Net encoder utilizing ResNet-34 backbones pre-trained on ImageNet.',
          'Loss Function: Combined Binary Cross Entropy (BCE) and Dice Loss to counter class imbalance (ulcer regions cover <15% of image area).'
        ],
        results: [
          'Intersection over Union (IoU) of 0.895 across 200 validation images.',
          'Demonstrated robustness against clinical shadows and skin color variances.',
          'Generated print-ready PDF reports charting healing progress over a 12-week timeframe.'
        ],
        nextSteps: 'Integrating depth-estimation models using mobile camera sensors to track wound volume and depth in addition to surface area.'
      }
    },
    {
      title: 'DentoHub',
      tagline: 'Dental EHR & Clinical Decision Support System',
      problem: 'Dental practitioners operate on isolated charting tools that lack clinical decision overlays, leaving potential caries or periodontal trends undetected during routine diagnostic checks.',
      solution: 'Designed and prototyped a unified Electronic Dental Record (EDR) web portal integrated with standard dental taxonomies and a Python-powered analytical engine that flags risk thresholds.',
      impact: 'Streamlined patient charting times, integrated digital imaging records, and provided clinicians with proactive warnings regarding treatment codes alignments.',
      tech: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'FastAPI', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://github.com',
      status: 'Active Development',
      isFeature: false,
      caseStudy: {
        overview: 'DentoHub bridges the gap between patient files and clinical action. It introduces standardized dental charting schemas (using FDI notation) and supports cloud storage of radiographic files.',
        architecture: [
          'Frontend: Single-page React application with accessible forms and visual charting models.',
          'Backend: Node.js Express API handling authentication and Patient record pipelines.',
          'Diagnostics Engine: FastAPI server running data queries against historical patient diagnostic trends.'
        ],
        results: [
          'Successfully mapped patients profiles and treatment plans with zero data synchronization lag.',
          'Integrated billing schemas with CDT codes guidelines to prevent administrative errors.',
          'Passed accessibility audit checks for screen reader compatibility on clinical charts.'
        ],
        nextSteps: 'Integrating computer vision models directly into the radiography uploader to assist in panoramic X-ray annotations.'
      }
    },
    {
      title: 'Mental Health Dashboard',
      tagline: 'Outpatient Visual Analytics & Demographics Mapping',
      problem: 'Clinic managers lack direct visual insight into medication compliance, symptom trends, and recovery response correlations, making staff planning and pharmaceutical inventory allocations inefficient.',
      solution: 'Created an interactive visual analytics dashboard linking outpatient clinic databases with Power BI, using DAX formulas to calculate rolling recovery averages and symptom declines.',
      impact: 'Identified a 20% compliance drop-off among specific age groups, allowing clinic leads to implement automated SMS reminders and optimize staffing layouts.',
      tech: ['Power BI', 'DAX', 'SQL Server', 'Python (Pandas)', 'ETL Pipeline'],
      github: 'https://github.com',
      demo: 'https://github.com',
      status: 'Production',
      isFeature: false,
      caseStudy: {
        overview: 'Medical managers need operational dashboards to steer clinic decisions. This project involved cleaning raw database logs, formulating complex DAX queries, and building accessible layout boards.',
        architecture: [
          'Data Ingestion: Scheduled ETL scripts executing Python data cleansing on raw clinical databases.',
          'Modeling: Star schema database design in SQL Server optimized for clinical query dimensions.',
          'Visualization: Power BI dashboard displaying real-time patient drop-out risk rates.'
        ],
        results: [
          'Dashboard used by 3 clinic admins to coordinate scheduling and outpatient support.',
          'Identified treatment success ratios across different therapeutic groupings.',
          'Reduced report generating time from 5 days to real-time auto-refreshes.'
        ],
        nextSteps: 'Enriching the dataset with social determinants of health (SDoH) to create broader predictive dashboards.'
      }
    },
    {
      title: 'Future Healthcare AI Projects',
      tagline: 'Clinical Agents & Automatic Coding',
      problem: 'Clinicians spend up to 40% of their working day writing summaries and inputting diagnostic codes, leading to physician burnout and administrative overhead.',
      solution: 'Researching conversational LLM agents that transcribe doctor-patient dialogues, distill them into medical summaries, and align them with ICD-10 or CDT medical schemas.',
      impact: 'Prototyping a RAG (Retrieval-Augmented Generation) system to check compliance guidelines against hospital policies in real-time.',
      tech: ['LangChain', 'OpenAI API', 'Vector Databases', 'Python', 'Streamlit'],
      github: 'https://github.com',
      demo: 'https://github.com',
      status: 'In Pipeline',
      isFeature: false,
      caseStudy: {
        overview: 'LLM agents have the potential to return hours to clinicians. This project focuses on building localized clinical agent scripts that ensure HIPAA-compliant processing structures.',
        architecture: [
          'Speech Processing: Whisper-based transcription pipeline with clinical terminology filters.',
          'RAG Architecture: ChromaDB vector store matching transcript details with standard medical billing guidelines.',
          'Agent Logic: LangChain routing agent verifying clinical summary structures.'
        ],
        results: [
          'Prototyped transcription accuracy results on clinical mock datasets.',
          'Evaluated LLM responses under clinical safety frameworks to measure hallucinations.',
          'Streamlit prototype for rapid testing.'
        ],
        nextSteps: 'Conducting clinical safety studies with doctor panels to evaluate generative output validity.'
      }
    },
  ]

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Production':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
      case 'Active Development':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
      case 'Research Prototype':
        return 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20'
      case 'In Pipeline':
        return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20'
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-navy-950 border-b border-slate-200/40 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Featured Projects"
          subtitle="Translating biomedical informatics concepts and clinical insights into working software solutions."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/60 dark:border-navy-900/80 shadow-sm hover:shadow-md hover:border-teal-500/20 dark:hover:border-teal-500/10 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden group ${
                project.isFeature ? 'ring-2 ring-teal-500/20' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.isFeature && (
                <div className="absolute top-0 right-0 bg-teal-600 text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg">
                  Featured Research
                </div>
              )}

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-navy-400">
                    {project.tagline}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                {/* Problem & Solution representation */}
                <div className="space-y-3 pt-2">
                  <div>
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block">The Problem</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">The Solution</span>
                    <p className="text-sm text-slate-700 dark:text-slate-350 mt-0.5 leading-relaxed font-medium">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">Clinical Impact</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-navy-800">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors cursor-pointer group/link"
                  >
                    View Case Study
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-navy-900 dark:text-navy-450 dark:hover:text-white transition-colors"
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
                      GitHub
                    </a>
                    
                    {project.status !== 'In Pipeline' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-navy-900 dark:text-navy-450 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-xs font-semibold text-slate-400 dark:text-navy-600 cursor-not-allowed">
                        <Code2 className="h-4 w-4 mr-1.5" />
                        Queue
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 no-print">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-white dark:bg-navy-900 w-full max-w-3xl max-h-[85vh] rounded-2xl overflow-y-auto shadow-2xl border border-slate-200 dark:border-navy-800 z-10 p-6 md:p-8 text-left"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-850 transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                    <h3 id="modal-title" className="text-2xl md:text-3xl font-display font-extrabold text-navy-900 dark:text-white mt-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                      {selectedProject.tagline}
                    </p>
                  </div>

                  {/* Summary/Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-navy-950 dark:text-slate-300 uppercase tracking-widest border-b border-slate-100 dark:border-navy-850 pb-1">
                      Research Overview
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      {selectedProject.caseStudy.overview}
                    </p>
                  </div>

                  {/* Implementation Architecture */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-navy-950 dark:text-slate-300 uppercase tracking-widest border-b border-slate-100 dark:border-navy-850 pb-1 flex items-center">
                      <Cpu className="h-4 w-4 mr-1.5 text-teal-500" />
                      Technical Architecture
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      {selectedProject.caseStudy.architecture.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-500 mr-2.5 font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Validation Results */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-navy-950 dark:text-slate-300 uppercase tracking-widest border-b border-slate-100 dark:border-navy-850 pb-1 flex items-center">
                      <Activity className="h-4 w-4 mr-1.5 text-cyan-500" />
                      Validation Results & Metrics
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      {selectedProject.caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-500 mr-2.5 font-extrabold">&bull;</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Future Scope */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-navy-950 dark:text-slate-300 uppercase tracking-widest border-b border-slate-100 dark:border-navy-850 pb-1">
                      Future Directions & Clinical Scope
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed">
                      {selectedProject.caseStudy.nextSteps}
                    </p>
                  </div>

                  {/* Modal Footer / CTAs */}
                  <div className="flex items-center justify-end space-x-4 border-t border-slate-100 dark:border-navy-800 pt-4 mt-8">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-navy-850 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800 transition-colors"
                    >
                      Source Code
                    </a>
                    {selectedProject.status !== 'In Pipeline' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-colors"
                      >
                        Launch Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
