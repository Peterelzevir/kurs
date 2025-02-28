import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import ExchangeForm from '../components/ExchangeForm';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';

const CurrencyConverter = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <img src="/logo.svg" alt="Gentleman's Exchange" className="w-10 h-10" />
            <h1 className="text-2xl font-bold font-serif">Gentleman's Exchange</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center space-x-1"
          >
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Home
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-md shadow-md hover:shadow-lg transition">
              Contact
            </button>
          </motion.div>
        </div>
      </header>
      
      <main>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Currency Exchange <span className="text-indigo-600 dark:text-indigo-400">Redefined</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Exchange currencies with elegance and precision, as every gentleman deserves.
              </p>
            </motion.div>
            
            <ExchangeForm />
          </div>
        </section>
        
        <FeatureSection />
      </main>
      
      <Footer creator="hiyaok" />
    </div>
  );
};

export default CurrencyConverter;