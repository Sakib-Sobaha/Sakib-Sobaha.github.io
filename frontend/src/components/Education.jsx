import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/portfolio';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="page-section education-section" ref={ref}>
      <div className="page-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Academic Journey</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              className="education-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="education-icon">{item.icon}</div>
              <div className="education-body">
                <div className="education-header">
                  <div>
                    <h3 className="education-school">{item.school}</h3>
                    <p className="education-degree">{item.degree}</p>
                  </div>
                  <div className="education-meta">
                    <span className="education-period">{item.period}</span>
                    <span className="education-duration">· {item.duration}</span>
                  </div>
                </div>

                <p className="education-location">{item.location}</p>

                <div className="education-cgpa">
                  <span className="cgpa-label">CGPA</span>
                  <span className="cgpa-value">{item.cgpa}</span>
                </div>

                <ul className="education-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
