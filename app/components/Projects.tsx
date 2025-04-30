'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
}

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projectsData: Project[] = [
    {
      title: 'Food Delivery Website',
      date: '2024',
      description: 'Developed a food delivery website using Swiggy API to fetch restaurant and menu data. Implemented features like top-rated restaurants (4.0+), search box, online status, and a cart for adding/removing items. Built multiple pages including About, Contact, and Grocery for better navigation. Applied React & API integration to create a dynamic and interactive user experience.',
      image: '/UtthamD/Screenshot 2025-04-30 112511.png',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Swiggy API'],
      githubLink: 'https://github.com/UtthamChess333'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      } 
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 50,
        damping: 20
      } 
    }
  };

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="My Projects" />
        
        <motion.div 
          className="projects-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-img">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
              
              <div className="project-details">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={project.githubLink} 
                      target="_blank" 
                      className="btn btn-small"
                    >
                      View Code
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 