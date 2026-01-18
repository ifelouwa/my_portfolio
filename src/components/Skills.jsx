function Skills({ skills }) {
  return (
    <section className="shell section anchor-offset" id="skills">
      <header className="section-header d-flex justify-content-between gap-3">
        <div>
          <div className="section-kicker">Skills</div>
          <h2 className="section-title">Stacks for modern product teams</h2>
        </div>
        <p className="section-subtitle">
          A pragmatic mix of frontend, backend, and AI automation that plays nicely together in
          production.
        </p>
      </header>

      <div className="skills-grid row g-1">
        <article className="skills-card col-12 col-md-12 col-lg-12">
          <div className="skills-card-header">
            <h3 className="skills-title">
              <span className="stack-icon stack-icon-frontend" />
              Frontend
            </h3>
            <span className="skills-pill">Experience</span>
          </div>
          <div className="skills-list">
            {skills.frontend.map((item) => (
              <span key={item} className="skills-item">
                {item}
              </span>
            ))}
          </div>
          <div className="skills-orbit">
            <div className="skills-orbit-inner" />
          </div>
        </article>

        <article className="skills-card col-12 col-md-12 col-lg-12">
          <div className="skills-card-header">
            <h3 className="skills-title">
              <span className="stack-icon stack-icon-backend" />
              Backend
            </h3>
            <span className="skills-pill">Systems</span>
          </div>
          <div className="skills-list">
            {skills.backend.map((item) => (
              <span key={item} className="skills-item">
                {item}
              </span>
            ))}
          </div>
          <div className="skills-orbit">
            <div className="skills-orbit-inner backend" />
          </div>
        </article>

        <article className="skills-card col-12 col-md-12 col-lg-12">
          <div className="skills-card-header">
            <h3 className="skills-title">
              <span className="stack-icon stack-icon-ai" />
              AI & Automation
            </h3>
            <span className="skills-pill">Leverage</span>
          </div>
          <div className="skills-list">
            {skills.ai.map((item) => (
              <span key={item} className="skills-item">
                {item}
              </span>
            ))}
          </div>
          <div className="skills-orbit">
            <div className="skills-orbit-inner ai" />
          </div>
        </article>

        <article className="skills-card col-12 col-md-12 col-lg-12">
          <div className="skills-card-header">
            <h3 className="skills-title">
              <span className="stack-icon stack-icon-tools" />
              Tools
            </h3>
            <span className="skills-pill">Support</span>
          </div>
          <div className="skills-list">
            {skills.tools.map((item) => (
              <span key={item} className="skills-item">
                {item}
              </span>
            ))}
          </div>
          <div className="skills-orbit">
            <div className="skills-orbit-inner" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
