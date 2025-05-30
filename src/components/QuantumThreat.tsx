import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const QuantumThreat = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/quantum_threat.png"
              alt="Quantum Computing Threat Visualization"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              The <span className="gradient-text">Quantum Threat</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Quantum computers are evolving rapidly, and with them comes a significant threat to current encryption standards. When quantum computers reach sufficient power, they'll be able to break most encryption used today.
            </p>
            <p className="text-gray-300">
              This isn't a distant future concern—it's a present reality that requires immediate action to protect your most valuable digital assets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuantumThreat;
