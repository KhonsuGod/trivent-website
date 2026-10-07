import { Link } from 'react-router-dom';
import { company, routes } from '../data/company';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" to="/" aria-label={`${company.brandName} — home`}>
              <img
                className="brand-mark"
                src="/assets/trivent-logo.png"
                alt=""
                width={104}
                height={80}
                loading="lazy"
                aria-hidden="true"
              />
              <span className="brand-text">
                <strong>{company.shortName}</strong>
                <span>Business Solutions</span>
              </span>
            </Link>
            <p>
              {company.positioning}. {company.philosophy.join(' · ')}.
            </p>
          </div>

          <nav className="foot-nav" aria-label="Footer">
            <h4>Navigate</h4>
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link to={route.path}>{route.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="foot-contact">
            <h4>Contact</h4>
            <address>
              <span>{company.location}</span>
              <a href={`https://wa.me/${company.whatsappNumber}`} target="_blank" rel="noreferrer">
                {company.whatsappDisplay}
              </a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.website}</span>
              <span>LinkedIn: {company.linkedinLabel}</span>
            </address>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </span>
          <span>
            {company.ahu} · KBLI {company.kbli.join(' · ')}
          </span>
        </div>
      </div>
    </footer>
  );
}
