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

  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Tai-Solarin University, Ogun State",
      year: "2020"
    }
  ];

  const certifications = [
    {
      title: "Advanced Python Developer",
      issuer: "Coursera",
      year: "2024"
    },
    {
      title: "Data Analysis with Python",
      issuer: "Udemy",
      year: "2023"
    }
  ];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-content"
      >
        <div className="about-text">
          <p>{professionalSummary}</p>
        </div>
        <div className="about-stats">
          {education.map((edu, index) => (
            <div className="stat" key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution} ({edu.year})</p>
            </div>
          ))}
          {certifications.map((cert, index) => (
            <div className="stat" key={index}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer} ({cert.year})</p>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="highlights-grid"
        >
          {keyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
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
      </motion.div>
    </section>
  );
};

export default About;
