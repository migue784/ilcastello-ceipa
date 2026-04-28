import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const dofaData = [
  {
    id: 'fortalezas',
    type: 'Fortalezas',
    abbr: 'F',
    icon: <ShieldCheck size={28} />,
    color: '#A8D08D',
    position: 'top-left',
    description: 'Capacidades internas positivas',
    items: [
      'Capital humano invaluable: Personal con alta antigüedad, garantizando estandarización perfecta de recetas.',
      'Diversificación de proveeduría con alianza fuerte con el principal proveedor de sémola por maquila.',
      'Nivel altísimo de fidelización con chefs (Canal HORECA) por servicio ultra-personalizado.',
      'Manejo de inventario estratégico (Bajo stock) que garantiza total frescura y reduce costos de almacenamiento.',
    ],
  },
  {
    id: 'oportunidades',
    type: 'Oportunidades',
    abbr: 'O',
    icon: <TrendingUp size={28} />,
    color: '#E3B85A',
    position: 'top-right',
    description: 'Factores externos favorables',
    items: [
      'Implementación de Inteligencia Artificial para toma de pedidos vía WhatsApp Business y CRM.',
      'Expansión agresiva del área Institucional y venta directa (HORECA aporta la rentabilidad real).',
      'Mercado de las "islas" del Caribe (B2B Hotelero) receptivo a productos ultracongelados premium.',
    ],
  },
  {
    id: 'debilidades',
    type: 'Debilidades',
    abbr: 'D',
    icon: <AlertTriangle size={28} />,
    color: '#E57373',
    position: 'bottom-left',
    description: 'Limitaciones internas a superar',
    items: [
      'Curva de aprendizaje tecnológica lenta por edad promedio alta del personal.',
      'Procesos de planta altamente manuales que ralentizan la producción en alta demanda.',
      'Estructura comercial dependiente del boca a boca, sin distribuidores tercerizados escalables.',
    ],
  },
  {
    id: 'amenazas',
    type: 'Amenazas',
    abbr: 'A',
    icon: <Zap size={28} />,
    color: '#FFB74D',
    position: 'bottom-right',
    description: 'Riesgos externos a mitigar',
    items: [
      'Altos costos del Transporte Nacional: el factor financiero que más golpea a la compañía.',
      'Variabilidad de precio en la Sémola pura de Italia (importación prohibitiva en costos).',
      'Riesgos inflacionarios sobre insumos básicos diarios (huevo, pollo, carne, lácteos).',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const DofaAnalysis = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16 pb-16">

      {/* Header */}
      <motion.div variants={itemVariants}>
        <span className="text-xs uppercase tracking-[0.3em] font-body font-semibold text-[var(--color-wheat)]/60 mb-3 block">Sección 03</span>
        <h3 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-5 text-white leading-tight">
          Matriz <span className="text-[var(--color-wheat)]">D.O.F.A.</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-wheat)]/40 to-transparent" />
          <p className="font-body text-sm text-white/50 text-right max-w-sm">Hover sobre cada cuadrante para explorar los factores clave.</p>
        </div>
      </motion.div>

      {/* DOFA Matrix Grid */}
      <motion.div variants={itemVariants}>
        {/* Axis labels */}
        <div className="grid grid-cols-[1fr,1fr] gap-0 mb-2 pl-16">
          <div className="text-center text-[10px] uppercase tracking-[0.25em] text-white/30 font-semibold">Interno</div>
          <div className="text-center text-[10px] uppercase tracking-[0.25em] text-white/30 font-semibold">Externo</div>
        </div>

        <div className="flex gap-0">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-around w-16 flex-shrink-0">
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-semibold text-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '50%' }}>Positivo</div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-semibold text-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '50%' }}>Negativo</div>
          </div>

          {/* Quadrants */}
          <div className="grid grid-cols-2 gap-1 flex-1 min-h-[500px]">
            {dofaData.map((quad, i) => {
              const isHovered = hovered === i;
              const isOtherHovered = hovered !== null && hovered !== i;

              return (
                <motion.div
                  key={quad.id}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{
                    flex: isHovered ? 1.4 : isOtherHovered ? 0.7 : 1,
                    opacity: isOtherHovered ? 0.6 : 1,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: `radial-gradient(circle at ${i < 2 ? '80% 20%' : '20% 80%'}, ${quad.color}15, rgba(0,0,0,0.5))`,
                    border: `1px solid ${isHovered ? quad.color + '50' : 'rgba(255,255,255,0.06)'}`,
                    boxShadow: isHovered ? `0 0 30px ${quad.color}20` : 'none',
                  }}
                >
                  {/* Quadrant abbr watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="font-headline font-bold text-[8rem] leading-none opacity-5" style={{ color: quad.color }}>
                      {quad.abbr}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col gap-4">
                    {/* Icon + Title (always visible) */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 8 : 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ color: quad.color }}
                      >
                        {quad.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-headline font-bold text-lg leading-none" style={{ color: quad.color }}>{quad.type}</h4>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5">{quad.description}</p>
                      </div>
                    </div>

                    {/* Items — revealed on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.ul
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.3, staggerChildren: 0.06 }}
                          className="m-0 p-0 list-none flex flex-col gap-3 flex-1"
                        >
                          {quad.items.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.07 }}
                              className="flex gap-2.5 items-start text-sm leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: quad.color }} />
                              <span className="text-white/80">{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {!isHovered && (
                      <div className="flex-1 flex items-end">
                        <span className="text-white/20 text-xs font-body">
                          {quad.items.length} factores clave →
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile fallback: simple stacked cards */}
      <motion.div variants={itemVariants} className="md:hidden flex flex-col gap-4 mt-8">
        {dofaData.map((quad) => (
          <div key={quad.id} className="rounded-2xl p-6 border border-white/5 bg-black/40">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ color: quad.color }}>{quad.icon}</div>
              <h4 className="font-headline text-xl" style={{ color: quad.color }}>{quad.type}</h4>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {quad.items.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-white/70 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: quad.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default DofaAnalysis;
