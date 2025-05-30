import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EcosystemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Image
              src="/images/ecosystem_diagram.png"
              alt="QRS Ecosystem Diagram"
              width={800}
              height={600}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
