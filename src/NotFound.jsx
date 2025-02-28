import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  // Animation variants for the numbered elements
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };
  
  const fourVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.5
      }
    }
  };
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </motion.div>
      
      <div className="z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center mb-8"
        >
          <motion.div variants={fourVariants} className="text-8xl md:text-9xl font-bold font-serif text-gray-800 dark:text-white">
            4
          </motion.div>
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: 360,
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="w-24 h-24 md:w-32 md:h-32 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center mx-2 md:mx-4"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 1, 0],
                transition: {
                  times: [0, 0.2, 0.8, 1],
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }
              }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-800 rounded-full"
            />
          </motion.div>
          <motion.div variants={fourVariants} className="text-8xl md:text-9xl font-bold font-serif text-gray-800 dark:text-white">
            4
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gray-800 dark:text-white"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
        >
          A gentleman never loses his way. Let us guide you back to familiar territory.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2 font-medium"
          >
            <span>Return Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
