import React from 'react';
import { useScroll } from 'framer-motion';
import StitchLayout from './components/StitchLayout';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <StitchLayout scrollYProgress={scrollYProgress} />
  );
}

export default App;
