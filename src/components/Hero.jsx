function Hero({ onViewWork, onContact, onDownloadCv }) {
  return (
    <section className="shell hero anchor-offset" id="hero">
      <div>
        <div className="hero-kicker d-inline-flex align-items-center gap-2">
          <span className="hero-kicker-pill d-inline-flex align-items-center gap-2">
            <span className="hero-kicker-pill-dot" />
            <span className="hero-badge-text">Remote-first developer</span>
          </span>
          <span>Building elegant, scalable web apps & AI-powered workflows</span>
        </div>

        <h1 className="hero-heading">
          <span className="hero-heading-name">Ifeoluwa Chukwuemeka Oworu</span>
          <span className="hero-heading-role">
            Remote Full-Stack Developer & <span>AI Automation Engineer</span>
          </span>
        </h1>

        <p className="hero-subheading">
          I build practical, user-focused web applications and{' '}
          <span className="hero-subheading-strong">AI-powered automation</span> that reduce manual work
          and drive real impact for remote teams.
        </p>

        <div className="hero-cta-row d-flex flex-wrap align-items-center gap-2 mt-4">
          <button type="button" className="btn btn-accent-primary" onClick={onViewWork}>
            View My Work
          </button>
          <button type="button" className="btn btn-outline-light hero-secondary-btn" onClick={onContact}>
            Contact Me
          </button>
          {onDownloadCv && (
            <button
              type="button"
              className="btn btn-outline-secondary hero-download-cv"
              onClick={onDownloadCv}
            >
              Download CV
            </button>
          )}
        </div>

        <dl className="hero-meta">
          <div className="hero-meta-item">
            <dt className="hero-meta-label">Focus</dt>
            <dd className="hero-meta-value">
              Remote SaaS products, automation rails, internal tools
            </dd>
          </div>
          <div className="hero-meta-item">
            <dt className="hero-meta-label">Strengths</dt>
            <dd className="hero-meta-pills">
              <span className="hero-meta-pill">End-to-end ownership</span>
              <span className="hero-meta-pill">Calm shipping</span>
              <span className="hero-meta-pill">AI that actually helps</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Hero
