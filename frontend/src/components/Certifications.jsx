import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      id: 1,
      title: '2nd Runners Up, UIU Project ShowCase',
      issuer: 'Therap BD Ltd',
      date: '2025',
      icon: '🥉',
      color: '#CD7F32',
    },
    {
      id: 2,
      title: 'Champion & Speaker, BUETDC Freshers\' 2021',
      issuer: 'BUET Debating Club',
      date: '2024',
      icon: '🏆',
      color: '#FFD700',
    },
    {
      id: 3,
      title: 'Champion, BUET EDC Case Competition',
      issuer: 'BUET Entrepreneurship Development Club',
      date: '2024',
      icon: '🏅',
      color: '#6366f1',
    },
    {
      id: 4,
      title: 'Poster Accepted, BUET NSYSS 2024',
      issuer: 'Bangla Fake News Detection Research',
      date: '2024',
      icon: '📄',
      color: '#64c8ff',
    },
    {
      id: 5,
      title: '2nd Runners Up, Therap Java Fest',
      issuer: 'UIU CSE Fest',
      date: '2024',
      icon: '☕',
      color: '#a855f7',
    },
    {
      id: 6,
      title: 'University Dean\'s List',
      issuer: 'BUET · Level 1 Term 2',
      date: '2021',
      icon: '🎓',
      color: '#10b981',
    },
    {
      id: 7,
      title: '7th in Dhaka Division',
      issuer: 'Bangladesh Chemistry Olympiad (BChO)',
      date: '2020',
      icon: '🧪',
      color: '#06b6d4',
    },
    {
      id: 8,
      title: '5th in Dhaka Board, SSC',
      issuer: 'Ideal School and College · GPA 5.00',
      date: '2017',
      icon: '⭐',
      color: '#f59e0b',
    },
  ];

  return (
    <section id="achievements" className="certifications-section" ref={ref}>
      <div className="certifications-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Honors & Competitions</span>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="certifications-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              className="cert-card"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 20px 40px ${item.color}20`,
              }}
              style={{ '--accent-color': item.color }}
            >
              <div className="cert-icon-wrapper">
                <span className="cert-icon">{item.icon}</span>
                <div className="cert-glow" style={{ background: item.color }}></div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{item.title}</h3>
                <p className="cert-issuer">{item.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {item.date}
                  </span>
                </div>
              </div>

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
