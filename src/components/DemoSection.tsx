import React from 'react';
import { motion } from 'framer-motion';

const DemoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Interested in a demo or want to learn more?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Schedule a personalized demonstration with our team to see how QRS can protect your organization's most valuable digital assets.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-3"
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
