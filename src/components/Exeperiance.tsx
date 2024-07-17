import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    yearRange: '2020 - 2021',
    title: 'Covid-19 Awareness',
    description: 'Worked on developing web-sites using HTML, CSS and PHP as a backend.',
    image: 'https://th.bing.com/th/id/R.b1ff446f1a3f86ad14a6b8a4604a9d0f?rik=qArBCP%2fEnZMN1Q&pid=ImgRaw&r=0',
    purpose: "School Project"
  },
  {
    yearRange: '2018 - 2020',
    title: 'Frontend Developer',
    description: 'Focused on creating responsive user interfaces with React and Tailwind CSS.',
    image: 'https://via.placeholder.com/150',
    purpose: "School Project"

  },

];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const ExperienceItem = ({ experience }) =>  (
  <motion.div 
    className="flex items-center space-x-4 p-4 border-b border-gray-300 hover:scale-105 hover:shadow-lg transition-transform duration-300"
    variants={itemVariants}
    whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
  >
    <motion.img 
      src={experience.image} 
      alt={experience.title} 
      className="w-16 h-16 rounded-full" 
      whileHover={{ rotate: 360, transition: { duration: 1 } }}
    />
    <div>
      <h3 className="text-xl font-bold">{experience.yearRange}</h3>
      <p className="text-lg">{experience.title}</p>
      <p className="text-gray-600">{experience.description}</p>
    </div>
  </motion.div>
);

const ExperienceTimeline = () => (
  <motion.div 
    className="max-w-2xl mx-auto p-4"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </div>
  </motion.div>
);

export default ExperienceTimeline;
