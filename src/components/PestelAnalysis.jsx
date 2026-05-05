import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Landmark, TrendingUp, Users, Cpu, Leaf, Scale } from 'lucide-react';

const pestelData = [
  {
    letter: 'P', title: 'Político',
    icon: <Landmark size={18} />,
    color: '#7EC8E3',
    national: 'Estabilidad regulatoria local pero incertidumbre tributaria continua y cargas impositivas para las PYMES.',
    international: 'Tratado de Libre Comercio (TLC) G2 vigente entre Colombia y México que facilita la entrada comercial sin barreras severas.',
    impactLevel: { national: 55, international: 80 },
  },
  {
    letter: 'E', title: 'Económico',
    icon: <TrendingUp size={18} />,
    color: '#E3B85A',
    national: 'Inflación alta en materias primas críticas (huevo, sémola pura) y fletes de transporte nacional altamente prohibitivos.',
    international: 'Flujo constante de capital por turismo de alto nivel (hoteles 5 estrellas), permitiendo comercializar a mejor precio (alto EBITDA).',
    impactLevel: { national: 40, international: 85 },
  },
  {
    letter: 'S', title: 'Social',
    icon: <Users size={18} />,
    color: '#A8D08D',
    national: 'Personal operativo con alta edad promedio (mucha tradición artesanal empírica, pero severa resistencia al cambio tecnológico).',
    international: 'Alta demanda de turistas internacionales norteamericanos y europeos que exigen gastronomía premium de cocción rápida.',
    impactLevel: { national: 50, international: 90 },
  },
  {
    letter: 'T', title: 'Tecnológico',
    icon: <Cpu size={18} />,
    color: '#B39DDB',
    national: 'Transición lenta hacia la digitalización operativa. Uso apenas básico de Inteligencia Artificial para atención y CRM.',
    international: 'Requisito técnico indispensable de logística y trazabilidad estricta en cadena de frío (-20°C) para envíos LCL marítimos.',
    impactLevel: { national: 45, international: 70 },
  },
  {
    letter: 'E', title: 'Ecológico',
    icon: <Leaf size={18} />,
    color: '#81C784',
    national: 'Esfuerzos incipientes por compostaje de residuos orgánicos y optimización de energía de los secaderos en la planta de Sabaneta.',
    international: 'Mercado pionero mundial en ecoturismo y sostenibilidad, exigiendo de facto que los empaques HORECA sean amigables o biodegradables.',
    impactLevel: { national: 60, international: 88 },
  },
  {
    letter: 'L', title: 'Legal',
    icon: <Scale size={18} />,
    color: '#FF8A65',
    national: 'Normatividad estricta de salubridad y manipulación de alimentos (INVIMA) junto con leyes laborales locales muy pesadas.',
    international: 'Requisitos aduaneros de nacionalización y registros sanitarios ineludibles de la COFEPRIS mexicana para alimentos de origen animal.',
    impactLevel: { national: 35, international: 65 },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ImpactBar = ({ value, color }) => (
  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
    <motion.div
      className="h-full rounded-full"
      style={{ background: color }}
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    />
  </div>
);

const PestelAnalysis = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16 pb-16">

      {/* Header */}
      <motion.div variants={itemVariants}>
        <span className="text-xs uppercase tracking-[0.3em] font-body font-semibold text-[var(--color-wheat)]/60 mb-3 block">Sección 02</span>
        <h3 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-5 text-white leading-tight">
          Análisis <span className="text-[var(--color-wheat)]">PESTEL</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-wheat)]/40 to-transparent" />
          <p className="font-body text-sm text-white/50 text-right max-w-xs">Macroentorno comparado: Colombia 🇨🇴 vs México 🇲🇽</p>
        </div>
      </motion.div>

      {/* Legend badges */}
      <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
          <span className="text-xl">🇨🇴</span>
          <span className="text-white/60 font-body text-xs uppercase tracking-wider">Entorno Nacional</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-wheat)]/10 border border-[var(--color-wheat)]/20 text-sm">
          <span className="text-xl">🇲🇽</span>
          <span className="text-[var(--color-wheat)]/80 font-body text-xs uppercase tracking-wider">Mercado Objetivo</span>
        </div>
      </motion.div>

      {/* Accordion */}
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        {pestelData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden border transition-all duration-300"
              style={{ borderColor: isOpen ? item.color + '40' : 'rgba(255,255,255,0.06)' }}
              layout
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-300"
                style={{ background: isOpen ? item.color + '12' : 'rgba(0,0,0,0.3)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-headline font-bold text-xl transition-all duration-300"
                  style={{ background: isOpen ? item.color : 'rgba(255,255,255,0.05)', color: isOpen ? '#000' : item.color }}>
                  {item.letter}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <span style={{ color: isOpen ? item.color : 'rgba(255,255,255,0.5)' }}>{item.icon}</span>
                  <span className="font-headline text-lg font-bold" style={{ color: isOpen ? item.color : 'rgba(255,255,255,0.7)' }}>
                    {item.title}
                  </span>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={18} style={{ color: isOpen ? item.color : 'rgba(255,255,255,0.3)' }} />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mx-6 mb-6 rounded-2xl overflow-hidden">
                      {/* Nacional */}
                      <div className="bg-black/60 p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🇨🇴</span>
                          <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">Colombia — Nacional</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">{item.national}</p>
                        <div>
                          <div className="flex justify-between text-[10px] text-white/30 uppercase tracking-wider mb-1">
                            <span>Impacto operativo</span>
                            <span>{item.impactLevel.national}%</span>
                          </div>
                          <ImpactBar value={item.impactLevel.national} color="#ffffff40" />
                        </div>
                      </div>
                      {/* Internacional */}
                      <div className="p-6 flex flex-col gap-4" style={{ background: item.color + '08' }}>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🇲🇽</span>
                          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: item.color + 'aa' }}>México — Internacional</span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: item.color + 'dd' }}>{item.international}</p>
                        <div>
                          <div className="flex justify-between text-[10px] uppercase tracking-wider mb-1" style={{ color: item.color + '60' }}>
                            <span>Oportunidad estimada</span>
                            <span>{item.impactLevel.international}%</span>
                          </div>
                          <ImpactBar value={item.impactLevel.international} color={item.color} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

    </motion.div>
  );
};

export default PestelAnalysis;
