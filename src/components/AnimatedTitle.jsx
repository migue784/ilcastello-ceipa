import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedTitle = ({ text, className = "section-gigante", style = {} }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Dividimos el texto en palabras para iluminarlas secuencialmente
  const words = text.split(" ");

  return (
    <h2 ref={containerRef} className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // La opacidad va de 0.2 a 1 conforme el scroll avanza sobre cada palabra
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <motion.span key={i} style={{ opacity }}>
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
};

export default AnimatedTitle;
