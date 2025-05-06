import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaRobot, FaDatabase } from 'react-icons/fa';

const About = () => {
  const professionalSummary = "Full Stack Software Engineer with over 5 years of experience in building scalable, data-driven applications. Expert in full-stack development, data analysis, and AI integration. Proven track record of delivering high-impact solutions that drive business growth and innovation. Specialized in building maintainable, secure, and efficient systems that process and analyze large datasets.";

  const keyHighlights = [
    {
      icon: <FaTrophy size={32} color="#1a73e8" />,
      title: "Professional Experience",
      content: "Over 5 years of hands-on experience in full-stack development, data analysis, and AI integration."
    },
    {
      icon: <FaCode size={32} color="#1a73e8" />,
      title: "Technical Expertise",
      content: "Expert in full-stack development with React, Node.js, and modern web technologies. Specialized in building scalable, secure, and maintainable systems."
    },
    {
      icon: <FaRobot size={32} color="#1a73e8" />,
      title: "Data Analysis & AI",
      content: "Advanced experience with Python, R, TensorFlow, and building intelligent systems for real-time data processing and analysis."
    },
    {
      icon: <FaDatabase size={32} color="#1a73e8" />,
      title: "Data Engineering",
      content: "Proven expertise in data warehousing, ETL processes, and building scalable data pipelines with Apache Airflow and Spark."
    }
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="summary"
        >
          <p>{professionalSummary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="highlights-grid"
        >
          {keyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="highlight-card"
            >
              <div className="icon-container">
                {highlight.icon}
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
