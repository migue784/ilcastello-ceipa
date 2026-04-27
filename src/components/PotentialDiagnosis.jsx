import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Target, TrendingUp, Compass, Flag, Clock } from 'lucide-react';

const PotentialDiagnosis = () => {
  return (
    <div className="space-y-24">
      {/* Diagnóstico Excel */}
      <div>
        <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-4 text-[var(--color-wheat)]">1. Diagnóstico de Potencialidades</h3>
        <p className="font-body text-base md:text-lg opacity-80 leading-relaxed mb-10 max-w-3xl">
          Resultados gráficos arrojados por la herramienta de diagnóstico en Excel, evaluando la capacidad técnica, comercial y financiera de Il Castello para exportar.
        </p>
        
        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {[
            {
              img: '/diagnostico/img1.png',
              title: 'Proyección FOB (Exportaciones)',
              desc: 'Análisis del valor proyectado en USD (FOB) demostrando la viabilidad y los retornos iniciales esperados durante los primeros 12 meses operativos.',
              className: 'md:col-span-2 md:row-span-2',
              imgHeight: 'min-h-[300px]'
            },
            {
              img: '/diagnostico/img2.png',
              title: 'Geolocalización Estratégica',
              desc: 'Mapeo de rutas hacia Centroamérica y Norteamérica, evaluando eficiencia y cercanía.',
              className: 'md:col-span-1',
              imgHeight: 'min-h-[150px]'
            },
            {
              img: '/diagnostico/img3.png',
              title: 'Matriz de Ponderación',
              desc: 'Evaluación cuantitativa macroeconómica para selección del país objetivo.',
              className: 'md:col-span-1',
              imgHeight: 'min-h-[150px]'
            },
            {
              img: '/diagnostico/img4.png',
              title: 'Participación Esperada (13%)',
              desc: 'Meta de penetración de mercado calculada sobre el total de importaciones HORECA en el destino.',
              className: 'md:col-span-2',
              imgHeight: 'min-h-[200px]'
            },
            {
              img: '/diagnostico/img5.png',
              title: 'Análisis Arancelario',
              desc: 'Desglose técnico de la Matriz de Selección y beneficios del TLC.',
              className: 'md:col-span-1',
              imgHeight: 'min-h-[200px]'
            }
          ].map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className={`card-glass-dark p-6 h-full flex flex-col gap-4 bg-black/30 rounded-2xl border border-white/5 hover:border-[var(--color-wheat)]/50 transition-colors duration-500 group ${item.className || ''}`}>
                <h4 className="m-0 text-lg font-headline uppercase text-[var(--color-wheat)] border-b border-white/10 pb-3 group-hover:border-[var(--color-wheat)]/30 transition-colors">
                  {item.title}
                </h4>
                <div className={`flex-1 flex items-center justify-center bg-white/5 rounded-xl p-4 overflow-hidden relative ${item.imgHeight}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain max-h-[400px] transition-transform duration-700 group-hover:scale-105 relative z-0" />
                </div>
                <p className="opacity-80 text-sm leading-relaxed m-0 text-white group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Objetivo SMART */}
      <div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-wheat)' }}>Objetivo de Internacionalización (SMART)</h3>
        <ScrollReveal direction="up">
          <div className="card-padding" style={{ background: 'var(--color-cream)', borderRadius: '12px', borderLeft: '5px solid var(--color-basil)', color: '#1a1a1a' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, textAlign: 'justify', marginBottom: '2rem', color: '#1a1a1a' }}>
              Basado en las potencialidades encontradas, el objetivo rector de expansión para Il Castello se formula bajo la metodología SMART:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Target size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)', fontWeight: 'bold' }}>S (Específico):</h4>
                  <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem', color: '#1a1a1a', lineHeight: '1.5' }}>Iniciar la exportación de pastas rellenas ultracongeladas (Raviolis premium) hacia el canal HORECA en San José y zonas costeras de Costa Rica.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><TrendingUp size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)', fontWeight: 'bold' }}>M (Medible):</h4>
                  <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem', color: '#1a1a1a', lineHeight: '1.5' }}>Alcanzar un volumen de exportación de 1,500 kg mensuales durante el primer año operativo, representando un 15% del total de las ventas netas de la compañía.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Compass size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)', fontWeight: 'bold' }}>A (Alcanzable):</h4>
                  <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem', color: '#1a1a1a', lineHeight: '1.5' }}>Mediante la contratación de servicios de transporte refrigerado internacional y aprovechando la capacidad instalada actualmente ociosa (30%) de la fábrica en Sabaneta.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Flag size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)', fontWeight: 'bold' }}>R (Relevante/Retador):</h4>
                  <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem', color: '#1a1a1a', lineHeight: '1.5' }}>Reducir la extrema dependencia de la compañía hacia el mercado local y los fletes nacionales, aprovechando la alta demanda de turismo 5 estrellas en Centroamérica para mejorar el EBITDA.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Clock size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)', fontWeight: 'bold' }}>T (Temporal):</h4>
                  <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem', color: '#1a1a1a', lineHeight: '1.5' }}>Cumplir con este objetivo en un plazo estricto de 12 meses (Diciembre de 2026), logrando la consolidación del primer contenedor comercial en Costa Rica.</p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PotentialDiagnosis;
