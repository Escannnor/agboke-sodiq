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
            <p>
              📞{' '}
              <a href="tel:+2349050192887">+234 905 019 2887</a>
              {' · '}
              <a href="tel:+2349063204448">+234 906 320 4448</a>
              {' · '}
              <a href="tel:+2348182852767">+234 818 285 2767</a>
            </p>
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
