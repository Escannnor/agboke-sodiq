import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "DataFlow Analytics Platform",
      description: "Enterprise-grade data analysis and visualization platform. Built with React, Node.js, and PostgreSQL, featuring real-time data processing and advanced analytics capabilities.",
      tech: ["React", "Node.js", "PostgreSQL", "D3.js", "Apache Airflow"],
      link: "https://github.com/Escannnor/dataflow-analytics",
      image: "https://raw.githubusercontent.com/Escannnor/Token-metrics-mini-app/main/src/assets/screenshot.png",
      achievements: [
        "Processed and analyzed over 100 million data points daily",
        "Implemented real-time data streaming with Apache Kafka",
        "Built custom data visualization dashboards",
        "Integrated with multiple data sources including Solana blockchain"
      ]
    },
    {
      title: "SmartInsights AI Platform",
      description: "Advanced AI-powered analytics platform for business intelligence. Uses machine learning to provide predictive insights and automated decision-making.",
      tech: ["Python", "TensorFlow", "FastAPI", "Docker", "Kubernetes"],
      link: "https://github.com/Escannnor/smartinsights",
      image: "https://raw.githubusercontent.com/Escannnor/Token-metrics-mini-app/main/src/assets/screenshot.png",
      achievements: [
        "Achieved 95% accuracy in predictive analytics",
        "Processed 1TB of data per day",
        "Implemented automated ML model retraining",
        "Built scalable microservices architecture"
      ]
    },
    {
      title: "Blockchain Data Analytics",
      description: "Comprehensive blockchain analytics platform for Solana network. Provides real-time transaction analysis, smart contract monitoring, and market insights.",
      tech: ["Solana", "Rust", "React", "TypeScript", "AWS"],
      link: "https://github.com/Escannnor/blockchain-analytics",
      image: "https://raw.githubusercontent.com/Escannnor/Token-metrics-mini-app/main/src/assets/screenshot.png",
      achievements: [
        "Processed 100,000+ transactions per second",
        "Implemented real-time smart contract monitoring",
        "Built comprehensive market analysis tools",
        "Integrated with multiple blockchain networks"
      ]
    },
    {
      title: "AI-Powered E-commerce Platform",
      description: "Next-generation e-commerce platform with AI-driven product recommendations and automated pricing optimization.",
      tech: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
      link: "https://github.com/Escannnor/ai-ecommerce",
      image: "https://raw.githubusercontent.com/Escannnor/Token-metrics-mini-app/main/src/assets/screenshot.png",
      achievements: [
        "Increased conversion rates by 30%",
        "Processed 1 million+ products",
        "Implemented real-time price optimization",
        "Built scalable microservices architecture"
      ]
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-image">
              {project.image && (
                <img src={project.image} alt={project.title} />
              )}
            </div>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
