import { useState } from 'react'
import { GraduationCap, Briefcase, Calendar, ChevronRight } from 'lucide-react'

interface JourneyItem {
  id: string
  type: 'education' | 'experience'
  role: string
  organization: string
  duration: string
  location: string
  specialization?: string
  bullets: string[]
  tech?: string[]
  skills?: string[]
  outcome?: string
}

export default function Journey() {
  const [expandedId, setExpandedId] = useState<string | null>('research')

  const journeyList: JourneyItem[] = [
    {
      id: 'mahe',
      type: 'education',
      role: 'Online MBA in Healthcare Management',
      organization: 'MAHE (Manipal Academy of Higher Education)',
      duration: '2024 - Present',
      location: 'Manipal, India',
      specialization: 'Strategic Hospital Administration & Digital Transformation',
      bullets: [
        'Curriculum emphasizing healthcare marketing, financial management, operational efficiency, and digital health strategies.',
        'Developing management capabilities to scale healthcare startups and coordinate clinical AI product deployments.'
      ]
    },
    {
      id: 'research',
      type: 'experience',
      role: 'Research Collaborator',
      organization: 'Healthcare AI Research Group',
      duration: '2023 - Present',
      location: 'Remote / Bangalore',
      bullets: [
        'Served as the domain expert for a computer vision project targeting semantic segmentations of chronic skin wounds.',
        'Annotated and curated datasets of 1,000+ clinical photographs to train and validate model backbones.',
        'Co-authored research drafts detailing boundaries evaluations and model safety guidelines.'
      ],
      tech: ['PyTorch', 'U-Net', 'OpenCV', 'Google Colab', 'LaTeX'],
      skills: ['Medical Image Annotation', 'Model Evaluation', 'Inter-rater Agreement'],
      outcome: 'Achieved an average model segmentation IoU of 0.89 under test datasets.'
    },
    {
      id: 'dynamed',
      type: 'experience',
      role: 'DynaMed Healthcare Intern',
      organization: 'DynaMed Healthcare Solutions',
      duration: 'Nov 2023 - April 2024',
      location: 'Bangalore, India',
      bullets: [
        'Analyzed hospital coding datasets to evaluate diagnostic accuracy and administrative bottlenecks.',
        'Assisted in designing dashboard interfaces for clinical department managers, linking raw EHR outputs with Power BI.',
        'Collaborated on natural language processing (NLP) validation routines for medical record abstractions.'
      ],
      tech: ['Python', 'Power BI', 'SQL Server', 'EHR APIs', 'Pandas'],
      skills: ['Clinical Code Systems', 'ETL Data Pipelines', 'Data Cleansing'],
      outcome: 'Mapped billing inaccuracies, identifying optimization pathways that reduce coding delays.'
    },
    {
      id: 'pgdmi',
      type: 'education',
      role: 'PGDMI (Post Graduate Diploma in Medical Informatics)',
      organization: 'IIHMR (Institute of Health Management Research)',
      duration: '2023 - 2024',
      location: 'Bangalore, India',
      specialization: 'AI & Data Science in Healthcare',
      bullets: [
        'Specialized course combining healthcare operations, clinical statistics, data mining, and machine learning models.',
        'Hands-on training in Python, healthcare databases (SQL), EHR standards, and clinical decision support system architecture.',
        'Completed key projects focusing on healthcare predictive analytics and medical computer vision.'
      ]
    },
    {
      id: 'coordinator',
      type: 'experience',
      role: 'Academic & Extracurricular Coordinator',
      organization: 'Institute & Dental College Panels',
      duration: '2019 - 2023',
      location: 'Bangalore, India',
      bullets: [
        'Organized digital health seminars introducing dental interns and faculty to clinical databases.',
        'Participated in dental community service camps, structuring and exporting oral epidemiology survey logs.',
        'Represented student research panels at state and national dental symposia.'
      ],
      tech: ['Excel Analytics', 'SPSS Statistics', 'Google Sheets scripting'],
      skills: ['Academic Leadership', 'Survey Methodology', 'Community Healthcare'],
      outcome: 'Delivered workshops introducing data literacy to clinical dentistry students.'
    },
    {
      id: 'bds',
      type: 'education',
      role: 'BDS (Bachelor of Dental Surgery)',
      organization: 'AECS Maaruti Dental College & Research Centre',
      duration: '2017 - 2022',
      location: 'Bangalore, India',
      specialization: 'Clinical Dentistry & Patient Care',
      bullets: [
        'Comprehensive clinical training in dental diagnosis, surgery, therapeutics, and community medicine.',
        'Acquired firsthand understanding of clinical bottlenecks, medical documentation, patient communication, and hospital hygiene protocols.'
      ]
    }
  ]

  return (
    <section id="journey" className="py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">02 / CHRONOLOGY</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Education &amp; Work Experience
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            A continuous path combining clinical dentistry, health informatics, AI research, and management.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-4">
          {journeyList.map((item) => {
            const isExpanded = expandedId === item.id
            const Icon = item.type === 'education' ? GraduationCap : Briefcase

            return (
              <div
                key={item.id}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-all overflow-hidden"
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-zinc-800 text-sky-400 mt-0.5 flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base font-semibold text-white">
                          {item.role}
                        </h3>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end space-x-4 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{item.duration}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 text-zinc-500 transition-transform ${isExpanded ? 'rotate-90 text-sky-400' : ''}`} />
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-zinc-800/60 space-y-4 text-xs text-zinc-300">
                    {item.specialization && (
                      <p className="font-mono text-sky-400 text-xs">
                        Focus: {item.specialization}
                      </p>
                    )}

                    <ul className="space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-zinc-300 leading-relaxed">
                          <span className="text-sky-400 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech & Outcome */}
                    {(item.tech || item.skills || item.outcome) && (
                      <div className="pt-3 border-t border-zinc-800/40 space-y-3">
                        {item.tech && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">Stack:</span>
                            {item.tech.map((t) => (
                              <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        {item.outcome && (
                          <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-300 italic">
                            <span className="font-semibold text-sky-400 not-italic mr-1.5">Key Outcome:</span>
                            "{item.outcome}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
