import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

const PAINS = [
  {
    title: 'Unclear scope',
    quote:
      'We need a product, but every meeting creates a new version of what the team should build.',
  },
  {
    title: 'Fragile delivery',
    quote:
      'The screens look ready, but integrations, deployment, testing and handover are still scattered.',
  },
  {
    title: 'Slow releases',
    quote:
      'Every change takes longer because the codebase, cloud setup and review process were not built to scale.',
  },
]

const CONTROL_ROOM = [
  { label: 'Scope', state: 'Mapped', detail: 'Users, roles, states and acceptance rules' },
  { label: 'Release', state: 'Ready', detail: 'Build, test, deploy and rollback checks' },
  { label: 'Risk', state: 'Visible', detail: 'Integrations, data, security and support notes' },
]

const STEPS = [
  {
    num: '01',
    phase: 'Discovery',
    items: ['Brief, user flow, workflow risk, estimate assumptions'],
  },
  {
    num: '02',
    phase: 'Engineering',
    items: ['Components, APIs, integrations, review checkpoints'],
  },
  {
    num: '03',
    phase: 'Launch',
    items: ['Hosting, monitoring, handover, first support loop'],
  },
]

const STANDARDS = [
  {
    phase: 'Discovery',
    num: '01',
    title: 'Requirements are agreed before sprint work starts',
    body: 'The team documents users, permissions, workflow states, external systems, data ownership and release assumptions before engineering starts. That keeps the scope practical and reviewable.',
    tags: ['User roles and permissions', 'Workflow and exception paths', 'Integration and data risks', 'Milestone acceptance checks'],
  },
  {
    phase: 'Engineering',
    title: 'Built with review checkpoints throughout',
    body: 'Architecture, code quality, security and performance are reviewed during delivery — not after. Every component, API and integration ships against a defined check.',
    tags: ['Component library', 'Versioned API contracts', 'Review checkpoints'],
  },
  {
    phase: 'Release',
    title: 'Launched with evidence and rollback ready',
    body: 'Hosting, monitoring, deployment pipelines and rollback plans are set up before go-live. Releases ship with visible evidence and a first support loop.',
    tags: ['Hosting and monitoring', 'Deployment evidence', 'Rollback plan'],
  },
  {
    phase: 'Operate',
    title: 'Owned after launch',
    body: 'We stay close to the running system with incident fixes, refactors and improvement cycles so the product keeps getting better after real users arrive.',
    tags: ['Incident fixes', 'Refactor cycles', 'Improvement roadmap'],
  },
]

const PROCESS = [
  {
    num: 'Step 1',
    title: 'Shape the product',
    desc: 'Turn business goals into a buildable roadmap — users, core flows, data models, acceptance rules and delivery milestones.',
    link: 'Explore product discovery',
  },
  {
    num: 'Step 2',
    title: 'Design and engineer',
    desc: 'Build web apps, mobile apps, APIs and dashboards with practical architecture, readable code and review checkpoints.',
    link: 'Explore engineering',
  },
  {
    num: 'Step 3',
    title: 'Connect systems',
    desc: 'Integrate payments, CRM, ERP, maps, notifications, analytics and internal tools so the software fits the business.',
    link: 'Explore integrations',
  },
  {
    num: 'Step 4',
    title: 'Launch and improve',
    desc: 'Set up cloud hosting, release pipelines, monitoring and support routines so the product ships and improves.',
    link: 'Explore DevOps',
  },
]

export default function Process() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <section id="process" ref={glowRef}>
      <div className="container">
        <span className="eyebrow">The Blinking Soft way</span>
        <h2 className="section-title">
          The usual way leaves handoffs between idea, design, code, deployment
          and support.
        </h2>

        <div className="pain-grid">
          {PAINS.map((pain) => (
            <div key={pain.title} className="pain-card">
              <h3>{pain.title}</h3>
              <p>“{pain.quote}”</p>
            </div>
          ))}
        </div>

        <div className="comparison">
          <div className="cmp-panel cmp-soft">
            <h3 className="cmp-head">The usual way</h3>
            <p>Too many handoffs between idea, design, code, deployment and support.</p>
          </div>
          <div className="cmp-panel cmp-accent">
            <h3 className="cmp-head">The Blinking Soft way</h3>
            <p>
              Product thinking, disciplined engineering and release support in
              one delivery team.
            </p>
          </div>
        </div>

        <div className="control-room">
          <div className="cr-head">
            <h3>Delivery control room</h3>
            <p>
              Every build has a visible operating system. We keep the important
              project facts close to the work: what is in scope, what can break,
              who signs off and what has to be true before launch.
            </p>
          </div>

          <div className="cr-cards">
            {CONTROL_ROOM.map((row) => (
              <div key={row.label} className="cr-card">
                <span className="cr-label">{row.label}</span>
                <span className="cr-state">{row.state}</span>
                <span className="cr-detail">{row.detail}</span>
              </div>
            ))}
          </div>

          <div className="cr-phases">
            {STEPS.map((step) => (
              <div key={step.num} className="cr-phase">
                <span className="cr-num">{step.num}</span>
                <h4>{step.phase}</h4>
                <p>{step.items[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="standard" className="standards">
        <div className="container">
          <span className="eyebrow">Engineering standards</span>
          <h2 className="section-title">
            Serious delivery stays grounded in clear standards.
          </h2>
          <div className="std-grid">
            {STANDARDS.map((std) => (
              <div key={std.title} className="std-card">
                <div className="std-meta">
                  <span className="std-phase">{std.phase}</span>
                  {std.num && <span className="std-num">{std.num}</span>}
                </div>
                <h3>{std.title}</h3>
                <p>{std.body}</p>
                <div className="std-tags">
                  {std.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container process-steps">
        <h2 className="section-title">How BlinkingSoft works</h2>
        <div className="proc-grid">
          {PROCESS.map((proc) => (
            <div key={proc.num} className="proc-card">
              <span className="proc-num">{proc.num}</span>
              <h3>{proc.title}</h3>
              <p>{proc.desc}</p>
              <Link to="/contact" className="proc-link">
                {proc.link} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
