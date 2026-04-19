import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaRobot, FaDatabase } from 'react-icons/fa';

const About = () => {
  const professionalSummary = "Backend Developer & AI Engineer with 2.5 years of experience in scalable web applications, AI agents, and blockchain systems. Skilled in Python, Django, FastAPI, Rust, Solidity, and Web3. Proven success in remote international collaboration (India & Dubai) with expertise in API development, cloud infrastructure, and automation.";

  const keyHighlights = [
    {
      icon: <FaTrophy size={32} color="#1a73e8" />,
      title: 'Professional Experience',
      content:
        '2.5 years across backend engineering, AI agents, and blockchain—including remote work with teams in India and Dubai.',
    },
    {
      icon: <FaCode size={32} color="#1a73e8" />,
      title: 'Backend & APIs',
      content:
        'Python, Django, FastAPI, and Rust for scalable APIs, microservices, and secure authentication patterns.',
    },
    {
      icon: <FaRobot size={32} color="#1a73e8" />,
      title: 'AI & Automation',
      content:
        'AI agents, OpenAI integrations, and data workflows with TensorFlow, pandas, and NumPy.',
    },
    {
      icon: <FaDatabase size={32} color="#1a73e8" />,
      title: 'Data & Infrastructure',
      content:
        'MySQL, PostgreSQL, SQLModel, plus AWS, Azure, Docker, Kubernetes, and CI/CD for reliable delivery.',
    },
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
      <div className="navbar-spacer" />
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
