import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlowText } from '../hooks/useGlowText'

const solutions = [
  {
    title: 'Startup MVPs',
    desc: 'Investor-ready scope without building every idea. We help founders validate fast.',
    link: '/solutions/startup-mvps'
  },
  {
    title: 'SaaS Platforms',
    desc: 'Tenants, roles, billing states and admin evidence built for scale.',
    link: '/solutions/saas-platforms'
  },
  {
    title: 'Internal Tools',
    desc: 'Approvals, queues, dashboards and audit trails for your operations team.',
    link: '/solutions/internal-tools'
  },
  {
    title: 'AI Workflow Automation',
    desc: 'Human-reviewed automations for repeated work. Save hours every week.',
    link: '/solutions/ai-workflow-automation'
  },
  {
    title: 'Software Modernization',
    desc: 'Stabilize legacy workflows before replacement. Migrate with confidence.',
    link: '/solutions/software-modernization'
  },
  {
    title: 'Cloud Cost Control',
    desc: 'Budgets, logs and waste removal for live systems.',
    link: '/solutions/cloud-cost-control'
  }
];

export default function SolutionsPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <div className="seo-page">
      <section className="hero section-soft" ref={glowRef}>
        <div className="hero-blobs">
          <div className="blob blob-2"></div>
        </div>
        <div className="container hero-inner">
          <span className="eyebrow">Targeted Solutions</span>
          <h1 className="hero-title glow-text" style={{ fontSize: '4rem' }}>
            Solve complex workflows with engineered solutions.
          </h1>
          <p className="hero-sub" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            Whether you are building from zero, modernizing legacy systems, or 
            optimizing cloud operations, we have a clear, battle-tested delivery shape for your business context.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>Mapping Technology to Business Outcomes</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-on-light)' }}>
              Different business stages require vastly different technical approaches. An early-stage startup MVP demands velocity and strict prioritization to achieve product-market fit, whereas modernizing a legacy enterprise system requires rigorous regression testing, downtime mitigation, and meticulous risk management. Our solutions are explicitly designed around the operational realities of your current business context.
            </p>
          </div>

          <div className="service-groups">
            <div className="service-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {solutions.map((sol) => (
                <Link to={sol.link} key={sol.title} className="service-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '2rem', border: '1px solid var(--border-light)', borderRadius: '12px', transition: 'all 0.2s' }}>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--blue-primary)' }}>{sol.title}</h4>
                  <p style={{ lineHeight: '1.6', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>{sol.desc}</p>
                  <span style={{ color: 'var(--blue-primary)', fontWeight: '500' }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title glow-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Execution Methodology</h2>
          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Phase 1</span>
              <span className="cr-state">Discovery & Mapping</span>
              <p className="cr-detail">We deeply analyze your business workflows, constraints, and data requirements before writing a single line of code.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Phase 2</span>
              <span className="cr-state">Architecture & Scope</span>
              <p className="cr-detail">We deliver a precise technical roadmap, defining the database schema, API contracts, and infrastructure topology.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Phase 3</span>
              <span className="cr-state">Iterative Delivery</span>
              <p className="cr-detail">Execution through automated pipelines, ensuring rapid deployments, transparent progress, and immediate feedback loops.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-deep" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title glow-text" style={{ margin: '0 auto 1.5rem' }}>Find the right shape for your project.</h2>
          <p className="hero-sub" style={{ margin: '0 auto 2.5rem', color: 'var(--text-on-dark)', maxWidth: '600px' }}>
            Not sure which solution fits best? Reach out to our engineering team. We’ll help you define your scope and estimate the delivery effort.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Discuss Your Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
