'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsDark(!isDark);
      if (!isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 50);
  };

  return (
    <>
      {/* Transition overlay - Top to Bottom for Dark, Bottom to Top for Light */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ 
              y: isDark ? '-100%' : '100%'
            }}
            animate={{ 
              y: 0
            }}
            exit={{ 
              opacity: 0
            }}
            transition={{ 
              duration: 0.7, 
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              background: isDark 
                ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
                : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 50%, #e0f2fe 100%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={toggleTheme}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-slate-700 dark:to-blue-900 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center text-white"
        aria-label="Toggle dark mode"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={24} className="sm:w-7 sm:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={24} className="sm:w-7 sm:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
