import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingProduct = ({ elementRef }) => {
  const { scrollYProgress } = useScroll({ target: elementRef, offset: ["start end", "end end"] });

  // Animaciones para transformar el producto a medida que hacemos scroll.
  const y = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "50%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: '50%',
        top: '20%',
        x: '-50%',
        y,
        rotate,
        scale,
        zIndex: 50,
      }}
    >
      <img src="https://via.placeholder.com/150x200" alt="Producto Il Castello" style={{ height: '300px' }} />
    </motion.div>
  );
};

export default FloatingProduct;
