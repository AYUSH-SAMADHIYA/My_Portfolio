// src/components/Activities.jsx
// This component highlights extracurricular activities with a new two-column layout and image slideshow.

import React, { useState, useEffect } from 'react';
import { Megaphone, HeartPulse, Users, Puzzle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import four from './activities/4.jpg'
import five from './activities/5.jpg'
import six from './activities/6.jpg'



// --- User-configurable data ---

// 1. Update your activities here
const activities = [
    {
        icon: <Megaphone className="w-7 h-7 text-blue-600" />,
        title: "PR & Event Management",
        description: "As the Logistics and Management Coordinator for the 'ENCARTA' college fest, I led a team of volunteers and managed all operational details to ensure a successful event."
    },
    {
        icon: <Users className="w-7 h-7 text-blue-600" />,
        title: "Social Welfare - Cities for Youth",
        description: "As an active member of this social welfare organization, I contributed to female safety and security initiatives by conducting surveys and spreading awareness among women."
    },
    {
        icon: <Puzzle className="w-7 h-7 text-blue-600" />,
        title: "Yoga & Chess",
        description: "I am an active member of the college chess club, represented my department in 'Khelo MBM', and participated in yoga events in college, with a keen interest in strategic games and mental well-being."
    },
    {
        icon: <HeartPulse className="w-7 h-7 text-blue-600" />,
        title: "Physical Fitness",
        description: "I am passionate about physical fitness, engaging in daily gym sessions and playing cricket and volleyball to stay active."
    }
];

// 2. Add the paths to your images here
const activityImages = [
    six,
    four, 
   five, 
    // './src/assets/activities/1.jpg'
];

// --- Component Logic ---

function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? activityImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === activityImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
        clearInterval(timer); // Cleanup interval on component unmount
    };
  }, [currentIndex]);


  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Extracurricular Activities</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Activities List */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 h-full">
                <div className="space-y-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-5">
                            <div className="flex-shrink-0 mt-1">
                                {activity.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{activity.title}</h3>
                                <p className="text-gray-600">{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Image Slideshow */}
            <div className="w-full h-[450px] m-auto relative group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={activityImages[currentIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full rounded-lg object-cover shadow-xl border"
                    />
                </AnimatePresence>

                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <ChevronLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <ChevronRight onClick={nextSlide} size={30} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
