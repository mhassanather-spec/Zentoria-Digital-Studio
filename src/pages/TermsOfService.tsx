import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <section className="section" style={{ paddingTop: '160px', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>
            <strong>Effective Date:</strong> March 2026
          </p>

          <div className="prose" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
            <p>By using our website and services, you agree to these Terms.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>2. Services</h2>
            <p>Zentoria Digital provides digital marketing, AI automation, software development, and web development services.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>3. User Responsibilities</h2>
            <p>You agree not to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
              <li>Use the website for unlawful purposes</li>
              <li>Attempt to hack or disrupt services</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>4. Payments & Refunds</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
              <li>Payments must be made as agreed</li>
              <li>Refunds are subject to project terms</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>5. Intellectual Property</h2>
            <p>All content on this website is owned by Zentoria Digital unless otherwise stated.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>6. Limitation of Liability</h2>
            <p>We are not liable for any indirect or consequential damages.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>7. Termination</h2>
            <p>We reserve the right to terminate services at any time.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>8. Governing Law</h2>
            <p>These terms are governed by the laws of Pakistan.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>9. Contact</h2>
            <p>Email: <a href="mailto:zentoriadigital@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>zentoriadigital@gmail.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
