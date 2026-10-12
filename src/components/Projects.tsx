import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Category = 'AI/ML' | 'Web Development' | 'Full Stack' | 'Data Analytics';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  category: Category;
  color: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 11,
    title: 'Query Flow LLM',
    shortDesc: 'An AI-powered query workflow application that combines LLM capabilities with web search to generate informed responses.',
    description: 'A full-stack AI application designed to process user queries through an intelligent workflow, combining large language model capabilities with web search to provide more useful and context-aware responses.',
    problem: 'Traditional AI responses can lack up-to-date information when queries require current or external knowledge.',
    solution: 'Built an AI-powered query workflow that integrates an LLM with web search capabilities, allowing user queries to be processed and enriched with relevant external information.',
    features: [
      'AI-powered query processing',
      'Web search integration',
      'LLM-based response generation',
      'Query workflow management',
      'User authentication',
      'Responsive web interface',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API', 'Tavily'],
    category: 'AI/ML',
    color: 'rgba(40,120,255,0.12)',
    icon: 'QF',
  },
  {
    id: 1,
    title: 'Brain Tumor Detection',
    shortDesc: 'Deep learning model for MRI-based brain tumor classification using ResNet50.',
    description: 'A medical imaging AI system that accurately detects and classifies brain tumors from MRI scans using convolutional neural networks and transfer learning.',
    problem: 'Manual MRI analysis for brain tumor detection is time-consuming and prone to human error, delaying critical diagnoses.',
    solution: 'Built a CNN pipeline using ResNet50 as the backbone with transfer learning, achieving high accuracy in multi-class tumor classification from raw MRI images.',
    features: ['Multi-class tumor classification', 'ResNet50 transfer learning', 'Flask REST API', 'Image preprocessing pipeline', 'Grad-CAM visualizations'],
    tech: ['CNN', 'ResNet50', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
    category: 'AI/ML',
    color: 'rgba(40,120,255,0.15)',
    icon: '🧠',
  },
  {
    id: 2,
    title: 'Spit Detection System',
    shortDesc: 'Real-time public sanitation violation detection with YOLOv11 and alert system.',
    description: 'An intelligent CCTV-integrated surveillance system that detects spitting incidents in real time and triggers instant SMS alerts to authorities via Twilio.',
    problem: 'Enforcing public sanitation laws manually is inefficient and requires constant human monitoring of CCTV feeds.',
    solution: 'Deployed YOLOv11 for real-time object detection on video streams, integrated SQL logging for incident records, and wired Twilio for automated alerts.',
    features: ['Real-time YOLOv11 detection', 'Twilio SMS alerts', 'SQL incident logging', 'Streamlit dashboard', 'Live video stream processing'],
    tech: ['Python', 'YOLOv11', 'TensorFlow', 'OpenCV', 'Streamlit', 'Twilio', 'SQL'],
    category: 'AI/ML',
    color: 'rgba(0,212,255,0.12)',
    icon: '👁️',
  },
  {
    id: 3,
    title: 'SMS Spam Detection',
    shortDesc: 'NLP-powered spam classifier using TF-IDF and machine learning.',
    description: 'A lightweight text classification system that identifies and filters spam SMS messages using natural language processing techniques and a Scikit-learn pipeline.',
    problem: 'SMS spam affects user experience and security, and rule-based filters lack the adaptability to catch evolving spam patterns.',
    solution: 'Applied TF-IDF vectorization and trained multiple classifiers to identify spam with high precision, deployed via a Flask web interface.',
    features: ['TF-IDF feature extraction', 'Multi-model comparison', 'Flask web interface', 'Real-time classification', 'Model performance metrics'],
    tech: ['Python', 'Flask', 'Scikit-learn', 'TF-IDF', 'NLTK'],
    category: 'AI/ML',
    color: 'rgba(40,120,255,0.12)',
    icon: '📱',
  },
  {
    id: 4,
    title: 'Financial Analysis System',
    shortDesc: 'End-to-end data pipeline for financial insight generation using Python and MySQL.',
    description: 'A comprehensive financial data analytics platform that ingests, cleans, and models transaction data to surface business insights and predictive analytics.',
    problem: 'Raw financial data from multiple sources is unstructured and hard to query for meaningful business decisions.',
    solution: 'Built an ETL pipeline using Pandas and SQLAlchemy to normalize data into MySQL, then applied Scikit-learn models for trend prediction and anomaly detection.',
    features: ['Automated ETL pipeline', 'MySQL data warehouse', 'Predictive modeling', 'Anomaly detection', 'Analytical reports'],
    tech: ['Python', 'MySQL', 'Pandas', 'SQLAlchemy', 'Scikit-learn'],
    category: 'Data Analytics',
    color: 'rgba(0,212,255,0.1)',
    icon: '📊',
  },
  {
    id: 5,
    title: 'Car Hub',
    shortDesc: 'Interactive car browsing and showcase web application.',
    description: 'A responsive front-end web application for exploring and showcasing cars with dynamic filtering, smooth UI animations, and a polished user interface.',
    problem: 'Static automotive websites lack interactivity and modern UX patterns that help users efficiently browse and compare vehicles.',
    solution: 'Built a single-page application using vanilla HTML, CSS, and JavaScript with dynamic DOM manipulation, custom animations, and mobile-first design.',
    features: ['Dynamic car filtering', 'Responsive design', 'Custom CSS animations', 'Interactive UI components', 'Mobile-first layout'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    color: 'rgba(40,120,255,0.1)',
    icon: '🚗',
  },
  {
    id: 6,
    title: 'Hall of Fame',
    shortDesc: 'Django-powered recognition platform for achievements and honors.',
    description: 'A full-featured Django web application for displaying and managing institutional achievement records, awards, and notable alumni in a visually rich portal.',
    problem: 'Institutions lack a centralized, maintainable digital platform to celebrate and archive notable achievements and award records.',
    solution: 'Developed a Django MVC application with an admin panel for content management, responsive templates, and database-driven dynamic pages.',
    features: ['Django admin panel', 'Dynamic content management', 'Responsive templates', 'Search and filtering', 'User authentication'],
    tech: ['Django', 'Python', 'HTML', 'CSS', 'SQLite'],
    category: 'Full Stack',
    color: 'rgba(0,212,255,0.12)',
    icon: '🏆',
  },
  {
    id: 7,
    title: 'Stock Web Application',
    shortDesc: 'Real-time stock data viewer built with React.',
    description: 'A React-based stock market application that displays real-time stock quotes, charts, and market data with a clean, responsive interface.',
    problem: 'Investors need a fast, clean interface to monitor stock performance without the complexity of traditional financial terminals.',
    solution: 'Built a React SPA with component-based architecture, API integration for live stock data, and interactive charts for data visualization.',
    features: ['Real-time stock data', 'Interactive charts', 'Portfolio tracking', 'Search and filtering', 'Responsive React UI'],
    tech: ['React', 'JavaScript', 'CSS', 'REST API'],
    category: 'Web Development',
    color: 'rgba(40,120,255,0.12)',
    icon: '📈',
  },
  {
    id: 8,
    title: 'All-in-One Calculator',
    shortDesc: 'A unified web-based calculator that brings multiple calculation tools together in one convenient interface.',
    description: 'A multi-purpose calculator application designed to provide different calculation utilities through a single, easy-to-use platform.',
    problem: 'Users often need to switch between different tools or applications for different types of calculations, making the process inconvenient and inefficient.',
    solution: 'Built a unified calculator interface that brings multiple calculation utilities together, allowing users to perform different calculations from one application.',
    features: [
      'Multiple calculation utilities',
      'Unified calculator interface',
      'Easy-to-use input and result display',
      'Responsive web interface',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    color: 'rgba(0,212,255,0.1)',
    icon: '∑',
  },
  {
    id: 9,
    title: 'Chatbot Master',
    shortDesc: 'An interactive AI chatbot interface designed for conversational user interactions.',
    description: 'A modern chatbot application focused on providing an interactive conversational experience through a clean and responsive web interface.',
    problem: 'Users need a simple and intuitive interface to interact with conversational AI without the complexity of traditional interfaces.',
    solution: 'Built a modern chatbot interface with a responsive design and conversational interaction flow, creating a streamlined experience for interacting with an AI assistant.',
    features: [
      'Interactive chat interface',
      'Conversational message flow',
      'Responsive UI',
      'Modern component-based interface',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    category: 'AI/ML',
    color: 'rgba(40,120,255,0.15)',
    icon: 'AI',
  },
  {
    id: 10,
    title: 'Event Management Website',
    shortDesc: 'A modern responsive web platform for discovering, organizing, and managing events.',
    description: 'A responsive event management website built with a modern React-based frontend, providing an engaging interface for presenting and managing event-related information.',
    problem: 'Event organizers and attendees need a centralized and user-friendly platform to present event information and simplify event discovery and management.',
    solution: 'Developed a responsive web interface with reusable components and a modern design system to create an accessible and engaging event management experience.',
    features: [
      'Responsive event interface',
      'Modern component-based UI',
      'Reusable interface components',
      'Responsive layouts across devices',
      'Interactive user interface',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    category: 'Full Stack',
    color: 'rgba(0,212,255,0.12)',
    icon: 'EV',
  },
];

function ExpandedProject({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
      style={{ background: 'rgba(5,11,24,0.9)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{
          border: '1px solid rgba(40,120,255,0.3)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(40,120,255,0.15)',
          animation: 'fade-in-up 0.3s ease forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 lg:p-8 border-b"
          style={{ borderColor: 'rgba(40,120,255,0.15)', background: project.color }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: 'rgba(40,120,255,0.1)', border: '1px solid rgba(40,120,255,0.25)' }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>{project.title}</h3>
                <span className="tech-badge mt-1 inline-block">{project.category}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-all duration-200 flex-shrink-0"
              style={{ color: '#A0AEC0', border: '1px solid rgba(40,120,255,0.2)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F5F7FF'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#A0AEC0'; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 lg:p-8 flex flex-col gap-6">
          <p className="text-base leading-relaxed" style={{ color: '#A0AEC0' }}>{project.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-light rounded-xl p-4">
              <p className="text-xs section-label mb-2">Problem</p>
              <p className="text-sm leading-relaxed" style={{ color: '#A0AEC0' }}>{project.problem}</p>
            </div>
            <div className="glass-light rounded-xl p-4">
              <p className="text-xs section-label mb-2" style={{ color: '#2878FF' }}>Solution</p>
              <p className="text-sm leading-relaxed" style={{ color: '#A0AEC0' }}>{project.solution}</p>
            </div>
          </div>

          <div>
            <p className="text-xs section-label mb-3">Key Features</p>
            <ul className="flex flex-col gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#2878FF,#00D4FF)' }} />
                  <span className="text-sm" style={{ color: '#F5F7FF' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs section-label mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert('GitHub link coming soon!'); }}
              className="btn-outline flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Live demo coming soon!'); }}
              className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5v5M8.5 7.5l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #050B18 0%, #0B1426 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full blur-[150px] pointer-events-none"
        style={{ width: 600, height: 600, background: 'rgba(0,212,255,0.04)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-12">
          <span className="section-label">// what I've built</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: '#A0AEC0' }}>
            A curated selection of projects across AI/ML, web development, and data analytics.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal delay-${Math.min((i % 3 + 1) * 100, 300)} project-card rounded-2xl cursor-pointer`}
              onClick={() => setExpandedProject(project)}
            >
              {/* Thumbnail area */}
              <div
                className="h-44 rounded-t-2xl flex items-center justify-center text-5xl relative overflow-hidden"
                style={{ background: project.color }}
              >
                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 right-4 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(40,120,255,0.5),transparent)' }} />
                  <div className="absolute bottom-4 left-4 right-4 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(0,212,255,0.5),transparent)' }} />
                </div>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl"
                  style={{ background: 'rgba(5,11,24,0.5)', border: '1px solid rgba(40,120,255,0.2)' }}
                >
                  {project.icon}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-base leading-tight" style={{ fontFamily: "'Exo 2',sans-serif", color: '#F5F7FF' }}>
                    {project.title}
                  </h3>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(40,120,255,0.1)', border: '1px solid rgba(40,120,255,0.2)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M4 2h6v6" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: '#A0AEC0' }}>{project.shortDesc}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-badge text-xs py-0.5 px-2">{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-badge text-xs py-0.5 px-2">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-md flex-shrink-0"
                    style={{
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: '#00D4FF',
                      fontFamily: "'JetBrains Mono',monospace",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded project modal */}
      {expandedProject && (
        <ExpandedProject project={expandedProject} onClose={() => setExpandedProject(null)} />
      )}
    </section>
  );
}
