import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlowText } from '../../hooks/useGlowText'

export default function Finance() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <div className="seo-page">
      {/* Hero Section */}
      <section className="hero" ref={glowRef}>
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="container hero-inner">
          <span className="eyebrow">INDUSTRIES SOLUTIONS</span>
          <h1 className="hero-title glow-text" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
            Comprehensive Finance
          </h1>
          <p className="hero-sub" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Dashboards, approvals and audit-ready data.
          </p>
        </div>
      </section>

      {/* SEO Overview Section */}
      <section className="section-soft" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Elevating Your Product with Finance</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-on-light)', marginBottom: '1.5rem', textAlign: 'left' }}>
              In today's highly competitive digital landscape, robust finance is no longer a luxury—it's a critical operational necessity. At BlinkingSoft, our approach to finance combines deep technical expertise with a profound understanding of modern industries workflows. We build scalable, high-performance systems that don't just meet your immediate needs, but actively drive long-term business growth.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-on-light)', textAlign: 'left' }}>
              Our methodology ensures that every aspect of finance is optimized for efficiency, security, and maintainability. By leveraging industry-leading best practices and cutting-edge technologies, we eliminate technical debt before it begins and deliver software that works exactly as intended, even under extreme load. Whether you're modernizing an existing infrastructure or building entirely from scratch, our engineering team provides the clarity and execution required for success.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      
      <section className="section-soft" style={{ padding: '4rem 0' }}>
        <div className="container">
          <span className="eyebrow">INDUSTRIES // FINANCIAL DASHBOARDS</span>
          <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>Financial Dashboards</h2>
          
          <div className="seo-content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>
              Mastering <strong>financial dashboards</strong> requires a highly disciplined engineering framework. 
              We focus on delivering measurable outcomes through meticulous planning, precise execution, and rigorous quality assurance. 
              Our team understands that financial dashboards isn't just a technical checkbox—it is a core driver of your overall product stability and user satisfaction.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)' }}>
              By integrating advanced methodologies specific to financial dashboards, we ensure that your platform remains resilient against evolving technical challenges. 
              We document every workflow, strictly adhere to compliance standards, and maintain transparent communication pipelines from discovery to deployment.
            </p>
          </div>

          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Strategy</span>
              <span className="cr-state">Strategic Alignment</span>
              <p className="cr-detail">Aligning financial dashboards with your overarching business objectives to ensure maximum ROI and operational efficiency.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Execution</span>
              <span className="cr-state">Technical Implementation</span>
              <p className="cr-detail">Utilizing top-tier frameworks and rigorous coding standards to deploy financial dashboards seamlessly.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Growth</span>
              <span className="cr-state">Scalability & Support</span>
              <p className="cr-detail">Building financial dashboards architectures that can effortlessly scale as your user base and data requirements grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ padding: '4rem 0' }}>
        <div className="container">
          <span className="eyebrow">INDUSTRIES // SECURE TRANSACTIONS</span>
          <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>Secure Transactions</h2>
          
          <div className="seo-content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>
              Mastering <strong>secure transactions</strong> requires a highly disciplined engineering framework. 
              We focus on delivering measurable outcomes through meticulous planning, precise execution, and rigorous quality assurance. 
              Our team understands that secure transactions isn't just a technical checkbox—it is a core driver of your overall product stability and user satisfaction.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)' }}>
              By integrating advanced methodologies specific to secure transactions, we ensure that your platform remains resilient against evolving technical challenges. 
              We document every workflow, strictly adhere to compliance standards, and maintain transparent communication pipelines from discovery to deployment.
            </p>
          </div>

          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Strategy</span>
              <span className="cr-state">Strategic Alignment</span>
              <p className="cr-detail">Aligning secure transactions with your overarching business objectives to ensure maximum ROI and operational efficiency.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Execution</span>
              <span className="cr-state">Technical Implementation</span>
              <p className="cr-detail">Utilizing top-tier frameworks and rigorous coding standards to deploy secure transactions seamlessly.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Growth</span>
              <span className="cr-state">Scalability & Support</span>
              <p className="cr-detail">Building secure transactions architectures that can effortlessly scale as your user base and data requirements grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft" style={{ padding: '4rem 0' }}>
        <div className="container">
          <span className="eyebrow">INDUSTRIES // REGULATORY COMPLIANCE</span>
          <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>Regulatory Compliance</h2>
          
          <div className="seo-content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>
              Mastering <strong>regulatory compliance</strong> requires a highly disciplined engineering framework. 
              We focus on delivering measurable outcomes through meticulous planning, precise execution, and rigorous quality assurance. 
              Our team understands that regulatory compliance isn't just a technical checkbox—it is a core driver of your overall product stability and user satisfaction.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)' }}>
              By integrating advanced methodologies specific to regulatory compliance, we ensure that your platform remains resilient against evolving technical challenges. 
              We document every workflow, strictly adhere to compliance standards, and maintain transparent communication pipelines from discovery to deployment.
            </p>
          </div>

          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Strategy</span>
              <span className="cr-state">Strategic Alignment</span>
              <p className="cr-detail">Aligning regulatory compliance with your overarching business objectives to ensure maximum ROI and operational efficiency.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Execution</span>
              <span className="cr-state">Technical Implementation</span>
              <p className="cr-detail">Utilizing top-tier frameworks and rigorous coding standards to deploy regulatory compliance seamlessly.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Growth</span>
              <span className="cr-state">Scalability & Support</span>
              <p className="cr-detail">Building regulatory compliance architectures that can effortlessly scale as your user base and data requirements grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ padding: '4rem 0' }}>
        <div className="container">
          <span className="eyebrow">INDUSTRIES // AUDIT TRAILS</span>
          <h2 className="section-title glow-text" style={{ marginBottom: '1.5rem' }}>Audit Trails</h2>
          
          <div className="seo-content-block" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)', marginBottom: '1.5rem' }}>
              Mastering <strong>audit trails</strong> requires a highly disciplined engineering framework. 
              We focus on delivering measurable outcomes through meticulous planning, precise execution, and rigorous quality assurance. 
              Our team understands that audit trails isn't just a technical checkbox—it is a core driver of your overall product stability and user satisfaction.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-on-light)' }}>
              By integrating advanced methodologies specific to audit trails, we ensure that your platform remains resilient against evolving technical challenges. 
              We document every workflow, strictly adhere to compliance standards, and maintain transparent communication pipelines from discovery to deployment.
            </p>
          </div>

          <div className="cr-cards">
            <div className="cr-card">
              <span className="cr-label">Strategy</span>
              <span className="cr-state">Strategic Alignment</span>
              <p className="cr-detail">Aligning audit trails with your overarching business objectives to ensure maximum ROI and operational efficiency.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Execution</span>
              <span className="cr-state">Technical Implementation</span>
              <p className="cr-detail">Utilizing top-tier frameworks and rigorous coding standards to deploy audit trails seamlessly.</p>
            </div>
            <div className="cr-card">
              <span className="cr-label">Growth</span>
              <span className="cr-state">Scalability & Support</span>
              <p className="cr-detail">Building audit trails architectures that can effortlessly scale as your user base and data requirements grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Why Choose Us Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title glow-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Partner With Us for Finance?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--blue-soft)', borderRadius: '12px', background: 'var(--bg-base)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--blue-primary)' }}>Deep Technical Ownership</h3>
              <p style={{ lineHeight: '1.6', color: 'var(--text-on-light)' }}>We don't just write code; we take complete ownership of your finance lifecycle. From architecture to deployment, we act as an extension of your team.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--blue-soft)', borderRadius: '12px', background: 'var(--bg-base)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--blue-primary)' }}>Predictable Delivery</h3>
              <p style={{ lineHeight: '1.6', color: 'var(--text-on-light)' }}>Our sprint cycles and rigorous QA processes guarantee that your finance milestones are hit on time, with transparent reporting at every step.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--blue-soft)', borderRadius: '12px', background: 'var(--bg-base)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--blue-primary)' }}>Future-Proof Architecture</h3>
              <p style={{ lineHeight: '1.6', color: 'var(--text-on-light)' }}>We build finance systems that anticipate tomorrow's challenges. By avoiding monolithic traps, your software remains agile and easily upgradeable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-soft" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          
          <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E2E8F0' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>How do you approach finance for enterprise clients?</h4>
            <p style={{ color: 'var(--text-on-light)', lineHeight: '1.6' }}>We begin with a comprehensive discovery phase to map out all dependencies and compliance requirements. Our engineering team then drafts a customized architecture plan specifically tailored to your organizational scale before any code is written.</p>
          </div>

          <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E2E8F0' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>What is the typical timeline for a finance engagement?</h4>
            <p style={{ color: 'var(--text-on-light)', lineHeight: '1.6' }}>Timelines vary based on complexity, but most initial MVP phases or core architectural setups take between 4 to 8 weeks. We operate in 2-week sprints, ensuring you see continuous, incremental progress.</p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>Can you integrate with our existing legacy systems?</h4>
            <p style={{ color: 'var(--text-on-light)', lineHeight: '1.6' }}>Absolutely. A major part of our finance expertise involves safely wrapping, migrating, or integrating with legacy systems without causing operational downtime.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-deep" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title glow-text" style={{ margin: '0 auto 1.5rem' }}>Ready to transform your Finance?</h2>
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
