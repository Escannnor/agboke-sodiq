import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          AGBOKE SODIQ
        </Link>
        <div className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/experience" onClick={closeMenu}>Experience</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/resume" onClick={closeMenu}>Resume</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
        <div className="nav-social-links">
          <a href="https://www.linkedin.com/in/sodiq-agboke-397117306/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Escannnor" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
