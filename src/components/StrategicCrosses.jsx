import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, AlertTriangle, Zap, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const tows = [
  {
    key: 'FO',
    title: 'Estrategia FO',
    subtitle: 'Fortalezas + Oportunidades',
    iconA: <ShieldCheck size={16} />,
    iconB: <TrendingUp size={16} />,
    color: '#A8D08D',
    colorB: '#E3B85A',
    desc: 'Aprovechar la alta calidad certificada y la capacidad productiva ociosa de congelados para ingresar al sector hotelero (HORECA) de alto nivel en el Caribe, garantizando un suministro confiable de pasta artesanal.',
  },
  {
    key: 'DO',
    title: 'Estrategia DO',
    subtitle: 'Debilidades + Oportunidades',
    iconA: <AlertTriangle size={16} />,
    iconB: <TrendingUp size={16} />,
    color: '#E3B85A',
    colorB: '#A8D08D',
    desc: 'Contratar consultoría especializada en exportación y usar operadores logísticos internacionales en cadena de frío para capitalizar el mercado de las islas del Caribe sin desviar el core operativo interno.',
  },
  {
    key: 'FA',
    title: 'Estrategia FA',
    subtitle: 'Fortalezas + Amenazas',
    iconA: <ShieldCheck size={16} />,
    iconB: <Zap size={16} />,
    color: '#7EC8E3',
    colorB: '#FF8A65',
    desc: 'Posicionar la propuesta de "pasta al huevo sin conservantes" y trazabilidad total para defenderse del ingreso agresivo de marcas multinacionales industriales y económicas en el mercado objetivo.',
  },
  {
    key: 'DA',
    title: 'Estrategia DA',
    subtitle: 'Debilidades + Amenazas',
    iconA: <AlertTriangle size={16} />,
    iconB: <Zap size={16} />,
    color: '#E57373',
    colorB: '#FFB74D',
    desc: 'Enfocarse inicialmente en mercados de alta cercanía logística y menor regulación (Aruba/Curazao/República Dominicana) para reducir el riesgo de exportación y mitigar el desconocimiento en comercio exterior.',
  },
];

const smartItems = [
  ['Specific', 'Exportar raviolis congelados al sector HORECA en Punta Cana.'],
  ['Measurable', '2.000 kg mensuales y 3 cadenas hoteleras aliadas.'],
  ['Achievable', 'La empresa cuenta hoy con +50% de capacidad instalada ociosa.'],
  ['Relevant', 'Mitiga el impacto de los altos impuestos locales y el riesgo nacional.'],
  ['Time-bound', 'A partir del primer semestre del 2026.'],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const StrategicCrosses = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-20 pb-16">

      {/* Header */}
      <motion.div variants={itemVariants}>
        <span className="text-xs uppercase tracking-[0.3em] font-body font-semibold text-[var(--color-wheat)]/60 mb-3 block">Sección 04</span>
        <h3 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-5 text-white leading-tight">
          Cruces <span className="text-[var(--color-wheat)]">TOWS</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-wheat)]/40 to-transparent" />
          <p className="font-body text-sm text-white/50 text-right max-w-sm">Estrategias derivadas de los cruces entre el DOFA y las 5 Fuerzas.</p>
        </div>
      </motion.div>

      {/* TOWS Cards — Staggered Glassmorphism */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tows.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-400 cursor-default"
            style={{
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${item.color}, ${item.colorB})` }} />

            <div className="p-7">
              {/* Key badge + icons */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-headline font-bold text-2xl" style={{ color: item.color }}>{item.key}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: item.color + '20', color: item.color }}>
                      {item.iconA}
                    </div>
                    <ArrowRight size={12} className="text-white/20" />
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: item.colorB + '20', color: item.colorB }}>
                      {item.iconB}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/30 bg-white/5 px-3 py-1 rounded-full">{item.subtitle}</span>
              </div>

              <h4 className="font-headline text-lg font-bold mb-3" style={{ color: item.color }}>{item.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Objetivo Final — Hero Section */}
      <motion.div variants={itemVariants}>
        <div className="mb-6 flex items-center gap-4">
          <Target size={18} className="text-[var(--color-tomato)]" />
          <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase text-white">Objetivo de Internacionalización</h3>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden border border-[var(--color-tomato)]/20"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(170,51,34,0.15), rgba(0,0,0,0.7))' }}
        >
          {/* Background decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none translate-x-20 -translate-y-10">
            <Target size={320} color="var(--color-tomato)" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Quote */}
            <div className="mb-10">
              <div className="text-5xl font-headline text-[var(--color-tomato)]/30 leading-none mb-4">"</div>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--color-wheat)] font-light italic max-w-3xl">
                Exportar 2.000 kg mensuales de raviolis ultracongelados premium al sector HORECA (hoteles y restaurantes) en Punta Cana, República Dominicana, a partir del primer semestre de 2026; logrando contratos fijos de suministro con al menos 3 cadenas hoteleras internacionales de lujo mediante alianzas estratégicas con operadores logísticos de cadena de frío.
              </p>
            </div>

            {/* SMART breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {smartItems.map(([title, desc], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2"
                >
                  <CheckCircle2 size={16} className="text-[#A8D08D]" />
                  <strong className="block text-[var(--color-wheat)] font-headline text-sm tracking-wide">{title}</strong>
                  <span className="text-white/50 text-xs leading-snug">{desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default StrategicCrosses;
