import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '15+', label: 'GitHub Projects' },
    { number: '1+', label: 'Years Experience' },
    { number: '1', label: 'Conference Publication' },
    { number: '7+', label: 'Competition Awards' },
  ];

  const quickLinks = [
    { to: '/education', icon: '🎓', title: 'Education', desc: 'BUET · Notre Dame · Ideal School' },
    { to: '/experience', icon: '💼', title: 'Experience', desc: 'Synesis IT · AI & R&D' },
    { to: '/research', icon: '🔬', title: 'Research', desc: 'UIUC++ SRSE · Thesis' },
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <div className="about-image">
                <div className="image-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="floating-badge badge-1">
                <span>🤖</span>
              </div>
              <div className="floating-badge badge-2">
                <span>📚</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-cards">
              {quickLinks.map((item) => (
                <motion.div key={item.to} whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Link to={item.to} className="about-card about-card-link">
                    <span className="card-icon">{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="about-description">
              I am a Computer Science and Engineering graduate from Bangladesh University
              of Engineering and Technology with a strong passion for problem-solving,
              algorithms, and mathematics. I am enthusiastic about machine learning,
              cybersecurity, and software development, with a keen interest in Data
              Structures & Algorithms.
            </p>

            <p className="about-description">
              Currently, I work as a Software Engineer on the AI and R&D team at Synesis IT,
              building multilingual RAG chatbots with FastAPI, Hugging Face Transformers,
              and FAISS. I am also contributing to LLM research through the UIUC++
              Summer Research program and published work on Bangla fake news detection.
            </p>

            {/* Download Resume — uncomment when frontend/public/resume.pdf is committed
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="about-cta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            */}
          </motion.div>
        </div>

        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
