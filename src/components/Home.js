import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';

const professionalSummary = "Backend Developer & AI Engineer with 2.5 years of experience in scalable web applications, AI agents, and blockchain systems. Skilled in Python, Django, FastAPI, Rust, Solidity, and Web3. Proven success in remote international collaboration (India & Dubai) with expertise in API development, cloud infrastructure, and automation.";

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
        <h2>Backend Developer & AI Engineer</h2>
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
            <a href="mailto:sawdickagboke@gmail.com">sawdickagboke@gmail.com</a>
          </div>
          <div className="info-item info-item-phones">
            <FaPhone className="info-icon" />
            <div className="phone-links">
              <a href="tel:+2349050192887">+234 905 019 2887</a>
              <a href="tel:+2349063204448">+234 906 320 4448</a>
              <a href="tel:+2348182852767">+234 818 285 2767</a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sodiq-agboke-397117306/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Escannnor" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="cta-buttons"
        >
          <Link to="/about" className="cta-button primary">
            About Me
          </Link>
          <Link to="/projects" className="cta-button secondary">
            My Work
          </Link>
          <Link to="/resume" className="cta-button secondary">
            Upload Resume
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
