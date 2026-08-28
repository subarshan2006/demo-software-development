import { useState } from 'react'

const COLUMNS = [
  {
    heading: 'CUSTOMER PLATFORMS',
    items: [
      {
        title: 'Healthcare',
        desc: 'Care coordination and patient workflows',
        href: '#healthcare',
      },
      {
        title: 'E-commerce',
        desc: 'Stores, payments and order operations',
        href: '#ecommerce',
      },
      {
        title: 'Travel',
        desc: 'Booking, inventory and support flows',
        href: '#travel',
      },
      {
        title: 'Education',
        desc: 'Learning, cohorts and admin portals',
        href: '#education',
      },
    ],
  },
  {
    heading: 'OPERATIONAL SYSTEMS',
    items: [
      {
        title: 'Real Estate',
        desc: 'Listings, enquiries and broker workflows',
        href: '#real-estate',
      },
      {
        title: 'Finance',
        desc: 'Dashboards, approvals and audit-ready data',
        href: '#finance',
      },
      {
        title: 'Logistics',
        desc: 'Routing, tracking and exception handling',
        href: '#logistics',
      },
    ],
  },
  {
    heading: 'MORE INDUSTRIES',
    items: [
      {
        title: 'Manufacturing',
        desc: 'Production, inventory and reporting tools',
        href: '#manufacturing',
      },
      {
        title: 'Professional Services',
        desc: 'Client portals, reporting and workflow systems',
        href: '#professional-services',
      },
    ],
  },
]

export default function MobileIndustriesAccordion({ onClose }) {
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
