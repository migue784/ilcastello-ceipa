import React from 'react';
import { motion, useTransform } from 'framer-motion';

const FloatingProduct = ({ scrollYProgress }) => {
  // Configuración de escalas y posiciones según el progreso de la página
  
  // Rotación constante a lo largo de toda la página
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // El tamaño de la página ahora es completamente vertical y extenso.
  // Mapeamos de 0 a 1 (100% del scroll hacia abajo).

  // --- 1. FETTUCCINE (Hero -> Header Acuerdos) (0% al 15%) ---
  const opacityFettuccine = useTransform(scrollYProgress, [0, 0.12, 0.15], [1, 1, 0]);
  const scaleFettuccine = useTransform(scrollYProgress, [0, 0.15], [1.2, 0.8]);
  const xFettuccine = useTransform(scrollYProgress, [0, 0.15], ["50%", "100%"]);
  const yFettuccine = useTransform(scrollYProgress, [0, 0.15], ["0%", "50%"]);
  const displayFettuccine = useTransform(scrollYProgress, [0, 0.14, 0.16], ["block", "block", "none"]);
  
  // --- 2. PAPPARDELLE (Acuerdos -> Realidad Empresarial) (16% al 45%) ---
  const opacityPappardelle = useTransform(scrollYProgress, [0.16, 0.20, 0.45, 0.48], [0, 1, 1, 0]);
  const scalePappardelle = useTransform(scrollYProgress, [0.16, 0.45], [0.8, 1.2]);
  const xPappardelle = useTransform(scrollYProgress, [0.16, 0.25, 0.35, 0.48], ["150%", "30%", "-30%", "-150%"]);
  const yPappardelle = useTransform(scrollYProgress, [0.16, 0.48], ["0%", "10%"]);
  const displayPappardelle = useTransform(scrollYProgress, [0.15, 0.16, 0.48, 0.49], ["none", "block", "block", "none"]);

  // --- 3. RAVIOLI (Estrategia Total) (50% al 98%) ---
  const opacityRavioli = useTransform(scrollYProgress, [0.50, 0.55, 0.95, 0.98], [0, 1, 1, 0]);
  const scaleRavioli = useTransform(scrollYProgress, [0.50, 0.95], [1.1, 0.9]);
  const xRavioli = useTransform(scrollYProgress, [0.50, 0.95], ["150%", "-30%"]);
  const yRavioli = useTransform(scrollYProgress, [0.50, 0.75, 0.95], ["0%", "45%", "80%"]);
  const displayRavioli = useTransform(scrollYProgress, [0.49, 0.50, 0.98, 0.99], ["none", "block", "block", "none"]);

  return (
    <div className="sticky-product-wrapper" style={{ zIndex: 0 }}>
      
      {/* 1. FETTUCCINE */}
      <motion.div
        style={{
          position: 'absolute',
          rotate,
          scale: scaleFettuccine,
          x: xFettuccine,
          y: yFettuccine,
          opacity: opacityFettuccine,
          display: displayFettuccine,
          filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.3))'
        }}
      >
        <img src="/productos/FETTUCCINE_1_e701b431-b306-43ec-a4a6-39662090f2bc_503x.png" alt="Fettuccine Il Castello" style={{ maxHeight: '60vh', objectFit: 'contain' }} />
      </motion.div>

      {/* 2. PAPPARDELLE */}
      <motion.div
        style={{
          position: 'absolute',
          rotate,
          scale: scalePappardelle,
          x: xPappardelle,
          y: yPappardelle,
          opacity: opacityPappardelle,
          display: displayPappardelle,
          filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.3))'
        }}
      >
        <img src="/productos/PAPPARDELLE_1_503x.png" alt="Pappardelle Il Castello" style={{ maxHeight: '60vh', objectFit: 'contain' }} />
      </motion.div>

      {/* 3. RAVIOLI CARNE */}
      <motion.div
        style={{
          position: 'absolute',
          rotate,
          scale: scaleRavioli,
          x: xRavioli,
          y: yRavioli,
          opacity: opacityRavioli,
          display: displayRavioli,
          filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.3))'
        }}
      >
        <img src="/productos/RAVIOLICARNE_1_503x.png" alt="Ravioli Il Castello" style={{ maxHeight: '60vh', objectFit: 'contain' }} />
      </motion.div>

    </div>
  );
};

export default FloatingProduct;
