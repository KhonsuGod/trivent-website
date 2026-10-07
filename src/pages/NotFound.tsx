import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | TRIVENT"
        description="The requested page could not be found on the TRIVENT Business Solutions website."
        path="/404"
      />
      <div className="container notfound">
        <p className="eyebrow">Error 404</p>
        <h1>Not Found</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: 16, maxWidth: '56ch' }}>
          This page does not exist or has moved. Return home or start a
          conversation with TRIVENT instead.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-gold" to="/">
            Back to Home
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Contact TRIVENT
          </Link>
        </div>
      </div>
    </>
  );
}
