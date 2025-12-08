import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Publications.css';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const publications = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Node.js',
      type: 'Research Paper',
      venue: 'IEEE Software Engineering Conference',
      date: 'December 2024',
      abstract: 'A comprehensive study on designing and implementing scalable microservices architecture using Node.js and containerization technologies.',
      tags: ['Microservices', 'Node.js', 'Docker'],
      link: '#',
      citations: 45,
    },
    {
      id: 2,
      title: 'Machine Learning for Web Performance Optimization',
      type: 'Journal Article',
      venue: 'ACM Computing Surveys',
      date: 'October 2024',
      abstract: 'Exploring the application of machine learning techniques for predicting and optimizing web application performance metrics.',
      tags: ['Machine Learning', 'Performance', 'Web'],
      link: '#',
      citations: 32,
    },
    {
      id: 3,
      title: 'Modern Authentication Patterns in Distributed Systems',
      type: 'Technical Blog',
      venue: 'Medium - Technology',
      date: 'August 2024',
      abstract: 'Deep dive into OAuth 2.0, JWT, and modern authentication strategies for securing distributed applications.',
      tags: ['Security', 'Authentication', 'OAuth'],
      link: '#',
      citations: 128,
    },
    {
      id: 4,
      title: 'React Performance: From Good to Great',
      type: 'Technical Blog',
      venue: 'Dev.to',
      date: 'June 2024',
      abstract: 'Practical techniques and patterns for optimizing React applications, including code splitting, memoization, and virtual DOM optimization.',
      tags: ['React', 'Performance', 'Frontend'],
      link: '#',
      citations: 256,
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Research Paper':
        return '📄';
      case 'Journal Article':
        return '📚';
      case 'Technical Blog':
        return '✍️';
      default:
        return '📝';
    }
  };

  return (
    <section id="publications" className="publications-section" ref={ref}>
      <div className="publications-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Knowledge Sharing</span>
          <h2 className="section-title">Publications</h2>
        </motion.div>

        <div className="publications-list">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              className="publication-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="pub-icon">
                <span>{getTypeIcon(pub.type)}</span>
              </div>

              <div className="pub-content">
                <div className="pub-header">
                  <span className="pub-type">{pub.type}</span>
                  <span className="pub-date">{pub.date}</span>
                </div>

                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-venue">{pub.venue}</p>
                <p className="pub-abstract">{pub.abstract}</p>

                <div className="pub-footer">
                  <div className="pub-tags">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="pub-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="pub-stats">
                    <span className="pub-citations">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                      </svg>
                      {pub.citations} citations
                    </span>

                    <motion.a
                      href={pub.link}
                      className="pub-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="pub-decoration"></div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="publications-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>Want to collaborate on research?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;

