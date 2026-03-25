import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section className="section" style={{ paddingTop: '160px', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>
            <strong>Effective Date:</strong> March 2026
          </p>

          <div className="prose" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p>Zentoria Digital ("we", "our", "us") respects your privacy and is committed to protecting it through this Privacy Policy.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
              <li><strong>Personal Information:</strong> Name, email address, phone number, business details</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on website</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Process inquiries and projects</li>
              <li>Send marketing communications (if consent is given)</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>3. Sharing Your Information</h2>
            <p>We do not sell your personal data. We may share information with:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
              <li>Service providers and partners</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>4. Cookies</h2>
            <p>We use cookies to enhance user experience and analyze website traffic.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your data.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>7. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy at any time.</p>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px' }}>9. Contact Us</h2>
            <p>Email: <a href="mailto:zentoriadigital@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>zentoriadigital@gmail.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
