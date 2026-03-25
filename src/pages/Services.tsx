
import { motion } from 'framer-motion';

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

const Services = () => {
  return (
    <section className="section">
      <div className="container grid-2" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: '120px' }}>
          <FadeIn>
            <div className="badge">Our Expertise</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, marginBottom: '24px' }}>
              We deliver more than design. We deliver momentum.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '32px' }}>
              From initial social strategy to full-scale software deployment, we provide end-to-end digital solutions that scale your business.
            </p>
          </FadeIn>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { id: '01', title: 'Social Media Marketing', desc: 'Engaging content and strategic campaigns to build your audience and brand loyalty.' },
            { id: '02', title: 'SEO', desc: 'Data-driven search engine optimization to rank higher and drive high-intent organic traffic.' },
            { id: '03', title: 'Digital Marketing', desc: 'Comprehensive growth marketing strategies spanning paid ads, email flows, and conversions.' },
            { id: '04', title: 'Web Development', desc: 'Robust, scalable, and lightning-fast frontend and backend development.' },
            { id: '05', title: 'Web Design', desc: 'Pixel-perfect, conversion-focused UI/UX design that elevates your brand narrative.' },
            { id: '06', title: 'Software Development', desc: 'Custom enterprise software, internal tools, and complex system architectures.' },
          ].map((step, i) => (
            <FadeIn delay={i * 0.1} key={i}>
              <div className="card glass" style={{ padding: '32px', display: 'flex', gap: '24px' }}>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600 }}>{step.id}</div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
