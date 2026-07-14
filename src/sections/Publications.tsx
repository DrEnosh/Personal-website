import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { FileText, Calendar, Users } from 'lucide-react'

export default function Publications() {
  const publications = [
    {
      title: 'Deep Learning-Based Segmentation of Chronic Wound Outlines: A Diagnostic Aid for Outpatient Settings',
      authors: 'Paulson E. A., Informatics Research Collaborative',
      status: 'Preprint / Under Review',
      journal: 'Journal of Biomedical Informatics',
      year: '2024',
      abstract: 'Chronic wound assessment requires consistent measurement of boundary areas. We evaluate a customized U-Net model trained on diverse skin tone photographs, demonstrating high Jaccard index metrics compared to manual clinician tracing.',
      link: '#',
    },
    {
      title: 'Integrating Electronic Health Records with Dental Caries Risk Models: A Systematic Review of EDR Usability',
      authors: 'Paulson E. A., Dental Informatics Research Panel',
      status: 'In Progress',
      journal: 'International Journal of Medical Informatics',
      year: '2024',
      abstract: 'Clinical decision systems in dentistry are often bottlenecked by isolated electronic dental record (EDR) silos. This paper maps interoperability protocols (HL7 FHIR) and outlines pathways for seamless model deployments.',
      link: '#',
    }
  ]

  return (
    <section id="research" className="py-20 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Publications & Research"
          subtitle="Preprints, ongoing research projects, and academic papers."
          center
        />

        <div className="space-y-6 max-w-4xl mx-auto text-left">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-900/50 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/50 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-teal-700 dark:text-teal-400">
                    <span>{pub.status}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white leading-snug">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="font-medium">{pub.authors}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-xs font-semibold text-teal-600 dark:text-teal-400">
                    <span>{pub.journal}</span>
                    <span className="text-slate-300 dark:text-navy-800">|</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{pub.year}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href={pub.link}
                    className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors shadow-sm hover:shadow"
                  >
                    <FileText className="h-3.5 w-3.5 mr-1.5" />
                    Read Draft
                  </a>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-200/50 dark:border-navy-900/50 pt-4">
                <p className="text-xs font-semibold text-navy-800 dark:text-slate-300 mb-1">
                  ABSTRACT
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  {pub.abstract}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
