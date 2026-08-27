import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

const LINKS = {
  Solutions: ['Startup MVPs', 'SaaS Platforms', 'Internal Tools', 'AI Workflow Automation', 'Data Dashboard Build', 'Software Modernization'],
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'API Development', 'DevOps Services'],
  Company: ['About Us', 'Process', 'Portfolio', 'Locations', 'Careers', 'Contact'],
}

export default function Contact() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <section id="contact" className="contact" ref={glowRef}>
      <div className="container contact-inner">
        <span className="eyebrow">Start a build</span>
        <h2 className="section-title">Software, built with ownership.</h2>
        <p className="contact-sub">
          Tell us what you need to build. We will help turn the idea into scope,
          architecture, release plan and working software.
        </p>

        <div className="contact-cta">
          <a href="#contact" className="btn btn-primary">
            Get free consultation
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            Audit an existing product
          </a>
        </div>

        <div className="contact-meta">
          <a href="tel:+917418488095">+91 74184 88095</a>
          <a href="mailto:muthu@blinkingsoft.com">muthu@blinkingsoft.com</a>
          <span>Coimbatore · Chennai · Australia</span>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand brand-light">
              Blinking<span>Soft</span>
            </a>
            <p>
              Software delivery, under control. Web, mobile, cloud and AI
              workflow engineering for teams in Coimbatore, Chennai and
              Australia.
            </p>
          </div>

          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="footer-col">
              <h4>{heading}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#top">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Blinking Soft. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms</a>
            <a href="#top">Sitemap</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
