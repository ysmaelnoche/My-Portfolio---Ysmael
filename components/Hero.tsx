"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Facebook, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950 transition-colors duration-500"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="diagonalLines"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
          >
            <path d="M0,40 L40,0" stroke="#3b82f6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 rounded-full filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [50, -50, 50],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-300 rounded-full filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-100 rounded-full filter blur-3xl opacity-70"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Flourdfiel Ysmael Noche
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200"
            >
              Welcome to my <span className="gradient-text">Portfolio</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-lg"
            >
              To develop deeper practical expertise, utilize my skills
              effectively, and grow both personally and professionally. To bring
              positive impact to the organization by performing with integrity,
              initiative, and a results-driven mindset.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all text-center"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all text-center"
              >
                View Work
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/ysmaelnoche"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 shadow-md hover:shadow-xl transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/MaelPanget"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 shadow-md hover:shadow-xl transition-all"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="mailto:ysmaelnoche02@gmail.com"
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 shadow-md hover:shadow-xl transition-all"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-start md:justify-start md:-mt-16"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Decorative animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-blue-200 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-4 border-blue-300 rounded-full"
              ></motion.div>

              {/* Decorative dots */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute w-3 h-3 bg-blue-400 rounded-full"
                    style={{
                      left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                      top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>

              {/* Image container with texture */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-6 sm:inset-8 rounded-full shadow-2xl overflow-hidden relative group cursor-pointer"
              >
                <img 
                  src="/projects/my-image.png" 
                  alt="Ysmael Noche" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-blue-600 dark:text-blue-400" size={32} />
      </motion.div>
    </section>
  );
}
