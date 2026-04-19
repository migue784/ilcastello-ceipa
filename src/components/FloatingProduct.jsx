import React from 'react';
import { motion, useTransform } from 'framer-motion';

const FloatingProduct = ({ scrollYProgress }) => {
  // Configuración de escalas y posiciones según el progreso de la página
  
  // Rotación constante a lo largo de toda la página
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Animamos el producto sólamente de 0 a 0.25 (Hero y Acuerdos)
  // Luego desaparece para el Descanso 1
  const opacityFettuccine = useTransform(scrollYProgress, [0, 0.20, 0.25], [1, 1, 0]);
  const scaleFettuccine = useTransform(scrollYProgress, [0, 0.20], [1.4, 0.8]);
  const xFettuccine = useTransform(scrollYProgress, [0, 0.20], ["0%", "50%"]);
  
  // Pappardelle aparece en Canvas y luego se va (0.35 a 0.55)
  const opacityPappardelle = useTransform(scrollYProgress, [0.35, 0.40, 0.50, 0.55], [0, 1, 1, 0]);
  const scalePappardelle = useTransform(scrollYProgress, [0.35, 0.50], [0.8, 1.2]);
  const xPappardelle = useTransform(scrollYProgress, [0.35, 0.50], ["50%", "-50%"]);

  // Ravioli aparece en DOFA y luego "Fin" (0.7 a 1.0)
  const opacityRavioli = useTransform(scrollYProgress, [0.65, 0.70, 0.90, 0.95], [0, 1, 1, 0]);
  const scaleRavioli = useTransform(scrollYProgress, [0.65, 0.90], [1.2, 1]);
  const xRavioli = useTransform(scrollYProgress, [0.65, 0.90], ["-50%", "40%"]);

  return (
    <div className="sticky-product-wrapper">
      
      {/* 1. FETTUCCINE */}
      <motion.div
        style={{
          position: 'absolute',
          rotate,
          scale: scaleFettuccine,
          x: xFettuccine,
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
