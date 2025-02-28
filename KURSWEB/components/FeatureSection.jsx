import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Global Currency Support",
    description: "Access exchange rates for all major world currencies, updated in real-time."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Real-Time Rates",
    description: "Our system connects to reliable financial APIs to ensure you get the most accurate rates."
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Secure & Private",
    description: "Your financial information stays private. No tracking, no third-party access."
  }
];

const testimonials = [
  {
    content: "This elegant currency converter has become an essential tool for my international business dealings. Sophisticated yet simple.",
    author: "James Worthington",
    title: "Finance Director"
  },
  {
    content: "The most refined currency conversion experience I've encountered. Perfect for the discerning professional.",
    author: "Elizabeth Kensington",
    title: "International Investor"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gray-800 dark:text-white">
            Currency Exchange for the Discerning Gentleman
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Providing elegant solutions for your currency conversion needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-gray-800 dark:text-white">
              Why Gentleman's Exchange?
            </h3>
            <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              "Accurate exchange rates",
              "Real-time market data",
              "Support for 170+ currencies",
              "User-friendly interface",
              "Elegant design",
              "Mobile responsive",
              "Fast conversions",
              "Completely free to use"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
                  className="space-y-3"
                >
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;