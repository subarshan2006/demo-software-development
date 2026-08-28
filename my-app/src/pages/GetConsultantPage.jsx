import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'
import { Link } from 'react-router-dom'

export default function GetConsultantPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <>
      <section className="hero" ref={glowRef}>
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
        </div>
        <div className="container hero-inner">
          <span className="eyebrow">Get started</span>
          <h1 className="hero-title glow-text">
            Contact Blinking Soft
          </h1>
          <p className="hero-sub" style={{ marginBottom: '2rem' }}>
            Talk to Blinking Soft about your project, product idea, support need or engineering role.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact-form" className="btn btn-primary">Send message</a>
            <Link to="/portfolio" className="btn btn-ghost">View portfolio</Link>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span className="eyebrow">Delivery evidence</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Blinking Soft</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Scope</h3>
                <p style={{ color: 'var(--text-muted)' }}>Workflow and ownership</p>
              </div>
              <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Build</h3>
                <p style={{ color: 'var(--text-muted)' }}>Engineering and review</p>
              </div>
              <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Support</h3>
                <p style={{ color: 'var(--text-muted)' }}>Launch and improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            {/* Left Column: Context */}
            <div>
              <span className="eyebrow">What happens next</span>
              <h2 style={{ fontSize: '2rem', margin: '1rem 0', lineHeight: '1.2' }}>
                Get a practical project conversation
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Share the product goal, budget range, timeline and current constraints. The team responds during business hours and follows up with scope questions, a next step and an estimate path.
              </p>
              
              <div style={{ padding: '1.5rem', background: 'var(--bg-soft)', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Response within 24 hours on working days</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <strong>Phone:</strong> +91 74184 88095
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  <strong>Office:</strong> 10/11, 3rd floor, SAP Illam, Jeyasimmapuram, Coimbatore
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="fullName" style={{ fontWeight: '500' }}>Full name</label>
                  <input type="text" id="fullName" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="Your full name" />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="workEmail" style={{ fontWeight: '500' }}>Work email</label>
                  <input type="email" id="workEmail" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="your@company.com" />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phoneNumber" style={{ fontWeight: '500' }}>Phone number</label>
                  <input type="tel" id="phoneNumber" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="+91 00000 00000" />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="serviceNeeded" style={{ fontWeight: '500' }}>Service needed</label>
                  <input type="text" id="serviceNeeded" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="Web development, Mobile app, etc." />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="projectDetails" style={{ fontWeight: '500' }}>Tell us about your project, users, timeline and current constraints</label>
                  <textarea id="projectDetails" rows="4" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', resize: 'vertical' }} placeholder="Project details..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', width: '100%', marginTop: '0.5rem' }}>
                  Send message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Direct lines</span>
            <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>Skip the form if you prefer</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Call</h3>
              <a href="tel:+917418488095" style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>+91 74184 88095</a>
              <p style={{ color: 'var(--text-muted)' }}>Business hours, IST. Fastest for scoping questions.</p>
            </div>
            
            <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
              <a href="mailto:muthu@blinkingsoft.com" style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>muthu@blinkingsoft.com</a>
              <p style={{ color: 'var(--text-muted)' }}>Best for briefs, documents and detailed requirements.</p>
            </div>
            
            <div style={{ background: 'var(--bg-base)', padding: '2rem', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Visit</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '1rem', color: 'var(--text-on-light)' }}>SAP Illam, Jeyasimmapuram, Coimbatore 641037</p>
              <p style={{ color: 'var(--text-muted)' }}>The engineering team works from Coimbatore, Tamil Nadu.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">Contact channels</span>
            <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
              Reach the team with enough context to respond well
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
              A useful enquiry includes the product goal, users, timeline, current system and any hard constraints around budget, data, integrations or launch date.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: 'var(--radius)' }}>
              <div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Phone</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  <a href="tel:+917418488095" style={{ fontWeight: '600' }}>+91 74184 88095</a> for direct project conversations.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Email</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  <a href="mailto:muthu@blinkingsoft.com" style={{ fontWeight: '600' }}>muthu@blinkingsoft.com</a> for briefs, documents and follow-up details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
