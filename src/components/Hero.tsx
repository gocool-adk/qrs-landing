import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          The <span className="gradient-text">ecosystem</span> of the future
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Secure and quantum-safe solutions
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-3"
        >
          Schedule a Demo
        </motion.button>
        
        <div className="mt-16 md:mt-24 relative">
          <p className="text-sm text-gray-400 mb-4">Our Quantum-resistant features</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <motion.div 
                className="w-64 h-64 rounded-full bg-indigo-900/20 animate-pulse-glow"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="card glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">Highest security</h3>
                <p className="text-gray-400 text-sm">
                  Our solution provides the highest level of security against quantum computing threats
                </p>
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="card glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">Quantum-safe</h3>
                <p className="text-gray-400 text-sm">
                  Designed to withstand attacks from both classical and quantum computers
                </p>
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="card glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">Enterprise solution</h3>
                <p className="text-gray-400 text-sm">
                  Scalable for organizations of all sizes with seamless integration
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
