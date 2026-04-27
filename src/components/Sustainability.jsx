import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Leaf, HeartHandshake, TrendingUp } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="w-full">
      <div className="mb-16">
        <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-4 text-[var(--color-wheat)]">5. Pilares de Sostenibilidad</h3>
        <p className="font-body text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
          Estrategia integral para asegurar un impacto positivo en el entorno, la sociedad y las finanzas a largo plazo.
        </p>
      </div>

      <div className="relative pl-6 md:pl-12">
        {/* Línea conectora vertical */}
        <div className="absolute top-0 bottom-0 left-[23px] md:left-[47px] w-[2px] bg-gradient-to-b from-[var(--color-tomato)] via-[var(--color-wheat)] to-[var(--color-cream)] opacity-30"></div>

        <div className="flex flex-col gap-16">
          {/* Social */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              {/* Nodo en la línea */}
              <div className="absolute -left-[45px] md:-left-[55px] top-4 w-10 h-10 rounded-full bg-black border-4 border-[var(--color-tomato)] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,99,71,0.3)]">
                <div className="w-3 h-3 rounded-full bg-[var(--color-tomato)] animate-pulse"></div>
              </div>
              
              <div className="card-glass-dark p-8 rounded-2xl bg-black/40 border border-white/5 hover:border-[var(--color-tomato)]/30 transition-colors duration-500 group">
                <div className="flex items-center gap-4 mb-4">
                  <HeartHandshake size={32} className="text-[var(--color-tomato)] group-hover:scale-110 transition-transform" />
                  <h4 className="m-0 font-headline text-2xl text-white">Sostenibilidad Social</h4>
                </div>
                <p className="text-white/80 leading-relaxed m-0 text-sm md:text-base group-hover:text-white transition-colors">
                  La empresa centra su esfuerzo en la estabilidad laboral de largo plazo para sus 30 empleados. Evitan el crecimiento desmesurado para prevenir despidos futuros, mantienen salarios competitivos, y seleccionan ubicaciones para la fábrica (Sabaneta central) que garantizan seguridad y acceso a transporte público (Metro) pensando 100% en el bienestar del operario.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Económica */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Nodo en la línea */}
              <div className="absolute -left-[45px] md:-left-[55px] top-4 w-10 h-10 rounded-full bg-black border-4 border-[var(--color-wheat)] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(238,222,180,0.3)]">
                <div className="w-3 h-3 rounded-full bg-[var(--color-wheat)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <div className="card-glass-dark p-8 rounded-2xl bg-black/40 border border-white/5 hover:border-[var(--color-wheat)]/30 transition-colors duration-500 group">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp size={32} className="text-[var(--color-wheat)] group-hover:scale-110 transition-transform" />
                  <h4 className="m-0 font-headline text-2xl text-white">Sostenibilidad Económica</h4>
                </div>
                <p className="text-white/80 leading-relaxed m-0 text-sm md:text-base group-hover:text-white transition-colors">
                  Mantienen un cumplimiento presupuestal del 100%+ mensual. Su estrategia "Asset-Light" evita inmovilizar capital comprando bodegas (prefieren arrendar) para reinvertir toda su ganancia pura directamente en adquisición de maquinaria (secadoras y ultracongeladores) y expansión del core de negocio.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Ambiental */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="relative">
              {/* Nodo en la línea */}
              <div className="absolute -left-[45px] md:-left-[55px] top-4 w-10 h-10 rounded-full bg-black border-4 border-[#A8D08D] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,208,141,0.3)]">
                <div className="w-3 h-3 rounded-full bg-[#A8D08D] animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="card-glass-dark p-8 rounded-2xl bg-black/40 border border-white/5 hover:border-[#A8D08D]/30 transition-colors duration-500 group">
                <div className="flex items-center gap-4 mb-4">
                  <Leaf size={32} className="text-[#A8D08D] group-hover:scale-110 transition-transform" />
                  <h4 className="m-0 font-headline text-2xl text-white">Sostenibilidad Ambiental</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base group-hover:text-white transition-colors">
                  Il Castello justifica una base ambiental intrínsecamente positiva gracias al uso de <strong className="text-white">ingredientes simples y naturales</strong>, sin conservantes químicos que contaminen el ciclo del agua, y su fuerte línea de <strong className="text-white">pasta seca</strong>, la cual reduce drásticamente la huella de carbono al no requerir la intensiva cadena de frío (refrigeración) que exige la pasta fresca. 
                </p>
                <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                   <ul className="m-0 p-0 list-none flex flex-col gap-4">
                      <li className="flex gap-3 items-start text-white/70 text-sm leading-relaxed">
                        <span className="text-[#A8D08D] mt-1">✦</span>
                        <span><strong className="text-white">Manejo de Residuos:</strong> Implementación de compostaje industrial para residuos orgánicos. La merma es redirigida a granjas locales (Economía Circular).</span>
                      </li>
                      <li className="flex gap-3 items-start text-white/70 text-sm leading-relaxed">
                        <span className="text-[#A8D08D] mt-1">✦</span>
                        <span><strong className="text-white">Eficiencia Hídrica:</strong> Sistemas cerrados de recirculación de agua en enfriamiento térmico, reduciendo el desperdicio de agua potable en un 40%.</span>
                      </li>
                      <li className="flex gap-3 items-start text-white/70 text-sm leading-relaxed">
                        <span className="text-[#A8D08D] mt-1">✦</span>
                        <span><strong className="text-white">Optimización Energética:</strong> Planeación para contenedores llenos evitando fletes parciales (LCL). En planta, uso de LED y aislamiento térmico optimizado.</span>
                      </li>
                      <li className="flex gap-3 items-start text-white/70 text-sm leading-relaxed">
                        <span className="text-[#A8D08D] mt-1">✦</span>
                        <span><strong className="text-white">Transición de Empaques:</strong> Migración de plásticos hacia películas biodegradables y bolsas Kraft con barreras orgánicas para exportación.</span>
                      </li>
                   </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
