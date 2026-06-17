import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Publications.css';

const Publications = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const goToContact = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const publications = [
    {
      id: 1,
      title: 'Bangla Fake News Detection with Source-Specific Probabilities for Improved Accuracy',
      type: 'Conference Proceedings',
      venue: 'HCI International 2025 Posters, Washington, D.C., USA · Springer, Cham',
      date: 'June 2025',
      authors: 'Sakib Mohammed Sobaha, Nazmus Sakib Sami, Sadia Sharmin',
      abstract:
        'Published conference work on detecting Bangla fake news using source-specific probabilities to improve classification accuracy. Presented at HCI International 2025.',
      tags: ['NLP', 'Fake News Detection', 'Bangla', 'Machine Learning'],
      link: 'https://link.springer.com',
    },
    {
      id: 2,
      title: 'Bangla Fake News Detection Framework',
      type: 'Undergraduate Thesis',
      venue: 'Bangladesh University of Engineering and Technology (BUET)',
      date: '2025',
      authors: 'Sakib Mohammed Sobaha',
      abstract:
        'Undergraduate thesis developing a Bangla fake news detection framework with a dedicated misinformation dataset, comparative analysis of ML and deep learning models, and enhanced Bangla text preprocessing techniques.',
      tags: ['Deep Learning', 'Dataset Creation', 'Bangla NLP', 'Thesis'],
      link: null,
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Conference Proceedings':
        return '📄';
      case 'Undergraduate Thesis':
        return '🎓';
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
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-abstract">{pub.abstract}</p>

                <div className="pub-footer">
                  <div className="pub-tags">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="pub-tag">{tag}</span>
                    ))}
                  </div>

                  {pub.link && (
                    <div className="pub-stats">
                      <motion.a
                        href={pub.link}
                        className="pub-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Publication
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.a>
                    </div>
                  )}
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
          <p>Interested in research collaboration on NLP or machine learning?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToContact}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
