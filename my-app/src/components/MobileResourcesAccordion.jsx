import { Link } from 'react-router-dom'
import { useState } from 'react'

const COLUMNS = [
  {
    heading: 'LEARN',
    items: [
      {
        title: 'Engineering Blog',
        desc: 'Original notes on product delivery',
        href: '/resources/blog',
      },
      {
        title: 'Build Guides',
        desc: 'Planning checklists for founders and teams',
        href: '/resources/guides',
      },
      {
        title: 'Delivery Playbook',
        desc: 'Release, support and maintenance practice',
        href: '/resources/playbook',
      },
      {
        title: 'Resource Library',
        desc: 'Templates, checklists and worksheets',
        href: '/resources/library',
      },
      {
        title: 'FAQ',
        desc: 'Answers about estimates and process',
        href: '/resources/faq',
      },
    ],
  },
  {
    heading: 'PLAN',
    items: [
      {
        title: 'Technology Notes',
        desc: 'Articles by engineering topic',
        href: '/resources/tech-notes',
      },
      {
        title: 'Technology Stack',
        desc: 'React, Node, Flutter, cloud and data choices',
        href: '/resources/tech-stack',
      },
      {
        title: 'Integrations',
        desc: 'Payments, CRM, maps, analytics and auth',
        href: '/resources/integrations',
      },
      {
        title: 'Locations',
        desc: 'Coimbatore, Chennai and Australia delivery',
        href: '/resources/locations',
      },
    ],
  },
  {
    heading: 'COMPANY',
    items: [
      {
        title: 'About Us',
        desc: 'How Blinking Soft works',
        href: '/resources/about',
      },
      {
        title: 'Process',
        desc: 'Delivery rhythm and review model',
        href: '/resources/process',
      },
      {
        title: 'Case Studies',
        desc: 'Project stories and outcomes',
        href: '/resources/case-studies',
      },
      {
        title: 'Careers',
        desc: 'Join the engineering team',
        href: '/resources/careers',
      },
    ],
  },
]

export default function MobileResourcesAccordion({ onClose }) {
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
