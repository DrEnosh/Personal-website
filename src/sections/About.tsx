import { Stethoscope, Brain, Heart, CheckCircle2 } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      icon: Stethoscope,
      title: 'Clinical Foundation',
      desc: 'Formative dental education (BDS) providing real-world clinical experience and a deep understanding of patient care workflows.',
      tag: '5+ Years Clinical',
    },
    {
      icon: Brain,
      title: 'Technical Integration',
      desc: 'Expertise in medical informatics, applying Python, machine learning, and data analytics tools to solve biomedical challenges.',
      tag: 'AI & Data Science',
    },
    {
      icon: Heart,
      title: 'Digital Health Vision',
      desc: 'Dedicated to designing clinical decision support systems, smart diagnostics, and scalable healthcare products.',
      tag: 'Product Strategy',
    },
  ]

  const highlights = [
    'Bridge clinician needs with data science team capabilities',
    'Specialized in medical image segmentation (U-Net & ResNet backbones)',
    'Hands-on experience with hospital coding & EHR workflows (HL7 FHIR)',
    'Continuous credentialing from Oxford, Imperial, and Johns Hopkins',
  ]

  return (
    <section id="about-details" className="py-16 md:py-24 border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">01 / BACKGROUND</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            The Dentist-to-AI Transition
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              As a trained dentist (BDS) who went on to pursue a Post Graduate Diploma in Medical Informatics (PGDMI) focusing on AI &amp; Data Science in Healthcare, I occupy a unique space. I speak both the clinical language of healthcare providers and the technical language of data scientists.
            </p>

            <p className="text-zinc-400 text-base">
              This duality is essential in modern medicine. Medical AI cannot succeed in a silo; it requires domain-expert validation to ensure safety, efficacy, and ease of adoption in actual clinics. My goal is to build, validate, and scale digital health tools that directly support healthcare practitioners and improve patient outcomes.
            </p>

            <div className="pt-4 space-y-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start space-x-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Three Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-zinc-800 text-sky-400">
                      <pillar.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    {pillar.tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
