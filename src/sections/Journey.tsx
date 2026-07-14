import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, ChevronRight, Award, BookOpen, Cpu } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

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
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const journeyList: JourneyItem[] = [
    {
      id: 'mahe',
      type: 'education',
      role: 'Online MBA in Healthcare Management',
      organization: 'MAHE (Manipal Academy of Higher Education)',
      duration: '2024 - Present',
      location: 'Manipal, India (Online)',
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
    <section id="journey" className="section-padding bg-void relative overflow-hidden border-t border-ink-900/60">
      {/* Decorative radial blur */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-narrow">
        <ScrollReveal direction="up">
          <span className="text-section-label">02 / CHRONOLOGY</span>
          <h2 className="text-display-lg text-white mt-3 mb-20 max-w-2xl">
            A cohesive trajectory bridging clinical care and AI.
          </h2>
        </ScrollReveal>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-ink-900 ml-4 md:ml-1/2 space-y-16 text-left">
          {journeyList.map((item, index) => {
            const isLeft = index % 2 === 0
            const Icon = item.type === 'education' ? GraduationCap : Briefcase

            return (
              <div key={item.id} className="relative w-full">
                {/* Timeline node dot */}
                <div className="absolute -left-[6px] md:left-1/2 md:-translate-x-1/2 top-2 h-3.5 w-3.5 rounded-full bg-void border-2 border-cyan-glow z-10" />

                {/* Timeline Content Block */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? 'md:mr-auto' : 'md:ml-auto md:text-left'}`}>
                  <ScrollReveal direction={isLeft ? 'left' : 'right'} delay={0.1}>
                    <div
                      onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                      className="p-6 rounded-xl border border-ink-900 hover:border-cyan-glow/30 bg-ink-900/20 backdrop-blur-sm cursor-pointer select-none transition-all duration-300"
                    >
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-ink-500 uppercase mb-3">
                        <span className="flex items-center gap-1 text-cyan-glow">
                          <Icon className="h-3 w-3" />
                          {item.type}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-md font-semibold text-white tracking-tight leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs text-ink-400 mt-1 font-medium">
                        {item.organization}
                      </p>

                      {item.specialization && (
                        <p className="text-[11px] text-cyan-glow/85 font-mono mt-1">
                          {item.specialization}
                        </p>
                      )}

                      {/* Expand indicator */}
                      <div className="flex items-center text-[10px] text-ink-500 font-mono mt-4 uppercase group">
                        <span>Details</span>
                        <ChevronRight className={`h-3.5 w-3.5 ml-1 transition-transform duration-300 ${activeItem === item.id ? 'rotate-90' : ''}`} />
                      </div>

                      {/* Details dropdown */}
                      <AnimatePresence initial={false}>
                        {activeItem === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden mt-4 pt-4 border-t border-ink-900 space-y-4"
                          >
                            {/* Bullets */}
                            <ul className="space-y-2">
                              {item.bullets.map((bullet, idx) => (
                                <li key={idx} className="text-xs text-ink-400 leading-relaxed list-disc list-inside">
                                  {bullet}
                                </li>
                              ))}
                            </ul>

                            {/* Tech, Skills, and Outcome */}
                            {(item.tech || item.skills || item.outcome) && (
                              <div className="space-y-4 pt-2">
                                {item.tech && (
                                  <div>
                                    <div className="text-[9px] font-mono text-ink-500 uppercase tracking-wider flex items-center mb-1">
                                      <Cpu className="h-3 w-3 mr-1.5 text-cyan-glow" />
                                      Stack
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {item.tech.map((t) => (
                                        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-ink-900 border border-ink-850 text-ink-300">
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {item.skills && (
                                  <div>
                                    <div className="text-[9px] font-mono text-ink-500 uppercase tracking-wider flex items-center mb-1">
                                      <BookOpen className="h-3 w-3 mr-1.5 text-warm-400" />
                                      Skills Gained
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {item.skills.map((s) => (
                                        <span key={s} className="text-[9px] font-mono px-2 py-0.5 rounded bg-ink-900 border border-ink-850 text-ink-300">
                                          {s}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {item.outcome && (
                                  <div className="border-l border-cyan-glow/30 pl-3 py-1">
                                    <div className="text-[9px] font-mono text-ink-500 uppercase tracking-wider flex items-center mb-0.5">
                                      <Award className="h-3 w-3 mr-1.5 text-cyan-glow" />
                                      Operational Outcome
                                    </div>
                                    <p className="text-xs text-white italic font-light">
                                      "{item.outcome}"
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
