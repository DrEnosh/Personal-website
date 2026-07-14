import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Search, Calendar, Clock, ArrowLeft, BookOpen, Tag } from 'lucide-react'

interface Post {
  id: number
  title: string
  date: string
  category: string
  readTime: string
  tags: string[]
  summary: string
  content: string
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const posts: Post[] = [
    {
      id: 1,
      title: 'Evaluating Medical Imaging Models: Beyond Pixel Accuracy',
      date: 'June 18, 2026',
      category: 'Clinical AI',
      readTime: '6 min read',
      tags: ['Computer Vision', 'Validation', 'PyTorch'],
      summary: 'Why traditional classification accuracies fail when evaluating semantic segmentation models like U-Net on decubitus ulcers, and how Jaccard/Dice indices correlate with clinical success.',
      content: `### The Problem with Simple Accuracy

When training convolutional neural networks on medical datasets, clinicians and engineers often default to "Accuracy" (correct pixels / total pixels) as their primary evaluation metric. In segmentation, however, this leads to the **Class Imbalance Trap**.

For example, in a 256x256 image of a diabetic foot ulcer, the actual wound ulcer region might only occupy **10%** of the image area. A dummy model that predicts "background" for *every single pixel* will automatically achieve a **90% accuracy rating**. Clinically, this model is completely useless, as it fails to identify the pathology.

### Better Metrics: Dice and Jaccard (IoU)

To objectively evaluate wound boundaries and medical contours, we must rely on metrics that ignore background pixel agreement:

1. **Jaccard Index / Intersection over Union (IoU)**:
   \\[
   \\text{IoU} = \\frac{|A \\cap B|}{|A \\cup B|}
   \\]
   Where A is the ground truth annotation and B is the predicted model mask.
   
2. **Dice Similarity Coefficient (DSC)**:
   \\[
   \\text{Dice} = \\frac{2 |A \\cap B|}{|A| + |B|}
   \\]

### Implementing a Dice Loss Function in PyTorch

To optimize our U-Net model directly for clinical boundary detection, we can incorporate Dice Loss alongside traditional Binary Cross Entropy:

\`\`\`python
import torch
import torch.nn as nn

class DiceLoss(nn.Module):
    def __init__(self, smooth=1.0):
        super(DiceLoss, self).__init__()
        self.smooth = smooth

    def forward(self, pred, target):
        # Flatten predictions and target masks
        pred = pred.view(-1)
        target = target.view(-1)
        
        intersection = (pred * target).sum()
        total = pred.sum() + target.sum()
        
        dice = (2.0 * intersection + self.smooth) / (total + self.smooth)
        return 1.0 - dice
\`\`\`

### Clinical Takeaways
When auditing AI diagnostics systems, recruiters and clinic managers should verify that evaluations utilize IoU benchmarks. Models scoring above **0.85 IoU** are generally considered highly robust and equivalent to multi-clinician average boundaries.`,
    },
    {
      id: 2,
      title: 'Demystifying HL7 FHIR: Building Interoperable Clinical Systems',
      date: 'May 24, 2026',
      category: 'Medical Informatics',
      readTime: '8 min read',
      tags: ['FHIR', 'Interoperability', 'EHR'],
      summary: 'A deep dive into Fast Healthcare Interoperability Resources (FHIR). Learn how to parse JSON patient entries and map model predictions back into clinic databases.',
      content: `### Why Interoperability is the Holy Grail of HealthTech

Deploying a model inside a laboratory is simple; deploying it within a hospital's active Electronic Health Record (EHR) ecosystem is where most digital health innovations fail. Traditionally, medical systems communicated via rigid **HL7 v2 messages**—raw text streams separated by pipes (\`|\`) that required custom parsers.

**Fast Healthcare Interoperability Resources (FHIR)** changed this by introducing a modern RESTful API standard using JSON payloads.

### Structure of a FHIR Resource
All data in FHIR is represented as a "Resource" (e.g., Patient, Observation, DiagnosticReport). Below is a simplified example of a FHIR Patient resource:

\`\`\`json
{
  "resourceType": "Patient",
  "id": "enosh-paulson-01",
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Paulson",
      "given": ["Enosh", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1995-10-15"
}
\`\`\`

### Reading Observations via REST APIs

Using Python and standard requests, we can retrieve a patient's laboratory values or clinical observations:

\`\`\`python
import requests

def get_patient_observations(fhir_url, patient_id):
    endpoint = f"{fhir_url}/Observation?patient={patient_id}"
    headers = {"Accept": "application/fhir+json"}
    
    response = requests.get(endpoint, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return [entry['resource'] for entry in data.get('entry', [])]
    return []
\`\`\`

### The Clinical AI Gateway
To push a U-Net wound segmentation score back into Epic or Cerner, the model server must convert its boundary output into a FHIR **DocumentReference** or **Observation** resource, linking the segmented image URI. This ensures that radiologists and dentists can inspect AI suggestions directly within their normal viewing screens.`,
    },
    {
      id: 3,
      title: 'Prompt Auditing: Ensuring Safety in Clinical LLM Agents',
      date: 'April 05, 2026',
      category: 'Clinical AI',
      readTime: '5 min read',
      tags: ['LLMs', 'Clinical Safety', 'Auditing'],
      summary: 'How to audit prompt outputs and evaluate RAG-based systems for clinical inaccuracies or fabrications before physician presentation.',
      content: `### The Threat of Generative Hallucinations

Generative AI agents powered by Large Language Models (LLMs) can synthesize hospital chart summaries from audio recordings. However, unlike business applications, a hallucinated decimal point or mixed-up medication dosage in a medical chart can have **fatal consequences**.

Therefore, clinical agents require rigorous **prompt auditing** and localized retrieval boundaries.

### Designing a Clinical Audit Framework
To safely extract dental codes (CDT) from clinical conversation transcripts, we implement a multi-layered check:

1. **Deterministic Filter**: Regex and keyword matching to align transcript terms with medical billing datasets.
2. **Contextual Retrieval (RAG)**: Limiting the model's knowledge boundaries to standard hospital reference books indexed in a vector store.
3. **Auditing Prompts**: Running a second, independent LLM strictly to evaluate the generated summary for accuracy against the raw transcript.

### Example LangChain Safety Filter

Below is a snippet showcasing how to route a query to a safety auditor node before writing summaries:

\`\`\`python
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI

def audit_summary(summary, raw_transcript):
    auditor = ChatOpenAI(temperature=0.0, model="gpt-4")
    
    template = """
    Compare the Clinical Summary with the Raw Transcript.
    Identify any diagnostic facts, names, or drug dosages present in the Summary that CANNOT be verified by the Transcript.
    
    Transcript: {transcript}
    Summary: {summary}
    
    Output "SAFE" if no discrepancies exist, or output a detailed list of errors.
    """
    
    prompt = PromptTemplate.from_template(template)
    response = auditor.predict(prompt.format(transcript=raw_transcript, summary=summary))
    return response
\`\`\`

### Summary
By wrapping generative pipelines in safety-auditor models, clinical teams can safely employ automated charting tools, returning valuable hours to outpatient practitioners.`,
    }
  ]

