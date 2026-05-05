import React from 'react';
import ScrollReveal from './ScrollReveal';
import { 
  Globe, 
  Gavel, 
  Cpu, 
  Ship, 
  Building2, 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Anchor, 
  Factory,
  Trophy,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── DATOS DE ENTORNOS (2020–2024) ──────────────────────────────────────────
// Basados en investigación de Banco Mundial, Hofstede Insights, Transparency Int.
// Colombia = país de referencia (origen de Il Castello)

const environments = [
  {
    id: 'cultural',
    title: "Entorno Cultural",
    icon: <Globe className="w-8 h-8 text-primary" />,
    description: "Evaluación de las dimensiones culturales y demográficas que afectan la aceptación de productos premium.",
    indicators: [
      {
        name: "Indulgencia (Hofstede)",
        source: "Hofstede Insights (2023)",
        data: {
          headers: ['País', 'Puntaje (0-100)', 'Interpretación'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '83', 'Muy Indulgente'],
            ['🇵🇦 Panamá', '67', 'Indulgente'],
            ['🇲🇽 México', '97', 'Extremadamente Indulgente'],
            ['🇸🇻 El Salvador', '67', 'Indulgente'],
            ['🇩🇴 Rep. Dominicana', '95', 'Máxima Indulgencia'],
          ]
        },
        analysis: "La dimensión de indulgencia es un factor crítico para Il Castello. México, con un puntaje de 97, y República Dominicana, con 95, presentan los perfiles de consumo más orientados al placer y la gratificación personal en la región. En estas culturas, el consumidor valora la experiencia sensorial y está más dispuesto a pagar un premium por calidad artesanal, viendo la comida no solo como nutrición sino como un 'premio'. Esto facilita enormemente el posicionamiento de una pasta artesanal ultracongelada en el canal HORECA, ya que los chefs pueden justificar precios más altos basados en la indulgencia del comensal. Panamá y El Salvador (67) son positivos pero requieren un marketing que equilibre el placer con la tradición familiar.",
        rating: { pa: 4, mx: 5, sv: 4, rd: 5 },
      },
      {
        name: "Tasa de Urbanización",
        source: "Banco Mundial (2023)",
        data: {
          headers: ['País', 'Urbanización (%)', 'Crecimiento'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '82.2%', '+0.8%'],
            ['🇵🇦 Panamá', '69.9%', '+1.1%'],
            ['🇲🇽 México', '81.3%', '+1.0%'],
            ['🇸🇻 El Salvador', '76.0%', '+0.9%'],
            ['🇩🇴 Rep. Dominicana', '85.0%', '+1.2%'],
          ]
        },
        analysis: "La urbanización es vital para la logística de frío de Il Castello. México (81.3%) y República Dominicana (85%) muestran una alta concentración en polos urbanos y turísticos, lo que facilita la distribución capilar hacia hoteles y restaurantes de alta gama. En México, la red de ciudades medianas y grandes permite escalar el modelo de negocio más allá de la capital, alcanzando hubs gastronómicos como Monterrey o Guadalajara. Panamá, aunque con menor tasa general, concentra su consumo en el área metropolitana del Canal, permitiendo una logística de 'última milla' muy eficiente. Mercados urbanizados garantizan una infraestructura de energía más estable, crucial para mantener la cadena de frío de la pasta.",
        rating: { pa: 4, mx: 5, sv: 3, rd: 5 },
      },
      {
        name: "Distancia al Poder (Hofstede)",
        source: "Hofstede Insights (2023)",
        data: {
          headers: ['País', 'Puntaje (0-100)', 'Estructura'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '67', 'Jerárquica'],
            ['🇵🇦 Panamá', '95', 'Muy Jerárquica'],
            ['🇲🇽 México', '81', 'Jerárquica'],
            ['🇸🇻 El Salvador', '66', 'Jerárquica'],
            ['🇩🇴 Rep. Dominicana', '65', 'Jerárquica'],
          ]
        },
        analysis: "La Distancia al Poder (PDI) influye en cómo Il Castello debe abordar a sus clientes B2B. Panamá (95) y México (81) tienen estructuras muy jerárquicas; aquí, la venta debe dirigirse a los altos niveles directivos de las cadenas hoteleras, utilizando argumentos de prestigio y exclusividad. En estos mercados, el 'quién' recomienda el producto es tan importante como la calidad misma. República Dominicana y El Salvador (65-66) mantienen jerarquías pero permiten una interacción más fluida con los chefs ejecutivos, quienes tienen mayor autonomía técnica en la selección de proveedores. La estrategia de ventas debe adaptarse: vertical en Panamá/México y consultiva en RD/Salvador.",
        rating: { pa: 3, mx: 4, sv: 4, rd: 4 },
      }
    ]
  },
  {
    id: 'political',
    title: "Entorno Político y Legal",
    icon: <Gavel className="w-8 h-8 text-primary" />,
    description: "Análisis de la estabilidad institucional y las regulaciones específicas del sector alimentos.",
    indicators: [
      {
        name: "Regulaciones Específicas del Sector",
        source: "Entidades de Salud Nacionales (2024)",
        data: {
          headers: ['País', 'Ente Regulador', 'Complejidad'],
          rows: [
            ['🇨🇴 Colombia (ref.)', 'INVIMA', 'Alta (Origen)'],
            ['🇵🇦 Panamá', 'APA / MINSA', 'Media-Alta'],
            ['🇲🇽 México', 'COFEPRIS', 'Alta'],
            ['🇸🇻 El Salvador', 'MINSAL', 'Baja-Media'],
            ['🇩🇴 Rep. Dominicana', 'DIGEMAPS', 'Media'],
          ]
        },
        analysis: "El cumplimiento fitosanitario es la mayor barrera técnica. México, a través de COFEPRIS, impone estándares rigurosos de etiquetado (NOM-051) y trazabilidad, lo que exige a Il Castello una adaptación precisa de sus empaques. Panamá (APA) también mantiene una vigilancia estricta sobre productos importados. Por el contrario, El Salvador ofrece procesos más ágiles bajo el marco del TLC, facilitando una entrada más rápida. República Dominicana exige registros que, aunque lentos, son predecibles. Para Il Castello, obtener estos sellos de calidad internacional no solo es un requisito legal, sino una garantía de seguridad alimentaria que genera confianza inmediata en los jefes de compras de los resorts internacionales.",
        rating: { pa: 3, mx: 4, sv: 5, rd: 4 },
      },
      {
        name: "Percepción de Corrupción (CPI)",
        source: "Transparency International (2023)",
        data: {
          headers: ['País', 'Puntaje (0-100)', 'Nivel'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '40', 'Bajo'],
            ['🇵🇦 Panamá', '35', 'Bajo'],
            ['🇲🇽 México', '31', 'Crítico'],
            ['🇸🇻 El Salvador', '31', 'Crítico'],
            ['🇩🇴 Rep. Dominicana', '35', 'Bajo'],
          ]
        },
        analysis: "La transparencia es un reto en la región. México y El Salvador (31) presentan los mayores riesgos de discrecionalidad administrativa, lo que puede traducirse en demoras injustificadas en aduanas si la documentación no es perfecta. Esto es crítico para la pasta ultracongelada: cualquier retraso en puerto pone en riesgo la cadena de frío. Panamá y RD (35) muestran una ligera mejora pero aún requieren el uso de agentes aduaneros de alta reputación y procesos digitales transparentes. Il Castello debe mitigar estos riesgos mediante el uso de operadores logísticos certificados (OEA) que aseguren un paso fluido por las fronteras sin recurrir a 'costos ocultos' que erosionen el margen.",
        rating: { pa: 3, mx: 2, sv: 2, rd: 3 },
      },
      {
        name: "Estabilidad Política",
        source: "Banco Mundial / Fragile States Index (2023)",
        data: {
          headers: ['País', 'Percentil Ranking', 'Riesgo'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '15.5', 'Moderado'],
            ['🇵🇦 Panamá', '52.8', 'Bajo'],
            ['🇲🇽 México', '32.5', 'Medio'],
            ['🇸🇻 El Salvador', '48.0', 'Estable'],
            ['🇩🇴 Rep. Dominicana', '55.2', 'Bajo'],
          ]
        },
        analysis: "La estabilidad política asegura la continuidad de los contratos B2B. República Dominicana (55.2) y Panamá (52.8) ofrecen los entornos más seguros para acuerdos a largo plazo, con políticas claras de fomento al turismo y la inversión. México (32.5) presenta una estabilidad funcional pero con retos de seguridad en ciertas rutas logísticas terrestres, lo que exige a Il Castello asegurar la carga. El Salvador (48.0) muestra una notable mejora en estabilidad social que está reactivando la economía de servicios. Para Il Castello, diversificar en estos mercados reduce la dependencia de la volatilidad política colombiana, creando una red de ingresos más resiliente ante crisis locales.",
        rating: { pa: 4, mx: 3, sv: 4, rd: 5 },
      }
    ]
  },
  {
    id: 'tech',
    title: "Entorno Tecnológico y Geoambiental",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    description: "Infraestructura logística, digital y resiliencia ante riesgos climáticos.",
    indicators: [
      {
        name: "Logistics Performance Index (LPI)",
        source: "Banco Mundial (2023)",
        data: {
          headers: ['País', 'LPI Score (0-5)', 'Infraestructura'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '2.9', 'Media'],
            ['🇵🇦 Panamá', '3.4', 'Alta (Hub)'],
            ['🇲🇽 México', '3.1', 'Alta'],
            ['🇸🇻 El Salvador', '2.6', 'Baja'],
            ['🇩🇴 Rep. Dominicana', '3.1', 'Alta'],
          ]
        },
        analysis: "El LPI mide la capacidad de mover mercancía con eficiencia. Panamá (3.4) es el líder indiscutible, ideal para Il Castello por su infraestructura de puertos y centros de acopio refrigerados de clase mundial. México (3.1) y República Dominicana (3.1) cuentan con excelentes puertos (Veracruz/Caucedo) y redes de transporte masivo. Para un producto de cadena de frío, la calidad de la infraestructura portuaria es un seguro de vida. El Salvador (2.6) presenta mayores retos en infraestructura física, lo que obliga a Il Castello a trabajar con partners locales que tengan camiones refrigerados de última generación. La superioridad logística de Panamá permite considerar el país como un posible hub de redistribución para el Caribe.",
        rating: { pa: 5, mx: 4, sv: 2, rd: 4 },
      },
      {
        name: "Penetración de Internet",
        source: "ITU / World Bank (2024)",
        data: {
          headers: ['País', '% Población', 'Potencial Digital'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '78.5%', 'Alto'],
            ['🇵🇦 Panamá', '78.0%', 'Alto'],
            ['🇲🇽 México', '78.6%', 'Muy Alto'],
            ['🇸🇻 El Salvador', '67.7%', 'Medio'],
            ['🇩🇴 Rep. Dominicana', '91.0%', 'Excepcional'],
          ]
        },
        analysis: "La conectividad digital facilita la gestión de pedidos B2B y el marketing. En República Dominicana (91%) y México (78.6%), la alta penetración de internet permite a Il Castello implementar sistemas de pedidos online y seguimiento de carga en tiempo real para sus clientes. Además, facilita el uso de redes sociales para llegar a los directores de alimentos y bebidas de los grandes resorts. En México, el ecosistema digital está muy maduro, permitiendo integraciones con software de inventarios hoteleros. El Salvador (67.7%) aún requiere canales de venta más tradicionales. La digitalización reduce los errores humanos en la toma de pedidos y permite un control de calidad más estricto a distancia.",
        rating: { pa: 4, mx: 4, sv: 3, rd: 5 },
      },
      {
        name: "Índice de Innovación Global (GII)",
        source: "WIPO (2023)",
        data: {
          headers: ['País', 'Puntaje GII', 'Adopción Tech'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '29.3', 'Media'],
            ['🇵🇦 Panamá', '27.4', 'Media'],
            ['🇲🇽 México', '33.6', 'Alta'],
            ['🇸🇻 El Salvador', '20.6', 'Baja'],
            ['🇩🇴 Rep. Dominicana', '23.8', 'Media'],
          ]
        },
        analysis: "México lidera en innovación (33.6) en esta comparativa, lo que garantiza el acceso a tecnologías de vanguardia en almacenamiento y transporte de alimentos. La presencia de startups de logística e IoT en México permite a Il Castello monitorear la temperatura de sus pastas mediante sensores inteligentes. Panamá y RD mantienen niveles aceptables para la operación logística estándar. El Salvador presenta el mayor rezago tecnológico, lo que exige controles de calidad manuales más frecuentes. Operar en mercados innovadores permite a Il Castello optimizar sus costos operativos mediante el uso de empaques más eficientes y sistemas de refrigeración de bajo consumo energético, protegiendo tanto el producto como el medio ambiente.",
        rating: { pa: 4, mx: 5, sv: 2, rd: 3 },
      }
    ]
  },
  {
    id: 'trade',
    title: "Entorno de Comercio Internacional",
    icon: <Ship className="w-8 h-8 text-primary" />,
    description: "Acuerdos comerciales y flujos de bienes entre Colombia y los mercados destino.",
    indicators: [
      {
        name: "Acuerdos Comerciales e Institucionalidad",
        source: "MinComercio / Cámaras Binacionales (2024)",
        data: {
          headers: ['País', 'Acuerdo Vigente', 'Institución Apoyo'],
          rows: [
            ['🇨🇴 Colombia (ref.)', 'N/A', 'ProColombia'],
            ['🇵🇦 Panamá', 'Acuerdo Alcance Parcial', 'ProPanamá'],
            ['🇲🇽 México', 'TLC Colombia-México (G2)', 'Secretaría Economía'],
            ['🇸🇻 El Salvador', 'TLC Triángulo Norte', 'Cámara Col-Sal'],
            ['🇩🇴 Rep. Dominicana', 'Acuerdo Alcance Parcial', 'ProDominicana'],
          ]
        },
        analysis: "Los acuerdos comerciales son el motor de la competitividad. El TLC con México (G2) y El Salvador ofrece ventajas arancelarias profundas que permiten a Il Castello competir en precio sin sacrificar la calidad artesanal. México, al ser un mercado de más de 120 millones de personas, ofrece una escala masiva bajo el amparo de reglas de origen claras. El apoyo de instituciones como ProPanamá o ProDominicana es vital para navegar las normativas locales y conectar con distribuidores mayoristas. Para una pyme como Il Castello, estos acuerdos eliminan la incertidumbre arancelaria y protegen la inversión frente a cambios súbitos en la política comercial externa de los países destino.",
        rating: { pa: 3, mx: 5, sv: 5, rd: 3 },
      },
      {
        name: "Balanza Comercial con Colombia",
        source: "DANE / ProColombia (2023)",
        data: {
          headers: ['País', 'Flujo (Millones USD)', 'Resultado'],
          rows: [
            ['🇵🇦 Panamá', '$2,500+', 'Superávit COL'],
            ['🇲🇽 México', '$1,800+', 'Déficit COL'],
            ['🇸🇻 El Salvador', '$120+', 'Superávit COL'],
            ['🇩🇴 Rep. Dominicana', '$400+', 'Superávit COL'],
          ]
        },
        analysis: "Aunque Colombia tiene déficit comercial con México debido a la importación masiva de manufacturas, el flujo de alimentos procesados desde Colombia hacia México ha crecido consistentemente. Esto indica que los canales logísticos están muy aceitados. Con Panamá y RD, el superávit colombiano facilita la 'aceptación de origen', donde los compradores ya asocian a Colombia con alimentos de alta calidad. Esta madurez comercial asegura que Il Castello encuentre bancos corresponsales y agentes aduaneros con amplia experiencia en el manejo de exportaciones colombianas, reduciendo el riesgo de errores en la documentación de cambio y agilizando el retorno de divisas al país.",
        rating: { pa: 5, mx: 4, sv: 3, rd: 4 },
      },
      {
        name: "Rutas de Exportación y Puertos",
        source: "Líneas Navieras / Puertos (2024)",
        data: {
          headers: ['Destino', 'Puerto Llegada', 'Tiempo Tránsito', 'Frecuencia'],
          rows: [
            ['🇵🇦 Panamá', 'Colón / Balboa', '1-2 Días', 'Diaria'],
            ['🇲🇽 México', 'Veracruz / Altamira', '5-7 Días', 'Semanal'],
            ['🇸🇻 El Salvador', 'Acajutla', '5-6 Días', 'Quincenal'],
            ['🇩🇴 Rep. Dominicana', 'Caucedo / Haina', '3-4 Días', 'Bi-semanal'],
          ]
        },
        analysis: "La logística de exportación es el corazón de la operación. Las rutas hacia Panamá y República Dominicana son las más rápidas y frecuentes, ideales para mantener stocks bajos y alta rotación. México, aunque requiere un tránsito de 5 a 7 días hacia Veracruz, ofrece una infraestructura portuaria de primer nivel que garantiza que el contenedor reefer nunca pierda su temperatura de consigna. El Salvador representa el mayor reto por tiempo y frecuencia, exigiendo una planificación de inventario más rigurosa. Para Il Castello, la puntualidad en los puertos de Veracruz o Caucedo es vital para coordinar el transporte terrestre refrigerado hacia los centros de consumo, asegurando que la pasta artesanal no sufra choques térmicos.",
        rating: { pa: 5, mx: 4, sv: 3, rd: 5 },
      }
    ]
  },
  {
    id: 'fdi',
    title: "Inversión Extranjera Directa (IED)",
    icon: <Building2 className="w-8 h-8 text-primary" />,
    description: "Apertura económica y crecimiento de sectores estratégicos para el canal HORECA.",
    indicators: [
      {
        name: "Flujo de IED (% del PIB)",
        source: "CEPAL / Banco Mundial (2023)",
        data: {
          headers: ['País', 'IED % PIB', 'Dinámica'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '4.5%', 'Estable'],
            ['🇵🇦 Panamá', '3.8%', 'Hub Finan.'],
            ['🇲🇽 México', '3.5%', 'Muy Alta'],
            ['🇸🇻 El Salvador', '1.9%', 'Baja'],
            ['🇩🇴 Rep. Dominicana', '3.9%', 'Turismo'],
          ]
        },
        analysis: "La IED es el motor del crecimiento del canal HORECA. En México (3.5%) y República Dominicana (3.9%), la inversión extranjera está muy enfocada en la expansión de grandes cadenas hoteleras internacionales y centros comerciales. Cada nuevo hotel que se construye con capital extranjero representa un cliente potencial masivo para la pasta de Il Castello. México atrae inversión masiva por el nearshoring, lo que incrementa el poder adquisitivo de los ejecutivos y trabajadores calificados que frecuentan restaurantes premium. Panamá mantiene su atractivo como hub financiero. Seguir el rastro de la IED permite a Il Castello predecir dónde se abrirán las próximas oportunidades comerciales en el segmento gourmet.",
        rating: { pa: 4, mx: 5, sv: 2, rd: 5 },
      },
      {
        name: "Incentivos a la Inversión",
        source: "Agencias de Promoción Nacionales (2024)",
        data: {
          headers: ['País', 'Institución Principal', 'Incentivo'],
          rows: [
            ['🇨🇴 Colombia (ref.)', 'ProColombia', 'Zonas Francas (20%)'],
            ['🇵🇦 Panamá', 'PROPANAMA', 'Sedes SEM (0%)'],
            ['🇲🇽 México', 'Secretaría Economía', 'Decreto IMMEX'],
            ['🇸🇻 El Salvador', 'Invest in El Salvador', 'Exenciones Fiscales'],
            ['🇩🇴 Rep. Dominicana', 'ProDominicana', 'Ley 8-90 (Exención)'],
          ]
        },
        analysis: "Los incentivos a la inversión facilitan que los distribuidores locales de Il Castello operen con menores costos. México ofrece el decreto IMMEX para facilitar la importación temporal y servicios logísticos. República Dominicana utiliza la Ley 8-90 para potenciar sus zonas francas comerciales. Estos marcos legales permiten que los centros de almacenamiento en frío (vitales para Il Castello) operen con beneficios tributarios que abaratan el costo final del servicio para la empresa colombiana. Conocer estos incentivos permite a Il Castello negociar mejores condiciones comerciales con sus distribuidores en destino, asegurando que los beneficios fiscales del país importador se traduzcan en una mayor competitividad de precio en el anaquel o en la carta del restaurante.",
        rating: { pa: 5, mx: 5, sv: 3, rd: 4 },
      },
      {
        name: "PIB Turístico y Gastronómico",
        source: "WTTC / MinTurismo (2023)",
        data: {
          headers: ['País', 'Aporte PIB (%)', 'Tendencia'],
          rows: [
            ['🇨🇴 Colombia (ref.)', '4.2%', '+8.5%'],
            ['🇵🇦 Panamá', '11.2%', '+12.0%'],
            ['🇲🇽 México', '8.5%', '+10.5%'],
            ['🇸🇻 El Salvador', '5.2%', '+25.0%'],
            ['🇩🇴 Rep. Dominicana', '15.3%', '+14.5%'],
          ]
        },
        analysis: "El PIB turístico es el indicador de demanda directa para Il Castello. República Dominicana (15.3%) y Panamá (11.2%) lideran en dependencia y éxito turístico. México (8.5%) tiene un volumen absoluto inmenso, siendo una de las potencias mundiales en turismo gastronómico. El Salvador muestra el crecimiento más rápido (25%), partiendo de una base pequeña pero muy dinámica. Para Il Castello, el auge del turismo internacional en estos países garantiza una rotación constante de sus pastas artesanales en los buffets y restaurantes a la carta. La alta dependencia del turismo en estos mercados asegura que los gobiernos locales mantendrán políticas de importación de alimentos flexibles para no desabastecer la industria hotelera de lujo.",
        rating: { pa: 4, mx: 5, sv: 4, rd: 5 },
      }
    ]
  }
];

