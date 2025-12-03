'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Byaheng Media: A Journey through Philippine Pop Culture',
    description: 'An interactive website showcasing the rich history and evolution of Philippine pop culture through various media forms.',
    image: '/api/placeholder/600/400',
    video: null,
    tags: ['Web Development', 'Cultural Heritage', 'Interactive Design'],
    liveUrl: 'https://popculture-theta.vercel.app/',
    githubUrl: 'https://github.com/ysmaelnoche',
  },
  {
    id: 2,
    title: 'Workflow Process Management System with Gemini AI',
    description: 'Streamlining workflow processes for Lyceum of Alabang Inc. with integrated Gemini AI for intelligent automation and optimization. REPOSITORY IS PRIVATE',
    image: '/api/placeholder/600/400',
    video: null,
    tags: ['VB.Net', 'AI Integration', 'Process Management', 'Database', 'Laravel'],
    liveUrl: 'https://workflowpms.dev/',
    githubUrl: 'https://github.com/ysmaelnoche/Workflow_Management__System',
  },
  {
    id: 3,
    title: 'Cuki-Habit: E-commerce Website',
    description: 'Full-featured e-commerce platform with Shopify integration, offering seamless shopping experience and inventory management. Currently under development.',
    image: '/api/placeholder/600/400',
    video: null,
    tags: ['Shopify', 'E-commerce', 'PHP', 'JavaScript', 'HTML/CSS', 'Next.js'],
    liveUrl: 'https://github.com/ysmaelnoche/cuki-habit',
    githubUrl: 'https://github.com/ysmaelnoche/cuki-habit',
  },
  {
    id: 4,
    title: 'POS System for Buko Express',
    description: 'Local Point of Sale system with comprehensive inventory management, designed specifically for Buko Express operations. (Repository not backed up)',
    image: '/api/placeholder/600/400',
    video: null,
    tags: ['C#', 'POS System', 'Inventory Management', 'Database'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 5,
    title: 'Asset Management System',
    description: 'Contributed to the development of a comprehensive asset tracking and management system for organizational efficiency. (Repository not backed up)',
    image: '/api/placeholder/600/400',
    video: null,
    tags: ['System Development', 'Database Management', 'Team Project'],
    liveUrl: null,
    githubUrl: null,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Showcasing my recent work and creative solutions
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 0.5, y: -8 }}
              onHoverStart={() => setActiveProject(project.id)}
              onHoverEnd={() => setActiveProject(null)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden group">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <pattern id={`pattern-${project.id}`} patternUnits="userSpaceOnUse" width="40" height="40">
                      <circle cx="20" cy="20" r="2" fill="white" opacity="0.5"/>
                      <circle cx="0" cy="0" r="2" fill="white" opacity="0.3"/>
                      <circle cx="40" cy="40" r="2" fill="white" opacity="0.3"/>
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
                  </svg>
                </div>
                
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 transform rotate-45 translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 transform rotate-45 -translate-x-16 translate-y-16"></div>
                
                {/* Placeholder for project image/video */}
                <div className="w-full h-full flex items-center justify-center text-white relative z-10">
                  <div className="text-center">
                    <Play size={48} className="mx-auto mb-2" />
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                {(project.liveUrl || project.githubUrl) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: activeProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 z-20"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                      >
                        <Github size={24} />
                      </motion.a>
                    )}
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
