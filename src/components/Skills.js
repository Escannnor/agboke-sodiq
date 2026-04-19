import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Rust', 'Solidity', 'PHP', 'C'],
    },
    {
      category: 'Frameworks',
      items: ['Django', 'FastAPI', 'Flask', 'React'],
    },
    {
      category: 'Blockchain / Web3',
      items: ['Solana', 'Smart Contracts', 'Web3.js'],
    },
    {
      category: 'AI / Data',
      items: ['TensorFlow', 'OpenAI API', 'pandas', 'NumPy'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'SQLModel'],
    },
    {
      category: 'Cloud / DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="navbar-spacer" />
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="skill-category"
          >
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.items.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
