import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI Agent Framework',
    description: 'Intelligent agents for enterprise automation.',
    technologies: ['Python', 'AI', 'Automation'],
    githubLink: 'https://github.com/Escannnor',
    achievements: [
      'Agent workflows for business process automation',
      'Integration with APIs and external services',
      'Modular design for extensible agent behavior',
    ],
  },
  {
    id: 2,
    title: 'Blockchain Smart Contracts',
    description: 'Solidity-based decentralized apps and on-chain logic.',
    technologies: ['Solidity', 'Web3', 'Smart Contracts'],
    githubLink: 'https://github.com/Escannnor/pumpfun-solana-smart-contract',
    achievements: [
      'Contract design, deployment, and testing',
      'Secure patterns for token and protocol logic',
      'Integration with wallets and devnets',
    ],
  },
  {
    id: 3,
    title: 'Rust Microservices',
    description: 'High-performance backend services built with Rust.',
    technologies: ['Rust', 'APIs', 'Performance'],
    githubLink: 'https://github.com/Escannnor',
    achievements: [
      'Low-latency service boundaries',
      'Scalable request handling',
      'Production-minded error handling and observability',
    ],
  },
  {
    id: 4,
    title: 'Cloud Deployments',
    description: 'CI/CD pipelines with Docker and Kubernetes.',
    technologies: ['Docker', 'Kubernetes', 'CI/CD'],
    githubLink: 'https://github.com/Escannnor?tab=repositories',
    achievements: [
      'Containerized builds and releases',
      'Repeatable deployment workflows',
      'Cloud-ready service packaging',
    ],
  },
  {
    id: 5,
    title: 'AI Data Analyst Software',
    description: 'Real-time data visualization with Flask and pandas.',
    technologies: ['Flask', 'pandas', 'Python'],
    githubLink: 'https://github.com/Escannnor/DATA-HIVE',
    achievements: [
      'Real-time data visualization with interactive charts',
      'Automated data processing and analysis pipelines',
      'Integration with multiple data sources',
    ],
  },
  {
    id: 6,
    title: 'Crypto Tracker',
    description: 'AI-powered insights for cryptocurrency prices.',
    technologies: ['Python', 'AI', 'Blockchain'],
    githubLink: 'https://github.com/Escannnor/Crypto_tracker',
    achievements: [
      'Real-time price tracking for multiple cryptocurrencies',
      'AI-powered market trend analysis',
      'Customizable alerts and notifications',
    ],
  },
  {
    id: 7,
    title: 'Gemini AI Chatbot',
    description: 'Automated user interactions with Gemini.',
    technologies: ['AI', 'Chatbot', 'API Integration'],
    githubLink: 'https://github.com/Escannnor/Gemini-ChatBot',
    achievements: [
      'Natural language processing capabilities',
      'Context-aware conversation handling',
      'Multi-platform integration',
    ],
  },
  {
    id: 8,
    title: 'Solana Devnet Token',
    description: 'Cryptocurrency deployed on Solana with Rust.',
    technologies: ['Solana', 'Rust', 'Smart Contracts', 'Web3.js'],
    githubLink: 'https://github.com/Escannnor/pumpfun-solana-smart-contract',
    achievements: [
      'Smart contract development and deployment',
      'Tokenomics design and implementation',
      'Security-focused testing on devnet',
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="navbar-spacer" />
      <h2>Projects</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-grid"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="project-card"
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p>{project.description}</p>
            <div className="achievements">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <FaCheck className="achievement-icon" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project"
              >
                <FaGithub className="project-github-icon" aria-hidden />
                <span className="view-project-text">View on GitHub</span>
                <span className="view-project-icon">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
