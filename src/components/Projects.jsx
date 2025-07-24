// src/components/Projects.jsx
// This component displays the projects and includes a pop-up modal for details.

import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "QuoraSphere",
    cardDescription: "A platform where users can ask questions, post answers, vote, and comment for interactive discussions.",
    description: {
        paragraph: "A responsive, full-stack Q&A platform built with the MERN stack and Tailwind CSS, designed to facilitate collaborative knowledge sharing with rich media content and community moderation.",
        features: [
            "Engineered a secure RESTful API using Node.js and Express, implementing JWT-based authentication with role-based access control (User/Admin) to protect routes and manage user sessions.",
            "Developed a dynamic Q&A interface in React where users can post content with image uploads (via Multer) or URLs, and sort answers by votes or date to easily find relevant information.",
            "Constructed a comprehensive Admin Dashboard for platform moderation, empowering administrators to manage all users and content to ensure community integrity and a high-quality knowledge base.",
            "Designed a fully responsive, pixel-perfect UI with Tailwind CSS and enhanced user experience with smooth animations via Framer Motion, dark mode support, and intuitive modals."
        ]
    },
    tags: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "JWT", "Framer Motion", "Multer"],
    image: "./src/assets/portrait/3.png",
    githubUrl: "https://github.com/AYUSH-SAMADHIYA/QuoraSphere",
    modalImages: [
        "./src/assets/portrait/home.png", // Replace with your image
        "./src/assets/portrait/detail-3.png", // Replace with your image
    ]
  },
  {
    title: "Rash Driving Detector",
    cardDescription: "Detects rash driving by analyzing sensor data using machine learning to visualize driving behavior.",
    description: {
        paragraph: "An end-to-end machine learning system built with Python, TensorFlow, and Scikit-learn to analyze vehicle sensor data, classify road conditions, and detect rash driving behaviors with 93% accuracy.",
        features: [
            "Engineered a robust data preprocessing pipeline using Pandas and NumPy to clean, normalize, and extract time-series features from raw accelerometer and gyroscope sensor data, preparing it for high-performance model training.",
            "Developed and trained two core machine learning models: 1) A multi-class classification model using Scikit-learn to identify road surface types with a validated 93% test accuracy, and 2) A TensorFlow/Keras-based autoencoder for unsupervised anomaly detection in driving patterns.",
            "Designed a final detection module that synthesizes outputs from both the road classification and anomaly detection models, applying rule-based logic to accurately identify and flag specific instances of dangerous or rash driving.",
            "Built and deployed a user-friendly web application with Flask, enabling users to receive a real-time analysis with clear visualizations of road conditions and detected driving anomalies."
        ]
    },
    tags: ["Android Studio", "Python", "TensorFlow", "Keras", "scikit-learn", "Matplotlib", "NumPy", "Pandas"],
    image: "./src/assets/portrait/2.png",
    githubUrl: "https://github.com/AYUSH-SAMADHIYA/Rash-Driving-Detector",
    modalImages: [
        "./src/assets/portrait/2.png", // Replace with your image
        "./src/assets/portrait/r2.png", // Replace with your image
    ]
  },
  {
    title: "Portfolio Developer",
    cardDescription: "A web app that helps users create portfolios through AI prompts, manual input, or GitHub import.",
    description: {
        paragraph: "An intelligent web application built with Python, Flask, and OpenAI that automates professional portfolio creation using Natural Language Processing and direct GitHub integration.",
        features: [
            "Engineered the core AI functionality using OpenAI's language models and Natural Language Processing techniques to parse unstructured text prompts, accurately extracting and structuring user data like skills, experience, and project details into a portfolio format.",
            "Developed multiple data ingestion pathways for maximum user flexibility, including a novel feature to fetch and process project information directly from a user's GitHub profile via API, dramatically streamlining the content creation process.",
            "Designed a dynamic templating engine using Flask and Jinja2, allowing users to choose from 6 distinct design layouts, customize color schemes, and select various fonts, offering a highly personalized final product.",
            "Built a robust backend server using Flask to manage application state and implemented a PDF export feature that seamlessly converts the generated HTML and CSS portfolio into a high-quality, downloadable document."
        ]
    },
    tags: ["NLP", "Flask", "Python", "HTML", "CSS"],
    image: "./src/assets/portrait/prompt.png",
    githubUrl: "https://github.com/AYUSH-SAMADHIYA/Portfolio-Developer",
    modalImages: [
        "./src/assets/portrait/prompt.png", // Replace with your image
        "./src/assets/portrait/Manual.png", // Replace with your image  
    ]
  }
];

// Sub-component for the Image Preview Modal
const ImagePreviewModal = ({ imageUrl, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[60]"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className="relative"
    >
      <img src={imageUrl} alt="Project preview" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" />
      <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full p-1 text-gray-800">
        <X size={20} />
      </button>
    </motion.div>
  </motion.div>
);


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
              <p className="text-lg text-gray-600">Browse My Recent</p>
              <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 flex flex-col">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{project.cardDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                    <button onClick={() => setSelectedProject(project)} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                      View Details <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-slate-900 transition-colors duration-300">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-6xl min-h-[500px] max-h-[95vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10">
                <X size={24} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-[70%_30%] h-full">
                {/* Left side: Description */}
                <div className="p-10 md:p-12 flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2 my-4">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{selectedProject.description.paragraph}</p>
                    <ul className="list-disc list-outside pl-5 text-gray-600 space-y-2">
                        {selectedProject.description.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-6">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center py-2 px-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      View on GitHub <Github className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Right side: Images */}
                <div className="p-10 md:p-12 bg-white  border-gray-200 space-y-6" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img src={selectedProject.modalImages[0]} alt={`${selectedProject.title} screenshot 1`} className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setPreviewImage(selectedProject.modalImages[0])}/>
                    <img src={selectedProject.modalImages[1]} alt={`${selectedProject.title} screenshot 2`} className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setPreviewImage(selectedProject.modalImages[1])}/>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && <ImagePreviewModal imageUrl={previewImage} onClose={() => setPreviewImage(null)} />}
      </AnimatePresence>
    </>
  );
}

export default Projects;
