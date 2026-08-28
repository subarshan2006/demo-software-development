import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

const POINTS = [
  {
    title: 'Clear project setup',
    desc: 'Scope, milestones, risks and responsibilities are written before the sprint starts.',
  },
  {
    title: 'Engineering reviews',
    desc: 'Architecture, code quality, security and performance are reviewed during delivery.',
  },
  {
    title: 'Support after launch',
    desc: 'We stay close to releases, fixes, monitoring and the next round of improvements.',
  },
]

export default function Delivery() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <section className="section-deep delivery" ref={glowRef}>
      <div className="container delivery-inner">
        <div className="delivery-copy">
          <span className="eyebrow">Delivery</span>
          <h2 className="section-title">Ready to build properly?</h2>
          <p className="delivery-sub">
            We work from Coimbatore with clients in Chennai and Australia,
            delivering practical software through a clear build process.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Explore delivery
          </Link>
        </div>

        <div className="delivery-points">
          {POINTS.map((point) => (
            <div key={point.title} className="delivery-point">
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
