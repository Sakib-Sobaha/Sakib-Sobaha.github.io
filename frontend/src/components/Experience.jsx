import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="page-section experience-section" ref={ref}>
      <div className="page-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Professional Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="experience-list">
          {experience.map((job, index) => (
            <motion.article
              key={job.id}
              className="experience-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="experience-top">
                <div className="experience-icon">{job.icon}</div>
                <div className="experience-heading">
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                  <p className="experience-summary">{job.summary}</p>
                </div>
                <div className="experience-dates">
                  <span className="experience-period">{job.period}</span>
                  <span className="experience-duration">{job.duration}</span>
                  <span className="experience-type">{job.type}</span>
                </div>
              </div>

              <p className="experience-location">{job.location}</p>

              <ul className="experience-highlights">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
