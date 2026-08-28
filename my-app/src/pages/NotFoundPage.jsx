import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="hero section-soft" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container hero-inner">
        <span className="eyebrow">404 Error</span>
        <h1 className="hero-title">
          Page not found.
        </h1>
        <p className="hero-sub" style={{ marginBottom: '2rem' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to home
        </Link>
      </div>
    </section>
  )
}
