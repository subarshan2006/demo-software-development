import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlowText } from '../hooks/useGlowText'

export default function ResourcesPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <div className="seo-page">
      <section className="hero section-deep" ref={glowRef}>
        <div className="container hero-inner">
          <span className="eyebrow" style={{ color: 'var(--blue-soft)' }}>Knowledge Base</span>
          <h1 className="hero-title glow-text" style={{ fontSize: '4rem' }}>
            Engineering insights and delivery playbooks.
          </h1>
          <p className="hero-sub" style={{ color: 'var(--text-on-dark)', maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            Original notes on product delivery, technology stacks, and operational 
            playbooks directly from our engineering leadership team. We open-source our processes.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>The BlinkingSoft Engineering Culture</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)' }}>
              Transparency is at the core of how we operate. We believe that sharing our technical challenges, architectural decisions, and project management methodologies helps the broader software community and builds trust with our clients. 
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)', marginTop: '1.5rem' }}>
              Explore our comprehensive resources below. Whether you are a technical founder evaluating tech stacks for a new MVP, or a CTO looking to modernize legacy infrastructure, our documented playbooks, case studies, and engineering blogs offer practical, battle-tested insights.
            </p>
          </div>

          <div className="cr-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link to="/resources/playbook" className="cr-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s', border: '1px solid var(--border-light)' }}>
              <span className="cr-label">Guide</span>
              <span className="cr-state">Delivery Playbook</span>
              <p className="cr-detail" style={{ marginTop: '1rem', color: 'var(--text-on-light)' }}>Our definitive guide on release management, agile support, and long-term maintenance practices.</p>
              <span style={{ display: 'block', marginTop: '1.5rem', color: 'var(--blue-primary)', fontWeight: '500' }}>Read Playbook →</span>
            </Link>
            
            <Link to="/resources/library" className="cr-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s', border: '1px solid var(--border-light)' }}>
              <span className="cr-label">Template</span>
              <span className="cr-state">Resource Library</span>
              <p className="cr-detail" style={{ marginTop: '1rem', color: 'var(--text-on-light)' }}>Downloadable checklists, technical architecture worksheets, and project planning templates.</p>
              <span style={{ display: 'block', marginTop: '1.5rem', color: 'var(--blue-primary)', fontWeight: '500' }}>Access Library →</span>
            </Link>
            
            <Link to="/resources/tech-notes" className="cr-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s', border: '1px solid var(--border-light)' }}>
              <span className="cr-label">Tech</span>
              <span className="cr-state">Technology Notes</span>
              <p className="cr-detail" style={{ marginTop: '1rem', color: 'var(--text-on-light)' }}>In-depth engineering articles covering React, Node.js, Flutter, AWS, and modern Cloud paradigms.</p>
              <span style={{ display: 'block', marginTop: '1.5rem', color: 'var(--blue-primary)', fontWeight: '500' }}>Read Tech Notes →</span>
            </Link>

            <Link to="/resources/case-studies" className="cr-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s', border: '1px solid var(--border-light)' }}>
              <span className="cr-label">Evidence</span>
              <span className="cr-state">Case Studies</span>
              <p className="cr-detail" style={{ marginTop: '1rem', color: 'var(--text-on-light)' }}>Detailed analyses of past projects, outlining the initial challenge, the architecture, and the final outcomes.</p>
              <span style={{ display: 'block', marginTop: '1.5rem', color: 'var(--blue-primary)', fontWeight: '500' }}>View Case Studies →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-soft" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title glow-text" style={{ margin: '0 auto 1.5rem' }}>Want to talk technicals?</h2>
          <p className="hero-sub" style={{ margin: '0 auto 2.5rem', color: 'var(--text-on-light)', maxWidth: '600px' }}>
            Our engineering leaders are always available to discuss architecture patterns and technical strategy for your upcoming build.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Contact Engineering <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
