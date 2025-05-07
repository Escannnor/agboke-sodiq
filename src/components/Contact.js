import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-content"
      >
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Let's discuss how I can help you with your next project!</p>
          <div className="info-item">
            <FaEnvelope />
            <span>agboke.sodiq@example.com</span>
          </div>
          <div className="info-item">
            <FaLinkedin />
            <span><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></span>
          </div>
          <div className="info-item">
            <FaGithub />
            <span><a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub Profile</a></span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