  const categories = ['All', 'Clinical AI', 'Medical Informatics']

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const getRelatedPosts = (currentPost: Post) => {
    return posts.filter(
      (p) => p.id !== currentPost.id && (p.category === currentPost.category || p.tags.some((t) => currentPost.tags.includes(t)))
    )
  }

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-navy-950 border-b border-slate-200/40 dark:border-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            // Grid List View
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              <SectionHeader
                title="Documentation & Insights"
                subtitle="Clinical informatics guides, technical tutorials, and thoughts on AI safety in healthcare."
                center
              />

              {/* Controls: Search & Categories */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl mx-auto">
                {/* Search */}
                <div className="relative flex-grow max-w-md">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <Search className="h-4.5 w-4.5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search articles by title, tag, or summary..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:text-white"
                  />
                </div>

                {/* Categories */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500'
                          : 'bg-white border-slate-200 text-slate-600 dark:bg-navy-900 dark:border-navy-800 dark:text-slate-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Post Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    layout
                    className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-900 shadow-sm hover:shadow-md hover:border-teal-500/25 dark:hover:border-teal-500/25 transition-all duration-300 text-left"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400 dark:text-navy-450 uppercase">
                        <span>{post.category}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3
                        onClick={() => setSelectedPost(post)}
                        className="text-lg font-bold text-navy-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer leading-snug"
                      >
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-50 dark:bg-navy-850 text-slate-500 dark:text-navy-400 border border-slate-200/20"
                          >
                            <Tag className="h-2 w-2 mr-1 text-teal-500" />
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-350 cursor-pointer"
                      >
                        Read Post &rarr;
                      </button>
                    </div>
                  </motion.article>
                ))}

                {filteredPosts.length === 0 && (
                  <div className="col-span-full text-center py-12 text-slate-400 dark:text-navy-500">
                    No articles found matching the criteria.
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            // Full Post Reader View
            <motion.div
              key="post-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="max-w-3xl mx-auto text-left"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-navy-950 dark:hover:text-white mb-8 border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 px-3.5 py-2 rounded-xl shadow-sm hover:shadow transition-shadow cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </button>

              {/* Article Headers */}
              <article className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                    <span>{selectedPost.category}</span>
                    <span>&bull;</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-navy-900 dark:text-white leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedPost.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-350"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-slate dark:prose-invert max-w-none pt-6 border-t border-slate-150 dark:border-navy-850/65 text-slate-600 dark:text-slate-300 text-md leading-relaxed space-y-4">
                  {/* Since standard react markdown is heavy and hard to build client-side, we simulate custom blocks mapping */}
                  {selectedPost.content.split('\n\n').map((block, idx) => {
                    if (block.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="text-xl font-bold text-navy-900 dark:text-white pt-4 pb-1">
                          {block.replace('### ', '')}
                        </h3>
                      )
                    }
                    if (block.startsWith('1. ') || block.startsWith('2. ')) {
                      return (
                        <div key={idx} className="pl-4 space-y-1.5 py-1">
                          {block.split('\n').map((li, lIdx) => (
                            <p key={lIdx} className="text-sm">
                              <span className="font-bold text-teal-600 mr-2">{li.split(' ')[0]}</span>
                              {li.split(' ').slice(1).join(' ')}
                            </p>
                          ))}
                        </div>
                      )
                    }
                    if (block.startsWith('```')) {
                      const lines = block.split('\n')
                      const lang = lines[0].replace('```', '')
                      const code = lines.slice(1, -1).join('\n')
                      return (
                        <div key={idx} className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-navy-800 font-mono text-xs shadow-sm bg-slate-900 text-slate-200">
                          <div className="bg-slate-950 px-4 py-2 text-[10px] text-slate-500 font-bold uppercase flex items-center justify-between">
                            <span>{lang} Snippet</span>
                            <span className="text-[9px] text-teal-400 lowercase">read-only</span>
                          </div>
                          <pre className="p-4 overflow-x-auto text-left leading-5">
                            <code>{code}</code>
                          </pre>
                        </div>
                      )
                    }
                    return (
                      <p key={idx} className="text-sm md:text-md">
                        {block}
                      </p>
                    )
                  })}
                </div>
              </article>

              {/* Related Posts */}
              <div className="mt-16 pt-10 border-t border-slate-200/60 dark:border-navy-800/80 space-y-6">
                <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-teal-500" />
                  Related Documentation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getRelatedPosts(selectedPost).map((relPost) => (
                    <div
                      key={relPost.id}
                      onClick={() => {
                        setSelectedPost(relPost)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="p-5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-900 shadow-sm hover:shadow-md cursor-pointer hover:border-teal-500/20 dark:hover:border-teal-500/10 text-left transition-all duration-300"
                    >
                      <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
                        {relPost.category}
                      </span>
                      <h4 className="text-sm font-bold text-navy-900 dark:text-white line-clamp-1 leading-snug">
                        {relPost.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                        {relPost.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
