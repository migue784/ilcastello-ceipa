import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalGallery = ({ children }) => {
  const targetRef = useRef(null);

  // Configuramos el progreso del scroll respecto a todo el contenedor (que medirá varios viewport heights)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Convertimos el progreso de scroll vertical (0 a 1) en translación horizontal (-0% a -[n]%).
  // Si tenemos mucho contenido interno, trasladamos la caja un montón hacia la izquierda (-75% aproxima un recorrido largo)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // section con muchísima altura para obligar al usuario a hacer scroll por buen rato (fuerza la duracion del efecto horizontal)
    <section ref={targetRef} style={{ position: 'relative', height: '350vh' }}>
      
      {/* Contenedor Sticky: este div se queda pegado a la pantalla mientras el usuario "baja por los 350vh" anteriores */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Aquí va la tira interminable horizontal en la que metemos nuestros elementos académicos */}
        <motion.div style={{ x, display: 'flex', gap: '8rem', padding: '0 4rem', alignItems: 'flex-start' }}>
          
          {children}

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
