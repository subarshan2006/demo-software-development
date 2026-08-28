import { useRef, useEffect } from 'react'

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

export default function IndustriesMegaMenu({ open, onClose }) {
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

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
      aria-label="Industries mega menu"
    >
      <div className="mega-menu" ref={menuRef}>
        <div className="mega-inner container">
          <div className="mega-grid">
            {COLUMNS.map((col) => (
              <div className="mega-col" key={col.heading}>
                <h3 className="mega-heading">{col.heading}</h3>
                <ul className="mega-list" role="list">
                  {col.items.map((item) => (
                    <li key={item.title}>
                      <a href={item.href} className="mega-item" onClick={onClose}>
                        <span className="mega-item-title">{item.title}</span>
                        <span className="mega-item-desc">{item.desc}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mega-promo">
              <h3 className="mega-promo-title">
                See practical project patterns
              </h3>
              <p className="mega-promo-text">
                Portfolio notes show how business workflows become web, mobile and cloud software.
              </p>
              <a href="#portfolio" className="mega-promo-btn" onClick={onClose}>
                View portfolio
              </a>
            </div>
          </div>

          <div className="mega-footer">
            <a href="#industries" className="mega-explore" onClick={onClose}>
              Explore all industries <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
