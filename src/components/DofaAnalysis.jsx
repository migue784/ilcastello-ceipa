import React from 'react';
import ScrollReveal from './ScrollReveal';
import { TrendingUp, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const DofaAnalysis = () => {
  const dofaData = [
    {
      type: "Fortalezas",
      icon: <ShieldCheck size={28} color="var(--color-basil)" />,
      color: "var(--color-basil)",
      items: [
        "Alta calidad artesanal comprobada (maquilan marca premium a Grupo Nutresa).",
        "Uso exclusivo de materias primas finas: Sémola de trigo durum y pasta al huevo.",
        "Procesos únicos: Secado lento (14 hrs) y ultracongelación (-20°C) conservando el sabor.",
        "Mucha capacidad instalada ociosa para expandirse si entran nuevos pedidos."
      ]
    },
    {
      type: "Oportunidades",
      icon: <TrendingUp size={28} color="var(--color-wheat)" />,
      color: "var(--color-wheat)",
      items: [
        "Mercado de las 'islas' (Punta Cana, Curazao, Cancún) enfocado 100% en turismo B2B Horeca.",
        "Aumento en el consumo de pasta en Colombia (influencia migratoria y gentrificación en Medellín).",
        "Alta demanda de restaurantes premium que buscan evitar hacer su propia pasta artesanal."
      ]
    },
    {
      type: "Debilidades",
      icon: <AlertTriangle size={28} color="var(--color-tomato)" />,
      color: "var(--color-tomato)",
      items: [
        "Dependencia logística riesgosa: Transporte nacional de cadena de frío (Ransa) es ineficiente y genera vetos de grandes superficies.",
        "Ausencia de un departamento experto en Comercio Exterior para gestionar las exportaciones.",
        "Capacidad tope (70%) en la producción de pasta seca actual sin invertir en nueva maquinaria."
      ]
    },
    {
      type: "Amenazas",
      icon: <Zap size={28} color="var(--color-charcoal)" />,
      color: "var(--color-charcoal)",
      items: [
        "Políticas de gobierno y altas tasas de impuestos (Ej: Impoconsumo en ultraprocesados que encarece productos finales un 39%).",
        "Competencia de multinacionales italianas (Barilla) con pasta industrial más económica a nivel global.",
        "Aumento repentino de devaluación e inflación que afecte ingredientes importados."
      ]
    }
  ];

  return (
    <div>
      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-wheat)' }}>B4. Análisis DOFA</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {dofaData.map((item, index) => (
          <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
            <div className="card-glass-dark" style={{
              padding: '2rem',
              height: '100%',
              borderBottom: `4px solid ${item.color}`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                  {item.icon}
                </div>
                <h4 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--color-wheat)' }}>{item.type}</h4>
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {item.items.map((line, i) => (
                  <li key={i} style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default DofaAnalysis;
