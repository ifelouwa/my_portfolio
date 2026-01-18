function Hero({ onContact, onDownloadCv }) {
  return (
    <section className="shell hero anchor-offset" id="hero">
      <div>
        <div className="hero-kicker d-inline-flex align-items-center gap-6">
          <span className="hero-kicker-pill d-inline-flex align-items-center gap-2">
            <span className="hero-kicker-pill-dot" />
            <span className="hero-badge-text">Building elegant, scalable web apps & AI-powered workflows</span>
          </span>
        </div>

        <h1 className="hero-heading">
          <span className="hero-heading-name">Ifeoluwa Chukwuemeka Oworu</span>
          <span className="hero-heading-role">
            Remote Full-Stack Developer & <span>AI Automation Engineer</span>
          </span>
        </h1>

        <p className="hero-subheading">
          I build scalable web applications and{' '}
          <span className="hero-subheading-strong">AI-powered workflows</span> that help remote teams move faster with less manual work.
        </p>

        <div className="hero-cta-row d-flex flex-wrap align-items-center gap-6 mt-4">
          <button type="button" className="btn btn-accent-primary" onClick={onContact}>
            Let's work together
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
              Building remote-first SaaS products and AI-powered automations that scale teams
            </dd>
          </div>
          <div className="hero-meta-item">
            <dt className="hero-meta-label">Strengths</dt>
            <dd className="hero-meta-pills">
              <span className="hero-meta-pill">End-to-end ownership</span>
              <span className="hero-meta-pill">Calm, reliable shipping</span>
              <span className="hero-meta-pill">Practical AI systems</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Hero
