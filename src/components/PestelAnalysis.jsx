import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Landmark, TrendingUp, Users, Cpu, Leaf, Scale } from 'lucide-react';

const PestelAnalysis = () => {
  const pestelData = [
    {
      letter: "P",
      title: "Político",
      national: "Estabilidad regulatoria local pero incertidumbre tributaria continua y cargas impositivas para las PYMES.",
      international: "Tratado de Libre Comercio (TLC) vigente entre Colombia y Costa Rica que facilita la entrada comercial sin barreras severas."
    },
    {
      letter: "E",
      title: "Económico",
      national: "Inflación alta en materias primas críticas (huevo, sémola pura) y fletes de transporte nacional altamente prohibitivos.",
      international: "Flujo constante de capital por turismo de alto nivel (hoteles 5 estrellas), permitiendo comercializar a mejor precio (alto EBITDA)."
    },
    {
      letter: "S",
      title: "Social",
      national: "Personal operativo con alta edad promedio (mucha tradición artesanal empírica, pero severa resistencia al cambio tecnológico).",
      international: "Alta demanda de turistas internacionales norteamericanos y europeos que exigen gastronomía premium de cocción rápida."
    },
    {
      letter: "T",
      title: "Tecnológico",
      national: "Transición lenta hacia la digitalización operativa. Uso apenas básico de Inteligencia Artificial para atención y CRM.",
      international: "Requisito técnico indispensable de logística y trazabilidad estricta en cadena de frío (-20°C) para envíos LCL marítimos."
    },
    {
      letter: "E",
      title: "Ecológico",
      national: "Esfuerzos incipientes por compostaje de residuos orgánicos y optimización de energía de los secaderos en la planta de Sabaneta.",
      international: "Mercado pionero mundial en ecoturismo y sostenibilidad, exigiendo de facto que los empaques HORECA sean amigables o biodegradables."
    },
    {
      letter: "L",
      title: "Legal",
      national: "Normatividad estricta de salubridad y manipulación de alimentos (INVIMA) junto con leyes laborales locales muy pesadas.",
      international: "Requisitos aduaneros de nacionalización y registros sanitarios ineludibles del Ministerio de Salud costarricense para alimentos de origen animal."
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-10">
        <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-4 text-[var(--color-wheat)]">2. Análisis PESTEL Comparativo</h3>
        <p className="font-body text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
          Evaluación estratégica del macroentorno en sus seis dimensiones críticas. Se contrasta la realidad operativa y nacional (Sabaneta, Colombia) frente a las oportunidades y retos del mercado objetivo de expansión (Costa Rica).
        </p>
      </div>

      <div className="flex flex-col space-y-6">
        {pestelData.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <div className="card-glass-dark relative flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-wheat)]/30 transition-all duration-500 group bg-black/40">
              
              {/* NACIONAL (Izquierda) */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative bg-gradient-to-r from-transparent to-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇨🇴</span>
                  <h5 className="m-0 text-sm font-headline uppercase tracking-widest text-white/50">Nacional</h5>
                </div>
                <p className="m-0 text-sm md:text-base leading-relaxed text-white/90 group-hover:text-white transition-colors text-balance">
                  {item.national}
                </p>
              </div>

              {/* MEDIO (Insignia Versus) */}
              <div className="md:w-32 flex items-center justify-center py-4 md:py-0 relative z-10 border-y md:border-y-0 md:border-x border-white/10 bg-black/60 group-hover:bg-black/80 transition-colors">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-wheat)]/10 flex items-center justify-center border border-[var(--color-wheat)]/30 group-hover:scale-110 group-hover:bg-[var(--color-wheat)] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(238,222,180,0.1)] group-hover:shadow-[0_0_20px_rgba(238,222,180,0.4)]">
                    <span className="font-headline text-2xl font-bold text-[var(--color-wheat)] group-hover:text-black transition-colors">{item.letter}</span>
                  </div>
                  <span className="font-headline uppercase text-[10px] tracking-widest text-[var(--color-wheat)]/70">{item.title}</span>
                </div>
              </div>

              {/* INTERNACIONAL (Derecha) */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative bg-gradient-to-l from-transparent to-[var(--color-wheat)]/5 group-hover:to-[var(--color-wheat)]/10 transition-colors">
                <div className="flex items-center gap-3 mb-4 md:flex-row-reverse md:text-right">
                  <span className="text-2xl">🇨🇷</span>
                  <h5 className="m-0 text-sm font-headline uppercase tracking-widest text-[var(--color-wheat)]/70">Internacional</h5>
                </div>
                <p className="m-0 text-sm md:text-base leading-relaxed text-[var(--color-wheat)]/90 group-hover:text-[var(--color-wheat)] transition-colors text-balance md:text-right">
                  {item.international}
                </p>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default PestelAnalysis;
