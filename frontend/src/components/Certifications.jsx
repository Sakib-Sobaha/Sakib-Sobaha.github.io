import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: '☁️',
      color: '#FF9900',
      credentialId: 'AWS-123456',
    },
    {
      id: 2,
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2024',
      icon: '🌐',
      color: '#4285F4',
      credentialId: 'GCP-789012',
    },
    {
      id: 3,
      title: 'Meta Frontend Developer',
      issuer: 'Meta',
      date: '2023',
      icon: '⚛️',
      color: '#0668E1',
      credentialId: 'META-345678',
    },
    {
      id: 4,
      title: 'MongoDB Database Administrator',
      issuer: 'MongoDB University',
      date: '2023',
      icon: '🍃',
      color: '#47A248',
      credentialId: 'MDB-901234',
    },
    {
      id: 5,
      title: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2023',
      icon: '🟢',
      color: '#339933',
      credentialId: 'NODE-567890',
    },
    {
      id: 6,
      title: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      date: '2024',
      icon: '⚓',
      color: '#326CE5',
      credentialId: 'CKA-234567',
    },
  ];

  return (
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="certifications-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: `0 20px 40px ${cert.color}20`
              }}
              style={{ '--accent-color': cert.color }}
            >
              <div className="cert-icon-wrapper">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-glow" style={{ background: cert.color }}></div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {cert.date}
                  </span>
                  <span className="cert-id">ID: {cert.credentialId}</span>
                </div>
              </div>

              <motion.button
                className="cert-verify"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Verify
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </motion.button>

              <div className="cert-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

