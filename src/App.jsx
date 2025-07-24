
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Activities from './components/Activities';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to start the exit animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // This delay allows the text to be visible before fading out

    return () => clearTimeout(timer);
  }, []);

  return (
    <> {/* Use a fragment to wrap the components */}
      <AnimatePresence>
        {loading && <WelcomeScreen />}
      </AnimatePresence>

      <div className="bg-gray-50 text-gray-800 font-sans leading-normal tracking-normal">
        <Navbar />
        <SocialSidebar />
        <main className="pt-20">
          <Home />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Activities />
        </main>
       <footer className="bg-white text-center p-4 mt-16 border-t border-gray-200">
          <p className="text-gray-500">© 2025 Gajnesh Sharma. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
