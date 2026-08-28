import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGlowText } from '../hooks/useGlowText'

const GROUPS = [
  {
    title: 'Product engineering',
    items: [
      { name: 'Web Development', desc: 'Role-based portals, dashboards and SaaS screens' },
      { name: 'Mobile Apps', desc: 'Flutter releases, API contracts and device states' },
      { name: 'UI/UX Design', desc: 'Operational flows, edge cases and design systems' },
      { name: 'Product Discovery', desc: 'Workflow maps, risk register and estimate inputs' },
    ],
  },
  {
    title: 'Platform delivery',
    items: [
      { name: 'API Development', desc: 'Versioned contracts, webhooks and admin actions' },
      { name: 'Cloud Solutions', desc: 'Environments, scaling, backups and observability' },
      { name: 'DevOps Services', desc: 'Pipelines, secrets, rollback and deployment evidence' },
      { name: 'QA Engineering', desc: 'Regression suites, UAT paths and launch gates' },
    ],
  },
  {
    title: 'Improve live products',
    items: [
      { name: 'AI Automation', desc: 'Review queues, assistants and governed workflow help' },
      { name: 'Data Engineering', desc: 'Event quality, reporting models and decision data' },
      { name: 'Performance Engineering', desc: 'Core Web Vitals, API latency and budgets' },
      { name: 'Security and Compliance', desc: 'Access control, audit trails and data handling' },
      { name: 'Maintenance', desc: 'Incident fixes, refactors and improvement cycles' },
    ],
  },
]

export default function Services() {
  const glowRef = useRef(null)
  useGlowText(glowRef)

  return (
    <section id="services" className="section-soft" ref={glowRef}>
      <div className="container">
        <span className="eyebrow">Services</span>
        <h2 className="section-title">
          Product engineering, platform delivery and live-product improvement.
        </h2>

        <div className="service-groups">
          {GROUPS.map((group) => (
            <div key={group.title} className="service-group">
              <h3 className="group-title">{group.title}</h3>
              <div className="service-list">
                {group.items.map((item) => (
                  <div key={item.name} className="service-card">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="scope-banner">
          <div>
            <h3>Not sure what to build first?</h3>
            <p>
              Review workflows, risks, integrations, test evidence and release
              assumptions before committing engineering budget.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Map the scope
          </Link>
          <Link to="/process" className="btn btn-ghost">
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  )
}
