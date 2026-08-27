import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

const PROJECTS = [
  {
    name: 'Vanquishmedia',
    type: 'Digital media',
    desc: 'A digital media platform for campaigns, content publishing and brand visibility workflows.',
  },
  {
    name: 'Ligment Fitness',
    type: 'Fitness',
    desc: 'Training, progress tracking and class management for a fitness business.',
  },
  {
    name: 'TheHomeIdeas',
    type: 'Discovery',
    desc: 'A discovery platform connecting home owners, architects and product showrooms.',
  },
  {
    name: 'CareGrid',
    type: 'Healthcare',
    desc: 'Role-based portals and workflow tools for care teams.',
  },
  {
    name: 'EduPilot',
    type: 'Education',
    desc: 'Learning and administration tools built for education teams.',
  },
  {
    name: 'ShopLayer',
    type: 'E-commerce',
    desc: 'Commerce operations and dashboards for retail businesses.',
  },
]

export default function Portfolio() {
  const glowRef = useRef(null)
  const trackRef = useRef(null)
  useGlowText(glowRef)

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="portfolio" className="section-soft" ref={glowRef}>
      <div className="container portfolio-head">
        <div>
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">
            Real brands. Real workflows. Practical software delivery.
          </h2>
          <p className="portfolio-sub">
            See how software teams turn business operations into working
            products.
          </p>
        </div>
        <div className="scroll-arrows">
          <button aria-label="Scroll left" onClick={() => scrollBy(-1)}>
            ←
          </button>
          <button aria-label="Scroll right" onClick={() => scrollBy(1)}>
            →
          </button>
        </div>
      </div>

      <div className="gallery" ref={trackRef}>
        {PROJECTS.map((proj) => (
          <article key={proj.name} className="project-card">
            <div className="project-mono">
              <span className="tag">{proj.type}</span>
              <span className="project-year">—</span>
            </div>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <span className="project-link">View {'>'} </span>
          </article>
        ))}
      </div>
    </section>
  )
}
