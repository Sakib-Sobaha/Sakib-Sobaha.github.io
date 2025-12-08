import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '5+', label: 'Certifications' },
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
                <span>🚀</span>
              </div>
              <div className="floating-badge badge-2">
                <span>💡</span>
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
              <motion.div 
                className="about-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="card-icon">🎯</span>
                <h3>Experience</h3>
                <p>3+ Years Working</p>
              </motion.div>

              <motion.div 
                className="about-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="card-icon">👥</span>
                <h3>Clients</h3>
                <p>10+ Worldwide</p>
              </motion.div>

              <motion.div 
                className="about-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="card-icon">📁</span>
                <h3>Projects</h3>
                <p>20+ Completed</p>
              </motion.div>
            </div>

            <p className="about-description">
              I'm a passionate Full Stack Developer with expertise in building 
              modern web applications. I love turning complex problems into 
              simple, beautiful, and intuitive solutions. My journey in tech 
              has equipped me with a diverse skill set spanning frontend, 
              backend, and everything in between.
            </p>

            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or sharing knowledge through 
              technical writing and publications.
            </p>

            <motion.button
              className="about-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </motion.button>
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
              key={index}
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

