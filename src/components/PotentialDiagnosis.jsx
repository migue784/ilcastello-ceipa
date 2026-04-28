import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Compass, Flag, Clock, ChevronRight } from 'lucide-react';

const smartData = [
  {
    letter: 'S',
    label: 'Específico',
    icon: <Target size={20} />,
    color: '#E3B85A',
    content: 'Iniciar la exportación de pastas rellenas ultracongeladas (Raviolis premium) hacia el canal HORECA en San José y zonas costeras de Costa Rica.',
  },
  {
    letter: 'M',
    label: 'Medible',
    icon: <TrendingUp size={20} />,
    color: '#A8D08D',
    content: 'Alcanzar un volumen de exportación de 1,500 kg mensuales durante el primer año operativo, representando un 15% del total de las ventas netas de la compañía.',
  },
  {
    letter: 'A',
    label: 'Alcanzable',
    icon: <Compass size={20} />,
    color: '#7EC8E3',
    content: 'Mediante la contratación de servicios de transporte refrigerado internacional y aprovechando la capacidad instalada actualmente ociosa (30%) de la fábrica en Sabaneta.',
  },
  {
    letter: 'R',
    label: 'Relevante',
    icon: <Flag size={20} />,
    color: '#FF8A65',
    content: 'Reducir la extrema dependencia de la compañía hacia el mercado local y los fletes nacionales, aprovechando la alta demanda de turismo 5 estrellas en Centroamérica para mejorar el EBITDA.',
  },
  {
    letter: 'T',
    label: 'Temporal',
    icon: <Clock size={20} />,
    color: '#B39DDB',
    content: 'Cumplir con este objetivo en un plazo estricto de 12 meses (Diciembre de 2026), logrando la consolidación del primer contenedor comercial en Costa Rica.',
  },
];

const bentoItems = [
  { img: '/diagnostico/img1.png', title: 'Proyección FOB', desc: 'Valor proyectado en USD (FOB) durante los primeros 12 meses operativos.', col: 'md:col-span-2 md:row-span-2', tall: true },
  { img: '/diagnostico/img2.png', title: 'Geolocalización', desc: 'Rutas hacia Centroamérica y Norteamérica.', col: 'md:col-span-1', tall: false },
  { img: '/diagnostico/img3.png', title: 'Matriz de Ponderación', desc: 'Evaluación cuantitativa macroeconómica.', col: 'md:col-span-1', tall: false },
  { img: '/diagnostico/img4.png', title: 'Participación Esperada (13%)', desc: 'Meta de penetración de mercado HORECA.', col: 'md:col-span-2', tall: false },
  { img: '/diagnostico/img5.png', title: 'Análisis Arancelario', desc: 'Matriz de Selección y beneficios del TLC.', col: 'md:col-span-1', tall: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const PotentialDiagnosis = () => {
  const [activeSmart, setActiveSmart] = useState(0);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-20 pb-16">

      {/* ── HEADER ── */}
      <motion.div variants={itemVariants}>
        <span className="text-xs uppercase tracking-[0.3em] font-body font-semibold text-[var(--color-wheat)]/60 mb-3 block">Sección 01</span>
        <h3 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-5 text-white leading-tight">
          Diagnóstico de<br /><span className="text-[var(--color-wheat)]">Potencialidades</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-wheat)]/40 to-transparent" />
          <p className="font-body text-sm text-white/50 text-right max-w-sm">Herramienta de diagnóstico en Excel: Capacidad técnica, comercial y financiera para exportar.</p>
        </div>
      </motion.div>

      {/* ── BENTO GRID ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 cursor-pointer ${item.col} ${item.tall ? 'md:row-span-2' : ''}`}
            whileHover={{ scale: 1.02, borderColor: 'rgba(227,184,90,0.4)' }}
            transition={{ duration: 0.3 }}
          >
            {/* image */}
            <div className="absolute inset-0 bg-black/50" />
            <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform" />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            {/* content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-wheat)]/70 font-semibold">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="font-headline text-lg text-white font-bold leading-tight mt-1">{item.title}</h4>
              <p className="text-white/60 text-sm mt-1 leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── SMART STEPPER ── */}
      <motion.div variants={itemVariants}>
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.3em] font-body font-semibold text-[var(--color-wheat)]/60 mb-3 block">Objetivo rector</span>
          <h3 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase">Metodología <span className="text-[var(--color-wheat)]">S.M.A.R.T.</span></h3>
        </div>

        {/* Letter tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {smartData.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveSmart(i)}
              className={`relative flex flex-col items-center gap-1.5 px-5 py-4 rounded-2xl border font-headline font-bold text-2xl transition-all duration-300 ${
                activeSmart === i
                  ? 'bg-white/10 border-[var(--color-wheat)]/50 text-[var(--color-wheat)] shadow-[0_0_20px_rgba(227,184,90,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/30 hover:text-white/60 hover:bg-white/8'
              }`}
              whileTap={{ scale: 0.96 }}
            >
              {s.letter}
              <span className="text-[9px] uppercase tracking-widest font-body font-semibold opacity-60">{s.label}</span>
              {activeSmart === i && (
                <motion.div layoutId="smart-underline" className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full" style={{ background: s.color }} />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSmart}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-8 md:p-10"
            style={{ borderLeft: `4px solid ${smartData[activeSmart].color}` }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-black font-headline font-bold text-2xl" style={{ background: smartData[activeSmart].color }}>
                {smartData[activeSmart].letter}
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: smartData[activeSmart].color }}>
                  {smartData[activeSmart].label}
                </p>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-body">
                  {smartData[activeSmart].content}
                </p>
              </div>
            </div>
            {/* Navigation arrows */}
            <div className="flex gap-3 mt-8 justify-end">
              <button
                onClick={() => setActiveSmart(Math.max(0, activeSmart - 1))}
                disabled={activeSmart === 0}
                className="px-4 py-2 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-white/30 disabled:opacity-20 transition-all text-sm"
              >← Anterior</button>
              <button
                onClick={() => setActiveSmart(Math.min(smartData.length - 1, activeSmart + 1))}
                disabled={activeSmart === smartData.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all"
                style={{
                  background: activeSmart < smartData.length - 1 ? smartData[activeSmart].color + '20' : 'transparent',
                  border: `1px solid ${smartData[activeSmart].color}50`,
                  color: activeSmart < smartData.length - 1 ? smartData[activeSmart].color : 'rgba(255,255,255,0.2)'
                }}
              >
                Siguiente <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex gap-2 justify-center mt-4">
          {smartData.map((s, i) => (
            <button key={i} onClick={() => setActiveSmart(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ background: i === activeSmart ? s.color : 'rgba(255,255,255,0.2)', width: i === activeSmart ? '1.5rem' : '0.5rem' }}
            />
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default PotentialDiagnosis;
