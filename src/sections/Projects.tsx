import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Cpu, Target, Award, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import MagneticButton from '../components/MagneticButton'

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
          'Pre-processing: Contrast adjustment via CLAHE and image resizing to 256x256.',
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
    }
  ]

  return (
    <section id="projects" className="section-padding bg-void relative overflow-hidden border-t border-ink-900/60">
      {/* Glow effect */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-narrow">
        <ScrollReveal direction="up">
          <span className="text-section-label">03 / CASE STUDIES</span>
          <h2 className="text-display-lg text-white mt-3 mb-24 max-w-2xl">
            Selected Clinical AI &amp; Biomedical Informatics Projects.
          </h2>
        </ScrollReveal>

        {/* Storytelling Project Layout (Alternating) */}
        <div className="space-y-32">
          {projectsList.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Accent Box or Project Number */}
                <div className={`lg:col-span-4 flex flex-col justify-center order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.1}>
                    <div className="text-[120px] font-display font-extrabold text-ink-900 leading-none select-none">
                      0{index + 1}
                    </div>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
                      <span className="text-[10px] font-mono tracking-widest text-ink-500 uppercase">
                        {project.status}
                      </span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-8 text-left space-y-6 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ScrollReveal direction="up" delay={0.2}>
                    <h3 className="text-display-sm text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-glow tracking-wider">
                      {project.tagline}
                    </p>
                  </ScrollReveal>

                  {/* Problem & Solution block */}
                  <ScrollReveal direction="up" delay={0.3} className="space-y-4 text-body font-light">
                    <p>
                      <strong className="text-white font-medium">The Problem:</strong> {project.problem}
                    </p>
                    <p>
                      <strong className="text-white font-medium">The Informatics Solution:</strong> {project.solution}
                    </p>
                    <p className="border-l-2 border-cyan-glow/30 pl-4 py-1 text-ink-300 italic">
                      <strong className="text-cyan-glow font-medium not-italic">Clinical &amp; Operational Impact:</strong> {project.impact}
                    </p>
                  </ScrollReveal>

                  {/* Tech stack */}
                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded bg-ink-900 border border-ink-850 text-ink-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* Button Trigger */}
                  <ScrollReveal direction="up" delay={0.45}>
                    <div className="pt-2">
                      <MagneticButton onClick={() => setSelectedProject(project)} variant="secondary">
                        View Case Study
                      </MagneticButton>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Case Study Full Screen Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-void/90 backdrop-blur-md flex justify-center p-4 sm:p-10 no-print"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl glass rounded-2xl overflow-hidden my-auto p-8 sm:p-12 relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-ink-900 border border-ink-800 hover:border-cyan-glow text-ink-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-8">
                {/* Header */}
                <div>
                  <span className="text-[10px] font-mono text-cyan-glow tracking-widest uppercase">
                    {selectedProject.tagline}
                  </span>
                  <h3 className="text-display-md text-white mt-1 tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                  {/* Left Column: Overview & Steps */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-cyan-glow" />
                        Project Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-ink-300 font-light leading-relaxed">
                        {selectedProject.caseStudy.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-3 flex items-center">
                        <Cpu className="h-4 w-4 mr-2 text-warm-400" />
                        Implementation Architecture
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.caseStudy.architecture.map((step, idx) => (
                          <li key={idx} className="text-xs text-ink-450 leading-relaxed pl-3 border-l border-ink-800">
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Outcomes & Metrics */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="p-5 rounded-xl bg-ink-900/60 border border-ink-800 space-y-4">
                      <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase flex items-center">
                        <Award className="h-4 w-4 mr-2 text-cyan-glow" />
                        Validation Results
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.results.map((res, idx) => (
                          <li key={idx} className="text-xs text-ink-300 list-disc list-inside">
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-warm-400/50">
                      <h4 className="text-[10px] font-mono tracking-widest text-ink-500 uppercase mb-1">
                        Future Directions
                      </h4>
                      <p className="text-xs text-ink-400 leading-relaxed italic">
                        {selectedProject.caseStudy.nextSteps}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-6 border-t border-ink-850 flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-ink-400 hover:text-cyan-glow transition-colors cursor-pointer"
                  >
                    Source Code <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-cyan-glow hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Verify Prototype <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
