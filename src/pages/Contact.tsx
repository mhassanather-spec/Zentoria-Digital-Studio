import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '', budget: '$5k - $10k' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('inquiries')
      .insert([formData]);

    if (error) {
      console.error('Error submitting inquiry:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', details: '', budget: '$5k - $10k' });
    }
  };

  return (
    <section className="section" style={{ minHeight: '90vh', paddingTop: '160px' }}>
      <div className="container contact-grid">
        <FadeIn>
          <div style={{ position: 'sticky', top: '120px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '24px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>EMAIL US</h4>
                <a href="mailto:zentoriadigital@gmail.com" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'white', wordBreak: 'break-word' }}>zentoriadigital@gmail.com</a>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>FOLLOW US</h4>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="https://www.instagram.com/zentoria_digital/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Instagram</a>
                  <a href="https://www.tiktok.com/@zentoria_digital" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>TikTok</a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '60px' }}>
              Let's build something beautiful.
            </h1>

            {status === 'success' ? (
              <div style={{ padding: '40px', background: 'rgba(0, 0, 0, 0.45)', backdropFilter: 'blur(16px)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. Our team will review your details and get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-secondary mobile-full" style={{ marginTop: '24px' }}>Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div className="contact-form-row" style={{ display: 'flex', gap: '40px' }}>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ padding: '0 0 16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', color: 'white', fontFamily: 'inherit', fontSize: '1.2rem', outline: 'none', width: '100%' }} 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ padding: '0 0 16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', color: 'white', fontFamily: 'inherit', fontSize: '1.2rem', outline: 'none', width: '100%' }} 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="phone-input-dark">
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</label>
                  <PhoneInput
                    defaultCountry="US"
                    maxLength={16}
                    smartCaret={true}
                    value={formData.phone}
                    onChange={(val) => setFormData({...formData, phone: val as string || ''})}
                    style={{ padding: '0 0 16px 0', borderBottom: '1px solid var(--border)' }}
                    className="custom-phone-input"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Details</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    style={{ padding: '0 0 16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', color: 'white', fontFamily: 'inherit', fontSize: '1.2rem', outline: 'none', resize: 'vertical', width: '100%' }} 
                    placeholder="Tell us about your timeline and goals..."
                  ></textarea>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    style={{ padding: '0 0 16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', color: 'white', fontFamily: 'inherit', fontSize: '1.2rem', outline: 'none', appearance: 'none', cursor: 'pointer', width: '100%' }}
                  >
                    <option style={{ background: 'var(--bg)' }}>$5k - $10k</option>
                    <option style={{ background: 'var(--bg)' }}>$10k - $25k</option>
                    <option style={{ background: 'var(--bg)' }}>$25k+</option>
                  </select>
                </div>

                {status === 'error' && (
                  <div style={{ color: '#ff4a4a', fontSize: '0.9rem', padding: '16px', border: '1px solid #ff4a4a', borderRadius: '4px', background: 'rgba(255,0,0,0.1)' }}>
                    There was an error connecting to the database. Make sure you've added your Supabase URL and Keys to `.env.local`!
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn btn-primary mobile-full" 
                  style={{ alignSelf: 'flex-start', padding: '16px 48px', fontSize: '1.2rem', marginTop: '20px', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit inquiry'}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
