import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "AI Data Analyst Software",
    description: "Built a real-time data visualization tool using Flask and pandas.",
    technologies: ["Flask", "pandas", "Python"],
    demoLink: "#",
    image: "project1.jpg",
    achievements: [
      "Real-time data visualization with interactive charts",
      "Automated data processing and analysis pipelines",
      "Integration with multiple data sources"
    ]
  },
  {
    id: 2,
    title: "Cryptocurrency Tracker",
    description: "Developed a crypto price tracker with AI-powered insights.",
    technologies: ["Python", "AI", "Blockchain"],
    demoLink: "#",
    image: "project2.jpg",
    achievements: [
      "Real-time price tracking for multiple cryptocurrencies",
      "AI-powered market trend analysis",
      "Customizable alerts and notifications"
    ]
  },
  {
    id: 3,
    title: "Gemini AI Chatbot",
    description: "Integrated Gemini AI for automated user interactions.",
    technologies: ["AI", "Chatbot", "API Integration"],
    demoLink: "#",
    image: "project3.jpg",
    achievements: [
      "Natural language processing capabilities",
      "Context-aware conversation handling",
      "Multi-platform integration"
    ]
  },
  {
    id: 4,
    title: "Solana Devnet Token",
    description: "Created and deployed a Solana-based cryptocurrency using Rust.",
    technologies: ["Solana", "Rust", "Smart Contracts", "Web3.js"],
    demoLink: "#",
    image: "project4.jpg",
    achievements: [
      "Smart contract development and deployment",
      "Tokenomics design and implementation",
      "Security audits and testing"
    ]
  },
  {
    id: 5,
    title: "me4u.me",
    description: "Engineered backend services with Laravel, Docker, and CI/CD.",
    technologies: ["Laravel", "Docker", "CI/CD"],
    demoLink: "#",
    image: "project5.jpg",
    achievements: [
      "Microservices architecture implementation",
      "Automated deployment pipelines",
      "Scalable backend infrastructure"
    ]
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
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
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="view-project">
                <span className="view-project-text">View Project</span>
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
