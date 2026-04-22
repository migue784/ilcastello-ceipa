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
    <div className="mb-24">
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-wheat)' }}>Análisis PESTEL Comparativo</h3>
        <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', color: 'white', maxWidth: '900px' }}>
          Evaluación estratégica del macroentorno en sus seis dimensiones críticas. Se contrasta la realidad operativa y nacional (Sabaneta, Colombia) frente a las oportunidades y retos del mercado objetivo de expansión (Costas y San José, Costa Rica).
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {pestelData.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <div className="card-glass-dark" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: '12px',
              borderLeft: '4px solid rgba(238, 222, 180, 0.4)'
            }}>
              
              {/* Contenedor Flex para Desktop */}
              <div className="flex flex-col md:flex-row w-full">
                
                {/* Header (Letra y Título) */}
                <div style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                }} className="md:w-1/4 border-b md:border-b-0 md:border-r border-white/10 flex-shrink-0">
                  <div style={{ 
                    background: 'rgba(238, 222, 180, 0.15)',
                    width: '45px', height: '45px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    borderRadius: '10px',
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'var(--color-wheat)'
                  }}>
                    {item.letter}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-wheat)', letterSpacing: '0.05em' }}>{item.title}</h4>
                  </div>
                </div>

                {/* Columnas de Análisis */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', flex: 1 }}>
                  
                  {/* Nacional */}
                  <div style={{ padding: '1.5rem' }} className="border-b md:border-b-0 md:border-r border-white/10">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>🇨🇴</span>
                      <h5 style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, color: 'white' }}>Nacional (Colombia)</h5>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9, color: 'white' }}>
                      {item.national}
                    </p>
                  </div>

                  {/* Internacional */}
                  <div style={{ padding: '1.5rem', background: 'rgba(238, 222, 180, 0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>🇨🇷</span>
                      <h5 style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, color: 'white' }}>Internacional (Costa Rica)</h5>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.95, color: 'var(--color-wheat)' }}>
                      {item.international}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default PestelAnalysis;
