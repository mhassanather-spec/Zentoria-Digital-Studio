
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0, y = 20 }: any) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="badge">Built to scale</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400 }}>Simple, transparent pricing.</h1>
          </div>
        </FadeIn>
        
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          <FadeIn delay={0.1}>
            <div className="card glass" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Growth</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>For startups moving fast.</p>
              <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '32px' }}>
                $4,995<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                {['One active request', 'Design & Webflow', 'Unlimited revisions', 'Pause or cancel anytime'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                    <Check size={18} color="white" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Get Started</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="card glass" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', borderColor: 'rgba(255,255,255,0.3)', background: 'var(--bg-secondary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'white', color: 'black', padding: '4px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold' }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Scale</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>For teams that need more velocity.</p>
              <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '32px' }}>
                $7,995<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                {['Two active requests', 'Priority support', 'Weekly strategy calls', 'Unlimited revisions', 'Pause or cancel anytime'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                    <Check size={18} color="white" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Started</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="card glass" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Custom</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>For large scope projects.</p>
              <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '32px' }}>
                Let's talk
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                {['Bespoke scope & timeline', 'Dedicated design team', 'Custom integrations', 'Enterprise grade security'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                    <Check size={18} color="white" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Book a call</Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
