'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20 
      } 
    }
  };

  const Education = () => {
    const eduData = [
      {
        title: 'Bachelor of Technology',
        place: 'Lovely Professional University, Punjab',
        year: 'Since September 2022',
        description: 'Computer Science and Engineering - CGPA: 6.61'
      },
      {
        title: 'Intermediate (12th)',
        place: 'Sri Medha New Science Junior College, Kodad',
        year: 'April 2020 - March 2022',
        description: 'Science - Percentage: 64%'
      },
      {
        title: 'High School (10th)',
        place: 'Teja Talent School, Kodad',
        year: 'April 2016 - March 2020',
        description: 'Science - Percentage: 95%'
      }
    ];

    return (
      <div className="about-detail">
        <motion.h3 variants={itemVariants}>Education</motion.h3>
        <motion.ul variants={containerVariants}>
          {eduData.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <span className="detail-title">{item.title}</span>
              <span className="detail-place">{item.place}</span>
              <span className="detail-year">{item.year}</span>
              <span className="detail-description">{item.description}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  };

  const Experience = () => {
    return (
      <div className="about-detail">
        <motion.h3 variants={itemVariants}>Experience</motion.h3>
        <motion.ul variants={containerVariants}>
          <motion.li variants={itemVariants}>
            <span className="detail-title">Food Delivery Website</span>
            <span className="detail-place">Personal Project</span>
            <span className="detail-year">2024</span>
            <span className="detail-description">
              Developed a food delivery website using Swiggy API with features like restaurant search,
              menu browsing, and cart management. Built with React, Redux, and Tailwind CSS.
            </span>
          </motion.li>
          <motion.li variants={itemVariants}>
            <span className="detail-title">Contact Management System</span>
            <span className="detail-place">Personal Project</span>
            <span className="detail-year">2024</span>
            <span className="detail-description">
              Created a web application for managing contacts with features like search, categorization,
              and contact sharing. Built using Node.js and Express.js.
            </span>
          </motion.li>
        </motion.ul>
      </div>
    );
  };

  const Achievements = () => {
    const achievements = [
      "Secured Global Rank 13547 among 32k+ participants in Leetcode Weekly Contest 438 (February 2025)",
      "Selected for 64th National level Chess SGFI - Inter-district Captain and State 4th position",
      "Selected for 65th National level Chess SGFI - Inter-district Captain and State 4th position"
    ];

    return (
      <div className="about-detail">
        <motion.h3 variants={itemVariants}>Achievements</motion.h3>
        <motion.ul variants={containerVariants}>
          {achievements.map((achievement, index) => (
            <motion.li key={index} variants={itemVariants}>
              {achievement}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  };

  // About Me content subsections
  const BackgroundSubsection = () => {
    return (
      <motion.div className="about-subsection" variants={itemVariants}>
        <motion.h3 variants={itemVariants}>Background</motion.h3>
        <motion.p variants={itemVariants}>
          I&apos;m a B.Tech Computer Science student at Lovely Professional University, 
          specializing in Full-Stack Development. I focus on building scalable web applications 
          and have a strong foundation in both front-end and back-end development using modern 
          technologies like React, Node.js, and MongoDB.
        </motion.p>
      </motion.div>
    );
  };

  const PassionSubsection = () => {
    return (
      <motion.div className="about-subsection" variants={itemVariants}>
        <motion.h3 variants={itemVariants}>Passion & Interests</motion.h3>
        <motion.p variants={itemVariants}>
          My passion lies in web development and problem-solving. I enjoy creating user-friendly 
          applications and solving complex programming challenges. I am also an accomplished chess 
          player, having represented my district and state in national competitions.
        </motion.p>
      </motion.div>
    );
  };

  const GoalsSubsection = () => {
    return (
      <motion.div className="about-subsection" variants={itemVariants}>
        <motion.h3 variants={itemVariants}>Goals & Aspirations</motion.h3>
        <motion.p variants={itemVariants}>
          I am committed to continuously improving my skills in web development and software engineering.
          My goal is to create impactful web applications that solve real-world problems and provide 
          great user experiences. I aspire to become a skilled full-stack developer who can build 
          robust and scalable applications.
        </motion.p>
      </motion.div>
    );
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="About Me" />
        
        <motion.div 
          className="about-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="about-text">
            <motion.div 
              className="about-subsections"
              variants={containerVariants}
            >
              <BackgroundSubsection />
              <PassionSubsection />
              <GoalsSubsection />
            </motion.div>
            
            <motion.div className="section-divider" variants={itemVariants}>
              <div className="divider-line"></div>
              <h3>Details & Qualifications</h3>
              <div className="divider-line"></div>
            </motion.div>
            
            <motion.div 
              className="about-details"
              variants={containerVariants}
            >
              <Education />
              <Experience />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 