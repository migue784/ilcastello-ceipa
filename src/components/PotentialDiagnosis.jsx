import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Target, TrendingUp, Compass, Flag, Clock } from 'lucide-react';

const PotentialDiagnosis = () => {
  return (
    <div className="space-y-24">
      {/* Diagnóstico Excel */}
      <div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-wheat)' }}>Diagnóstico de Potencialidades de Internacionalización</h3>
        <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
          A continuación se presentan los resultados gráficos arrojados por la herramienta de diagnóstico en Excel, evaluando la capacidad técnica, comercial y financiera de Il Castello para exportar.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              img: '/diagnostico/img1.png',
              title: 'Proyección FOB (Exportaciones)',
              desc: 'Análisis del valor proyectado en USD (FOB) demostrando la viabilidad y los retornos iniciales esperados durante los primeros 12 meses operativos.'
            },
            {
              img: '/diagnostico/img2.png',
              title: 'Geolocalización Estratégica',
              desc: 'Mapeo de rutas hacia Centroamérica y Norteamérica, evaluando la eficiencia de tránsito marítimo y cercanía directa con el Puerto de Cartagena.'
            },
            {
              img: '/diagnostico/img3.png',
              title: 'Matriz de Ponderación',
              desc: 'Evaluación cuantitativa de variables macroeconómicas y logísticas para justificar la pre-selección técnica del país objetivo.'
            },
            {
              img: '/diagnostico/img4.png',
              title: 'Participación Esperada (13%)',
              desc: 'Meta de penetración de mercado calculada sobre el total de importaciones HORECA en el país destino, respaldada por la capacidad ociosa.'
            },
            {
              img: '/diagnostico/img5.png',
              title: 'Análisis Arancelario',
              desc: 'Desglose técnico de la Matriz de Selección, confirmando los beneficios del TLC aplicable y la optimización de los costos de nacionalización.'
            }
          ].map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="card-glass-dark" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--color-wheat)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>{item.title}</h4>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', minHeight: '220px' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', maxHeight: '250px', borderRadius: '4px', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p style={{ opacity: 0.85, fontSize: '0.9rem', lineHeight: '1.6', margin: 0, color: 'white' }}>
                  {item.desc}
                </p>
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
