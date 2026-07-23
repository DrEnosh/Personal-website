import { useState } from 'react'
import { ExternalLink, ArrowUpRight, X, Cpu, Target, Award } from 'lucide-react'

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
      github: 'https://github.com/DrEnosh',
      demo: 'https://github.com/DrEnosh',
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
      github: 'https://github.com/DrEnosh',
      demo: 'https://github.com/DrEnosh',
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
          'Successfully mapped patient profiles and treatment plans with zero data synchronization lag.',
          'Integrated billing schemas with CDT code guidelines to prevent administrative errors.',
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
      github: 'https://github.com/DrEnosh',
      demo: 'https://github.com/DrEnosh',
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
          'Dashboard used by clinic admins to coordinate scheduling and outpatient support.',
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
      github: 'https://github.com/DrEnosh',
      demo: 'https://github.com/DrEnosh',
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

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Production':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
      case 'Active Development':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30'
      case 'Research Prototype':
        return 'bg-teal-500/10 text-teal-400 border-teal-500/30'
      case 'In Pipeline':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30'
    }
  }

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">03 / PORTFOLIO</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Translating biomedical informatics concepts and clinical insights into working AI software solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                  <strong className="text-white font-medium">Problem:</strong> {project.problem}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  <strong className="text-zinc-300 font-medium">Solution:</strong> {project.solution}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <div className="flex items-center space-x-3 text-zinc-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-400 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 text-left shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                {selectedProject.status}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                {selectedProject.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                <h4 className="font-semibold text-white flex items-center">
                  <Target className="h-4 w-4 mr-2 text-sky-400" />
                  Clinical Problem &amp; Impact
                </h4>
                <p><strong className="text-white">Problem:</strong> {selectedProject.problem}</p>
                <p><strong className="text-white">Impact:</strong> {selectedProject.impact}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-white flex items-center">
                  <Cpu className="h-4 w-4 mr-2 text-sky-400" />
                  Technical Architecture
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-400">
                  {selectedProject.caseStudy.architecture.map((arch, idx) => (
                    <li key={idx}>{arch}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-white flex items-center">
                  <Award className="h-4 w-4 mr-2 text-sky-400" />
                  Validation &amp; Results
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-400">
                  {selectedProject.caseStudy.results.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
