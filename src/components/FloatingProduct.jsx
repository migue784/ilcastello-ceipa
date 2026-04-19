import React from 'react';
import { motion, useTransform } from 'framer-motion';

const FloatingProduct = ({ scrollYProgress }) => {
  // Configuración de escalas y posiciones según el progreso de la página
  
  // Rotación constante a lo largo de toda la página
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // --- 1. FETTUCCINE (Hero a Acuerdo) ---
  // Desaparece súbitamente de la pantalla cruzando x o subiendo y
  const opacityFettuccine = useTransform(scrollYProgress, [0, 0.20, 0.21], [1, 1, 0]);
  const scaleFettuccine = useTransform(scrollYProgress, [0, 0.20], [1.4, 0.8]);
  // Ingresa centro, sale hacia arriba violentamente
  const xFettuccine = useTransform(scrollYProgress, [0, 0.20], ["0%", "50%"]);
  const yFettuccine = useTransform(scrollYProgress, [0, 0.20], ["0%", "-100%"]);
  
  // --- 2. PAPPARDELLE (Acompaña Modelo Canvas) ---
  // Entra desde x: 150% (fuera de la pantalla a la derecha) hacia el centro
  const opacityPappardelle = useTransform(scrollYProgress, [0.33, 0.35, 0.50, 0.52], [0, 1, 1, 0]);
  const scalePappardelle = useTransform(scrollYProgress, [0.35, 0.50], [0.8, 1.2]);
  const xPappardelle = useTransform(scrollYProgress, [0.33, 0.38, 0.47, 0.52], ["150%", "50%", "-50%", "-150%"]);
  const yPappardelle = useTransform(scrollYProgress, [0.33, 0.52], ["0%", "0%"]);

  // --- 3. RAVIOLI (Cierre o similar si hace falta) ---
  const opacityRavioli = useTransform(scrollYProgress, [0.63, 0.65, 0.90, 0.92], [0, 1, 1, 0]);
  const scaleRavioli = useTransform(scrollYProgress, [0.65, 0.90], [1.2, 1]);
  const xRavioli = useTransform(scrollYProgress, [0.63, 0.68, 0.88, 0.92], ["-150%", "-50%", "40%", "150%"]);
  const yRavioli = useTransform(scrollYProgress, [0.63, 0.92], ["0%", "0%"]);

  return (
    <div className="sticky-product-wrapper">
      
      {/* 1. FETTUCCINE */}
      <motion.div
        style={{
          position: 'absolute',
          rotate,
          scale: scaleFettuccine,
          x: xFettuccine,
          y: yFettuccine,
          opacity: opacityFettuccine,
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
          filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.3))'
        }}
      >
        <img src="/productos/RAVIOLICARNE_1_503x.png" alt="Ravioli Il Castello" style={{ maxHeight: '60vh', objectFit: 'contain' }} />
      </motion.div>

    </div>
  );
};

export default FloatingProduct;
