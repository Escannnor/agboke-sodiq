import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="footer-content">
          <div className="footer-info">
            <p>📍 Lagos, Nigeria</p>
            <p>📧 sawdickagboke@gmail.com</p>
            <p>📞 09050192887</p>
          </div>
          <div className="footer-links">
            <p>© {new Date().getFullYear()} AGBOKE SODIQ. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
