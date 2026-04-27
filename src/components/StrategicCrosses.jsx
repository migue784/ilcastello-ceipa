import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Target, ArrowRight, CheckCircle2 } from 'lucide-react';

const StrategicCrosses = () => {
  const tows = [
    {
      title: "Estrategia FO (Fortalezas + Oportunidades)",
      desc: "Aprovechar la alta calidad certificada (F) y la capacidad productiva ociosa de congelados (F) para ingresar al sector hotelero (Horeca) de alto nivel en el Caribe (O), garantizando un suministro confiable de pasta artesanal.",
      color: "var(--color-basil)"
    },
    {
      title: "Estrategia DO (Debilidades + Oportunidades)",
      desc: "Contratar consultoría especializada en exportación y usar operadores logísticos internacionales en cadena de frío (D) para capitalizar el mercado de las islas del Caribe (O) sin desviar el core operativo interno de la empresa.",
      color: "var(--color-wheat)"
    },
    {
      title: "Estrategia FA (Fortalezas + Amenazas)",
      desc: "Posicionar la propuesta de 'pasta al huevo sin conservantes' (F) y trazabilidad total para defenderse del ingreso agresivo de marcas multinacionales industriales y económicas (A) en el mercado objetivo.",
      color: "var(--color-charcoal)"
    },
    {
      title: "Estrategia DA (Debilidades + Amenazas)",
      desc: "Enfocarse inicialmente en mercados de alta cercanía logística y menor regulación (Aruba/Curazao/República Dominicana) para evitar los excesivos costos impositivos y regulatorios colombianos y reducir el riesgo de exportación (A) mitigando el desconocimiento en comercio exterior (D).",
      color: "var(--color-tomato)"
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-10">
        <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-4 text-[var(--color-wheat)]">4. Cruces Estratégicos (Matriz TOWS)</h3>
        <p className="font-body text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
          Con base en las 5 Fuerzas y el DOFA estructurado, se generaron las siguientes estrategias de acción directa para guiar el proceso de internacionalización:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {tows.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <div 
              className="card-glass-dark p-8 h-full rounded-2xl bg-black/40 border border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              style={{ borderTop: `4px solid ${item.color}` }}
            >
              <h4 className="font-headline text-xl mb-4 group-hover:text-white transition-colors" style={{ color: item.color }}>{item.title}</h4>
              <p className="text-white/80 leading-relaxed m-0 text-sm md:text-base group-hover:text-white/95 transition-colors">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-8 text-[var(--color-tomato)]">Objetivo de Internacionalización</h3>
        <ScrollReveal direction="up">
          <div className="card-glass-dark p-8 md:p-12 rounded-3xl bg-black/50 border border-[var(--color-tomato)]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <Target size={200} color="var(--color-tomato)" />
            </div>

            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-tomato)]/10 flex items-center justify-center flex-shrink-0 border border-[var(--color-tomato)]/30">
                  <Target size={32} color="var(--color-tomato)" />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed m-0 italic text-[var(--color-wheat)] font-light border-l-4 border-[var(--color-tomato)]/50 pl-6 py-2">
                  "Exportar 2.000 kg mensuales de raviolis ultracongelados premium al sector HORECA (hoteles y restaurantes) en Punta Cana, República Dominicana, a partir del primer semestre de 2026; logrando contratos fijos de suministro con al menos 3 cadenas hoteleras internacionales de lujo mediante alianzas estratégicas con operadores logísticos de cadena de frío."
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                {[
                  ['Specific', 'Exportar raviolis congelados al sector HORECA en Punta Cana.'],
                  ['Measurable', '2.000 kg mensuales y 3 cadenas hoteleras aliadas.'],
                  ['Achievable', 'La empresa cuenta hoy con +50% de capacidad instalada ociosa y capital.'],
                  ['Relevant', 'Mitiga el impacto de los altos impuestos locales y el riesgo nacional.'],
                  ['Time-bound', 'A partir del primer semestre del 2026.']
                ].map(([title, desc], i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-[#A8D08D] mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-[var(--color-wheat)] font-headline tracking-wide">{title}</strong>
                      <span className="text-sm text-white/70 leading-snug">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default StrategicCrosses;
