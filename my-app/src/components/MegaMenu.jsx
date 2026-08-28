import { useRef, useEffect } from 'react'

const COLUMNS = [
  {
    heading: 'PRODUCT ENGINEERING',
    items: [
      {
        title: 'Web Development',
        desc: 'Role-based portals, dashboards and SaaS screens',
        href: '#web-development',
      },
      {
        title: 'Mobile Apps',
        desc: 'Flutter releases, API contracts and device states',
        href: '#mobile-apps',
      },
      {
        title: 'UI/UX Design',
        desc: 'Operational flows, edge cases and design systems',
        href: '#ui-ux-design',
      },
      {
        title: 'Product Discovery',
        desc: 'Workflow maps, risk register and estimate inputs',
        href: '#product-discovery',
      },
    ],
  },
  {
    heading: 'PLATFORM DELIVERY',
    items: [
      {
        title: 'API Development',
        desc: 'Versioned contracts, webhooks and admin actions',
        href: '#api-development',
      },
      {
        title: 'Cloud Solutions',
        desc: 'Environments, scaling, backups and observability',
        href: '#cloud-solutions',
      },
      {
        title: 'DevOps Services',
        desc: 'Pipelines, secrets, rollback and deployment evidence',
        href: '#devops-services',
      },
      {
        title: 'QA Engineering',
        desc: 'Regression suites, UAT paths and launch gates',
        href: '#qa-engineering',
      },
    ],
  },
  {
    heading: 'IMPROVE LIVE PRODUCTS',
    items: [
      {
        title: 'AI Automation',
        desc: 'Review queues, assistants and governed workflow help',
        href: '#ai-automation',
      },
      {
        title: 'Data Engineering',
        desc: 'Event quality, reporting models and decision data',
        href: '#data-engineering',
      },
      {
        title: 'Performance Engineering',
        desc: 'Core Web Vitals, API latency and budgets',
        href: '#performance-engineering',
      },
      {
        title: 'Security and Compliance',
        desc: 'Access control, audit trails and data handling',
        href: '#security-compliance',
      },
      {
        title: 'Maintenance',
        desc: 'Incident fixes, refactors and improvement cycles',
        href: '#maintenance',
      },
    ],
  },
]

export default function MegaMenu({ open, onClose }) {
  const menuRef = useRef(null)

  /* trap Escape key */
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  /* click outside */
  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest('.mega-trigger')
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, onClose])

  return (
    <div
      className={`mega-backdrop ${open ? 'mega-open' : ''}`}
      role="region"
      aria-label="Services mega menu"
    >
      <div className="mega-menu" ref={menuRef}>
        <div className="mega-inner container">
          <div className="mega-grid">
            {/* Service columns */}
            {COLUMNS.map((col) => (
              <div className="mega-col" key={col.heading}>
                <h3 className="mega-heading">{col.heading}</h3>
                <ul className="mega-list" role="list">
                  {col.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="mega-item"
                        onClick={onClose}
                      >
                        <span className="mega-item-title">{item.title}</span>
                        <span className="mega-item-desc">{item.desc}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Promo card */}
            <div className="mega-promo">
              <h3 className="mega-promo-title">
                Not sure what to build&nbsp;first?
              </h3>
              <p className="mega-promo-text">
                Review workflows, risks, integrations, test evidence and release
                assumptions before committing engineering budget.
              </p>
              <a href="#contact" className="mega-promo-btn" onClick={onClose}>
                Map the scope
              </a>
            </div>
          </div>

          {/* Bottom link */}
          <div className="mega-footer">
            <a href="#services" className="mega-explore" onClick={onClose}>
              Explore all services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
