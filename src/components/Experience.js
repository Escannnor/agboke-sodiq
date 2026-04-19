import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer – Backend / Full Stack / AI Agents / Blockchain',
      company: 'Age of AI (renamed Sumeru Tech)',
      location: 'Remote (India & Dubai)',
      period: 'Feb 2025 – Jan 2026',
      achievements: [
        'Built backend and full-stack solutions with Rust, Solidity, and Python.',
        'Developed AI agents for automation and intelligent workflows.',
        'Engineered blockchain apps and smart contracts with Solidity and Web3.',
        'Delivered scalable, secure systems in remote global teams.',
      ],
      tech: ['Rust', 'Solidity', 'Python', 'Web3', 'AI agents'],
    },
    {
      title: 'Backend Developer Intern',
      company: 'Digital Fortress ICT',
      location: 'Lagos, Nigeria',
      period: 'May 2023 – Aug 2024',
      achievements: [
        'Designed microservices with FastAPI, boosting scalability.',
        'Integrated AI tools for backend optimization and automation.',
      ],
      tech: ['FastAPI', 'Microservices', 'AI'],
    },
    {
      title: 'Backend Developer / Data Analyst',
      company: 'Edgevarsity Nigeria',
      location: 'Lagos, Nigeria',
      period: 'Jan 2022 – Feb 2023',
      achievements: [
        'Automated pipelines with Python (pandas, NumPy), cutting processing time 30%.',
        'Built scalable backend services for real-time analytics and visualization.',
        'Integrated APIs for financial and business intelligence solutions.',
      ],
      tech: ['Python', 'pandas', 'NumPy', 'APIs'],
    },
    {
      title: 'Backend Developer',
      company: 'TechLink Solutions',
      location: 'Lagos, Nigeria',
      period: 'Mar 2021 – Jan 2022',
      achievements: [
        'Optimized REST APIs with Django, reducing response times 25%.',
        'Implemented secure authentication (OAuth2, JWT).',
      ],
      tech: ['Django', 'OAuth2', 'JWT', 'REST'],
    },
    {
      title: 'Systems Engineer',
      company: "Lagos State Governor's Office",
      location: 'Lagos, Nigeria',
      period: '',
      achievements: [
        'Led system upgrades, reducing downtime 40%.',
        'Conducted security audits and monitoring solutions.',
      ],
      tech: ['Systems', 'Security', 'Monitoring'],
    },
  ];

  return (
    <div className="experience">
      <div className="navbar-spacer" />
      <h1>Experience</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="timeline"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + exp.title}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="experience-item"
          >
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="location">{exp.location}</p>
            {exp.period ? <p className="period">{exp.period}</p> : null}
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
