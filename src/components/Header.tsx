import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/qrs_logo.png" 
              alt="QRS Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <span className="font-bold text-xl">QRS</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="#solutions" className="text-gray-300 hover:text-white transition-colors">
            Our Solutions
          </Link>
          <Link href="#technology" className="text-gray-300 hover:text-white transition-colors">
            Technology
          </Link>
          <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
            Team
          </Link>
        </nav>
        
        <div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Contact Us
          </motion.button>
        </div>
        
        {/* Mobile menu button - would implement full mobile menu with state in a real project */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
