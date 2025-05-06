import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = {
    'Full Stack Development': [
      'React', 'Node.js', 'Express', 'Django',
      'Next.js', 'FastAPI', 'GraphQL', 'RESTful APIs'
    ],
    'Data Analysis & AI': [
      'Python', 'R', 'SQL',
      'TensorFlow', 'PyTorch', 'Pandas', 'NumPy',
      'Data Visualization', 'Statistical Analysis', 'Machine Learning'
    ],
    'Backend Development': [
      'Python', 'Rust', 'C', 'PHP',
      'Django', 'FastAPI', 'Node.js', 'TypeScript'
    ],
    'Databases & Data Storage': [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
      'Solana', 'Web3', 'Blockchain', 'Data Warehousing'
    ],
    'DevOps & Cloud': [
      'Docker', 'Kubernetes', 'AWS', 'Azure',
      'CI/CD', 'Terraform', 'Ansible', 'Serverless'
    ],
    'Data Engineering': [
      'ETL', 'Data Pipelines', 'Apache Airflow',
      'Apache Spark', 'Big Data', 'Data Streaming'
    ]
  };

  return (
    <div className="skills">
      <h1>Technical Skills</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="skills-grid"
      >
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="skill-category"
          >
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
