import { Link } from 'react-router-dom'

const LINKS = {
  Solutions: ['Startup MVPs', 'SaaS Platforms', 'Internal Tools', 'AI Workflow Automation', 'Data Dashboard Build', 'Software Modernization'],
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'API Development', 'DevOps Services'],
  Company: ['About Us', 'Process', 'Portfolio', 'Locations', 'Careers', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light">
            Blinking<span>Soft</span>
          </Link>
          <p>
            Software delivery, under control. Web, mobile, cloud and AI
            workflow engineering for teams in Coimbatore, Chennai and
            Australia.
          </p>
        </div>

        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} className="footer-col">
            <h4>{heading}</h4>
            <ul>
              {items.map((item) => {
                let linkPath;
                if (heading === 'Services') {
                  linkPath = `/services/${item.toLowerCase().replace(/\/|\s+/g, '-')}`;
                } else if (heading === 'Solutions') {
                  linkPath = `/solutions/${item.toLowerCase().replace(/\/|\s+/g, '-')}`;
                } else if (heading === 'Company') {
                  linkPath = `/resources/${item.toLowerCase().replace(/\/|\s+/g, '-')}`;
                  if (item === 'Contact') linkPath = '/get-consultant';
                  if (item === 'Portfolio') linkPath = '/portfolio';
                } else {
                  linkPath = `/${item.toLowerCase().replace(/\/|\s+/g, '-')}`;
                }

                // specific overrides
                if (item === 'UI/UX Design') linkPath = '/services/ui-ux-design';
                if (item === 'AI Workflow Automation') linkPath = '/solutions/ai-workflow-automation';
                if (item === 'Software Modernization') linkPath = '/solutions/software-modernization';

                return (
                  <li key={item}>
                    <Link to={linkPath}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Blinking Soft. All rights reserved.</span>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