const ratingColor = (v) => {
  if (v >= 5) return 'text-emerald-400 bg-emerald-400/10';
  if (v >= 4) return 'text-[var(--color-wheat)] bg-[var(--color-wheat)]/10';
  if (v >= 3) return 'text-blue-300 bg-blue-300/10';
  return 'text-red-400 bg-red-400/10';
};

const EnvironmentAnalysis = () => {
  const [activeEnv, setActiveEnv] = React.useState('cultural');

  const calculateScore = (countryKey) => {
    let total = 0;
    let count = 0;
    environments.forEach(env => {
      env.indicators.forEach(ind => {
        total += ind.rating[countryKey];
        count++;
      });
    });
    return (total / count).toFixed(1);
  };

  const getRankData = () => {
    const countries = [
      { id: 'pa', name: 'Panamá', flag: '🇵🇦' },
      { id: 'mx', name: 'México', flag: '🇲🇽' },
      { id: 'sv', name: 'El Salvador', flag: '🇸🇻' },
      { id: 'rd', name: 'Rep. Dominicana', flag: '🇩🇴' },
    ];
    return countries
      .map(c => ({ ...c, score: calculateScore(c.id) }))
      .sort((a, b) => b.score - a.score);
  };

  return (
    <div className="w-full relative min-h-screen">
      {/* Encabezado */}
      <div className="mb-12 relative z-10">
        <p className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-3">Análisis de Internacionalización</p>
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase mb-4 text-on-surface">
          Entornos de <span className="text-primary">Estudio</span>
        </h2>
        <p className="font-body text-xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
          Evaluación integral de los factores externos que determinan la viabilidad comercial y operativa de 
          <strong> Il Castello</strong> en los mercados de Norteamérica, Centroamérica y el Caribe.
        </p>
      </div>

      {/* Navegación de Entornos */}
      <div className="flex flex-wrap gap-2 mb-12 relative z-10">
        {environments.map((env) => (
          <button
            key={env.id}
            onClick={() => setActiveEnv(env.id)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 font-headline uppercase text-sm tracking-widest border ${
              activeEnv === env.id 
              ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
              : 'bg-surface-container-highest text-on-surface-variant border-outline-variant/30 hover:bg-surface-dim'
            }`}
          >
            {React.cloneElement(env.icon, { className: `w-5 h-5 ${activeEnv === env.id ? 'text-white' : 'text-primary'}` })}
            {env.title}
          </button>
        ))}
        <button
          onClick={() => setActiveEnv('summary')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 font-headline uppercase text-sm tracking-widest border ${
            activeEnv === 'summary' 
            ? 'bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-600/20 scale-105' 
            : 'bg-surface-container-highest text-amber-700 border-outline-variant/30 hover:bg-surface-dim'
          }`}
        >
          <Trophy className={`w-5 h-5 ${activeEnv === 'summary' ? 'text-white' : 'text-amber-600'}`} />
          Resumen Ejecutivo
        </button>
      </div>

      {/* Contenido del Entorno Activo */}
      <AnimatePresence mode="wait">
        {activeEnv === 'summary' ? (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {getRankData().map((country, index) => (
                <div key={country.id} className="bg-surface-container-highest p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-xl relative overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="font-headline text-8xl font-black italic">#{index + 1}</span>
                  </div>
                  <div className="text-5xl mb-4">{country.flag}</div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{country.name}</h3>
                  <div className="flex items-end gap-2">
                    <span className="font-headline text-4xl font-black text-primary">{country.score}</span>
                    <span className="font-body text-on-surface-variant text-sm mb-1.5">/ 5.0</span>
                  </div>
                  <div className="mt-6 h-2.5 bg-black/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(country.score / 5) * 100}%` }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
              <div className="relative z-10">
                <h3 className="font-headline text-4xl font-bold uppercase mb-8 flex items-center gap-4">
                  <Zap className="text-amber-400 w-12 h-12" />
                  Conclusión de Viabilidad de Mercado
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-body text-xl leading-relaxed opacity-90">
                  <p className="text-justify">
                    Tras un análisis exhaustivo de 15 indicadores clave, se concluye que <strong>México</strong> se posiciona como el mercado con mayor viabilidad estratégica a largo plazo para Il Castello (Puntaje: {calculateScore('mx')}). Su masivo mercado interno, una cultura con máxima indulgencia (97) y un TLC consolidado con Colombia, ofrecen una escala operativa incomparable para la pasta artesanal premium.
                  </p>
                  <p className="text-justify">
                    <strong>República Dominicana</strong> (Puntaje: {calculateScore('rd')}) surge como el mercado con mayor potencial inmediato en el sector hotelero, mientras que <strong>Panamá</strong> destaca como el socio logístico ideal. <strong>El Salvador</strong> representa una oportunidad emergente de bajo costo, ideal para una expansión regional secundaria. La estrategia debe priorizar a México y RD como los motores de crecimiento internacional de la marca.
                  </p>
                </div>
                
                <div className="mt-12 flex flex-wrap gap-6">
                  <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/20">
                    <p className="font-headline text-xs uppercase tracking-widest text-amber-300 mb-2">Recomendación Prioritaria</p>
                    <p className="font-headline font-bold text-2xl">Penetración en México vía distribuidores premium en CDMX y Cancún</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {environments.filter(e => e.id === activeEnv).map((env) => (
              <div key={env.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-surface-container-low p-8 rounded-3xl mb-10 border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-primary/10 p-6 rounded-2xl">
                    {React.cloneElement(env.icon, { className: "w-12 h-12 text-primary" })}
                  </div>
                  <div>
                    <h3 className="font-headline text-3xl font-bold text-on-surface uppercase mb-2">{env.title}</h3>
                    <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                      {env.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  {env.indicators.map((ind, idx) => (
                    <div key={idx} className="bg-surface-container-highest rounded-3xl overflow-hidden border-l-4 border-primary shadow-xl">
                      <div className="px-8 pt-8 pb-4">
                        <div className="flex items-center gap-3 mb-1">
                          <Star className="w-5 h-5 text-primary fill-primary" />
                          <h4 className="font-headline text-2xl font-bold text-on-surface">{ind.name}</h4>
                        </div>
                        <p className="font-label text-xs uppercase tracking-widest text-primary opacity-70">Fuente: {ind.source}</p>
                      </div>

                      <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-1/2 p-8">
                          <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-primary/10">
                                  {ind.data.headers.map((h, i) => (
                                    <th key={i} className={`px-4 py-3 font-headline uppercase tracking-wider text-xs text-on-surface ${i === 0 ? 'text-left' : 'text-center'}`}>
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="font-body">
                                {ind.data.rows.map((row, ri) => (
                                  <tr key={ri} className={`border-t border-outline-variant/20 ${ri === 0 ? 'bg-primary/5 font-semibold' : 'hover:bg-surface/50'}`}>
                                    {row.map((cell, ci) => (
                                      <td key={ci} className={`px-4 py-3.5 ${ci === 0 ? 'text-left font-semibold text-on-surface' : 'text-center text-on-surface-variant'}`}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="xl:w-1/2 p-8 bg-black/5 flex flex-col gap-6">
                          <div>
                            <h5 className="font-headline text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4" /> Análisis de Impacto
                            </h5>
                            <p className="font-body text-base leading-relaxed text-on-surface-variant text-justify">
                              {ind.analysis}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-outline-variant/30">
                            <h5 className="font-headline text-xs font-bold text-on-surface uppercase tracking-wider mb-4">
                              Calificación de Viabilidad (1–5)
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {[
                                { key: 'pa', label: '🇵🇦 Panamá' },
                                { key: 'mx', label: '🇲🇽 México' },
                                { key: 'sv', label: '🇸🇻 El Salvador' },
                                { key: 'rd', label: '🇩🇴 Rep. Dominicana' },
                              ].map(({ key, label }) => (
                                <div key={key} className="flex items-center justify-between gap-3 bg-surface/50 p-3 rounded-xl border border-outline-variant/10">
                                  <span className="font-body text-sm font-medium text-on-surface">{label}</span>
                                  <div className="flex items-center gap-2">
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${ratingColor(ind.rating[key])}`}>
                                      {ind.rating[key]}/5
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvironmentAnalysis;
