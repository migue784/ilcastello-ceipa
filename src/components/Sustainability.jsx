import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, HeartHandshake, TrendingUp, Recycle, Droplets, Zap, Package, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: <HeartHandshake size={28} />,
    label: 'Social',
    color: '#E57373',
    tag: 'Pilar 01',
    headline: 'Sostenibilidad Social',
    body: 'La empresa centra su esfuerzo en la estabilidad laboral de largo plazo para sus 30 empleados. Evitan el crecimiento desmesurado para prevenir despidos futuros, mantienen salarios competitivos, y seleccionan ubicaciones (Sabaneta central) que garantizan seguridad y acceso a transporte público (Metro) pensando 100% en el bienestar del operario.',
    stat: '30 empleados estables',
    statIcon: '👥',
  },
  {
    icon: <TrendingUp size={28} />,
    label: 'Económica',
    color: '#E3B85A',
    tag: 'Pilar 02',
    headline: 'Sostenibilidad Económica',
    body: 'Mantienen un cumplimiento presupuestal del 100%+ mensual. Su estrategia "Asset-Light" evita inmovilizar capital comprando bodegas (prefieren arrendar) para reinvertir toda su ganancia pura directamente en adquisición de maquinaria (secadoras y ultracongeladores) y expansión del core de negocio.',
    stat: '100%+ cumplimiento presupuestal',
    statIcon: '📈',
  },
  {
    icon: <Leaf size={28} />,
    label: 'Ambiental',
    color: '#A8D08D',
    tag: 'Pilar 03',
    headline: 'Sostenibilidad Ambiental',
    body: 'Il Castello justifica una base ambiental intrínsecamente positiva gracias al uso de ingredientes simples y naturales, sin conservantes químicos que contaminen el ciclo del agua, y su fuerte línea de pasta seca, la cual reduce drásticamente la huella de carbono al no requerir cadena de frío.',
    stats: [
      { icon: <Recycle size={18} />, label: 'Compostaje Industrial', desc: 'Merma redirigida a granjas locales (Economía Circular).' },
      { icon: <Droplets size={18} />, label: 'Eficiencia Hídrica', desc: 'Reducción del desperdicio de agua potable en un 40%.' },
      { icon: <Zap size={18} />, label: 'Optimización Energética', desc: 'Contenedores llenos, LED en planta, aislamiento optimizado.' },
      { icon: <Package size={18} />, label: 'Empaques Biodegradables', desc: 'Migración a películas y bolsas Kraft con barreras orgánicas.' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const Sustainability = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-20 pb-16">

      {/* Header */}
      <motion.div variants={itemVariants}>
        <span className="text-xs uppercase tracking-[0.3em] font-body font-semibold text-[var(--color-wheat)]/60 mb-3 block">Sección 05</span>
        <h3 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-5 text-white leading-tight">
          Pilares de <span className="text-[var(--color-wheat)]">Sostenibilidad</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-wheat)]/40 to-transparent" />
          <p className="font-body text-sm text-white/50 text-right max-w-sm">Estrategia integral: impacto positivo en entorno, sociedad y finanzas.</p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-8 top-10 bottom-10 w-px" style={{
          background: 'linear-gradient(to bottom, #E57373, #E3B85A, #A8D08D)',
          opacity: 0.3,
        }} />

        <div className="flex flex-col gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              variants={itemVariants}
              className="relative flex gap-8 items-start pl-20"
            >
              {/* Node on the line */}
              <div
                className="absolute left-0 top-5 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border-2"
                style={{
                  background: `${pillar.color}15`,
                  borderColor: pillar.color + '60',
                  color: pillar.color,
                  boxShadow: `0 0 24px ${pillar.color}25`,
                }}
              >
                {pillar.icon}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 group"
                style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)' }}
              >
                <div className="p-7 md:p-8">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-1 block" style={{ color: pillar.color + '80' }}>{pillar.tag}</span>
                      <h4 className="font-headline text-2xl font-bold text-white">{pillar.headline}</h4>
                    </div>
                    {pillar.stat && (
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-xl self-start sm:self-auto flex-shrink-0"
                        style={{ background: pillar.color + '15', border: `1px solid ${pillar.color}30` }}
                      >
                        <span className="text-lg">{pillar.statIcon}</span>
                        <span className="text-xs font-semibold font-body" style={{ color: pillar.color }}>{pillar.stat}</span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <p className="text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/85 transition-colors mb-6">{pillar.body}</p>

                  {/* Environmental Mini-Grid */}
                  {pillar.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5">
                      {pillar.stats.map((stat, si) => (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + si * 0.06, duration: 0.4 }}
                          className="flex gap-3 items-start p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/8 hover:border-white/10 transition-all"
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: pillar.color + '20', color: pillar.color }}
                          >
                            {stat.icon}
                          </div>
                          <div>
                            <strong className="block text-white text-sm font-semibold leading-tight mb-0.5">{stat.label}</strong>
                            <span className="text-white/50 text-xs leading-snug">{stat.desc}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary row */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Social', icon: '👥', value: '30 empleos', color: '#E57373' },
            { label: 'Económico', icon: '📊', value: '100%+ presupuestal', color: '#E3B85A' },
            { label: 'Ambiental', icon: '🌿', value: '−40% desperdicio agua', color: '#A8D08D' },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center border border-white/5"
              style={{ background: s.color + '10' }}
            >
              <span className="text-3xl block mb-2">{s.icon}</span>
              <strong className="block font-headline text-sm" style={{ color: s.color }}>{s.value}</strong>
              <span className="text-white/40 text-xs uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Sustainability;
