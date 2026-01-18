function Contact() {
  return (
    <section className="shell section anchor-offset" id="contact">
      <header className="section-header d-flex justify-content-between gap-3">
        <div>
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Let&apos;s talk about your roadmap</h2>
        </div>
        <p className="section-subtitle">
          Ideal for remote teams that want a calm, senior IC who can own features end-to-end.
        </p>
      </header>

      <div className="contact-layout row g-4" aria-label="Contact methods">
        <div className="contact-body col-12 col-lg-6">
          <p>
            Whether you need a <span className="contact-highlight">new product shipped</span>, an{' '}
            <span className="contact-highlight">internal tool refined</span>, or{' '}
            <span className="contact-highlight">AI woven into existing workflows</span>, I can help you
            move from idea to reliable, maintainable software.
          </p>
          <p>
            Share a short note about your team, the problem you are solving, and where you need help. I
            usually respond within one business day.
          </p>
        </div>

        <div className="contact-grid col-12 col-lg-6">
          <div className="contact-card">
            <div className="contact-label">Email</div>
            <div className="contact-value">you@company.dev</div>
            <a className="contact-link" href="mailto:you@company.dev">
              <span className="contact-link-dot" />
              <span>Send a short intro</span>
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">/in/your-handle</div>
            <a
              className="contact-link"
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-dot" />
              <span>View profile</span>
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-label">GitHub</div>
            <div className="contact-value">@your-username</div>
            <a
              className="contact-link"
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-dot" />
              <span>Browse code</span>
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-label">Time zones</div>
            <div className="contact-value">Comfortable collaborating across US/EU time zones.</div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <span className="contact-footer-pill">Remote • Full-Stack • AI Automation</span>
        <span className="contact-footer-divider" />
        <span>Available for well-scoped projects and ongoing product work.</span>
      </div>
    </section>
  )
}

export default Contact

