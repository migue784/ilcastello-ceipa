import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  const hidden = {
    opacity: 0,
    ...directions[direction]
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom slow ease
      delay: delay,
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
