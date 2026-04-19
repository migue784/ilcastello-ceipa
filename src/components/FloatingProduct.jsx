import React from 'react';
import { motion, useTransform } from 'framer-motion';

const FloatingProduct = ({ scrollYProgress }) => {
  // Configuración de escalas y posiciones según el progreso de la página
  
  // Rotación constante a lo largo de toda la página
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // --- 1. FETTUCCINE (Hero a Acuerdo) ---
  // Debe iniciar a la derecha ("50%") y desaparecer RAPIDÍSIMO (0.10) para no verse en el Video Rojo.
  const opacityFettuccine = useTransform(scrollYProgress, [0, 0.10, 0.12], [1, 1, 0]);
  const scaleFettuccine = useTransform(scrollYProgress, [0, 0.10], [1.2, 0.8]);
  const xFettuccine = useTransform(scrollYProgress, [0, 0.10], ["50%", "100%"]);
  const yFettuccine = useTransform(scrollYProgress, [0, 0.10], ["0%", "50%"]);
  
  // --- 2. PAPPARDELLE (Acompaña Video Rojo y Realidad Empresarial) ---
  // Entra en 0.18 (luego de morir el de arriba) y muere en 0.45 (ANTES de que inicie la zona verde DOFA)
  const opacityPappardelle = useTransform(scrollYProgress, [0.18, 0.20, 0.42, 0.45], [0, 1, 1, 0]);
  const scalePappardelle = useTransform(scrollYProgress, [0.20, 0.42], [0.8, 1.2]);
  const xPappardelle = useTransform(scrollYProgress, [0.18, 0.25, 0.38, 0.45], ["150%", "30%", "-30%", "-150%"]);
  const yPappardelle = useTransform(scrollYProgress, [0.18, 0.45], ["0%", "0%"]);

  // --- 3. RAVIOLI (Estrategia Total - Sección Verde) ---
  // Nace en la sección verde limpia.
  const opacityRavioli = useTransform(scrollYProgress, [0.48, 0.50, 0.90, 0.92], [0, 1, 1, 0]);
  const scaleRavioli = useTransform(scrollYProgress, [0.50, 0.90], [1.2, 1]);
  const xRavioli = useTransform(scrollYProgress, [0.48, 0.55, 0.88, 0.92], ["-150%", "-20%", "40%", "150%"]);
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
