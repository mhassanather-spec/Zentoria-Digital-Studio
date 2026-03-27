import { Outlet, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// v1.1.0 - Updated Footer Layout

const Layout = () => {
  return (
    <>
      <nav className="nav-header">
        <div className="container nav-container">
          <Link to="/" className="logo-container">
            <img src="/logo.svg" alt="Zentoria Digital Studio Logo" className="logo-img" />
            <span>Zentoria <span className="studio-text">Digital Studio</span></span>
          </Link>
          <div className="nav-links">
            <Link to="/work" className="nav-link">Work</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/pricing" className="nav-link">Plans</Link>
            <Link to="/contact" className="nav-link desktop-only">Contact</Link>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
              Book a call
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-bg-glow"></div>
        <div className="container">
          <div className="footer-top">
            <div className="footer-legal">
              <Link to="/terms" className="footer-legal-link">
                Terms of Service <ArrowUpRight size={16} />
              </Link>
              <Link to="/privacy" className="footer-legal-link">
                Privacy Policy <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="footer-social-icons">
              <a href="https://www.instagram.com/zentoria_digital/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@zentoria_digital" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.94 4.94 0 0 1-3.778-3.633V2h-3.445v13.673a2.897 2.897 0 1 1-2.897-2.897 2.897 2.897 0 0 1 1.512.428V9.758a6.342 6.342 0 1 0 4.832 6.132V8.847a9.731 9.731 0 0 0 3.778 1.303V6.686z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-big-text-container">
            <h2 className="footer-big-text">
              <span className="white">ZENTORIA</span>
              <span className="grey">DIGITAL</span>
            </h2>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Zentoria Digital Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
