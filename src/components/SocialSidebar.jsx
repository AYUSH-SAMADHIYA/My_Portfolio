// src/components/SocialSidebar.jsx

import React from 'react';
import { Linkedin, Github, Instagram, Twitter, Mail } from 'lucide-react';

function SocialSidebar() {
  return (
    // This container is hidden on mobile (md:flex) and fixed to the left on larger screens.
    <div className="hidden md:flex flex-col top-1/2 -translate-y-1/2 left-0 fixed z-20">
      <div className="bg-white p-3 rounded-r-lg shadow-lg border-t border-r border-b border-gray-200">
        <ul className="flex flex-col gap-6">
          <li>
            <a href="https://www.linkedin.com/in/gajneshsharma/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/AYUSH-SAMADHIYA" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Github size={24} />
            </a>
          </li>
           <li>
            <a href="https://x.com/SamadhiyaAyush" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gajnesh18/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </li>
           <li>
            <a href="mailto:gajneshsharma242@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialSidebar;
