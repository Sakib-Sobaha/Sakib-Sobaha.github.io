import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'C/C++', level: 82 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Frameworks & Databases',
      icon: '⚙️',
      skills: [
        { name: 'React', level: 88 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Node.js / Express', level: 85 },
        { name: 'FastAPI', level: 82 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
      ],
    },
    {
      title: 'ML & Deep Learning',
      icon: '🧠',
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'Hugging Face / Transformers', level: 82 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'NumPy / Pandas', level: 88 },
        { name: 'OpenCV', level: 75 },
      ],
    },
    {
      title: 'Tools & Other',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Linux / Bash', level: 85 },
        { name: 'VS Code / Postman', level: 88 },
        { name: 'Google Colab / Kaggle', level: 82 },
        { name: 'LaTeX', level: 78 },
      ],
    },
  ];

  const techStack = [
    'React', 'Python', 'PyTorch', 'Spring Boot', 'Node.js',
    'FastAPI', 'MongoDB', 'PostgreSQL', 'FAISS', 'TensorFlow',
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">What I Know</span>
          <h2 className="section-title">My Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tech-stack"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-icon tech-label"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
