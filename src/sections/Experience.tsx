import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Briefcase, Users, Award, Calendar, AwardIcon, Cpu, BookOpen } from 'lucide-react'

interface ExpItem {
  role: string
  company: string
  duration: string
  icon: typeof Briefcase
  color: string
  description: string
  bullets: string[]
  tech: string[]
  skills: string[]
  outcome: string
}

export default function Experience() {
  const experiences: ExpItem[] = [
    {
      role: 'DynaMed Healthcare Intern',
      company: 'DynaMed Healthcare Solutions',
      duration: 'Nov 2023 - April 2024',
      icon: Briefcase,
      color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-navy-850',
      description: 'Operated at the intersection of medical informatics and clinical coding workflows, helping translate complex clinical billing standards into data model parameters.',
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
      role: 'Research Collaborator',
      company: 'Healthcare AI Research Group',
      duration: '2023 - Present',
      icon: Users,
      color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-navy-850',
      description: 'Bridges clinical dental workflows with computer science projects to prototype diagnostic deep learning algorithms.',
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
      role: 'Academic & Extracurricular Coordinator',
      company: 'Institute & Dental College Panels',
      duration: '2019 - 2023',
      icon: Award,
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-navy-850',
      description: 'Led educational efforts to introduce modern data tools to clinicians and coordinated local public health data compilations.',
      bullets: [
        'Organized digital health seminars introducing dental interns and faculty to clinical databases.',
        'Participated in dental community service camps, structuring and exporting oral epidemiology survey logs.',
        'Represented student research panels at state and national dental symposia.'
      ],
      tech: ['Excel Analytics', 'SPSS Statistics', 'Google Sheets scripting'],
      skills: ['Academic Leadership', 'Survey Methodology', 'Community Healthcare'],
      outcome: 'Delivered workshops introducing data literacy to clinical dentistry students.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-navy-950 border-b border-slate-200/40 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Experience & Impact"
          subtitle="Proving clinical insight, analytical engineering, and research leadership inside healthcare environments."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-200/60 dark:border-navy-900/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${exp.color} shadow-sm`}>
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 dark:text-navy-450">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900 dark:text-white leading-snug">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      <span className="text-teal-500 mr-2 font-bold">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recruiter Specs: Tech, Skills & Outcome */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-navy-800">
                {/* Tech tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-navy-950 dark:text-slate-350 uppercase tracking-widest flex items-center">
                    <Cpu className="h-3.5 w-3.5 mr-1.5 text-teal-500" />
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-50 dark:bg-navy-850 text-slate-500 dark:text-navy-400 border border-slate-200/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Gained */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-navy-950 dark:text-slate-350 uppercase tracking-widest flex items-center">
                    <BookOpen className="h-3.5 w-3.5 mr-1.5 text-cyan-500" />
                    Skills Gained
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-50 dark:bg-navy-850 text-slate-500 dark:text-navy-450 border border-slate-200/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-navy-950 dark:text-slate-350 uppercase tracking-widest flex items-center">
                    <AwardIcon className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
                    Key Outcome
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium italic">
                    &ldquo;{exp.outcome}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
