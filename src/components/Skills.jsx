// src/components/Skills.jsx
// This component displays the tech stack and skills with an updated design.

import React from 'react';
import { Code2, BrainCircuit, ScanEye, Server, BarChart3, Wrench } from 'lucide-react';

// Updated skills data based on your list
const skillsData = {
  'Programming Languages': ["C++", "Python", "C", "SQL", "JavaScript"],
  'AI/ML': ["Model Deployment", "Hyperparameter Tuning", "Neural Networks", "Deep Learning", "NLP Techniques"],
  'Computer Vision': ["OpenCV", "Image Processing"],
  'Web Development': ["Flask", "Django", "HTML", "CSS", "Node.js", "React.js"],
  'Data Science': ["Data Analysis", "Data Visualization", "NumPy", "Pandas", "Matplotlib"],
  'Tools and Platforms': ["Git", "GitHub", "Linux", "Redux"],
};

// New icons for the updated categories
const skillIcons = {
    'Programming Languages': <Code2 className="w-10 h-10 text-blue-600" />,
    'AI/ML': <BrainCircuit className="w-10 h-10 text-blue-600" />,
    'Computer Vision': <ScanEye className="w-10 h-10 text-blue-600" />,
    'Web Development': <Server className="w-10 h-10 text-blue-600" />,
    'Data Science': <BarChart3 className="w-10 h-10 text-blue-600" />,
    'Tools and Platforms': <Wrench className="w-10 h-10 text-blue-600" />,
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="text-lg text-gray-600"></p>
            <h2 className="text-4xl font-bold text-slate-900">Professional Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div 
              key={category} 
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center mb-6">
                {skillIcons[category]}
                <h3 className="text-2xl font-bold text-slate-800 mt-4">{category}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
