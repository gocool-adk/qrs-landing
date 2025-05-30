import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SimpleSolution = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            One simple solution to keep your most<br />
            valuable assets <span className="gradient-text">quantum safe</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            QRS provides a comprehensive platform that integrates seamlessly with your existing infrastructure, 
            ensuring quantum-resistant security without disrupting your operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/product_showcase.png"
            alt="QRS Product Interface"
            width={800}
            height={500}
            className="rounded-lg shadow-2xl border border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleSolution;
