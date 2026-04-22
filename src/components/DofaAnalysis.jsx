import React from 'react';
import ScrollReveal from './ScrollReveal';
import { TrendingUp, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const DofaAnalysis = () => {
  const dofaData = [
    {
      type: "Fortalezas",
      icon: <ShieldCheck size={28} color="#A8D08D" />,
      color: "#A8D08D",
      items: [
        "Capital humano invaluable: Personal con alta antigüedad, lo que garantiza una estandarización empírica y perfecta de las recetas.",
        "Diversificación de proveeduría: Tienen relación con varios proveedores de sémola (mitigando riesgos), aunque sostienen una alianza fuerte con el principal por maquila.",
        "Nivel altísimo de fidelización con chefs (Canal HORECA), soportado por un servicio al cliente ultra-personalizado y directo.",
        "Manejo de inventario estratégico (Bajo stock) que disminuye los costos de almacenamiento y garantiza total frescura."
      ]
    },
    {
      type: "Oportunidades",
      icon: <TrendingUp size={28} color="var(--color-wheat)" />,
      color: "var(--color-wheat)",
      items: [
        "Transición e implementación actual de Inteligencia Artificial para la toma de pedidos a través de WhatsApp Business y CRM.",
        "Expansión agresiva del área Institucional y venta directa (ya que la maquila aporta volumen pero la venta HORECA aporta la rentabilidad real).",
        "Mercado de las 'islas' del Caribe (B2B Hotelero) receptivo a productos ultracongelados premium listos para cocción rápida."
      ]
    },
    {
      type: "Debilidades",
      icon: <AlertTriangle size={28} color="var(--color-tomato)" />,
      color: "var(--color-tomato)",
      items: [
        "Curva de aprendizaje tecnológica lenta debido a la edad promedio alta del personal (resistencia inicial a la Inteligencia Artificial).",
        "Procesos de planta altamente manuales que ralentizan la producción frente a demandas de volumen extremo.",
        "Estructura comercial 'demasiado' dependiente del boca a boca o referenciación de chefs, sin distribuidores tercerizados escalables."
      ]
    },
    {
      type: "Amenazas",
      icon: <Zap size={28} color="#FFB74D" />,
      color: "#FFB74D",
      items: [
        "Vulnerabilidad a los altos costos del Transporte Nacional, el factor financiero que 'más golpea' a la compañía hoy en día.",
        "Variabilidad de precio en las Materias Primas críticas: La importación de Sémola pura de Italia se ha vuelto prohibitiva en costos.",
        "Riesgos inflacionarios sobre los insumos básicos diarios (huevo, pollo, carne, lácteos)."
      ]
    }
  ];

  return (
    <div>
      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-wheat)' }}>Análisis DOFA</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        paddingBottom: '2rem'
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
