
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Star } from 'lucide-react';
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


import { servicePlans } from '../lib/pricingData';


const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* HERO SECTION - REFACTORED (MUGEN STYLE) */}
      <section className="hero-section">
        <div className="hero-bg-text solid">ZENTORIA</div>
        <div className="hero-bg-text outline">DIGITAL</div>
        <div className="hero-bg-text reflection">Zentoria Digital</div>


        <div className="container">
          <div className="hero-since">© Since — 2024</div>

          <div className="hero-grid">

            {/* Right Column: Text Content */}
            <div className="hero-text-col" style={{ maxWidth: '800px' }}>
              <FadeIn delay={0.3} y={0}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 500, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'white' }}>
                  We've reimagined how great design happens.
                </h1>
                <p className="subtitle" style={{ margin: '0 auto 32px', fontSize: '1.25rem', opacity: 0.8, maxWidth: '650px' }}>
                  No pitches. No proposals. Just exceptional work from senior experts who become an extension of your team.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                  <Link to="/contact" className="btn btn-primary">Start a project</Link>
                  <Link to="/work" className="btn btn-secondary">Our Capabilities</Link>
                </div>
              </FadeIn>
            </div>
          </div>



          <FadeIn delay={0.5} y={0}>
            <div className="hero-proof">
              <div className="hero-avatars">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="client" className="hero-avatar" />
                ))}
                <div className="hero-avatar" style={{ background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--text-muted)' }}>You?</div>
              </div>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="white" stroke="none" />)}
                  <span style={{ fontSize: '0.8rem', marginLeft: '6px', fontWeight: 600 }}>4.9/5</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>100+ Happy clients</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTRODUCTION / CORE PILLARS */}
      <section className="section" id="intro" style={{ background: 'transparent', borderTop: '1px solid var(--border)' }}>

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
        </div>
      </section>

      {/* SERVICE PLANS SECTION */}
      <section className="section" style={{ background: 'transparent', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <FadeIn>
              <div className="badge">Pricing Plans</div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: '24px' }}>Tailored solutions for every scale.</h2>
            </FadeIn>
          </div>

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

          <div className="grid-3" style={{ transition: 'all 0.5s ease' }}>
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
                  <div style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: '24px', color: 'white', fontFamily: 'var(--font-heading)' }}>
                    {plan.price}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, marginBottom: '32px' }}>
                    {plan.features.map((feat, j) => (
                      <li key={j} style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)', alignItems: 'center' }}>
                        <Check size={16} style={{ color: 'white', opacity: 0.6 }} /> {feat}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-secondary mobile-full" style={{ width: '100%', fontSize: '0.9rem' }}>Choose Plan</Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div style={{ marginTop: '80px' }}>
            <div className="grid-2">
              <FadeIn delay={0.1}>
                <div className="card glass" style={{ border: '1px dashed var(--border)', background: 'rgba(255,255,255,0.01)', padding: '50px', textAlign: 'center' }}>
                  <Sparkles size={40} style={{ marginBottom: '24px', opacity: 0.5 }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Elite All-in-One</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Full ecosystem dominance. Includes Marketing, SEO, Design, and Development in one synchronized engine.</p>
                  <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '32px', color: 'white' }}>$14,995<span style={{ fontSize: '1rem', opacity: 0.5 }}>/mo</span></div>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 40px' }}>Claim Your Edge</Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="card glass" style={{ border: '1px solid var(--border)', padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Create Your Own</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Need a bespoke architecture? Tell us your vision and we'll engineer a plan specifically for your constraints and goals.</p>
                  <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 40px', alignSelf: 'center' }}>Engineering Call</Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      {/* CAPABILITIES SECTION */}
      <section className="section" style={{ background: 'transparent', borderTop: '1px solid var(--border)' }}>

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
                  <div 
                    className="card-interactive"
                    style={{
                      height: '400px',
                      backgroundImage: `linear-gradient(to bottom, ${proj.overlay}, ${proj.overlay}), url("${proj.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                      cursor: 'pointer'
                    }}
                  >

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

      {/* QUOTE SECTION */}
      <section className="section" style={{ background: 'transparent', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <span style={{
              position: 'absolute',
              top: '-40px',
              left: '-20px',
              fontSize: '8rem',
              color: 'rgba(255,255,255,0.05)',
              fontFamily: 'serif',
              lineHeight: 1
            }}>"</span>
            <blockquote style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: '40px',
              position: 'relative',
              zIndex: 1,
              color: 'rgba(255,255,255,0.95)'
            }}>
              "Your next project deserves <strong>world-class design.</strong> Stop settling for mediocre and start working with designers who care as much as you do."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
                alt="Alex West"
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)', filter: 'grayscale(0.2)' }}
              />
              <div>
                <div style={{ fontWeight: 500, fontSize: '1rem', color: 'white' }}>Alex West</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Creative Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>

        <div className="glow-bg" style={{ top: 'auto', bottom: '-200px' }}></div>
        <div className="container">
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, marginBottom: '40px', lineHeight: 1.1 }}>
              Ready to accelerate <br />your growth?
            </h2>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px' }}>
              Start a project <ArrowRight className="ml-2" style={{ marginLeft: 8 }} size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
export default Home;
