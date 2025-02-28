import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute inset-0"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#4F46E5" strokeWidth="2" />
              <motion.path
                d="M50 5 C 60 5, 70 7, 78.3 12.3 C 86.6 17.6, 92.4 25.8, 95 35"
                stroke="#4F46E5"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 15L16 12L12 9" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 12H9" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl font-medium mb-2 text-gray-800 dark:text-white font-serif"
        >
          Gentleman's Exchange
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ 
            delay: 0.6, 
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded"
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;