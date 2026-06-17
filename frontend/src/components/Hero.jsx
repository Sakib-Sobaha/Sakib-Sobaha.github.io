import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BUET CSE Graduate · Software Engineer
        </motion.p>

        <motion.h1
          className="name"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypeWriter
            text="Sakib Mohammed Sobaha"
            speed={80}
            delay={800}
          />
        </motion.h1>

        <motion.div
          className="title-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="title-line"></span>
          <p className="title">AI · Machine Learning · Software Development</p>
          <span className="title-line"></span>
        </motion.div>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Building RAG systems, multilingual NLP pipelines, and full-stack applications
          with a passion for algorithms, research, and continuous learning.
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <Link to="/projects" className="btn btn-primary">
            <motion.span
              className="btn-inner"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.span>
          </Link>
          {/* Download Resume — uncomment when frontend/public/resume.pdf is committed
          <motion.a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Resume</span>
          </motion.a>
          */}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
