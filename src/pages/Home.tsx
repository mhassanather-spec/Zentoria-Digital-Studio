
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
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

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="glow-bg"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <div className="badge">Zentoria Digital Studio</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="title-large" style={{ maxWidth: '900px', margin: '0 auto 32px' }}>
              We've reimagined how great design & tech happens.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="subtitle" style={{ margin: '0 auto 48px' }}>
              No pitches. No proposals. No project management theater. Just exceptional work from senior experts who become an extension of your team.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">
                Book a call <ArrowRight style={{ marginLeft: 8 }} size={18}/>
              </Link>
              <Link to="/work" className="btn btn-secondary">
                View our capabilities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTRODUCTION / CORE PILLARS */}
      <section className="section" id="intro" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, maxWidth: '900px', margin: '0 0 80px', lineHeight: 1.3 }}>
              Traditional agencies perfected the art of the pitch. We focus exclusively on execution. When you need growth that moves at the speed of your ambition, you need a different kind of partner.
            </h2>
          </FadeIn>
          <div className="grid-3">
            {[
              { label: 'Engineering', val: 'Scalable' },
              { label: 'Design Approach', val: 'Modern' },
              { label: 'Core Focus', val: 'Growth' }
            ].map((stat, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="card glass">
                  <div className="stat-num" style={{ fontSize: '2.5rem' }}>{stat.val}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE (SERVICES SNIPPET) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <FadeIn>
              <div className="badge">What we do</div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400 }}>A full ecosystem of growth.</h2>
            </FadeIn>
          </div>
          <div className="grid-3">
            {[
              { title: 'Social Media Marketing', desc: 'Engaging content to build your audience.' },
              { title: 'SEO', desc: 'Data-driven search engine optimization.' },
              { title: 'Digital Marketing', desc: 'Paid ads, email flows, and conversions.' },
              { title: 'Web Development', desc: 'Robust frontend and backend architecture.' },
              { title: 'Web Design', desc: 'Pixel-perfect UI/UX design.' },
              { title: 'Software Development', desc: 'Custom enterprise software and tools.' }
            ].map((serv, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="card glass" style={{ padding: '32px', height: '100%' }}>
                  <Check size={24} style={{ marginBottom: '24px', color: 'white' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{serv.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{serv.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/services" className="btn btn-secondary">View our detailed process</Link>
          </div>
        </div>
      </section>

      {/* ALIGNED WORK SECTION SNIPPET - REPURPOSED FOR CAPABILITIES */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
              <div>
                <div className="badge">Capabilities</div>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400 }}>Solutions we engineer.</h2>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid-2">
            {[
              { 
                title: 'E-Commerce Architectures', 
                category: 'Web Development & SEO', 
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
                overlay: 'rgba(0, 0, 0, 0.5)'
              },
              { 
                title: 'SaaS MVP Dashboards', 
                category: 'Software Development', 
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
                overlay: 'rgba(0, 0, 0, 0.5)'
              },
              { 
                title: 'Lead Generation Funnels', 
                category: 'Digital Marketing', 
                image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1600',
                overlay: 'rgba(0, 0, 0, 0.5)'
              },
              { 
                title: 'Modern Brand Identities', 
                category: 'Web Design', 
                image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=1600',
                overlay: 'rgba(0, 0, 0, 0.5)'
              }
            ].map((proj, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ 
                    height: '400px', 
                    backgroundImage: `linear-gradient(to bottom, ${proj.overlay}, ${proj.overlay}), url("${proj.image}")`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px', 
                    border: '1px solid var(--border)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 500, textAlign: 'center', padding: '0 20px', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>{proj.title}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem' }}>{proj.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{proj.category}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/work" className="btn btn-primary" style={{ padding: '14px 40px' }}>Explore all capabilities</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glow-bg" style={{ top: 'auto', bottom: '-200px' }}></div>
        <div className="container">
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, marginBottom: '40px', lineHeight: 1.1 }}>
              Ready to accelerate <br/>your growth?
            </h2>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px' }}>
              Start a project <ArrowRight className="ml-2" style={{ marginLeft: 8 }} size={20}/>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
export default Home;
