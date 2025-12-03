'use client';

import { motion } from 'framer-motion';
import { Code, Database, Shield, Users } from 'lucide-react';

const skills = [
  { name: 'Web Development', icon: Code, description: 'PHP, JavaScript, Laravel, HTML/CSS' },
  { name: 'System Development', icon: Database, description: 'VB.Net, Database Management, Local Systems' },
  { name: 'Quality Assurance', icon: Shield, description: 'Testing, Debugging, Code Review' },
  { name: 'Collaboration', icon: Users, description: 'Git, Agile, Team Communication' },
];

export default function About() {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="triangles" patternUnits="userSpaceOnUse" width="80" height="80">
              <path d="M40,10 L70,70 L10,70 Z" fill="none" stroke="#3b82f6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto px-4">
          Passionate about creating engaging digital experiences
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex justify-center"
            >
              <div className="w-full max-w-sm h-80 sm:h-96 rounded-2xl shadow-2xl overflow-hidden relative">
                <img 
                  src="/projects/my-image2.jpg" 
                  alt="Ysmael Noche" 
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white">BSIT Student</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a 22-year-old Bachelor of Science in Information Technology student at Lyceum of Alabang, 
              passionate about web development and technology. With a strong foundation in both front-end and 
              back-end development, I enjoy creating dynamic and user-friendly web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Throughout my academic journey, I've developed expertise in various programming languages and 
              frameworks. My approach combines theoretical knowledge with practical application, allowing me 
              to build robust solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {['VB.Net', 'HTML/CSS', 'PHP', 'JavaScript', 'Laravel Framework', 'Git Version Control', 'Database Management'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-bl-full opacity-50"></div>
              
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4 relative z-10"
              >
                <skill.icon className="text-white" size={24} />
              </motion.div>
              <h4 className="text-xl font-bold mb-2 relative z-10 dark:text-white">{skill.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
