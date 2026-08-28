import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

export default function ContactPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <>
      <section className="hero" ref={glowRef}>
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
        </div>
        <div className="container hero-inner">
          <span className="eyebrow">Contact</span>
          <h1 className="hero-title glow-text">
            Let's build something meaningful together.
          </h1>
          <p className="hero-sub">
            Tell us what you need to build. We will help turn the idea into scope,
            architecture, release plan and working software.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container" style={{ maxWidth: '600px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
              <input type="text" id="name" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="Your name" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
              <input type="email" id="email" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="your@email.com" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ fontWeight: '500' }}>Phone</label>
              <input type="tel" id="phone" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="+1 234 567 8900" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="company" style={{ fontWeight: '500' }}>Company</label>
              <input type="text" id="company" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} placeholder="Company name" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="service" style={{ fontWeight: '500' }}>Service Interest</label>
              <select id="service" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: '#fff' }}>
                <option>Web Development</option>
                <option>Mobile Apps</option>
                <option>Cloud Solutions</option>
                <option>AI Automation</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="details" style={{ fontWeight: '500' }}>Project details</label>
              <textarea id="details" rows="5" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', resize: 'vertical' }} placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>
              Submit Request
            </button>
          </form>

          <div className="contact-meta" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="tel:+917418488095">+91 74184 88095</a>
            <a href="mailto:muthu@blinkingsoft.com">muthu@blinkingsoft.com</a>
            <span>Coimbatore · Chennai · Australia</span>
          </div>
        </div>
      </section>
    </>
  )
}
