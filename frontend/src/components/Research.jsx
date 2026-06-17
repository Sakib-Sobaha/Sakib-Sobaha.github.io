import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { research } from '../data/portfolio';
import './Research.css';

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="page-section research-section" ref={ref}>
      <div className="page-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Research & Academia</span>
          <h2 className="section-title">Research</h2>
        </motion.div>

        <div className="research-list">
          {research.map((item, index) => (
            <motion.article
              key={item.id}
              className="research-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="research-header">
                <div className="research-icon">{item.icon}</div>
                <div className="research-heading">
                  <h3 className="research-role">{item.role}</h3>
                  <p className="research-org">{item.organization}</p>
                </div>
                <div className="research-dates">
                  <span className="research-period">{item.period}</span>
                  <span className="research-duration">· {item.duration}</span>
                  <span className="research-type">{item.type}</span>
                </div>
              </div>

              <p className="research-location">{item.location}</p>

              <ul className="research-highlights">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
