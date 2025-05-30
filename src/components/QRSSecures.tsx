import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiDatabase } from 'react-icons/fi';

const QRSSecures = () => {
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
            <span className="gradient-text">QRS</span> secures
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our quantum-resistant security solutions protect your most critical digital assets across multiple domains.
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
              <FiShield className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure communications</h3>
            <p className="text-gray-400">
              End-to-end encrypted messaging and file sharing that's resistant to quantum computing attacks.
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
              <FiLock className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Password & identity safety</h3>
            <p className="text-gray-400">
              Advanced authentication systems that remain secure even against quantum decryption attempts.
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
              <FiDatabase className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data & storage</h3>
            <p className="text-gray-400">
              Quantum-resistant encryption for your most sensitive data, whether at rest or in transit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QRSSecures;
