import React from 'react';
import { motion } from 'framer-motion';

const FloatingDecorations = () => {
  const marqueeStyle = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(5rem, 15vw, 12rem)',
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
    color: 'var(--color-basil)',
    opacity: 0.05, // Lo dejamos en 5% para que el verde se note suavemente
    pointerEvents: 'none',
    userSelect: 'none',
    fontWeight: '700',
    lineHeight: '1',
    letterSpacing: '-2px'
  };

  // Se repiten las palabras varias veces para que el loop no se rompa visualmente
  const text1 = "ARTESANAL • SÉMOLA DURUM • TRADIZIONE • ARTESANAL • SÉMOLA DURUM • TRADIZIONE • ARTESANAL • SÉMOLA DURUM • TRADIZIONE •";
  const text2 = "PREMIUM • DAL 1983 • IL CASTELLO • PREMIUM • DAL 1983 • IL CASTELLO • PREMIUM • DAL 1983 • IL CASTELLO •";
  const text3 = "AL HUEVO • SIN CONSERVANTES • GOURMET • AL HUEVO • SIN CONSERVANTES • GOURMET • AL HUEVO • SIN CONSERVANTES • GOURMET •";

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
      
      {/* Primera línea: se mueve a la izquierda */}
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ width: 'fit-content' }}
      >
        <span style={marqueeStyle}>{text1}</span>
      </motion.div>

      {/* Segunda línea: se mueve a la derecha (más lento) */}
      <motion.div
        animate={{ x: [-1500, 0] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{ width: 'fit-content', marginLeft: '-50%' }}
      >
        <span style={marqueeStyle}>{text2}</span>
      </motion.div>

      {/* Tercera línea: se mueve a la izquierda */}
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{ width: 'fit-content' }}
      >
        <span style={marqueeStyle}>{text3}</span>
      </motion.div>

    </div>
  );
};

export default FloatingDecorations;
