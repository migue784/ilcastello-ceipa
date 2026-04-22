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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {[1, 2, 3, 4, 5].map((num, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="card-glass-dark" style={{ padding: '1rem', height: '100%' }}>
                <img 
                  src={`/diagnostico/img${num}.png`} 
                  alt={`Gráfico Diagnóstico ${num}`} 
                  style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Objetivo SMART */}
      <div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-basil)' }}>Objetivo de Internacionalización (SMART)</h3>
        <ScrollReveal direction="up">
          <div className="card-padding" style={{ background: 'var(--color-cream-dark)', borderRadius: '12px', borderLeft: '5px solid var(--color-basil)' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, textAlign: 'justify', marginBottom: '2rem' }}>
              Basado en las potencialidades encontradas, el objetivo rector de expansión para Il Castello se formula bajo la metodología SMART:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Target size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)' }}>S (Específico):</h4>
                  <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>Iniciar la exportación de pastas rellenas ultracongeladas (Raviolis premium) hacia el canal HORECA en San José y zonas costeras de Costa Rica.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><TrendingUp size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)' }}>M (Medible):</h4>
                  <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>Alcanzar un volumen de exportación de 1,500 kg mensuales durante el primer año operativo, representando un 15% del total de las ventas netas de la compañía.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Compass size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)' }}>A (Alcanzable):</h4>
                  <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>Mediante la contratación de servicios de transporte refrigerado internacional y aprovechando la capacidad instalada actualmente ociosa (30%) de la fábrica en Sabaneta.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Flag size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)' }}>R (Relevante/Retador):</h4>
                  <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>Reducir la extrema dependencia de la compañía hacia el mercado local y los fletes nacionales, aprovechando la alta demanda de turismo 5 estrellas en Centroamérica para mejorar el EBITDA.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(56, 102, 65, 0.1)', padding: '0.6rem', borderRadius: '50%' }}><Clock size={20} color="var(--color-basil)" /></div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--color-charcoal)' }}>T (Temporal):</h4>
                  <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>Cumplir con este objetivo en un plazo estricto de 12 meses (Diciembre de 2026), logrando la consolidación del primer contenedor comercial en Costa Rica.</p>
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
