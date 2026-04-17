import React from 'react';
import { motion } from 'framer-motion';

const SVGPastaShapes = {
  farfalle: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6 L12 12 L4 18 Z" fill="currentColor" opacity="0.8" />
      <path d="M20 6 L12 12 L20 18 Z" fill="currentColor" opacity="0.8" />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
  ),
  ravioli: (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.6" strokeDasharray="3 3"/>
      <rect x="7" y="7" width="10" height="10" rx="4" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  penne: (
    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 20 L20 6 C21 5 21 4 20 3 L18 1 C17 0 16 0 15 1 L1 15 C0 16 0 17 1 18 L3 20 C4 21 5 21 6 20 Z" fill="currentColor" opacity="0.7" />
      <line x1="8" y1="18" x2="18" y2="8" stroke="white" strokeWidth="1" opacity="0.5" />
      <line x1="6" y1="16" x2="16" y2="6" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  )
};

const FloatingDecorations = () => {
  const decorations = [
    { type: 'farfalle', top: '15%', left: '10%', delay: 0, color: 'var(--color-wheat)', size: 1.2 },
    { type: 'ravioli', top: '25%', right: '15%', delay: 1, color: 'var(--color-tomato)', size: 0.9 },
    { type: 'penne', top: '65%', left: '20%', delay: 2, color: 'var(--color-basil)', size: 1.5 },
    { type: 'farfalle', top: '75%', right: '10%', delay: 0.5, color: 'var(--color-wheat)', size: 0.8 },
    { type: 'ravioli', top: '45%', left: '5%', delay: 1.5, color: 'var(--color-tomato-light)', size: 1.1 },
    { type: 'penne', top: '85%', right: '25%', delay: 0.2, color: 'var(--color-wheat)', size: 1 }
  ];

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {decorations.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0, rotate: 0 }}
          animate={{
            y: [20, -20, 20],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            y: { duration: 6 + index, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 8 + index, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            top: item.top,
            ...(item.left ? { left: item.left } : { right: item.right }),
            color: item.color,
            transform: `scale(${item.size})`,
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))',
            opacity: 0.4
          }}
        >
          {SVGPastaShapes[item.type]}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingDecorations;
