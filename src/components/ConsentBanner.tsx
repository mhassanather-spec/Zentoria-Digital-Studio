import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the terms
    const hasAccepted = localStorage.getItem('zentoria_legal_consent');
    if (!hasAccepted) {
      // Small delay so it animates in smoothly after initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zentoria_legal_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            right: '24px',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <div 
            style={{
              background: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px 32px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              maxWidth: '900px',
              width: '100%',
              pointerEvents: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'white' }}>We Value Your Privacy</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                By using our website, you agree to our <Link to="/terms" style={{ color: 'white', textDecoration: 'underline' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</Link>. We use necessary cookies to ensure you get the best experience on our site.
              </p>
            </div>
            <button 
              onClick={handleAccept}
              className="btn btn-primary"
              style={{ padding: '12px 32px', whiteSpace: 'nowrap', flex: '0 0 auto' }}
            >
              I Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentBanner;
