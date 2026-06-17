import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Certifications.css';

const achievementGroups = [
  {
    id: 'hackathons',
    title: 'Hackathons',
    items: [
      {
        id: 'uiu-showcase',
        title: '2nd Runners Up, UIU Project ShowCase',
        issuer: 'UIU CSE Fest · Team Code Busters',
        date: 'Jan 2025',
        icon: '🥉',
        color: '#CD7F32',
      },
      {
        id: 'therap-javafest',
        title: '2nd Runners Up, Therap Java Fest',
        issuer: 'Therap BD Ltd · Pet Palok',
        date: 'Oct 2024',
        icon: '☕',
        color: '#a855f7',
      },
    ],
  },
  {
    id: 'academic',
    title: 'Academic',
    items: [
      {
        id: 'deans-list',
        title: "University Dean's List",
        issuer: 'BUET · Level 1 Term 2',
        date: '2021',
        icon: '🎓',
        color: '#10b981',
      },
      {
        id: 'bcho',
        title: '7th in Dhaka Division',
        issuer: 'Bangladesh Chemistry Olympiad (BChO)',
        date: '2018',
        icon: '🧪',
        color: '#06b6d4',
      },
      {
        id: 'ssc-rank',
        title: '5th in Dhaka Board, SSC',
        issuer: 'Ideal School and College · GPA 5.00',
        date: '2017',
        icon: '⭐',
        color: '#f59e0b',
      },
    ],
  },
  {
    id: 'extracurricular',
    title: 'Extracurricular',
    items: [
      {
        id: 'buetdc',
        title: "Champion & Speaker, BUETDC Freshers' 2021",
        issuer: 'BUET Debating Club',
        date: '2021',
        icon: '🏆',
        color: '#FFD700',
      },
      {
        id: 'edc',
        title: 'Champion, BUET EDC Case Competition',
        issuer: 'BUET Entrepreneurship Development Club',
        date: '2020',
        icon: '🏅',
        color: '#6366f1',
      },
      {
        id: 'nsyss',
        title: 'Poster Accepted, BUET NSYSS 2024',
        issuer: 'Bangla Fake News Detection Research',
        date: '2024',
        icon: '📄',
        color: '#64c8ff',
      },
    ],
  },
];

const AchievementCard = ({ item, index, isInView }) => (
  <motion.div
    className="cert-card"
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.08 }}
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
);

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

        {achievementGroups.map((group, groupIndex) => (
          <motion.div
            key={group.id}
            className="achievement-group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
          >
            <h3 className="achievement-group-title">{group.title}</h3>
            <div className="certifications-grid">
              {group.items.map((item, index) => (
                <AchievementCard
                  key={item.id}
                  item={item}
                  index={groupIndex * 3 + index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
