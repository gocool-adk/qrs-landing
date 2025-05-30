import React from 'react';
import { motion } from 'framer-motion';

const QRSInPractice = () => {
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
            <span className="gradient-text">QRS</span> in practice
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our quantum-resistant security platform adapts to your specific needs, providing comprehensive protection across your entire digital ecosystem.
          </p>
        </motion.div>

        <div className="relative py-12">
          {/* Central connecting lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600 transform -translate-x-1/2"></div>
          
          {/* Practice items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
            {/* Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:text-right md:pr-12 relative"
            >
              <div className="absolute right-0 top-0 md:right-0 md:left-auto transform translate-x-1/2 -translate-y-1/2 md:translate-x-6 md:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preparation</h3>
              <p className="text-gray-400">We analyze your current security posture and identify vulnerabilities.</p>
            </motion.div>
            
            {/* Empty space for layout */}
            <div className="hidden md:block"></div>
            
            {/* Item 2 */}
            <div className="hidden md:block"></div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:pl-12 relative"
            >
              <div className="absolute left-0 top-0 md:left-0 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-6 md:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-400">Seamless integration of our quantum-resistant solutions into your existing systems.</p>
            </motion.div>
            
            {/* Item 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:text-right md:pr-12 relative"
            >
              <div className="absolute right-0 top-0 md:right-0 md:left-auto transform translate-x-1/2 -translate-y-1/2 md:translate-x-6 md:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-400">Continuous protection against both classical and quantum threats.</p>
            </motion.div>
            
            {/* Empty space for layout */}
            <div className="hidden md:block"></div>
            
            {/* Item 4 */}
            <div className="hidden md:block"></div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:pl-12 relative"
            >
              <div className="absolute left-0 top-0 md:left-0 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-6 md:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing protection</h3>
              <p className="text-gray-400">Regular updates and monitoring to adapt to evolving quantum computing threats.</p>
            </motion.div>
            
            {/* Item 5 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:text-right md:pr-12 relative"
            >
              <div className="absolute right-0 top-0 md:right-0 md:left-auto transform translate-x-1/2 -translate-y-1/2 md:translate-x-6 md:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">5</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Future-proof</h3>
              <p className="text-gray-400">Stay ahead of emerging threats with our forward-looking security architecture.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSInPractice;
