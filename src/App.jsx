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
    type: 'Frontend',
    status: 'Live',
    github: 'https://github.com/ifelouwa/Quiz-App',
    demo: 'https://quiz-app-three-dusky.vercel.app/',
  },
  {
    name: 'Golden Ball Auction',
    tagline:
      'A full-stack auction platform where users can create items, upload images, place bids, and track live auctions.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'Full-Stack',
    status: 'Live',
    github: 'https://github.com/ifelouwa/golden_ball',
    demo: 'https://golden-ball.vercel.app/',
  },
  {
    name: 'Logistics Platform',
    tagline:
      'An in-progress logistics platform focused on streamlining deliveries and tracking for growing teams.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    type: 'Product',
    status: 'In Progress',
    github: '',
    demo: '',
  },
]

const skills = {
  frontend: ['React', 'Vue', 'Vite', 'Bootstrap', 'Tailwind CSS'],
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
    scrollToSection('contact')
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
          onViewWork={() => scrollToSection('projects')}
          onContact={() => scrollToSection('contact')}
          onDownloadCv={handleDownloadCv}
        />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
