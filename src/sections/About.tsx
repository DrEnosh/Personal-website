import { Stethoscope, Brain, Heart } from 'lucide-react'
import headshot from '../assets/headshot.png'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  const stats = [
    { value: '5+', label: 'Clinical Years', detail: 'Formative Patient-care foundation' },
    { value: '5', label: 'Informatics Credentials', detail: 'Imperial, Oxford, Johns Hopkins' },
    { value: '4+', label: 'AI & Data Projects', detail: 'Vision, dashboards & NLP pipelines' },
    { value: '2', label: 'Research Preprints', detail: 'Biomedical segmentations in review' },
  ]

  const pillars = [
    {
      icon: Stethoscope,
      title: 'Clinical Foundation',
      desc: 'Formative dental education (BDS) providing real-world clinical experience and a deep understanding of patient care workflows.',
      color: 'text-cyan-glow bg-cyan-glow/5 border-cyan-glow/10',
    },
    {
      icon: Brain,
      title: 'Technical Integration',
      desc: 'Expertise in medical informatics, applying Python, AI models, and data analytics tools to solve biomedical challenges.',
      color: 'text-warm-400 bg-warm-500/5 border-warm-500/10',
    },
    {
      icon: Heart,
      title: 'Digital Health Vision',
      desc: 'Dedicated to designing clinical decision support systems, smart diagnostics, and scalable healthcare products.',
      color: 'text-cyan-glow bg-cyan-glow/5 border-cyan-glow/10',
    },
  ]

  return (
    <section id="about-details" className="section-padding bg-void relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-narrow">
        <ScrollReveal direction="up">
          <span className="text-section-label">01 / PERSPECTIVE</span>
          <h2 className="text-display-lg text-white mt-3 mb-16 max-w-3xl">
            Bridging clinical experience with cutting-edge medical artificial intelligence.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-6 text-body-lg font-light leading-relaxed">
                <h3 className="text-display-sm text-white font-medium">
                  The Dentist-to-AI Transition
                </h3>
                
                <p>
                  As a trained dentist (BDS) who went on to pursue a Post Graduate Diploma in Medical Informatics (PGDMI) focusing on AI &amp; Data Science in Healthcare, I occupy a unique space. I speak both the clinical language of healthcare providers and the technical language of data scientists.
                </p>

                <p>
                  This duality is essential in modern medicine. Medical AI cannot succeed in a silo; it requires domain-expert validation to ensure safety, efficacy, and ease of adoption in actual clinics. My goal is to build, validate, and scale digital health tools that directly support healthcare practitioners and improve patient outcomes.
                </p>

                <p className="text-body text-ink-400 font-normal">
                  Whether analyzing medical images using deep learning (e.g. U-Net models for wound segmentation) or leveraging healthcare management frameworks (MAHE Online MBA), I strive to create holistic, clinically viable, and technologically sound solutions.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Pillars */}
            <ScrollReveal direction="up" delay={0.2} className="space-y-6 pt-6 border-t border-ink-900">
              <h4 className="text-xs font-mono font-bold tracking-widest text-ink-500 uppercase">Methodology</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-lg border border-ink-850 bg-ink-900/30 flex flex-col justify-between h-full"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg border ${pillar.color}`}>
                        <pillar.icon className="h-4.5 w-4.5" />
                      </div>
                      <h5 className="text-xs font-mono font-bold tracking-wider text-white">
                        {pillar.title}
                      </h5>
                    </div>
                    <p className="text-xs text-ink-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Headshot & Statistics Grid */}
          <div className="lg:col-span-5 space-y-12">
            {/* Circular Profile Headshot */}
            <ScrollReveal direction="up" delay={0.2} className="flex justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                {/* Thin cyan border element */}
                <div className="absolute inset-0 rounded-full border border-cyan-glow/20 animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full overflow-hidden border border-ink-800 bg-ink-900">
                  <img
                    src={headshot}
                    alt="Dr. Enosh A. Paulson"
                    className="w-full h-full object-cover grayscale opacity-90 contrast-105 transition-all duration-500 hover:grayscale-0 hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Statistics Grid */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl border border-ink-900 bg-ink-900/30 text-left"
                  >
                    <div className="text-3xl font-display font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono tracking-widest text-cyan-glow uppercase mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-ink-500 mt-2 font-light">
                      {stat.detail}
                    </div>
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
