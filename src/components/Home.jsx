// src/components/Home.jsx
// The hero section with a new two-column layout and light theme.

import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import myimg from './activities/Adobe Express - file.png'
import resumee from './activities/Gajnesh_Sharma_Resume_lastupdated.pdf'

function Home() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Details */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-lg text-gray-600 mb-2">Hello, I'm</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-3">Gajnesh Sharma</h1>
          <p className="text-xl lg:text-2xl text-blue-600 font-semibold mb-6">Software Developer & AI Enthusiast</p>
          <p className="max-w-xl text-gray-600 mb-8 mx-auto md:mx-0">
            I’m 4th-year student pursuing a degree in Artificial Intelligence and Data Science. Proficient in multiple programming languages and experienced in machine learning, computer vision, and web development.
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mb-8">
            <a href="https://github.com/AYUSH-SAMADHIYA"target='_blank' className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/gajneshsharma/"target='_blank' className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Linkedin size={28} />
            </a>
            <a href="https://x.com/SamadhiyaAyush" target='_blank' className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Twitter size={28} />
            </a>
          </div>
          <a 
            href={resumee}
            target="_blank" 
            download="Gajnesh-Sharma-Resume.pdf" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Download CV <Download className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Right Column: Image with layered pop-out effect */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          {/* The circular container that acts as a mask */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-amber-100 rounded-full shadow-lg">
             <div className="relative w-full h-full rounded-full overflow-hidden">
                <img 
                  src= {myimg} 
                  alt="Gajnesh Sharma" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[110%] object-cover"
                />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
