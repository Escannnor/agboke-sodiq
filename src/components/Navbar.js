import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          AGBOKE SODIQ
        </Link>
        <div className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/experience" onClick={toggleMenu}>Experience</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
