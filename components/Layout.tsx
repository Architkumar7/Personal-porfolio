import React, { useState, useEffect } from 'react';
import { LinkedInIcon, MailIcon } from './Icons';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm border-b border-gray-800/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-serif text-gray-100 hover:text-lime-400 transition-colors duration-300 hover:[text-shadow:0_0_8px_#a3e635]">
          AK
        </a>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black/30 border-t border-gray-800/50">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-gray-400 mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Archit Kumar. All Rights Reserved.
                </p>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/archit-kumar-2005-cainter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedInIcon className="w-6 h-6" />
                    </a>
                    <a href="mailto:Archer107kr@gmail.com" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                        <span className="sr-only">Email</span>
                        <MailIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};