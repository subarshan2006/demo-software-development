import { useRef, useEffect } from 'react'

const COLUMNS = [
  {
    heading: 'LEARN',
    items: [
      {
        title: 'Engineering Blog',
        desc: 'Original notes on product delivery',
        href: '#blog',
      },
      {
        title: 'Build Guides',
        desc: 'Planning checklists for founders and teams',
        href: '#guides',
      },
      {
        title: 'Delivery Playbook',
        desc: 'Release, support and maintenance practice',
        href: '#playbook',
      },
      {
        title: 'Resource Library',
        desc: 'Templates, checklists and worksheets',
        href: '#library',
      },
      {
        title: 'FAQ',
        desc: 'Answers about estimates and process',
        href: '#faq',
      },
    ],
  },
  {
    heading: 'PLAN',
    items: [
      {
        title: 'Technology Notes',
        desc: 'Articles by engineering topic',
        href: '#tech-notes',
      },
      {
        title: 'Technology Stack',
        desc: 'React, Node, Flutter, cloud and data choices',
        href: '#tech-stack',
      },
      {
        title: 'Integrations',
        desc: 'Payments, CRM, maps, analytics and auth',
        href: '#integrations',
      },
      {
        title: 'Locations',
        desc: 'Coimbatore, Chennai and Australia delivery',
        href: '#locations',
      },
    ],
  },
  {
    heading: 'COMPANY',
    items: [
      {
        title: 'About Us',
        desc: 'How Blinking Soft works',
        href: '#about',
      },
      {
        title: 'Process',
        desc: 'Delivery rhythm and review model',
        href: '#process',
      },
      {
        title: 'Case Studies',
        desc: 'Project stories and outcomes',
        href: '#case-studies',
      },
      {
        title: 'Careers',
        desc: 'Join the engineering team',
        href: '#careers',
      },
    ],
  },
]

export default function ResourcesMegaMenu({ open, onClose }) {
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
      aria-label="Resources mega menu"
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
                Need an integration-heavy product?
              </h3>
              <p className="mega-promo-text">
                Use the integration hub to plan payments, CRM, ERP, maps, notifications, analytics and identity work.
              </p>
              <a href="#integration-hub" className="mega-promo-btn" onClick={onClose}>
                Open integration hub
              </a>
            </div>
          </div>

          <div className="mega-footer">
            <a href="#library" className="mega-explore" onClick={onClose}>
              Open resource library <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
