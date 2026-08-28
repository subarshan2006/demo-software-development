import { useState } from 'react'

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

export default function MobileSolutionsAccordion({ onClose }) {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (heading) => {
    setExpandedCategory((prev) => (prev === heading ? null : heading))
  }

  return (
    <div className="mobile-services-accordion">
      {COLUMNS.map((col) => (
        <div className="mobile-accordion-category" key={col.heading}>
          <button
            className="mobile-accordion-trigger"
            onClick={() => toggleCategory(col.heading)}
            aria-expanded={expandedCategory === col.heading}
          >
            <span className="mobile-accordion-heading">{col.heading}</span>
            <svg
              className={`mobile-accordion-chevron ${
                expandedCategory === col.heading ? 'rotated' : ''
              }`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`mobile-accordion-panel ${
              expandedCategory === col.heading ? 'expanded' : ''
            }`}
          >
            <ul className="mobile-accordion-list" role="list">
              {col.items.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="mobile-accordion-item"
                    onClick={onClose}
                  >
                    <span className="mobile-accordion-item-title">
                      {item.title}
                    </span>
                    <span className="mobile-accordion-item-desc">
                      {item.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
