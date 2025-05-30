import React from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiShield, FiLock } from 'react-icons/fi';

const DistinctiveDesign = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Distinctive by <span className="gradient-text">design</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our platform is built from the ground up with quantum resistance in mind, ensuring your data remains secure even against the most advanced computational threats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card glow-effect"
          >
            <div className="bg-indigo-600/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <FiBox className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modular design</h3>
            <p className="text-gray-400">
              Flexible components that can be integrated into your existing infrastructure without disruption.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card glow-effect"
          >
            <div className="bg-indigo-600/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <FiShield className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Future-proof</h3>
            <p className="text-gray-400">
              Built to withstand both current and future computational threats, including quantum computing advances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="card glow-effect"
          >
            <div className="bg-indigo-600/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <FiLock className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Zero-knowledge</h3>
            <p className="text-gray-400">
              Our architecture ensures that only you have access to your data, with zero-knowledge proofs for maximum privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DistinctiveDesign;
