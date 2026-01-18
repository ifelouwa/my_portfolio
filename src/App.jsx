import './App.css'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const projects = [
  {
    name: 'Quiz App',
    tagline: 'Interactive quiz application with multiple categories and difficulty levels.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    type: 'Web App',
    status: 'Live',
    github: 'https://github.com/ifelouwa/Quiz-App',
    demo: 'https://quiz-app-three-dusky.vercel.app/',
  },
  {
    name: 'Golden Ball Auction',
    tagline:
      'A full-stack auction platform where users can create items, upload images, place bids, and track live auctions, supporting real-time bidding across multiple concurrent listings and active users.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'Production System',
    status: 'Live',
    github: 'https://github.com/ifelouwa/golden_ball',
    demo: 'https://golden-ball.vercel.app/',
  },
  {
    name: 'Logistics Platform',
    tagline:
      'An in-progress logistics platform focused on streamlining deliveries and tracking for growing teams, designed as a scalable MVP with modular services.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    type: 'Product',
    status: 'In Progress',
    github: 'https://github.com/ifelouwa/EPELOG',
    demo: '',
  },
]

const skills = {
  frontend: ['React', 'Vue', 'Vite', 'Bootstrap'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  ai: ['AI Agents', 'Workflow Automation', 'Prompt Engineering', 'OpenAI', 'LLM Integrations'],
  tools: ['Git', 'Vercel', 'Postman'],
}

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleDownloadCv = () => {
    window.open('/IFEOLUWA_CV.pdf', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app layout">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <NavBar onNavClick={scrollToSection} onContact={() => scrollToSection('contact')} />

      <main className="content">
        <Hero
          onContact={() => scrollToSection('contact')}
          onDownloadCv={handleDownloadCv}
        />
        <About />
        <Skills skills={skills} />
        <section className="shell section anchor-offset" id="ai">
          <header className="section-header d-flex justify-content-between gap-6">
            <div>
              <div className="section-kicker">How I add AI</div>
              <h2 className="section-title">How I add AI to products</h2>
            </div>
            <p className="section-subtitle">
              Calm, practical AI applied only where it meaningfully improves the work.
            </p>
          </header>
          <div className="row g-6">
            <div className="col-12 col-lg-12">
              <ul>
                <li>
                  Identify repetitive, manual workflows and introduce AI only where it meaningfully
                  saves time or reduces errors.
                </li>
                <li>
                  Design AI-powered features as assistive tools, not black boxes, with clear inputs,
                  outputs, and fallbacks.
                </li>
                <li>
                  Integrate LLMs into existing systems using APIs, automation rails, and prompt
                  engineering focused on reliability.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
