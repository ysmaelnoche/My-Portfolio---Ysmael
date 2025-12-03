'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Trophy } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'IT Specialist – Databases',
    issuer: 'Certiport',
    date: '2023',
    image: null, // PDF file
    credentialUrl: '/projects/Certiport-cert.pdf',
  },
  {
    id: 2,
    title: 'Cobot System Integration Training',
    issuer: 'Hytec Power Inc. & Doosan S-net',
    date: '2024',
    image: '/projects/Doosan-cert.jpg', // Image file
    credentialUrl: '/projects/Doosan-cert.jpg',
  },
  {
    id: 3,
    title: 'Certificate of Recognition',
    issuer: 'Computer Programming 1 – Java',
    date: 'A.Y. 2022-2023',
    image: null, // PDF file
    credentialUrl: '/projects/Cert-of-recog.pdf',
  },
];

const achievements = [
  {
    icon: Award,
    title: 'With Honors',
    description: 'Junior High School & Senior High School',
    year: '2017-2021',
  },
  {
    icon: Trophy,
    title: "Dean's List",
    description: 'Academic Excellence Recognition',
    year: 'A.Y. 2024-2025',
  },
  {
    icon: Trophy,
    title: 'Quiz Bee Champion',
    description: 'CCS Week Competition',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Deportment Award',
    description: 'Outstanding Conduct and Discipline',
    year: 'A.Y. 2024-2025',
  },
  {
    icon: Trophy,
    title: '3rd Place — Digital Circuit Competition',
    description: 'CCS Week Competition',
    year: '2023',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-container bg-white dark:bg-gray-900 transition-colors duration-500 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
          Certificates & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Professional certifications and notable accomplishments
        </p>

        {/* Certificates */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 dark:text-white">
            <Award className="text-blue-600 dark:text-blue-400" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03, rotate: -1 }}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center text-white overflow-hidden">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Award size={64} />
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    {cert.date}
                  </div>
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 5, rotate: 3 }}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    View Credential
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 dark:text-white">
            <Trophy className="text-blue-600 dark:text-blue-400" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-xl shadow-lg text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <achievement.icon size={120} />
                </div>
                <div className="relative z-10">
                  <achievement.icon size={32} className="mb-4" />
                  <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                  <p className="text-blue-100 mb-3">{achievement.description}</p>
                  <p className="text-sm font-semibold">{achievement.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
