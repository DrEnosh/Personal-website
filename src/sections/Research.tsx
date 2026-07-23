import { useState } from 'react'
import { Copy, Check, FileText, Sparkles, Presentation } from 'lucide-react'

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

  const interests = [
    'Biomedical Data Science',
    'Medical Image Analysis',
    'Healthcare Informatics',
    'Digital Health',
    'AI in Healthcare'
  ]

  const currentWork = [
    {
      title: 'LLM Transcription Audit for Dentistry',
      desc: 'Developing prompt-auditing frameworks to map doctor-patient clinical dialogues into standardized CDT codes while flagging medical inaccuracies.',
      icon: Sparkles,
    },
    {
      title: 'CBCT 3D Bone Segmentation',
      desc: 'Exploring deep learning networks on 3D CBCT scans for orthodontic diagnosis and automated bone line mapping.',
      icon: Sparkles,
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
      authors: 'Paulson E A, Informatics Research Collaborative',
      journal: 'Journal of Biomedical Informatics (Preprint)',
      year: '2024',
      status: 'Under Review',
      doi: '10.1016/j.jbi.2024.placeholder',
      abstract: 'Chronic wound assessment requires consistent measurement of boundary areas. We evaluate a customized U-Net model trained on diverse skin tone photographs, demonstrating high Jaccard index metrics compared to manual clinician tracing.',
      citation: 'Paulson, E. A. & Informatics Research Collaborative. (2024). Deep Learning-Based Segmentation of Chronic Wound Outlines: A Diagnostic Aid for Outpatient Settings. Journal of Biomedical Informatics. Preprint.',
    },
    {
      title: 'Integrating Electronic Health Records with Dental Caries Risk Models: A Systematic Review of EDR Usability',
      authors: 'Paulson E A, Dental Informatics Research Panel',
      journal: 'International Journal of Medical Informatics (Preprint)',
      year: '2024',
      status: 'Under Review',
      doi: '10.1016/j.ijmedinf.2024.placeholder',
      abstract: 'Clinical decision systems in dentistry are often bottlenecked by isolated electronic dental record (EDR) silos. This paper maps interoperability protocols (HL7 FHIR) and outlines pathways for seamless model deployments.',
      citation: 'Paulson, E. A. & Dental Informatics Research Panel. (2024). Integrating Electronic Health Records with Dental Caries Risk Models: A Systematic Review of EDR Usability. International Journal of Medical Informatics. Preprint.',
    }
  ]

  const handleCopyCitation = (citation: string, id: number) => {
    navigator.clipboard.writeText(citation)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <section id="research" className="py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">04 / RESEARCH</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Research Profile &amp; Publications
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Prototyping diagnostic pipelines, auditing generative models, and publishing in health informatics.
          </p>
        </div>

        {/* Interests Badges */}
        <div className="flex flex-wrap gap-2 mb-10">
          {interests.map((interest) => (
            <span key={interest} className="badge-tag">
              {interest}
            </span>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-12">
          <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider flex items-center">
            <FileText className="h-4 w-4 mr-2 text-sky-400" />
            Preprints &amp; Papers
          </h3>

          {publications.map((pub, idx) => (
            <div
              key={pub.title}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {pub.status}
                </span>
                <span className="text-xs font-mono text-zinc-500">{pub.year}</span>
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-white leading-snug">
                {pub.title}
              </h4>

              <p className="text-xs text-zinc-400 font-mono">
                {pub.authors} &bull; <span className="italic text-zinc-300">{pub.journal}</span>
              </p>

              <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/60 p-3.5 rounded-xl border border-zinc-800/60 italic font-normal">
                {pub.abstract}
              </p>

              <div className="flex items-center justify-between pt-2 text-xs">
                <button
                  onClick={() => handleCopyCitation(pub.citation, idx)}
                  className="flex items-center space-x-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedId === idx ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] font-mono text-zinc-500">
                  DOI: {pub.doi}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus & Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-900">
          
          {/* Active Work */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-sky-400" />
              Active Research Projects
            </h3>
            {currentWork.map((work) => (
              <div key={work.title} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-1.5">
                <h4 className="text-xs font-semibold text-white">{work.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{work.desc}</p>
              </div>
            ))}
          </div>

          {/* Posters */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider flex items-center">
              <Presentation className="h-4 w-4 mr-2 text-sky-400" />
              Conference Presentations
            </h3>
            {posters.map((poster) => (
              <div key={poster.title} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-1.5">
                <span className="text-[10px] font-mono text-sky-400 uppercase">{poster.conference}</span>
                <h4 className="text-xs font-semibold text-white">{poster.title}</h4>
                <p className="text-xs text-zinc-400">{poster.details}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
