import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "TechLink Solutions",
      location: "Lagos, Nigeria",
      period: "Mar 2021 – Jan 2022",
      achievements: [
        "Developed and optimized RESTful APIs using Django, reducing API response times by 25%",
        "Designed and implemented secure authentication systems with OAuth2 and JWT",
        "Improved database query efficiency, leading to better system performance"
      ],
      tech: ["Django", "OAuth2", "JWT", "RESTful APIs"]
    },
    {
      title: "Backend Developer / Data Analyst",
      company: "Edgevarsity Nigeria",
      location: "Lagos, Nigeria",
      period: "Jan 2022 – Feb 2023",
      achievements: [
        "Automated data pipelines using Python (pandas, NumPy), reducing processing time by 30%",
        "Built scalable backend services for real-time analytics and data visualization",
        "Integrated third-party APIs for financial and business intelligence solutions"
      ],
      tech: ["Python", "pandas", "NumPy", "API Integration"]
    },
    {
      title: "Backend Developer Intern",
      company: "Digital Fortress ICT",
      location: "Lagos, Nigeria",
      period: "May 2023 – Aug 2024",
      achievements: [
        "Designed a microservices architecture with FastAPI, increasing system scalability",
        "Integrated AI-powered tools for backend optimization and automation",
        "Developed scripts for automating data workflows and improving efficiency"
      ],
      tech: ["FastAPI", "Microservices", "AI Automation"]
    },
    {
      title: "Systems Engineer",
      company: "Lagos State Governor’s Office",
      location: "Lagos, Nigeria",
      period: "Current",
      achievements: [
        "Led system upgrades, reducing downtime by 40%",
        "Conducted security audits and implemented monitoring solutions"
      ],
      tech: ["System Administration", "Security", "Monitoring"]
    }
  ];

  return (
    <div className="experience">
      <h1>Experience</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="timeline"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="experience-item"
          >
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="location">{exp.location}</p>
            <p className="period">{exp.period}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            <ul className="tech-stack">
              {exp.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
