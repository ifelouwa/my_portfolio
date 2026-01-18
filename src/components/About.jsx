function About() {
  return (
    <section className="shell section anchor-offset" id="about">
      <header className="section-header d-flex justify-content-between gap-3">
        <div>
          <div className="section-kicker">About</div>
          <h2 className="section-title">Building practical, scalable systems end to end</h2>
        </div>
        <p className="section-subtitle">
          I design and ship user-focused products that blend clean interfaces, solid backends, and
          AI-powered automation.
        </p>
      </header>

      <div className="about-layout row g-4">
        <div className="about-body col-12 col-lg-12">
          <p>
            I am a remote <strong>Full-Stack Developer and AI Automation Engineer</strong> with a passion
            for building practical, user-focused web applications and intelligent automation systems that
            reduce manual work and drive real impact.
          </p>
          <p>
            I work across the entire stack, crafting clean, responsive frontends, solid backends, and
            reliable APIs. I also integrate AI-powered workflows to streamline processes and add meaningful
            automation where it helps teams the most.
          </p>
          <p>
            Currently, I am building a logistics platform MVP while strengthening my skills in modern web
            development and AI automation. I am open to remote roles, collaborations, and freelance work
            where I can build and scale real solutions.
          </p>
        </div>
        <dl className="about-meta col-12 col-lg-12">
          <div className="about-meta-item">
            <dt className="about-meta-label">What I do</dt>
            <dd className="about-meta-value">
              End-to-end product engineering, AI workflows, internal tools
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
              Building a logistics platform MVP and sharpening modern web + AI automation skills.
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
