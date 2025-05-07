import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';

const professionalSummary = "Full Stack Software Engineer with over 5 years of experience in building scalable, data-driven applications. Expert in full-stack development, data analysis, and AI integration. Proven track record of delivering high-impact solutions that drive business growth and innovation. Specialized in building maintainable, secure, and efficient systems that process and analyze large datasets.";

const Home = () => {
  return (
    <div className="home">
      <div className="navbar-spacer"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <h1>AGBOKE SODIQ</h1>
        <h2>Senior Backend Developer | AI & Blockchain Specialist</h2>
        <p className="tagline">
          Building scalable systems and intelligent solutions that transform businesses
        </p>
        <div className="professional-summary">
          <p>
            {professionalSummary}
          </p>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <FaLocationArrow className="info-icon" />
            <span>Lagos, Nigeria</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>sawdickagboke@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>09050192887</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="cta-buttons"
        >
          <a href="/about" className="cta-button primary">
            About Me
          </a>
          <a href="/projects" className="cta-button secondary">
            My Work
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
