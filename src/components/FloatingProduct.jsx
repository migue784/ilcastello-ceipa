import React from 'react';
import { motion, useTransform } from 'framer-motion';

const FloatingProduct = ({ scrollYProgress }) => {
  // Configuración de escalas y posiciones según el progreso de la página
  
  // Rotación constante a lo largo de toda la página
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // --- 1. FETTUCCINE (Hero a Acuerdo) ---
  // Muere bruscamente en el 8% del scroll (apenas deja el hero).
  const opacityFettuccine = useTransform(scrollYProgress, [0, 0.08, 0.081], [1, 1, 0]);
  const scaleFettuccine = useTransform(scrollYProgress, [0, 0.08], [1.2, 0.8]);
  const xFettuccine = useTransform(scrollYProgress, [0, 0.08], ["50%", "100%"]);
  const yFettuccine = useTransform(scrollYProgress, [0, 0.08], ["0%", "50%"]);
  // Truco extra: Sacarlo del flujo (display) para que no sea pintado fantasmalmente en Safari/Chrome.
  const displayFettuccine = useTransform(scrollYProgress, [0, 0.08, 0.081], ["block", "block", "none"]);
  
  // --- 2. PAPPARDELLE (Acompaña Video Rojo y Realidad Empresarial) ---
  // Entra en 0.10 y muere bruscamente en 0.28 (justo al borde de la sección verde "Estrategia Total").
  const opacityPappardelle = useTransform(scrollYProgress, [0.10, 0.12, 0.28, 0.281], [0, 1, 1, 0]);
  const scalePappardelle = useTransform(scrollYProgress, [0.10, 0.28], [0.8, 1.2]);
  const xPappardelle = useTransform(scrollYProgress, [0.10, 0.15, 0.23, 0.28], ["150%", "30%", "-30%", "-150%"]);
  const yPappardelle = useTransform(scrollYProgress, [0.10, 0.28], ["0%", "0%"]);
  const displayPappardelle = useTransform(scrollYProgress, [0.10, 0.12, 0.28, 0.281], ["none", "block", "block", "none"]);

  // --- 3. RAVIOLI (Estrategia Total - Sección Verde) ---
  // Al volver al formato Vertical de Layout, la página regresa a su Height natural.
  // El Ravioli nace de la zona derecha central (x: 40%) en y:25%, descendiendo tranquilamente.
  const opacityRavioli = useTransform(scrollYProgress, [0.55, 0.60, 0.95, 1], [0, 1, 1, 0]);
  const scaleRavioli = useTransform(scrollYProgress, [0.60, 0.95], [1.1, 0.9]);
  const xRavioli = useTransform(scrollYProgress, [0.55, 0.60], ["150%", "30%"]);
  const yRavioli = useTransform(scrollYProgress, [0.55, 0.85, 0.95], ["0%", "45%", "80%"]);
  // Lo mandamos al fondo absoluto usando zIndex implícito y display inline
  const displayRavioli = useTransform(scrollYProgress, [0.55, 0.58, 0.97, 1], ["none", "block", "block", "none"]);

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
