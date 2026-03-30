import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // ~2sec to 100

    return () => clearInterval(interval);
  }, [onComplete]);

  const letters = "ZENTORIA DIGITAL".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b]"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#09090b',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', padding: '10px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                fontWeight: 800,
                color: 'white',
                fontFamily: 'var(--font-heading)',
                display: char === " " ? 'inline-block' : 'inline-block',
                width: char === " " ? '2rem' : 'auto',
                letterSpacing: '-0.05em'
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        {/* Subtle scanline effect */}
        <motion.div
          initial={{ top: '-100%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
            boxShadow: '0 0 15px rgba(255,255,255,0.3)',
            zIndex: 10
          }}
        />
      </div>

      <div style={{ 
        marginTop: '40px', 
        width: '200px', 
        height: '1px', 
        background: 'rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            background: 'white',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)'
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          marginTop: '12px',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
          fontWeight: 600
        }}
      >
        {progress}% LOADING
      </motion.div>
    </motion.div>
  );
};

export default Loader;
