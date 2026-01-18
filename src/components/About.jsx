function About() {
  return (
    <section className="shell section anchor-offset" id="about">
      <header className="section-header d-flex justify-content-between gap-6">
        <div>
          <div className="section-kicker">About</div>
          <h2 className="section-title">Building practical, scalable systems end to end</h2>
        </div>
        <p className="section-subtitle">
          I design and ship user-focused products that blend clean interfaces, solid backends, and
          AI-powered automation.
        </p>
      </header>

      <div className="about-layout row g-6">
        <div className="about-body col-12 col-lg-12">
          <p>
            I'm a remote <strong>Full-Stack Developer and AI Automation Engineer</strong> focused on building user-friendly products with clean interfaces, solid backends, and reliable APIs.
          </p>
          <p>
            I work across the entire stack, from frontend architecture to backend systems and integrate AI-powered workflows 
            where automation meaningfully reduces manual work and improves efficiency.
          </p>
          <p>
            Currently, I'm building a logistics platform while deepening my expertise in modern web development and AI automation. 
            I'm open to remote roles, collaborations, and focused freelance engagements.
          </p>
        </div>
        <dl className="about-meta col-12 col-lg-12">
          <div className="about-meta-item">
            <dt className="about-meta-label">What I do</dt>
            <dd className="about-meta-value">
              End-to-end web application development, internal tools, and AI-powered workflows
            </dd>
          </div>
          <div className="about-meta-item">
            <dt className="about-meta-label">How I work</dt>
            <dd className="about-meta-value">
              Async communication, crisp specs, small iterative releases
            </dd>
          </div>
          <div className="about-meta-item">
            <dt className="about-meta-label">Engagements</dt>
            <dd className="about-meta-value">
              Remote roles, collaborations, and focused freelance projects
            </dd>
          </div>
          <div className="about-meta-item">
            <dt className="about-meta-label">Currently</dt>
            <dd className="about-meta-value">
              Building a logistics platform and sharpening modern web + AI automation skills.
            </dd>
            <dd className="about-meta-pill-row">
              <span className="about-meta-pill">Remote-friendly</span>
              <span className="about-meta-pill">IC / Tech lead</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default About
