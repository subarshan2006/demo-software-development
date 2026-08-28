import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlowText } from '../hooks/useGlowText'

const industries = [
  {
    title: 'Healthcare',
    desc: 'Care coordination, patient workflows, and secure HIPAA-compliant data handling architectures.',
    link: '/industries/healthcare'
  },
  {
    title: 'E-commerce',
    desc: 'High-performance storefronts, global payment gateways, and highly resilient order operations.',
    link: '/industries/ecommerce'
  },
  {
    title: 'Real Estate',
    desc: 'Dynamic property listings, user enquiries, and hyper-efficient broker workflow platforms.',
    link: '/industries/real-estate'
  },
  {
    title: 'Finance',
    desc: 'Secure dashboards, rapid multi-stage approvals, and immutable, audit-ready data structures.',
    link: '/industries/finance'
  },
  {
    title: 'Logistics',
    desc: 'Dynamic routing algorithms, real-time fleet tracking, and automated exception handling.',
    link: '/industries/logistics'
  },
  {
    title: 'Manufacturing',
    desc: 'Production tracking, inventory synchronization, and intelligent reporting tools.',
    link: '/industries/manufacturing'
  }
];

export default function IndustriesPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <div className="seo-page">
      <section className="hero" ref={glowRef}>
        <div className="hero-blobs">
          <div className="blob blob-3"></div>
        </div>
        <div className="container hero-inner">
          <span className="eyebrow">Industry Experience</span>
          <h1 className="hero-title glow-text" style={{ fontSize: '4rem' }}>
            Software built for your specific sector.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            From strict healthcare compliance regulations to massive e-commerce scale, we understand the 
            unique operational requirements and domain-specific challenges of your industry.
          </p>
        </div>
      </section>

      <section className="section-soft" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>Domain Expertise That Accelerates Delivery</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)' }}>
              Generic software development approaches often fail because they ignore the critical nuances of specific industries. A healthcare platform cannot be built like a social network—it requires deep knowledge of HIPAA compliance, interoperability standards (like HL7/FHIR), and stringent access controls. 
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)', marginTop: '1.5rem' }}>
              At BlinkingSoft, our engineering teams bring established domain expertise to your project. We leverage pre-validated architectural patterns for specific sectors, which drastically reduces discovery time, minimizes regulatory risks, and accelerates your time-to-market.
            </p>
          </div>

          <div className="service-groups">
            <div className="service-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {industries.map((ind) => (
                <Link to={ind.link} key={ind.title} className="service-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '2rem', border: '1px solid var(--border-light)', borderRadius: '12px', transition: 'all 0.2s', background: 'var(--bg-base)' }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--blue-primary)' }}>{ind.title}</h4>
                  <p style={{ lineHeight: '1.6', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>{ind.desc}</p>
                  <span style={{ color: 'var(--blue-primary)', fontWeight: '500' }}>Explore Industry →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title glow-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>How We Mitigate Domain Risks</h2>
          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Security</span>
              <span className="cr-state">Regulatory Compliance</span>
              <p className="cr-detail">We integrate required compliance frameworks (HIPAA, GDPR, SOC2) directly into the infrastructure and application code from day one.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Architecture</span>
              <span className="cr-state">Data Integrity</span>
              <p className="cr-detail">Utilizing event-sourcing and immutable ledger patterns to ensure complete audit trails for financial and operational systems.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Integration</span>
              <span className="cr-state">Legacy Connectors</span>
              <p className="cr-detail">Building secure middleware and API wrappers to connect modern web/mobile interfaces to older, entrenched industry systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-deep" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title glow-text" style={{ margin: '0 auto 1.5rem' }}>Solve your industry-specific challenges.</h2>
          <p className="hero-sub" style={{ margin: '0 auto 2.5rem', color: 'var(--text-on-dark)', maxWidth: '600px' }}>
            Let’s discuss your domain constraints. We’ll show you how we’ve tackled similar architectural challenges in the past.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Talk to our Architects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
