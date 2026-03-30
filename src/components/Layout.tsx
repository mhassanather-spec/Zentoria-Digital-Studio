import { Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// v1.2.1 - Conditional Premium Footer

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* GLOBAL CINEMATIC BACKGROUND */}
      <div className="global-bg">
        <div className="global-bg-texture"></div>
        <div className="global-vignette"></div>
      </div>
      
      <div className="global-particles">
        {[...Array(120)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const duration = Math.random() * 15 + 10;
          return (
            <div 
              key={i} 
              className="particle" 
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${Math.random() * -20}s`,
                boxShadow: `0 0 ${size * 3}px rgba(255,255,255,0.4)`
              }}
            ></div>
          );
        })}
      </div>

      <nav className="nav-header">
        <div className="container nav-container">
          <Link to="/" className="logo-container">
            <img src="/logo.svg" alt="Zentoria Digital Studio Logo" className="logo-img" />
            <span>Zentoria <span className="studio-text">Digital Studio</span></span>
          </Link>
          <div className="nav-links">
            <Link to="/work" className="nav-link">Work</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/contact" className="nav-link desktop-only">Contact</Link>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
              Book a call
            </Link>
          </div>
        </div>

        {/* MOBILE BOTTOM NAV */}
        <div className="layout-mobile-nav">
           <Link to="/work" className="nav-link">Work</Link>
           <Link to="/services" className="nav-link">Services</Link>
           <Link to="/pricing" className="nav-link">Pricing</Link>
           <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>



      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer className={`footer ${isHomePage ? 'footer-premium' : ''}`}>
        <div className="footer-bg-glow"></div>
        <div className="container">
          {/* Premium Upper Footer Section - Only on Landing Page */}
          {isHomePage && (
            <div className="footer-upper">
              <div className="footer-upper-left">
                <a href="mailto:zentoriadigital@gmail.com" className="footer-email-main">
                  zentoriadigital@gmail.com <span className="plus">+</span>
                </a>
                
                <div className="footer-quote-container">
                  <span className="quote-icon">“</span>
                  <p className="footer-quote">
                    Your next digital presence deserves world-class strategy. 
                    Stop settling for mediocre and start working with experts 
                    who care as much as you do.
                  </p>
                </div>
                
                <div className="footer-profile">
                  <img src="/hassan-athar-profile.png" alt="Head Marketer" className="profile-img" style={{ filter: 'grayscale(1)' }} />
                  <div className="profile-info">
                    <span className="profile-name">Hassan Athar</span>
                    <span className="profile-title">Head Marketer</span>
                  </div>
                </div>
              </div>
              
              <div className="footer-upper-right">
                <nav className="footer-nav">
                  <div className="footer-nav-col">
                    <Link to="/" className="footer-nav-link">Home</Link>
                    <Link to="/work" className="footer-nav-link">Work</Link>
                    <Link to="/pricing" className="footer-nav-link">Pricing</Link>
                    <Link to="/contact" className="footer-nav-link">Contact</Link>
                  </div>
                </nav>
              </div>
            </div>
          )}

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

          <div className="footer-big-text-container" style={{ position: 'relative', marginTop: '60px', paddingBottom: '20px' }}>
            <div className="footer-signature">ZENTORIA DIGITAL</div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.8rem', opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Zentoria Digital Studio. All rights reserved.
          </div>

        </div>
      </footer>
    </>
  );
};

export default Layout;
