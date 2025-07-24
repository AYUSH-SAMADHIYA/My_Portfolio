// src/components/Experience.jsx
// This component showcases work experience with a centered timeline design.

import React from 'react';
import { Briefcase } from 'lucide-react';

// Updated experience data
const experiences = [
  {
    role: "React Developer - Intern",
    company: "Celebal Technologies",
    duration: "Jaipur | June 2025 – Present",
    description: [
        "Spearheaded the development of several full-stack applications, including Portfolio Developer, an intelligent portfolio generation tool; a feature-rich Admin Dashboard; and a Music Streaming App prototype.",
        "Strengthened core React skills by building and testing foundational projects, solidifying understanding of state management, component lifecycle, and hooks."
        ,"Gained substantial hands-on experience working with scalable codebases and agile development practices, aligning with industry standards."
    ]   
  },
  {
    role: "AI Developer - Intern",
    company: "RoboAIHub",
    duration: "Jodhpur | June 2024 – August 2024",
    description: [
        "Played a key role in the AI team within a fast-paced startup, concentrating on real-world machine learning solutions.",
        " Led the development of Portfolio-Developer, an intelligent tool capable of generating portfolios from a user prompt, GitHub URL, or manual input—serving as the capstone project of the internship."
        ,"Successfully showcased Portfolio Developer at a public tech exhibition, effectively translating complex ML concepts into engaging demonstrations for a broad, non-technical audience."
    ]
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <p className="text-lg text-gray-600"></p>
            <h2 className="text-4xl font-bold text-slate-900">Professional Experience</h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start">
                
                {/* Left Column (Content or Spacer) */}
                <div className={index % 2 === 0 ? 'md:col-start-1' : 'hidden md:block md:col-start-1'}>
                   {index % 2 === 0 && (
                     <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-left">
                        <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.role}</h3>
                        <div className="mb-3">
                          <p className="text-lg font-semibold text-slate-700">{exp.company}</p>
                          <p className="text-base text-gray-500">{exp.duration}</p>
                        </div>
                        <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2 mt-4 text-base">
                          {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                     </div>
                   )}
                </div>

                {/* Center Column (Icon) */}
                <div className="flex justify-center md:col-start-2 my-4 md:my-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                    <Briefcase />
                  </div>
                </div>

                {/* Right Column (Content or Spacer) */}
                <div className={index % 2 !== 0 ? 'md:col-start-3' : 'hidden md:block md:col-start-3'}>
                   {index % 2 !== 0 && (
                     <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-left">
                        <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.role}</h3>
                        <div className="mb-3">
                          <p className="text-lg font-semibold text-slate-700">{exp.company}</p>
                          <p className="text-base text-gray-500">{exp.duration}</p>
                        </div>
                        <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2 mt-4 text-base">
                          {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                     </div>
                   )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
