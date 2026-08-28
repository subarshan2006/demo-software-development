import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlowText } from '../hooks/useGlowText'
import Services from '../components/Services'

export default function ServicesPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <div className="seo-page">
      <section className="hero" ref={glowRef}>
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container hero-inner">
          <span className="eyebrow">Enterprise Engineering</span>
          <h1 className="hero-title glow-text" style={{ fontSize: '4rem' }}>
            End-to-end software engineering services.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            From product discovery and UI/UX design to scalable cloud architecture 
            and dedicated maintenance, we deliver reliable, high-performance software systems tailored for business scale.
          </p>
        </div>
      </section>

      <section className="section-soft" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            <h2 className="section-title glow-text" style={{ marginBottom: '2rem' }}>A Systematic Approach to Digital Transformation</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>
              At BlinkingSoft, we believe that software engineering is not merely about writing code; it is about building sustainable, secure, and scalable architectures that map directly to your strategic goals. Our holistic service offerings are designed to cover every phase of the software lifecycle, removing the friction often associated with technical delivery.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>
              We specialize in deep integrations, cloud-native deployments, and stringent quality assurance. Whether you require a specialized team to augment your existing capabilities or a full-service technical partner to build a product from the ground up, our methodologies ensure transparency, predictability, and unparalleled technical excellence.
            </p>
          </div>
        </div>
      </section>

      <Services />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title glow-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>Core Capabilities</h2>
          
          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Frontend</span>
              <span className="cr-state">Performant UIs</span>
              <p className="cr-detail">React, Vue, and Next.js applications optimized for Core Web Vitals, accessibility, and dynamic state management.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Backend</span>
              <span className="cr-state">Scalable APIs</span>
              <p className="cr-detail">Node.js, Python, and Go microservices built for high-throughput, fault tolerance, and secure data handling.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Cloud</span>
              <span className="cr-state">Resilient Ops</span>
              <p className="cr-detail">AWS and Google Cloud architectures utilizing containerization, CI/CD pipelines, and automated scaling policies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose BlinkingSoft Services?</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '3px solid var(--blue-primary)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>1. Elimination of Technical Debt</h4>
              <p style={{ color: 'var(--text-on-light)', lineHeight: '1.6' }}>We enforce strict peer reviews, robust automated testing, and comprehensive documentation to ensure your platform remains pristine.</p>
            </li>
            <li style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '3px solid var(--blue-primary)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>2. Agile & Transparent Delivery</h4>
              <p style={{ color: 'var(--text-on-light)', lineHeight: '1.6' }}>Through iterative 2-week sprints, you maintain full visibility into our progress, empowering you to adjust priorities dynamically.</p>
            </li>
            <li style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--blue-primary)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>3. Enterprise-Grade Security</h4>
              <p style={{ color: 'var(--text-on-light)', lineHeight: '1.6' }}>Security is baked into our CI/CD pipelines, not treated as an afterthought. We implement static analysis, dependency scanning, and access controls by default.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-deep" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title glow-text" style={{ margin: '0 auto 1.5rem' }}>Start your next build.</h2>
          <p className="hero-sub" style={{ margin: '0 auto 2.5rem', color: 'var(--text-on-dark)', maxWidth: '600px' }}>
            Book a free technical consultation today. We'll audit your current workflows, discuss your goals, and provide a clear engineering roadmap.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Get an Engineering Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
