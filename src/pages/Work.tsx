
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';

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

const Work = () => {
  return (
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container">
        {/* Header Section */}
        <FadeIn>
          <div className="work-header-grid">
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
              Capabilities
            </div>
            <div>
              <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '32px' }}>
                Solutions we engineer.
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', lineHeight: 1.6 }}>
                From complete e-commerce ecosystem rebuilds to deep strategic software engineering, evaluate the digital solutions we are equipped to bring to life.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Filter Section */}
        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
              <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
              <input 
                type="text" 
                placeholder="Search solutions..." 
                style={{ 
                  width: '100%', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '4px', 
                  padding: '12px 16px 12px 48px', 
                  color: 'white',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem'
                }} 
              />
            </div>
            <div style={{ position: 'relative', width: '100%', maxWidth: '200px' }}>
              <select 
                style={{ 
                  width: '100%', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '4px', 
                  padding: '12px 16px', 
                  color: 'white',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              >
                <option style={{ background: 'black' }}>All Solutions</option>
                <option style={{ background: 'black' }}>Web Development</option>
                <option style={{ background: 'black' }}>Digital Marketing</option>
                <option style={{ background: 'black' }}>SEO</option>
              </select>
              <ChevronDown style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', pointerEvents: 'none' }} size={18} />
            </div>
          </div>
        </FadeIn>

        {/* Masonry wrapper */}
        <div className="masonry-grid">
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Item 1 - Tall Card */}
            <FadeIn delay={0.2}>
              <div>
                <div style={{ height: '500px', background: 'linear-gradient(145deg, #1f1f2e 0%, #0d0d12 100%)', borderRadius: '4px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.5, fontFamily: 'var(--font-heading)' }}>[01]</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 500, fontSize: '2rem', padding: '0 20px' }}>E-Commerce Architectures</div>
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    Scalable Web Stores
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Web Development & Design</p>
                </div>
              </div>
            </FadeIn>

            {/* Item 3 - Medium Card */}
            <FadeIn delay={0.4}>
              <div>
                <div style={{ height: '500px', background: 'linear-gradient(145deg, #251e19 0%, #17110e 100%)', borderRadius: '4px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.5, fontFamily: 'var(--font-heading)' }}>[03]</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 500, fontSize: '2rem', padding: '0 20px' }}>Data-Driven SEO Domination</div>
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    Local & Global Organic Growth
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>SEO & Link Building</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="masonry-col-offset" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Item 2 - Medium Card */}
            <FadeIn delay={0.3}>
              <div>
                <div style={{ height: '500px', background: 'linear-gradient(145deg, #2a2a2a 0%, #151515 100%)', borderRadius: '4px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.5, fontFamily: 'var(--font-heading)' }}>[02]</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 500, fontSize: '2rem', padding: '0 20px' }}>SaaS MVP Platforms</div>
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    Web Application Dashboards
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Software Development</p>
                </div>
              </div>
            </FadeIn>

            {/* Item 4 - Tall Card */}
            <FadeIn delay={0.5}>
              <div>
                <div style={{ height: '500px', background: 'linear-gradient(145deg, #1c261e 0%, #0e120f 100%)', borderRadius: '4px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.5, fontFamily: 'var(--font-heading)' }}>[04]</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 500, fontSize: '2rem', padding: '0 20px' }}>High-Converting Funnels</div>
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    Automated Marketing Campaigns
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Social Media & Digital Marketing</p>
                </div>
              </div>
            </FadeIn>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
