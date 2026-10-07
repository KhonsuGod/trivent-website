import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company, routes } from '../data/company';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen ]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`site-header${scrolled || menuOpen ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label={`${company.brandName} — home`}>
            <img
              className="brand-mark"
              src="/assets/trivent-logo.png"
              alt=""
              width={104}
              height={80}
              aria-hidden="true"
            />
            <span className="brand-text">
              <strong>{company.shortName}</strong>
              <span>Business Solutions</span>
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {routes
                .filter((route) => route.path !== '/')
                .map((route) => (
                  <li key={route.path}>
                    <NavLink
                      to={route.path}
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link className="btn btn-gold btn-sm" to="/contact">
              Start a Conversation
            </Link>
            <ThemeToggle />
            <button
              type="button"
              className="burger"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <strong>TRIVENT</strong>
          <div className="nav-actions">
            <ThemeToggle />
            <button type="button" className="burger" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu">
              Close
            </button>
          </div>
        </div>
        <nav aria-label="Mobile">
          <ul className="mobile-links">
            {routes.map((route, i) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="m-num">{String(i + 1).padStart(2, '0')}</span>
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-foot">
          <Link className="btn btn-gold" to="/contact" onClick={() => setMenuOpen(false)}>
            Start a Conversation <ArrowUpRight aria-hidden="true" />
          </Link>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {company.whatsappDisplay} · {company.email}
          </p>
        </div>
      </div>
    </>
  );
}
