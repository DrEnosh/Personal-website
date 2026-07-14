import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Briefcase, Users, Award, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'DynaMed Healthcare Intern',
      company: 'DynaMed Healthcare Solutions',
      duration: 'Nov 2023 - April 2024',
      icon: Briefcase,
      color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-navy-800',
      description: 'Worked at the intersection of medical informatics and clinical data analysis, helping translate complex medical requirements into technical database queries.',
      bullets: [
        'Analyzed clinical documentation datasets to evaluate diagnostics coding accuracy and improve billing workflows.',
        'Assisted in building custom dashboard mockups for clinical managers, linking EHR endpoints with Power BI.',
        'Collaborated on validating natural language processing (NLP) algorithms for medical record abstractions.'
      ]
    },
    {
      role: 'Research Collaborator',
      company: 'Healthcare AI Research Group',
      duration: '2023 - Present',
      icon: Users,
      color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-navy-800',
      description: 'Engaged with multi-disciplinary research teams including computer scientists and radiologists to prototype deep learning applications.',
      bullets: [
        'Served as the clinical domain expert for a computer vision project targeting wound border segmentations.',
        'Annotated and curated datasets of 1,000+ medical images to train and evaluate CNN-based models.',
        'Co-authored research drafts detailing the clinical validity and safety guidelines of diagnostic AI systems.'
      ]
    },
    {
      role: 'Academic & Extracurricular Coordinator',
      company: 'Institute & Dental College Panels',
      duration: '2019 - 2023',
      icon: Award,
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-navy-800',
      description: 'Held leadership and organizing positions during dental surgery (BDS) and informatics courses (PGDMI).',
      bullets: [
        'Organized healthcare informatics seminars introducing dentists and clinicians to digital healthcare systems.',
        'Participated in rural dental health camps, collecting and organizing oral epidemiology survey datasets.',
        'Coordinated academic symposia and represented student research presentations at state dental conferences.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-navy-950 border-b border-slate-100 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Experience & Activities"
          subtitle="A track record of integrating clinical insights, industry experience, and academic research."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-navy-900 p-6 rounded-xl border border-slate-200/50 dark:border-navy-900 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${exp.color}`}>
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center space-x-1 text-xs font-semibold text-slate-500 dark:text-navy-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <ul className="space-y-2 border-t border-slate-100 dark:border-navy-800 pt-4">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    <span className="text-teal-500 mr-2 font-bold">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
