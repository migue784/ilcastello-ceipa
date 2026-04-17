import React from 'react';
import { motion } from 'framer-motion';

const FloatingDecorations = () => {
  // Tres curvas elegantes (cubic beziers) que simulan espaguetis finos o trazos premium
  const paths = [
    {
      id: 1,
      d: "M -100,500 C 300,100 600,900 1200,300",
      color: "var(--color-wheat)",
      delay: 0,
      duration: 20
    },
    {
      id: 2,
      d: "M -200,200 C 400,700 800,100 1300,600",
      color: "var(--color-tomato-light)",
      delay: 5,
      duration: 25
    },
    {
      id: 3,
      d: "M -100,800 C 300,300 700,800 1100,200",
      color: "var(--color-basil)",
      delay: 2,
      duration: 22
    }
  ];

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Contenedor SVG que ocupa todo el hero */}
      <svg width="100%" height="100%" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0 }}>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            fill="transparent"
            stroke={path.color}
            strokeWidth="3"
            strokeLinecap="round"
            style={{ opacity: 0.15 }}
            initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              pathOffset: [1, 0, -1, -1],
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay
            }}
          />
        ))}
      </svg>
      
      {/* Añadimos un par de espaguetis cruzados que "nadan" en el fondo lentamente */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }}>
        <motion.path
          d="M 100,0 Q 500,500 100,1000"
          fill="transparent"
          stroke="var(--color-wheat)"
          strokeWidth="2"
          animate={{
            d: ["M 100,0 Q 500,500 100,1000", "M 100,0 Q 200,500 100,1000", "M 100,0 Q 500,500 100,1000"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 900,0 Q 400,500 900,1000"
          fill="transparent"
          stroke="var(--color-basil)"
          strokeWidth="2"
          animate={{
            d: ["M 900,0 Q 400,500 900,1000", "M 900,0 Q 700,500 900,1000", "M 900,0 Q 400,500 900,1000"]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default FloatingDecorations;
