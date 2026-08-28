import { useRef, useEffect } from 'react'

const COLUMNS = [
  {
    heading: 'BUILD FROM ZERO',
    items: [
      {
        title: 'Startup MVPs',
        desc: 'Investor-ready scope without building every idea',
        href: '#startup-mvps',
      },
      {
        title: 'SaaS Platforms',
        desc: 'Tenants, roles, billing states and admin evidence',
        href: '#saas-platforms',
      },
      {
        title: 'Internal Tools',
        desc: 'Approvals, queues, dashboards and audit trails',
        href: '#internal-tools',
      },
    ],
  },
  {
    heading: 'MODERNIZE AND SCALE',
    items: [
      {
        title: 'AI Workflow Automation',
        desc: 'Human-reviewed automations for repeated work',
        href: '#ai-workflow-automation',
      },
      {
        title: 'Data Dashboard Build',
        desc: 'Traceable metrics, source data and owner views',
        href: '#data-dashboard-build',
      },
      {
        title: 'Software Modernization',
        desc: 'Stabilize legacy workflows before replacement',
        href: '#software-modernization',
      },
    ],
  },
  {
    heading: 'OPERATE AFTER LAUNCH',
    items: [
      {
        title: 'Support Retainers',
        desc: 'Planned care for bugs, changes and release risk',
        href: '#support-retainers',
      },
      {
        title: 'Legacy App Rescue',
        desc: 'Recover brittle products without panic rewrites',
        href: '#legacy-app-rescue',
      },
      {
        title: 'Cloud Cost Control',
        desc: 'Budgets, logs and waste removal for live systems',
        href: '#cloud-cost-control',
      },
      {
        title: 'Maintenance Plans',
        desc: 'Care plans for live products',
        href: '#maintenance-plans',
      },
    ],
  },
]

export default function SolutionsMegaMenu({ open, onClose }) {
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
      aria-label="Solutions mega menu"
    >
      <div className="mega-menu" ref={menuRef}>
        <div className="mega-inner container">
          <div className="mega-grid">
            {/* Solution columns */}
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
                Choose a delivery shape before choosing a&nbsp;price
              </h3>
              <p className="mega-promo-text">
                Discovery, MVP build, modernization and support have different
                risk profiles, evidence needs and billing shapes.
              </p>
              <a href="#contact" className="mega-promo-btn" onClick={onClose}>
                Discuss the shape
              </a>
            </div>
          </div>

          {/* Bottom link */}
          <div className="mega-footer">
            <a href="#solutions" className="mega-explore" onClick={onClose}>
              Explore all solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
