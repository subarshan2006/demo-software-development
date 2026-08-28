import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'
import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <>
      <section className="hero section-soft" ref={glowRef}>
        <div className="container hero-inner">
          <span className="eyebrow">Case Studies</span>
          <h1 className="hero-title glow-text">
            Practical project patterns and outcomes.
          </h1>
          <p className="hero-sub">
            See how business workflows become web, mobile, and cloud software. 
            Real-world evidence of our delivery capabilities.
          </p>
        </div>
      </section>
      
      {/* We reuse the Portfolio gallery component here, but without its own top spacing if needed, 
          or just let it render naturally */}
      <Portfolio />
    </>
  )
}
