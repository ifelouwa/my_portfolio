function Projects({ projects }) {
  return (
    <section className="shell-wide section anchor-offset" id="projects">
      <header className="section-header d-flex justify-content-between gap-3">
        <div>
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">Selected work</h2>
        </div>
        <p className="section-subtitle">
          A mix of shipped products, internal tools, and automation rails that support remote teams.
        </p>
      </header>

      <div className="projects-grid row g-3">
        {projects.map((project) => (
          <article key={project.name} className="project-card col-12 col-md-12 col-lg-12">
            <div className="project-tag-row">
              <span className="project-tag">{project.type}</span>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="project-mock" aria-hidden="true">
              <div className="project-mock-bars">
                <div className="project-mock-bar" />
                <div className="project-mock-bar secondary" />
                <div className="project-mock-bar tertiary" />
              </div>
              <div className="project-mock-grid">
                <div className="project-mock-tile" />
                <div className="project-mock-tile secondary" />
                <div className="project-mock-tile" />
              </div>
            </div>
            <h3 className="project-content-title">{project.name}</h3>
            <p className="project-content-text">{project.tagline}</p>
            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item} className="project-pill">
                  {item}
                </span>
              ))}
            </div>
            <div className="project-links" aria-label={`Links for ${project.name}`}>
              {project.demo && (
                <a
                  className="project-link"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live demo
                </a>
              )}
              {project.github && (
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

