import { Outlet, Link } from 'react-router-dom';

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

      <footer className="footer" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)', padding: '80px 0 40px', marginTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '48px', marginBottom: '80px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <Link to="/" className="logo-container" style={{ marginBottom: '24px' }}>
                <img src="/logo.svg" alt="Zentoria Digital Studio Logo" className="logo-img" />
                <span>Zentoria <span className="studio-text">Digital Studio</span></span>
              </Link>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', fontSize: '1.1rem' }}>
                Engineering modern digital solutions that drive growth and deliver exceptional user experiences.
              </p>
            </div>
            <div className="nav-links">
              <div style={{ color: 'white', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Studio</div>
              <Link to="/work" className="nav-link">Work</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/pricing" className="nav-link">Plans</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', borderTop: '1px solid var(--border)', paddingTop: '32px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} Zentoria Digital Studio. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem' }}>
              <Link to="/" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
              <Link to="/" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
