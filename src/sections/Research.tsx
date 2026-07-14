import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { BookOpen, Copy, Check, FileText, Sparkles, Presentation, Award, TrendingUp } from 'lucide-react'

interface Publication {
  title: string
  authors: string
  journal: string
  year: string
  status: string
  doi: string
  abstract: string
  citation: string
}

export default function Research() {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const metrics = [
    { label: 'Preprints', value: '2', detail: 'In peer-review' },
    { label: 'Citations', value: '18', detail: 'Estimations' },
    { label: 'Research Areas', value: '5', detail: 'Clinical AI focus' },
    { label: 'Posters', value: '2', detail: 'Presented' },
  ]

  const interests = [
    { title: 'Biomedical Data Science', desc: 'Predictive analytics on EHR and clinical data.' },
    { title: 'Medical Image Analysis', desc: 'U-Net segmentations and diagnostic computer vision.' },
    { title: 'Healthcare Informatics', desc: 'FHIR standardizations, EDR systems, and workflows.' },
    { title: 'Digital Health', desc: 'Mobile diagnostic applications and remote care models.' },
    { title: 'AI in Healthcare', desc: 'Auditing LLM agents and clinical safety frameworks.' },
  ]

  const currentWork = [
    {
      title: 'LLM Transcription Audit for Dentistry',
      desc: 'Developing prompt-auditing frameworks to map doctor-patient clinical dialogues into standardized CDT codes while flagging medical inaccuracies.',
      icon: Sparkles,
      color: 'text-teal-600 bg-teal-50 dark:bg-navy-850 dark:text-teal-400',
    },
    {
      title: 'CBCT 3D Bone Segmentation',
      desc: 'Exploring deep learning networks on 3D CBCT scans for orthodontic diagnosis and automated bone line mapping.',
      icon: TrendingUp,
      color: 'text-cyan-600 bg-cyan-50 dark:bg-navy-850 dark:text-cyan-400',
    }
  ]

  const posters = [
    {
      title: 'U-Net Segmentation for Decubitus Ulcers in Diabetic Outpatients',
      conference: 'Health Informatics Summit 2024',
      location: 'London, UK',
      details: 'Demonstrated deep learning segmentation metrics on clinical wound outlines.',
    },
    {
      title: 'FHIR Interoperability Protocols in Outpatient Dentistry',
      conference: 'National Digital Health Symposium 2023',
      location: 'Bangalore, India',
      details: 'Evaluated workflows linking dental software endpoints with hospital EHR databases.',
    }
  ]

  const publications: Publication[] = [
    {
      title: 'Deep Learning-Based Segmentation of Chronic Wound Outlines: A Diagnostic Aid for Outpatient Settings',
      authors: 'Paulson E. A., Informatics Research Collaborative',
      journal: 'Journal of Biomedical Informatics (Preprint)',
      year: '2024',
      status: 'Under Review',
      doi: '10.1016/j.jbi.2024.placeholder',
      abstract: 'Chronic wound assessment requires consistent measurement of boundary areas. We evaluate a customized U-Net model trained on diverse skin tone photographs, demonstrating high Jaccard index metrics compared to manual clinician tracing.',
      citation: 'Paulson, E. A., & Informatics Research Collaborative. (2024). Deep Learning-Based Segmentation of Chronic Wound Outlines: A Diagnostic Aid for Outpatient Settings. Journal of Biomedical Informatics. Preprint.',
    },
    {
      title: 'Integrating Electronic Health Records with Dental Caries Risk Models: A Systematic Review of EDR Usability',
      authors: 'Paulson E. A., Dental Informatics Research Panel',
      journal: 'International Journal of Medical Informatics (Preprint)',
      year: '2024',
      status: 'Under Review',
      doi: '10.1016/j.ijmedinf.2024.placeholder',
      abstract: 'Clinical decision systems in dentistry are often bottlenecked by isolated electronic dental record (EDR) silos. This paper maps interoperability protocols (HL7 FHIR) and outlines pathways for seamless model deployments.',
      citation: 'Paulson, E. A., & Dental Informatics Research Panel. (2024). Integrating Electronic Health Records with Dental Caries Risk Models: A Systematic Review of EDR Usability. International Journal of Medical Informatics. Preprint.',
    }
  ]

  const handleCopyCitation = (citation: string, id: number) => {
    navigator.clipboard.writeText(citation)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <section id="research" className="py-20 bg-white dark:bg-navy-900 border-b border-slate-200/40 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Research Profile"
          subtitle="Prototyping diagnostic pipelines, auditing generative models, and publishing on health informatics."
          center
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {metrics.map((m) => (
            <div key={m.label} className="p-5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/40 dark:border-navy-900/60 text-center">
              <div className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                {m.value}
              </div>
              <div className="text-xs font-bold text-navy-900 dark:text-white uppercase tracking-wider mt-1">
                {m.label}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-navy-500 mt-0.5">
                {m.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Research Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-16">
          {/* Left Column: Interests & Focus */}
          <div className="lg:col-span-5 space-y-8">
            {/* Interests list */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-teal-500" />
                Interests & Focus
              </h3>
              <div className="space-y-3">
                {interests.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-800/40">
                    <h4 className="text-sm font-semibold text-navy-900 dark:text-white">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Research focus */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center">
                <Award className="h-5 w-5 mr-2 text-teal-500" />
                Active Prototyping
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {currentWork.map((work) => (
                  <div key={work.title} className="p-4 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-800/40 flex items-start space-x-3">
                    <div className={`p-2 rounded ${work.color} mt-0.5`}>
                      <work.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900 dark:text-white">{work.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 leading-relaxed">{work.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Publications & Posters */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Preprints */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center">
                <FileText className="h-5 w-5 mr-2 text-teal-500" />
                Publications & Preprints
              </h3>
              <div className="space-y-6">
                {publications.map((pub, idx) => (
                  <div key={pub.title} className="p-5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-800/40 space-y-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 text-[9px] uppercase font-bold tracking-wider">
                        {pub.status}
                      </span>
                      <h4 className="text-md font-bold text-navy-900 dark:text-white mt-1.5 leading-snug">
                        {pub.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 font-medium">
                        {pub.authors} &bull; <span className="italic">{pub.journal}</span>
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic bg-white dark:bg-navy-900 p-2.5 rounded border border-slate-150 dark:border-navy-850">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-navy-500">
                        DOI: {pub.doi}
                      </span>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleCopyCitation(pub.citation, idx)}
                          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-navy-900 dark:text-navy-450 dark:hover:text-white cursor-pointer"
                        >
                          {copiedId === idx ? (
                            <>
                              <Check className="h-3.5 w-3.5 mr-1 text-emerald-500" />
                              <span className="text-emerald-500">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 mr-1" />
                              <span>Copy APA Citation</span>
                            </>
                          )}
                        </button>

                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            alert('Opening preprint draft PDF...')
                          }}
                          className="inline-flex items-center text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                        >
                          <FileText className="h-3.5 w-3.5 mr-1" />
                          Preprint PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conference Posters */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center">
                <Presentation className="h-5 w-5 mr-2 text-teal-500" />
                Conference Posters & Presentations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posters.map((poster) => (
                  <div key={poster.title} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-800/40 space-y-2">
                    <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wide">
                      {poster.conference}
                    </h4>
                    <h5 className="text-sm font-bold text-navy-900 dark:text-white leading-snug">
                      {poster.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {poster.details}
                    </p>
                    <div className="text-[10px] text-slate-400 dark:text-navy-500 font-semibold uppercase">
                      {poster.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
