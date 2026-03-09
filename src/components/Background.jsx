import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Animated Glow Orbs — CSS animation only, no scroll hooks */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 40, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-5%] left-[-5%] w-[55%] h-[55%] bg-primary/10 blur-[130px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-5%] right-[-5%] w-[55%] h-[55%] bg-secondary/10 blur-[130px] rounded-full"
      />
    </div>
  );
};

export default Background;
