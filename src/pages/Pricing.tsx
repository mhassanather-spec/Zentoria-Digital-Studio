
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicePlans } from '../lib/pricingData';

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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pricing-page">
      {/* HEADER SECTION */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="badge">Built to scale</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, marginBottom: '24px' }}>Simple, transparent pricing.</h1>
              <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
                No hidden fees. No complex contracts. Just world-class design and development engineering tailored to your specific needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <FadeIn delay={0.1}>
            <div className="plan-tab-container ">
              {servicePlans.map((cat, i) => (
                <button
                  key={i}
                  className={`plan-tab ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {cat.icon} {cat.category}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid-3" style={{ minHeight: '500px' }}>
            <AnimatePresence mode="wait">
              {servicePlans[activeTab].plans.map((plan, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="card glass"
                  style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'white' }}>{plan.name}</h3>
                  <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '24px', color: 'white', fontFamily: 'var(--font-heading)' }}>
                    {plan.price}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, marginBottom: '32px' }}>
                    {plan.features.map((feat, j) => (
                      <li key={j} style={{ display: 'flex', gap: '12px', fontSize: '0.95rem', color: 'var(--text-secondary)', alignItems: 'center' }}>
                        <Check size={16} style={{ color: 'white', opacity: 0.6 }} /> {feat}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Choose {plan.name}</Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div style={{ marginTop: '80px' }}>
            <div className="grid-2">
              <FadeIn delay={0.1}>
                <div className="card glass" style={{ border: '1px dashed var(--border)', background: 'rgba(0, 0, 0, 0.25)', padding: '50px', textAlign: 'center' }}>
                  <Sparkles size={40} style={{ marginBottom: '24px', opacity: 0.5 }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Elite All-in-One</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Full ecosystem dominance. Includes Marketing, SEO, Design, and Development in one synchronized engine.</p>
                  <div style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '32px', color: 'white' }}>$14,995<span style={{ fontSize: '1rem', opacity: 0.5 }}>/mo</span></div>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 40px' }}>Claim Your Edge</Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="card glass" style={{ border: '1px solid var(--border)', padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Create Your Own</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Need a bespoke architecture? Tell us your vision and we'll engineer a plan specifically for your constraints and goals.</p>
                  <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 40px', alignSelf: 'center' }}>Engineering Call</Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / FOOTER CTA */}
      <section className="section" style={{ background: 'transparent', borderTop: '1px solid var(--border)' }}>

        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Still have questions?</h2>
            <Link to="/contact" className="btn btn-primary">
              Contact Support <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
