import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the main screen container
const screenVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Animation variants for the text
const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function WelcomeScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex justify-center items-center z-50"
      variants={screenVariants}
      initial="initial"
      exit="exit"
    >
      <motion.h1
        className="text-2xl sm:text-2xl md:text-4xl font-semibold text-black"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Hi There!
      </motion.h1>
    </motion.div>
  );
}

export default WelcomeScreen;