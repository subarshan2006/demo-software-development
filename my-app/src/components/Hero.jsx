import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

const CLIENTS = [
  'Vanquishmedia',
  'Ligment Fitness',
  'NM Abdullah',
  'TheHomeIdeas',
  'CareGrid',
  'EduPilot',
  'ShopLayer',
  'TripForge',
  'EstateDesk',
]

export default function Hero() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <section id="top" className="hero" ref={glowRef}>
      <div className="hero-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="container hero-inner">
        <span className="tag">Coimbatore · Chennai · Australia</span>

        <h1 className="hero-title">
          Build software that works in the real world.
        </h1>

        <p className="hero-sub">
          BlinkingSoft designs and builds web apps, mobile apps, APIs and cloud
          systems for businesses that need reliable software, not slideware.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Get free consultation
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            View work
          </a>
        </div>

        <p className="hero-trust">
          Trusted for web, mobile, cloud and API projects across healthcare,
          commerce, travel, real estate, education and finance.
        </p>

        <ul className="clients" aria-label="Past clients">
          {CLIENTS.map((client) => (
            <li key={client} className="client">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
