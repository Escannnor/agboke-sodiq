import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Rust", "C", "PHP"]
    },
    {
      category: "Frameworks & Tools",
      items: ["Django", "FastAPI", "Flask", "React"]
    },
    {
      category: "Blockchain & Web3",
      items: ["Solana", "Rust", "Smart Contracts", "Web3.js"]
    },
    {
      category: "AI & Data Science",
      items: ["TensorFlow", "OpenAI API", "pandas", "NumPy"]
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLModel", "PostgreSQL"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "CI/CD"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <motion.div
            key={index}
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
