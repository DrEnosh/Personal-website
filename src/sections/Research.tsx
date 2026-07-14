import { useState } from 'react'
import { BookOpen, Copy, Check, FileText, Sparkles, Presentation, Award, TrendingUp } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

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
      icon: TrendingUp,
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
    <section id="research" className="section-padding bg-void relative overflow-hidden border-t border-ink-900/60">
      {/* Accent glow */}
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-glow/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-narrow">
        <ScrollReveal direction="up">
          <span className="text-section-label">04 / SCHOLARSHIP</span>
          <h2 className="text-display-lg text-white mt-3 mb-20 max-w-2xl">
            Prototyping diagnostic pipelines &amp; clinical data products.
          </h2>
        </ScrollReveal>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Metrics & Focus */}
          <div className="lg:col-span-5 space-y-12 text-left">
            {/* Monospace tag cloud */}
            <ScrollReveal direction="up" delay={0.1} className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest text-ink-500 uppercase flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-cyan-glow" />
                Interests &amp; Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full border border-ink-900 bg-ink-900/10 text-ink-200">
                    {interest}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Active Projects */}
            <ScrollReveal direction="up" delay={0.2} className="space-y-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-ink-500 uppercase flex items-center">
                <Award className="h-4 w-4 mr-2 text-cyan-glow" />
                Active Prototyping
              </h3>
              <div className="space-y-4">
                {currentWork.map((work) => (
                  <div key={work.title} className="p-5 rounded-xl border border-ink-900 bg-ink-900/20 backdrop-blur-sm flex items-start space-x-4">
                    <div className="p-2 rounded bg-ink-900 border border-ink-850 text-cyan-glow mt-0.5">
                      <work.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-white">
                        {work.title}
                      </h4>
                      <p className="text-xs text-ink-400 mt-2 leading-relaxed">
                        {work.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Metrics cards */}
            <ScrollReveal direction="up" delay={0.3} className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-ink-900 bg-ink-900/10 text-center">
                  <div className="text-2xl font-display font-bold text-cyan-glow">
                    {m.value}
                  </div>
                  <div className="text-[9px] font-mono tracking-widest text-white uppercase mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-ink-500 mt-1">
                    {m.detail}
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right Column: Publications */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <ScrollReveal direction="up" delay={0.1} className="space-y-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-ink-500 uppercase flex items-center">
                <FileText className="h-4 w-4 mr-2 text-cyan-glow" />
                Publications &amp; Preprints
              </h3>

              <div className="space-y-8">
                {publications.map((pub, idx) => (
                  <div key={pub.title} className="p-6 rounded-xl border border-ink-900 bg-ink-900/15 space-y-4">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-cyan-glow/10 border border-cyan-glow/20 text-[9px] font-mono tracking-wider text-cyan-glow uppercase">
                        {pub.status}
                      </span>
                      <h4 className="text-sm font-semibold text-white tracking-tight leading-snug mt-2">
                        {pub.title}
                      </h4>
                      <p className="text-xs text-ink-450 mt-1 font-medium">
                        {pub.authors} &bull; <span className="italic">{pub.journal}</span>
                      </p>
                    </div>

                    <p className="text-xs text-ink-400 leading-relaxed italic bg-ink-900/40 p-3 rounded border border-ink-850">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono pt-1">
                      <span className="text-ink-600">
                        DOI: {pub.doi}
                      </span>
                      
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleCopyCitation(pub.citation, idx)}
                          className="inline-flex items-center text-ink-500 hover:text-cyan-glow transition-colors cursor-pointer"
                        >
                          {copiedId === idx ? (
                            <>
                              <Check className="h-3.5 w-3.5 mr-1 text-success" />
                              <span className="text-success">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 mr-1" />
                              <span>Copy Citation</span>
                            </>
                          )}
                        </button>

                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            alert('Opening preprint draft PDF...')
                          }}
                          className="inline-flex items-center text-cyan-glow hover:text-cyan-300"
                        >
                          <FileText className="h-3.5 w-3.5 mr-1" />
                          PDF Draft
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Conference Posters */}
            <ScrollReveal direction="up" delay={0.2} className="space-y-6 pt-6 border-t border-ink-900">
              <h3 className="text-xs font-mono font-bold tracking-widest text-ink-500 uppercase flex items-center">
                <Presentation className="h-4 w-4 mr-2 text-cyan-glow" />
                Conference Presentations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {posters.map((poster) => (
                  <div key={poster.title} className="p-4 rounded-xl border border-ink-900 bg-ink-900/10 space-y-2">
                    <span className="text-[9px] font-mono font-bold text-cyan-glow uppercase tracking-wider block">
                      {poster.conference}
                    </span>
                    <h5 className="text-xs font-bold text-white leading-snug">
                      {poster.title}
                    </h5>
                    <p className="text-[11px] text-ink-450 leading-relaxed">
                      {poster.details}
                    </p>
                    <span className="text-[9px] font-mono text-ink-500 uppercase block">
                      {poster.location}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
