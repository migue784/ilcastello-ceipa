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
    <div style={{ marginTop: '4rem' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>B6. Cruces Estratégicos (Matriz TOWS)</h3>
      <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.6' }}>
        Con base en las 5 Fuerzas y el DOFA estructurado, se generaron las siguientes estrategias de acción directa para guiar el proceso de internacionalización:
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {tows.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              borderLeft: `5px solid ${item.color}`,
              boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
              height: '100%'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-charcoal)', fontSize: '1.1rem' }}>{item.title}</h4>
              <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div style={{ marginTop: '5rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-tomato)' }}>B7. Objetivo de Internacionalización (Metodología SMART)</h3>
        <ScrollReveal direction="up">
          <div style={{
            background: 'var(--color-charcoal)',
            color: 'var(--color-cream)',
            padding: '3rem',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <Target size={48} color="var(--color-tomato)" />
              <div>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', margin: '0 0 2rem 0', fontStyle: 'italic', color: 'var(--color-wheat)' }}>
                  "Exportar 2.000 kg mensuales de raviolis ultracongelados premium al sector HORECA (hoteles y restaurantes) en Punta Cana, República Dominicana, a partir del primer semestre de 2026; logrando contratos fijos de suministro con al menos 3 cadenas hoteleras internacionales de lujo mediante alianzas estratégicas con operadores logísticos de cadena de frío."
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    ['Specific', 'Exportar raviolis congelados al sector HORECA en Punta Cana.'],
                    ['Measurable', '2.000 kg mensuales y 3 cadenas hoteleras aliadas.'],
                    ['Achievable', 'La empresa cuenta hoy con +50% de capacidad instalada ociosa y capital.'],
                    ['Relevant', 'Mitiga el impacto de los altos impuestos locales y el riesgo nacional.'],
                    ['Time-bound', 'A partir del primer semestre del 2026.']
                  ].map(([title, desc], i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color="var(--color-basil)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: 'block', color: 'var(--color-wheat)' }}>{title}</strong>
                        <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default StrategicCrosses;
