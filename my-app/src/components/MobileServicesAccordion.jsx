import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

const COLUMNS = [
  {
    heading: 'PRODUCT ENGINEERING',
    items: [
      {
        title: 'Web Development',
        desc: 'Role-based portals, dashboards and SaaS screens',
        href: '/services/web-development',
      },
      {
        title: 'Mobile Apps',
        desc: 'Flutter releases, API contracts and device states',
        href: '/services/mobile-apps',
      },
      {
        title: 'UI/UX Design',
        desc: 'Operational flows, edge cases and design systems',
        href: '/services/ui-ux-design',
      },
      {
        title: 'Product Discovery',
        desc: 'Workflow maps, risk register and estimate inputs',
        href: '/services/product-discovery',
      },
    ],
  },
  {
    heading: 'PLATFORM DELIVERY',
    items: [
      {
        title: 'API Development',
        desc: 'Versioned contracts, webhooks and admin actions',
        href: '/services/api-development',
      },
      {
        title: 'Cloud Solutions',
        desc: 'Environments, scaling, backups and observability',
        href: '/services/cloud-solutions',
      },
      {
        title: 'DevOps Services',
        desc: 'Pipelines, secrets, rollback and deployment evidence',
        href: '/services/devops-services',
      },
      {
        title: 'QA Engineering',
        desc: 'Regression suites, UAT paths and launch gates',
        href: '/services/qa-engineering',
      },
    ],
  },
  {
    heading: 'IMPROVE LIVE PRODUCTS',
    items: [
      {
        title: 'AI Automation',
        desc: 'Review queues, assistants and governed workflow help',
        href: '/services/ai-automation',
      },
      {
        title: 'Data Engineering',
        desc: 'Event quality, reporting models and decision data',
        href: '/services/data-engineering',
      },
      {
        title: 'Performance Engineering',
        desc: 'Core Web Vitals, API latency and budgets',
        href: '/services/performance-engineering',
      },
      {
        title: 'Security and Compliance',
        desc: 'Access control, audit trails and data handling',
        href: '/services/security-compliance',
      },
      {
        title: 'Maintenance',
        desc: 'Incident fixes, refactors and improvement cycles',
        href: '/services/maintenance',
      },
    ],
  },
]

export default function MobileServicesAccordion({ onClose }) {
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
                  <Link
                    to={item.href}
                    className="mobile-accordion-item"
                    onClick={onClose}
                  >
                    <span className="mobile-accordion-item-title">
                      {item.title}
                    </span>
                    <span className="mobile-accordion-item-desc">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
