// src/components/Education.jsx
// This component displays education history with a minimal design.

import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        degree: "BE in Artificial Intelligence and Data Science",
        institution: "MBM University, Jodhpur",
        duration: "2022 - 2026",
        details: "CGPA : 8.3/10"
    },
    {
        degree: "Senior Secondary (Class XII)",
        institution: "Shri Pragya Public School",
        duration: "2020",
        details: "Passed with 83.2% from RBSE Board"
    },
    {
        degree: "Secondary (Class X)",
        institution: "Keshav International School",
        duration: "2018",
        details: "Passed with 84.3% from RBSE Board"
    }
]

function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="text-lg text-gray-600"></p>
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
        </div>
        <div className="border-l-2 border-gray-200 pl-10 space-y-12 relative">
            {education.map((edu, index) => (
                <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[49px] top-1 w-8 h-8 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center z-10">
                       <GraduationCap className="w-4 h-4 text-blue-500"/>
                    </div>
                    
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-slate-800">{edu.degree}</h3>
                        <p className="text-lg font-medium text-slate-600 mt-1">{edu.institution}</p>
                        <p className="text-md text-gray-600 mt-3">{edu.details}</p>
                        <p className="text-sm text-gray-500 mt-3">{edu.duration}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
