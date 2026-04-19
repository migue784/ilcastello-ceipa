import React from 'react';
import { motion, useTransform } from 'framer-motion';

const FloatingProduct = ({ scrollYProgress }) => {
  // Configuración de escalas y posiciones según el progreso de la página
  
  // Rotación constante a lo largo de toda la página
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Transiciones de Opacidad (Fade Out/Fade In) para intercalar los productos
  const opacityFettuccine = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const opacityPappardelle = useTransform(scrollYProgress, [0.25, 0.3, 0.65, 0.7], [0, 1, 1, 0]);
  const opacityRavioli = useTransform(scrollYProgress, [0.65, 0.7, 1], [0, 1, 1]);

  // Transformaciones para el Fettuccine (Hero -> Acuerdos)
  const scaleFettuccine = useTransform(scrollYProgress, [0, 0.3], [1.4, 0.8]);
  const xFettuccine = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]);
  
  // Transformaciones para el Pappardelle (Acuerdos -> Empresa)
  const scalePappardelle = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1.2]);
  const xPappardelle = useTransform(scrollYProgress, [0.3, 0.6], ["50%", "-50%"]);

  // Transformaciones para el Ravioli (Empresa -> Sostenibilidad/DOFA)
  const scaleRavioli = useTransform(scrollYProgress, [0.6, 1], [1.2, 1]);
  const xRavioli = useTransform(scrollYProgress, [0.6, 1], ["-50%", "40%"]);

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
