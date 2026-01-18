function NavBar({ onNavClick, onContact }) {
  return (
    <header className="nav">
      <div className="nav-inner d-flex align-items-center justify-content-between gap-3">
        <div className="nav-brand d-flex align-items-center gap-2">
          <div className="nav-logo">
            <div className="nav-logo-inner">
              <img src="/images/CORE.jpg" alt="A picture of Ifeoluwa" />
            </div>
          </div>
          <div className="nav-title d-flex flex-column gap-1">
            <div className="nav-name">PRIMORDIAL</div>
            <div className="nav-role">Remote Full-Stack & AI Automation</div>
          </div>
        </div>
        <nav className="nav-links d-none d-md-flex align-items-center gap-3" aria-label="Primary">
          <button className="nav-link btn btn-link p-0" type="button" onClick={() => onNavClick('about')}>
            About
          </button>
          <button className="nav-link btn btn-link p-0" type="button" onClick={() => onNavClick('skills')}>
            Skills
          </button>
          <button className="nav-link btn btn-link p-0" type="button" onClick={() => onNavClick('projects')}>
            Projects
          </button>
          <button className="nav-link btn btn-link p-0" type="button" onClick={() => onNavClick('contact')}>
            Contact
          </button>
        </nav>
        <button
          className="nav-cta d-none d-sm-inline-flex"
          type="button"
          onClick={onContact}
        >
          <span className="nav-cta-dot" />
          <span>Open to remote roles</span>
        </button>
      </div>
    </header>
  )
}

export default NavBar

