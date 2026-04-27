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
    <div className="w-full">
      <div className="mb-10">
        <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-4 text-[var(--color-wheat)]">3. Matriz DOFA</h3>
        <p className="font-body text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
          Diagnóstico interno y externo actual de Il Castello para afrontar la internacionalización.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Cruz central decorativa para enfatizar cuadrantes */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 -translate-x-1/2 z-0 pointer-events-none"></div>

        {dofaData.map((section, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <div className="card-glass-dark h-full p-8 flex flex-col gap-6 relative z-10 bg-black/40 border border-white/5 hover:bg-black/60 transition-colors duration-500 rounded-2xl group">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ borderColor: section.color + '40', backgroundColor: section.color + '10' }}>
                  {section.icon}
                </div>
                <h4 className="m-0 font-headline text-2xl uppercase tracking-wider" style={{ color: section.color }}>{section.type}</h4>
              </div>
              <ul className="m-0 p-0 list-none flex flex-col gap-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-white/80 group-hover:text-white transition-colors text-sm md:text-base leading-relaxed">
                    <span className="mt-1 flex-shrink-0" style={{ color: section.color }}>✦</span>
                    <span>{item}</span>
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
