import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "TechLink Solutions",
      location: "Lagos, Nigeria",
      period: "Mar 2021 – Jan 2022",
      achievements: [
        "Developed and optimized RESTful APIs using Django, reducing API response times by 25%.",
        "Designed and implemented secure authentication systems with OAuth2 and JWT.",
        "Improved database query efficiency, leading to better system performance."
      ]
    },
    // Add other experiences here
  ];

  return (
    <div className="experience">
      <h1>Experience</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="timeline"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="experience-item"
          >
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="location">{exp.location}</p>
            <p className="period">{exp.period}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
