import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const educationList = [
    {
      degree: 'PGDMI (Post Graduate Diploma in Medical Informatics)',
      specialization: 'AI & Data Science in Healthcare',
      institution: 'IIHMR (Institute of Health Management Research), Bangalore',
      duration: '2023 - 2024',
      location: 'Bangalore, India',
      details: [
        'Specialized course combining healthcare operations, clinical statistics, data mining, and machine learning models.',
        'Hands-on training in Python, healthcare databases (SQL), EHR standards, and clinical decision support system architecture.',
        'Completed key projects focusing on healthcare predictive analytics and medical computer vision.'
      ]
    },
    {
      degree: 'Online MBA in Healthcare Management',
      specialization: 'Strategic Hospital Administration & Digital Transformation',
      institution: 'MAHE (Manipal Academy of Higher Education)',
      duration: '2024 - Present',
      location: 'Manipal, India (Online)',
      details: [
        'Curriculum emphasizing healthcare marketing, financial management, operational efficiency, and digital health strategies.',
        'Developing the management capabilities to scale healthcare startups and coordinate clinical AI product deployments.'
      ]
    },
    {
      degree: 'BDS (Bachelor of Dental Surgery)',
      specialization: 'Clinical Dentistry & Patient Care',
      institution: 'AECS Maaruti Dental College & Research Centre',
      duration: '2017 - 2022',
      location: 'Bangalore, India',
      details: [
        'Comprehensive clinical training in dental diagnosis, surgery, therapeutics, and community medicine.',
        'Acquired firsthand understanding of clinical bottlenecks, medical documentation, patient communication, and hospital hygiene protocols.'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Education"
          subtitle="A unique academic blend of clinical dentistry, health informatics, and management."
          center
        />

        <div className="relative border-l-2 border-slate-200 dark:border-navy-800 ml-4 md:ml-12 space-y-12 text-left">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white dark:bg-navy-900 border-4 border-teal-500 group-hover:border-cyan-500 transition-colors duration-200" />
              
              {/* Timeline Node Content */}
              <div className="bg-slate-50 dark:bg-navy-950 p-6 md:p-8 rounded-xl border border-slate-100 dark:border-navy-900/50 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 p-2 rounded-lg bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                        {edu.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end space-x-4 md:space-x-0 space-y-0 md:space-y-1 mt-4 md:mt-0 text-xs font-semibold text-slate-500 dark:text-navy-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-md font-semibold text-navy-800 dark:text-slate-300 mb-4">
                  {edu.institution}
                </div>

                <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
