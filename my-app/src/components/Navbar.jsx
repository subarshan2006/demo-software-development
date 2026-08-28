import { useEffect, useState, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MegaMenu from './MegaMenu'
import SolutionsMegaMenu from './SolutionsMegaMenu'
import IndustriesMegaMenu from './IndustriesMegaMenu'
import ResourcesMegaMenu from './ResourcesMegaMenu'
import MobileServicesAccordion from './MobileServicesAccordion'
import MobileSolutionsAccordion from './MobileSolutionsAccordion'
import MobileIndustriesAccordion from './MobileIndustriesAccordion'
import MobileResourcesAccordion from './MobileResourcesAccordion'

const NAV_ITEMS = [
  { id: 'services', label: 'Services', megaKey: 'services' },
  { id: 'solutions', label: 'Solutions', megaKey: 'solutions' },
  { id: 'industries', label: 'Industries', megaKey: 'industries' },
  { id: 'resources', label: 'Resources', megaKey: 'resources' },
  { id: 'portfolio', label: 'Portfolio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const hoverTimeout = useRef(null)
  const navRef = useRef(null)
  const location = useLocation()
  
  const active = location.pathname.substring(1) || ''

  const closeAll = useCallback(() => setActiveDropdown(null), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close mobile menu on resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 821px)')
    const handler = (e) => {
      if (e.matches) setMobileOpen(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* ---- Hover helpers (generic for any megaKey) ---- */
  const handleTriggerEnter = (megaKey) => {
    clearTimeout(hoverTimeout.current)
    setActiveDropdown(megaKey)
  }

  const handleTriggerLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  const handleMegaEnter = () => {
    clearTimeout(hoverTimeout.current)
  }

  const handleMegaLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  /* click / keyboard toggle */
  const toggleDropdown = (megaKey) => {
    setActiveDropdown((prev) => (prev === megaKey ? null : megaKey))
  }

  /* chevron for a mega-trigger item */
  const megaChevron = (megaKey) => (
    <svg
      className={`nav-chevron ${activeDropdown === megaKey ? 'nav-chevron-open' : ''}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  /* static chevron for items without a mega-menu yet */
  const dropdownChevron = (
    <svg
      className="nav-chevron"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <>
      <header
        className={`nav ${scrolled || activeDropdown ? 'nav-scrolled' : ''}`}
        ref={navRef}
      >
        <div className="nav-inner container">
          {/* Logo */}
          <Link to="/" className="brand">
            Blinking<span>Soft</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              /* Items with a mega-menu */
              if (item.megaKey) {
                return (
                  <div
                    key={item.id}
                    className="nav-item-wrapper mega-trigger"
                    onMouseEnter={() => handleTriggerEnter(item.megaKey)}
                    onMouseLeave={handleTriggerLeave}
                  >
                    <button
                      className={`nav-link nav-link-btn ${
                        location.pathname.startsWith(`/${item.id}`) ? 'active' : ''
                      } ${activeDropdown === item.megaKey ? 'mega-active' : ''}`}
                      onClick={() => toggleDropdown(item.megaKey)}
                      aria-expanded={activeDropdown === item.megaKey}
                      aria-haspopup="true"
                    >
                      {item.label}
                      {megaChevron(item.megaKey)}
                    </button>
                  </div>
                )
              }
              /* Plain links (with or without a future dropdown chevron) */
              return (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className={`nav-link ${location.pathname.startsWith(`/${item.id}`) ? 'active' : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && dropdownChevron}
                </Link>
              )
            })}
          </nav>

          {/* Right side: Call us + CTA */}
          <div className="nav-right">
            <a href="tel:+1234567890" className="nav-call">
              Call us
            </a>
            <Link to="/get-consultant" className="btn btn-primary nav-cta">
              Get consultation <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Desktop mega menus */}
        <div
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <MegaMenu open={activeDropdown === 'services'} onClose={closeAll} />
          <SolutionsMegaMenu
            open={activeDropdown === 'solutions'}
            onClose={closeAll}
          />
          <IndustriesMegaMenu
            open={activeDropdown === 'industries'}
            onClose={closeAll}
          />
          <ResourcesMegaMenu
            open={activeDropdown === 'resources'}
            onClose={closeAll}
          />
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {/* Services accordion */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">Services</span>
            <MobileServicesAccordion onClose={closeMobile} />
          </div>

          {/* Solutions accordion */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">Solutions</span>
            <MobileSolutionsAccordion onClose={closeMobile} />
          </div>
          
          {/* Industries accordion */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">Industries</span>
            <MobileIndustriesAccordion onClose={closeMobile} />
          </div>

          {/* Resources accordion */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-label">Resources</span>
            <MobileResourcesAccordion onClose={closeMobile} />
          </div>

          {NAV_ITEMS.filter((item) => !item.megaKey).map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="mobile-nav-link"
              onClick={closeMobile}
            >
              {item.label}
            </Link>
          ))}

          <div className="mobile-nav-actions">
            <a href="tel:+1234567890" className="nav-call mobile-call">
              Call us
            </a>
            <Link
              to="/get-consultant"
              className="btn btn-primary mobile-cta"
              onClick={closeMobile}
            >
              Get consultation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div className="mobile-backdrop" onClick={closeMobile} />
      )}
    </>
  )
}
