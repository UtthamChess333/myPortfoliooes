'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skillsData: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', level: 'advanced' },
        { name: 'JavaScript', level: 'advanced' },
        { name: 'C', level: 'intermediate' },
        { name: 'Java', level: 'intermediate' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'HTML/CSS', level: 'advanced' },
        { name: 'Tailwind CSS', level: 'advanced' },
        { name: 'NodeJS', level: 'intermediate' },
        { name: 'React', level: 'advanced' },
        { name: 'Redux', level: 'intermediate' }
      ]
    },
    {
      title: 'Tools/Platforms',
      skills: [
        { name: 'SQL', level: 'intermediate' },
        { name: 'MongoDB', level: 'intermediate' },
        { name: 'Problem-Solving', level: 'advanced' },
        { name: 'Team Player', level: 'advanced' },
        { name: 'Adaptability', level: 'advanced' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.1
      } 
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      } 
    }
  };

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="My Skills" />
        
        <motion.div 
          className="skills-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {skillsData.map((category, catIndex) => (
            <motion.div 
              className="skill-category"
              key={catIndex}
              variants={categoryVariants}
            >
              <motion.h3 variants={skillItemVariants}>{category.title}</motion.h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-item"
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
                  >
                    <span>{skill.name}</span>
                    <div className={`skill-level ${skill.level}`}>
                      <span>{skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 