import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Ship, TrendingUp, DollarSign, Users, Award, FileText, CheckCircle, 
  Video, QrCode, ChevronRight, Sparkles, Layers, Activity, Flame, ShieldCheck, 
  MapPin, Clock, ShieldAlert, Award as Medal, BarChart3, BookOpen, Quote
} from 'lucide-react';

// Data for Country Selection Matrix
const environmentsData = [
  {
    category: "Entorno Cultural (Hofstede & Demografía)",
    weight: "20%",
    indicators: [
      { name: "Indulgencia (Hofstede)", weight: "40%", pa: 4, mx: 5, sv: 4, rd: 5, desc: "Punta Cana / RD posee 95 pts. Máximo disfrute hedonista y disposición a pagar premium por placer culinario." },
      { name: "Tasa de Urbanización", weight: "30%", pa: 4, mx: 5, sv: 3, rd: 5, desc: "RD posee 85% de urbanización. Concentración clave de resorts turísticos e infraestructura en Punta Cana." },
      { name: "Distancia al Poder (PDI)", weight: "30%", pa: 3, mx: 4, sv: 4, rd: 4, desc: "RD posee 65 pts. Estructura jerárquica moderada que facilita el contacto y negociación con chefs ejecutivos." }
    ]
  },
  {
    category: "Entorno Político y Legal",
    weight: "20%",
    indicators: [
      { name: "Regulaciones Sanitarias", weight: "40%", pa: 3, mx: 4, sv: 5, rd: 4, desc: "DIGEMAPS en RD tiene tiempos predecibles. Menor fricción burocrática que COFEPRIS en México." },
      { name: "Percepción de Corrupción (CPI)", weight: "30%", pa: 3, mx: 2, sv: 2, rd: 3, desc: "RD puntúa 35/100. Nivel medio-bajo regional. Exige intermediarios aduaneros acreditados." },
      { name: "Estabilidad Política", weight: "30%", pa: 4, mx: 3, sv: 4, rd: 5, desc: "RD (55.2%) tiene el menor riesgo y un fuerte marco institucional de fomento al sector turístico." }
    ]
  },
  {
    category: "Entorno Tecnológico y Geoambiental",
    weight: "20%",
    indicators: [
      { name: "Desempeño Logístico (LPI)", weight: "40%", pa: 5, mx: 4, sv: 2, rd: 4, desc: "RD puntúa 3.1 en infraestructura de frío y puerto de clase mundial en Caucedo." },
      { name: "Penetración de Internet B2B", weight: "30%", pa: 4, mx: 4, sv: 3, rd: 5, desc: "RD tiene 91.0% de conectividad. Facilita la automatización y trazabilidad digital de pedidos." },
      { name: "Índice de Innovación Global (GII)", weight: "30%", pa: 4, mx: 5, sv: 2, rd: 3, desc: "RD tiene un GII moderado (23.8). Adopción tecnológica estándar en conservación de frío." }
    ]
  },
  {
    category: "Comercio Internacional (Colombia -> Destino)",
    weight: "20%",
    indicators: [
      { name: "Acuerdos Comerciales", weight: "40%", pa: 3, mx: 5, sv: 5, rd: 3, desc: "Acuerdo de Alcance Parcial y exenciones parciales para procesamiento de alimentos." },
      { name: "Balanza Comercial", weight: "30%", pa: 5, mx: 4, sv: 3, rd: 4, desc: "Fuerte flujo comercial positivo de Colombia hacia RD. Alta receptividad del origen colombiano." },
      { name: "Rutas Navieras & Tiempos", weight: "30%", pa: 5, mx: 4, sv: 3, rd: 5, desc: "Tránsito marítimo ultra-rápido de 3-4 días de Cartagena a Caucedo. Óptimo para cadena de frío." }
    ]
  },
  {
    category: "Inversión Extranjera Directa (IED)",
    weight: "20%",
    indicators: [
      { name: "Flujo IED (% del PIB)", weight: "40%", pa: 4, mx: 5, sv: 2, rd: 5, desc: "IED de 3.9% del PIB en RD, concentrada agresivamente en infraestructura y cadenas hoteleras." },
      { name: "Incentivos Fiscales Turísticos", weight: "30%", pa: 5, mx: 5, sv: 3, rd: 4, desc: "Ley 158-01 (CONFOTUR) fomenta la inversión en resorts, impulsando la demanda del canal HORECA." },
      { name: "PIB Turístico & Gastronómico", weight: "30%", pa: 4, mx: 5, sv: 4, rd: 5, desc: "Turismo aporta el 15.3% del PIB en RD. La densidad hotelera de Punta Cana es insuperable." }
    ]
  }
];

export default function InternationalizationPlan() {
  const [activeTab, setActiveTab] = useState('country');
  const [selectedEnvIndex, setSelectedEnvIndex] = useState(0);
  const [activePersona, setActivePersona] = useState('alessandro');
  const [activeMember, setActiveMember] = useState(0);

  // Tab Definitions
  const tabs = [
    { id: 'country', label: 'Selección de País', icon: <Globe className="w-4 h-4" /> },
    { id: 'logistics', label: 'Ruta y Logística', icon: <Ship className="w-4 h-4" /> },
    { id: 'marketing', label: 'Plan Marketing 4P', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'exit-test', label: 'Test de Salida', icon: <Award className="w-4 h-4" /> },
    { id: 'scientific', label: 'Método Científico', icon: <FileText className="w-4 h-4" /> }
  ];

  // Weighted Score Calculator helper
  const getWeightedAverage = (countryKey) => {
    let totalScore = 0;
    let count = 0;
    environmentsData.forEach(env => {
      let envSum = 0;
      env.indicators.forEach(ind => {
        envSum += ind[countryKey];
      });
      totalScore += (envSum / env.indicators.length);
      count++;
    });
    return (totalScore / count).toFixed(2);
  };

  // Buyer Personas Data
  const personas = {
    alessandro: {
      name: "Alessandro Vitiello",
      role: "Chef Ejecutivo de Resort 5 Estrellas",
      location: "Punta Cana, República Dominicana",
      company: "Grand Palladium Palace Resort",
      age: 46,
      avatar: "👨‍🍳",
      quote: "En un resort con 2.000 huéspedes diarios, la consistencia, la inocuidad y el tiempo de respuesta en cocina lo son todo. No tengo tiempo para amasar de forma artesanal, pero mis comensales exigen sabor italiano auténtico.",
      frustrations: [
        "Desperdicio y merma en la preparación de pasta fresca de mala calidad.",
        "Falta de personal culinario altamente calificado en técnicas de amasado tradicional.",
        "Rupturas de cadena de frío y retrasos con proveedores locales inestables.",
        "Pasta industrial que se deshace en los buffets calientes o pierde textura rápidamente."
      ],
      needs: [
        "Porciones de pasta fresca ultracongelada listas para hervir directamente sin descongelar.",
        "Inocuidad microbiológica absoluta garantizada por pasteurización premium.",
        "Textura 'al dente' resistente al mantenimiento térmico de los buffets.",
        "Suministro constante y predecible bajo contratos B2B anuales."
      ],
      solution: "Raviolis Il Castello. Entregados a -20°C, empacados al vacío en formatos institucionales de 1kg, pasteurizados por vapor en línea (cero patógenos) y listos para servir en 4 minutos con un 100% de consistencia gourmet."
    },
    sarah: {
      name: "Sarah Jenkins",
      role: "Turista Premium & Foodie Internacional",
      location: "Nueva York, EE. UU. (Viajera frecuente en Punta Cana)",
      age: 34,
      avatar: "👩‍💼",
      quote: "Cuando viajo a Punta Cana a relajarme, busco indulgencia total. Quiero deleitarme con gastronomía italiana auténtica en los restaurantes temáticos del resort, pero con la tranquilidad de que son ingredientes limpios y naturales.",
      frustrations: [
        "Alimentos ultraprocesados llenos de conservantes químicos en los buffets hoteleros.",
        "Falta de opciones de pasta premium de sémola de trigo durum con huevos reales.",
        "Digestiones pesadas causadas por harinas refinadas refinadas industrialmente con aditivos artificiales."
      ],
      needs: [
        "Sabor genuino de pasta artesanal italiana amasada y secada lentamente.",
        "Etiquetado limpio (Clean Label) sin químicos preservantes ni aditivos sintéticos.",
        "Experiencia gourmet memorable en la cena de especialidades del hotel."
      ],
      solution: "La pasta artesanal de Il Castello servida en el restaurante gourmet del resort. Su receta pura con 14 horas de secado lento y ultracongelación garantiza que Sarah consuma un producto de calidad premium con digestión perfecta."
    }
  };

  // Team Exit Test Data
  const teamMembers = [
    {
      name: "Miguel Angel Lopera",
      role: "Líder de Negocios Internacionales",
      signature: "/firmas/firma1.jpeg",
      testImg: "/tests/miguel_test.png",
      pre: "Viendo los resultados de este pretest de Aldea Global, arranco con toda. Sacar casi un 90% en general me da mucha confianza... tengo que meterle mucha más ficha a la hora de decidir a qué países entrar, porque en 'selección de mercados' tuve mi nota más baja (77%). De nada sirve tener el mejor plan si no elijo bien el mercado.",
      post: "¡Meta cumplida con creces! El desarrollo de la Matriz de Selección de País me enseñó que el rigor científico y la ponderación cuantitativa son indispensables para reducir el riesgo financiero. Seleccionar República Dominicana (Punta Cana) bajo el Incoterm CIF nos permitió aplicar con éxito variables cuantitativas de IED, PIB Turístico (15.3%) e Indulgencia (95) para sustentar la viabilidad B2B con datos irrefutables. Mi visión estratégica de internacionalización ahora es integral y ágil."
    },
    {
      name: "Samuel Ossa",
      role: "Coordinador de Logística y Operaciones",
      signature: "/firmas/firma3.jpeg",
      testImg: "/tests/samuel_test.png",
      pre: "Al ver mis resultados, siento que voy bien, pero no lo suficiente como para destacar todavía. Tengo una base sólida (79%)... tengo bajones fuertes en otros, especialmente en análisis y argumentación. Eso me hace ver que mi problema es falta de constancia y profundidad.",
      post: "Este núcleo me retó a profundizar. En lugar de quedarme en la superficie del análisis político o macroeconómico, aprendí a cruzar variables cualitativas y cuantitativas (como el cruce de Hofstede con la factibilidad comercial del canal HORECA). Diseñar la cadena de suministro en frío a -20°C desde Sabaneta hasta Puerto Caucedo me dio una disciplina y una rigurosidad analítica que transformó por completo mi capacidad operativa."
    },
    {
      name: "Pablo Restrepo",
      role: "Analista de Finanzas Estratégicas",
      signature: "/firmas/firma2.jpeg",
      testImg: "/tests/pablo_test.png",
      pre: "Según el test voy por un buen camino y tengo unas bases sólidas, entiendo lo que hago... pero todavía puedo mejorar en la parte estratégica, especialmente al elegir mercados y definir el rumbo. No es que esté mal, pero puedo mejorar y ser más seguro en ese tema.",
      post: "He consolidado mi criterio estratégico de forma contundente. Estructurar el mix de marketing B2B (las 4Ps) y justificar el precio de $38.000 COP / kg sustentado en el valor percibido me dio la seguridad que me faltaba. Entender cómo los chefs ejecutivos diluyen sus costos de mano de obra y desperdicios al comprar nuestro producto me permitió dominar la argumentación financiera y comercial en mercados internacionales."
    },
    {
      name: "Emmanuel Ramirez",
      role: "Especialista en Marketing Internacional",
      signature: null,
      pending: true,
      testImg: "/tests/emmanuel_test.png",
      pre: "Antes de empezar este núcleo, considero que tengo una base buena... También me sirvió para darme cuenta de que hay cosas que debo reforzar: en algunas preguntas fallé por no analizar con suficiente detalle o por demorarme demasiado. Entiendo que todavía necesito mejorar en precisión y agilidad.",
      post: "Logré la precisión metodológica y la velocidad que me exigía el pretest. El análisis detallado de la competencia industrial (Barilla/Doria) frente a las ventajas tecnológicas de Il Castello (pasteurización en línea por vapor y congelación rápida inocua) me enseñó a sustentar una propuesta de valor única con bases científicas. Mi gestión del tiempo y productividad para formular estrategias B2B internacionales crecieron exponencialmente."
    }
  ];

  return (
    <div className="font-body text-on-surface bg-surface-container-low rounded-[3rem] p-6 md:p-12 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--color-wheat))/5%_to_transparent] rounded-full opacity-60 pointer-events-none transform translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--color-basil))/5%_to_transparent] rounded-full opacity-40 pointer-events-none transform -translate-x-1/4 translate-y-1/4 blur-3xl"></div>

      {/* Global Fair & Sustentation Video Hub */}
      <div className="relative z-10 mb-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-basil to-charcoal text-white shadow-xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(227,184,90,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
          
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wheat/20 border border-wheat/30 text-wheat text-xs uppercase tracking-widest font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Global Fair Pitch • Sustentación
            </div>
            <h3 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
              Estrategia de <br />
              <span className="text-wheat">Internacionalización</span>
            </h3>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Presentamos los resultados consolidados para expandir a **Il Castello** (Pasta Artesanal LG S.A.S) al mercado de **Punta Cana, República Dominicana**, canalizando el nicho de resorts HORECA de lujo. Explore nuestro plan maestro interactivo.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                <Medal className="text-wheat w-6 h-6" />
                <div>
                  <span className="block text-[10px] text-white/50 uppercase tracking-widest font-mono">Mercado Objetivo</span>
                  <span className="text-sm font-bold text-white uppercase font-headline">Punta Cana, RD 🇩🇴</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                <BarChart3 className="text-wheat w-6 h-6" />
                <div>
                  <span className="block text-[10px] text-white/50 uppercase tracking-widest font-mono">Volumen Objetivo</span>
                  <span className="text-sm font-bold text-white uppercase font-headline">2.000 kg / Mes B2B</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 flex-shrink-0 flex flex-col md:flex-row lg:flex-col gap-6 justify-center items-center">
            {/* Visual English Video Container */}
            <div className="w-full max-w-[320px] aspect-[9/16] bg-black rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group">
              <video 
                src="/videos/Video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 text-wheat text-[10px] uppercase font-mono tracking-wider mb-1">
                  <Video className="w-3.5 h-3.5 animate-pulse text-red-500" /> Video en Inglés (5 min)
                </div>
                <span className="text-xs font-bold text-white font-headline">Aldea Global Sustentación</span>
                <span className="text-[9px] text-white/60 mt-0.5">CEIPA / Arizona State University</span>
              </div>
            </div>

            {/* Interactive QR Code Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full max-w-[200px] flex flex-col items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                {/* Visual beautiful QR code icon simulation */}
                <QrCode className="w-28 h-28 text-charcoal" />
              </div>
              <span className="block text-[10px] text-white/70 font-mono uppercase tracking-widest">Escanee QR</span>
              <span className="text-[9px] text-white/50 leading-tight">Acceso directo a la página web y plan de marketing</span>
            </div>

          </div>
        </div>
      </div>

      {/* Modern Interactive Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-outline-variant/20 pb-4 relative z-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-headline font-bold uppercase tracking-wider transition-all duration-300 relative ${
                isActive 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-surface hover:bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {tab.icon}
              {tab.label}
              {isActive && (
                <motion.span 
                  layoutId="activeIndicator"
                  className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-4 h-1.5 bg-primary rounded-t-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Content Area with Transitions */}
      <div className="relative z-10 min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            
            {/* 1. SELECCIÓN DE PAÍS TAB */}
            {activeTab === 'country' && (
              <div className="space-y-8">
                
                {/* Executive Justification Banner */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                        <CheckCircle className="w-3.5 h-3.5" /> Decisión Científica
                      </div>
                      <h4 className="font-headline text-2xl font-bold text-basil">¿Por qué República Dominicana (Punta Cana) es la opción ganadora?</h4>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed text-justify">
                        Aunque **México** lidera en la matriz general por su masivo volumen comercial, la naturaleza artesanal premium del ravioli ultracongelado de **Il Castello** requiere un nicho de altísimo margen y baja rivalidad inicial. **Punta Cana** concentra una de las redes de resorts todo incluido de 5 estrellas más densas de América Latina. 
                        El turismo dominicano aporta un extraordinario **15.3% al PIB**, y el mercado dominicano posee un puntaje de **95 en Indulgencia (Hofstede)**. Esto asegura una demanda elástica en hoteles de lujo, donde los chefs buscan consistencia y eliminan desperdicios comprando pastas con tecnología de pasteurización e inocuidad de vanguardia.
                      </p>
                    </div>
                    <div className="border-t border-outline-variant/30 pt-4 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-surface-container p-3 rounded-2xl">
                        <span className="block text-2xl font-bold text-primary font-headline">95 pts</span>
                        <span className="text-[10px] text-on-surface-variant/70 uppercase">Indulgencia</span>
                      </div>
                      <div className="bg-surface-container p-3 rounded-2xl">
                        <span className="block text-2xl font-bold text-primary font-headline">15.3%</span>
                        <span className="text-[10px] text-on-surface-variant/70 uppercase">PIB Turístico</span>
                      </div>
                      <div className="bg-surface-container p-3 rounded-2xl">
                        <span className="block text-2xl font-bold text-primary font-headline">91.0%</span>
                        <span className="text-[10px] text-on-surface-variant/70 uppercase">Internet B2B</span>
                      </div>
                      <div className="bg-surface-container p-3 rounded-2xl">
                        <span className="block text-2xl font-bold text-primary font-headline">3-4 Días</span>
                        <span className="text-[10px] text-on-surface-variant/70 uppercase">Tránsito Marítimo</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Rank Card */}
                  <div className="bg-gradient-to-br from-basil to-charcoal text-white rounded-3xl p-8 border border-white/5 shadow-xl flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase font-mono text-wheat tracking-wider block mb-2">Puntuación Ponderada Final</span>
                      <h4 className="font-headline text-xl font-bold text-white uppercase mb-6">Ranking de Países Destino</h4>
                      
                      <div className="space-y-4">
                        {[
                          { name: "Rep. Dominicana", flag: "🇩🇴", key: "rd", color: "bg-wheat", text: "text-wheat" },
                          { name: "México", flag: "🇲🇽", key: "mx", color: "bg-white/40", text: "text-white/60" },
                          { name: "Panamá", flag: "🇵🇦", key: "pa", color: "bg-white/40", text: "text-white/60" },
                          { name: "El Salvador", flag: "🇸🇻", key: "sv", color: "bg-white/20", text: "text-white/40" }
                        ].map((country, idx) => {
                          const score = getWeightedAverage(country.key);
                          const isWinner = country.key === 'rd';
                          return (
                            <div key={country.key} className={`space-y-1.5 p-3.5 rounded-2xl border transition-all ${isWinner ? 'bg-white/10 border-wheat/30' : 'bg-transparent border-white/5'}`}>
                              <div className="flex justify-between items-center text-sm font-bold">
                                <span className={`flex items-center gap-2 ${isWinner ? 'text-wheat font-headline text-base' : 'text-white'}`}>
                                  <span className="font-mono text-xs text-white/40">#{idx + 1}</span>
                                  {country.flag} {country.name}
                                  {isWinner && <span className="text-[9px] bg-wheat text-charcoal px-2 py-0.5 rounded font-mono uppercase font-black">Ganador B2B</span>}
                                </span>
                                <span className={country.text}>{score} / 5.0</span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(score / 5) * 100}%` }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                  className={`h-full ${country.color}`} 
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Country Selection Matrix - Interactive Table */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/20 shadow-sm overflow-x-auto">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h4 className="font-headline text-xl font-bold text-basil uppercase">Matriz de Selección de Entornos</h4>
                      <p className="text-xs text-on-surface-variant">Calificación ponderada en escala de 1.0 a 5.0 basada en bases de datos científicas oficiales (CEPAL, Banco Mundial, WIPO, Hofstede).</p>
                    </div>
                    
                    {/* Environment Selectors */}
                    <div className="flex flex-wrap gap-1 bg-surface-container p-1 rounded-xl">
                      {environmentsData.map((env, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedEnvIndex(index)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                            selectedEnvIndex === index 
                              ? 'bg-primary text-white shadow-sm' 
                              : 'text-on-surface-variant hover:bg-surface'
                          }`}
                        >
                          Entorno {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Environment Description Card */}
                  <div className="bg-surface-container p-5 rounded-2xl border border-outline-variant/10 mb-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary flex-shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-primary uppercase font-mono tracking-widest font-bold">Foco del Entorno Activo</span>
                      <h5 className="font-headline font-bold text-on-surface text-base mb-1">{environmentsData[selectedEnvIndex].category}</h5>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Este entorno evalúa el impacto directo de las variables estructurales del país destino en la rentabilidad y estabilidad de la operación de Il Castello. Ponderación en el modelo: **{environmentsData[selectedEnvIndex].weight}**.
                      </p>
                    </div>
                  </div>

                  {/* Matrix Table */}
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="border-b border-outline-variant/30 font-headline text-xs uppercase tracking-widest text-on-surface-variant/80">
                        <th className="py-4 font-bold">Indicador de Estudio</th>
                        <th className="py-4 font-bold text-center">Peso</th>
                        <th className="py-4 font-bold text-center">🇵🇦 Panamá</th>
                        <th className="py-4 font-bold text-center">🇲🇽 México</th>
                        <th className="py-4 font-bold text-center">🇸🇻 El Salvador</th>
                        <th className="py-4 font-bold text-center text-emerald-800 bg-emerald-50/50 rounded-t-xl">🇩🇴 Rep. Dominicana</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-xs">
                      {environmentsData[selectedEnvIndex].indicators.map((ind, i) => (
                        <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                          <td className="py-4 pr-4">
                            <span className="font-bold block text-on-surface text-sm mb-1">{ind.name}</span>
                            <span className="text-on-surface-variant/70 leading-normal">{ind.desc}</span>
                          </td>
                          <td className="py-4 text-center font-mono font-bold text-on-surface-variant/80">{ind.weight}</td>
                          <td className="py-4 text-center font-mono text-sm font-semibold">{ind.pa}.0</td>
                          <td className="py-4 text-center font-mono text-sm font-semibold">{ind.mx}.0</td>
                          <td className="py-4 text-center font-mono text-sm font-semibold">{ind.sv}.0</td>
                          <td className="py-4 text-center font-mono text-sm font-bold text-emerald-800 bg-emerald-50/50">{ind.rd}.0</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* 2. RUTA Y LOGÍSTICA TAB */}
            {activeTab === 'logistics' && (
              <div className="space-y-8">
                
                {/* Logistics Intro & Incoterm card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm flex flex-col justify-between lg:col-span-2">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wheat/20 text-yellow-900 text-xs font-semibold uppercase tracking-wider">
                        <Ship className="w-3.5 h-3.5" /> Logística de Cadena de Frío
                      </div>
                      <h4 className="font-headline text-2xl font-bold text-basil">Incoterm CIF y Asignación de Responsabilidades</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed text-justify">
                        Para ingresar con seguridad, Il Castello utilizará el Incoterm **CIF (Cost, Insurance, & Freight) Puerto Caucedo**. 
                        Bajo esta modalidad, asumimos la responsabilidad y el costo de transportar la pasta ultracongelada, contratar el seguro internacional contra daños de frío y pagar el flete marítimo hasta que la mercancía cruza la borda del buque en el puerto dominicano. 
                        El distribuidor aliado local B2B asume el desaduanamiento en Caucedo y el transporte terrestre refrigerado final hasta Punta Cana, minimizando la carga administrativa aduanera internacional para nuestra planta.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border-t border-outline-variant/30 pt-6">
                      <div className="flex gap-3 items-start">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary mt-1">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-xs uppercase tracking-wider font-semibold font-headline">Asumido por Il Castello</strong>
                          <span className="text-[11px] text-on-surface-variant leading-relaxed">Embalaje especial de exportación, flete nacional en Colombia, aduana de salida (Cartagena), flete internacional y póliza de seguro marítimo.</span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary mt-1">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-xs uppercase tracking-wider font-semibold font-headline">Asumido por el Distribuidor</strong>
                          <span className="text-[11px] text-on-surface-variant leading-relaxed">Desaduanamiento de importación en República Dominicana, pago de aranceles locales, ITBIS e inspección de frío en DIGEMAPS, y transporte a Punta Cana.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Temp Warning Card */}
                  <div className="bg-gradient-to-br from-tertiary to-red-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-10 translate-x-10 blur-xl"></div>
                    <div className="space-y-4">
                      <div className="p-3 bg-white/10 rounded-2xl w-fit text-wheat">
                        <Flame className="w-6 h-6 animate-pulse" />
                      </div>
                      <h4 className="font-headline text-lg font-bold text-white uppercase">Parámetros Críticos de Frío</h4>
                      <p className="text-white/70 text-xs leading-relaxed">
                        Nuestra pasta fresca no contiene preservantes sintéticos ni químicos aditivos. Por ello, la inocuidad depende en un 100% de la estabilidad de la congelación profunda criogénica.
                      </p>
                    </div>
                    <div className="bg-black/20 p-4 rounded-2xl border border-white/10 mt-6 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="opacity-60">Punto de Ultracongelación</span>
                        <strong className="text-wheat">-20°C a -22°C</strong>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="opacity-60">Margen Fisiológico Tolerado</span>
                        <strong className="text-red-300">± 1.5°C</strong>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="opacity-60">Monitoreo de Sensor IoT</span>
                        <strong className="text-green-300">En tiempo real por GPS</strong>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Vertical Logistics Route Timeline */}
                <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
                  <h4 className="font-headline text-xl font-bold text-basil uppercase mb-8 text-center">La Cadena Logística Internacional de Il Castello</h4>
                  
                  <div className="relative">
                    {/* Line Connector */}
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-wheat to-tertiary opacity-30 hidden md:block"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {[
                        {
                          step: "01",
                          title: "Ultracongelación",
                          sub: "Planta Sabaneta (Colombia)",
                          desc: "Amasado artesanal lento y secado de 14 horas. Pasteurización por choque de vapor a 100°C en línea y congelación instantánea por choque criogénico a -20°C en túnel de ráfaga para eliminar patógenos de forma 100% natural.",
                          icon: <Activity className="w-5 h-5" />,
                          color: "border-primary text-primary bg-primary/10"
                        },
                        {
                          step: "02",
                          title: "Tránsito Terrestre",
                          sub: "Sabaneta -> Puerto Cartagena",
                          desc: "Cargue de la mercancía en camión termo-refrigerado con sensores de termometría digital. Desplazamiento nocturno por la Troncal de Occidente hasta el terminal marítimo de Cartagena bajo estrictos precintos de seguridad aduaneros.",
                          icon: <MapPin className="w-5 h-5" />,
                          color: "border-yellow-600 text-yellow-600 bg-yellow-50"
                        },
                        {
                          step: "03",
                          title: "Travesía Marítima",
                          sub: "Cartagena -> Puerto Caucedo (RD)",
                          desc: "Cargue en buque en contenedor Reefer de 20 pies de atmósfera controlada. Ruta ágil y frecuente con un tiempo de tránsito marítimo garantizado de 3 a 4 días. El contenedor se conecta a la red eléctrica del buque.",
                          icon: <Ship className="w-5 h-5" />,
                          color: "border-orange-600 text-orange-600 bg-orange-50"
                        },
                        {
                          step: "04",
                          title: "Distribución Local",
                          sub: "Caucedo -> Resorts Punta Cana",
                          desc: "Aduana rápida con agente local dominicano y DIGEMAPS. Transporte terrestre en camiones ligeros congelados de última milla hacia el centro de acopio y entrega Just-In-Time a los almacenes frigoríficos de los resorts B2B.",
                          icon: <Clock className="w-5 h-5" />,
                          color: "border-red-700 text-red-700 bg-red-50"
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 shadow-sm relative group hover:border-primary/40 transition-all">
                          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-headline text-lg font-black mb-4 ${item.color}`}>
                            {item.icon}
                          </div>
                          <span className="block text-[10px] text-on-surface-variant/60 font-mono uppercase tracking-widest">{item.sub}</span>
                          <h5 className="font-headline font-bold text-on-surface text-base mt-1 mb-3">{item.step}. {item.title}</h5>
                          <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* 3. PLAN DE MARKETING B2B (4Ps GOURMET) TAB */}
            {activeTab === 'marketing' && (
              <div className="space-y-10">
                
                {/* 4Ps Gourmet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* PRODUCTO */}
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-basil/10 rounded-2xl text-basil">
                        <Flame className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant/40 font-bold uppercase">Pilar 01 • PRODUCTO</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-basil">Adaptación del Producto y Receta Pura</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      El Pareto exportable será nuestro **Ravioli Ultracongelado** (rellenos premium de Pollo, Carne, Queso-Espinaca y Cuatro Quesos). La formulación original con sémola de trigo durum 100% pura importada de Italia y huevos de granja se mantiene intacta para salvaguardar el prestigio artesanal de 1983. 
                      La adaptación se centra exclusivamente en el **empaque**: rediseño bilingüe (español/inglés) para capturar al turista internacional en los hoteles y cumplimiento del registro fitosanitario ante **DIGEMAPS** (autoridad en República Dominicana).
                    </p>
                    <div className="bg-surface-container p-4 rounded-xl space-y-2 text-xs">
                      <strong className="block text-primary text-[11px] uppercase tracking-wider">Ventaja Tecnológica Unica:</strong>
                      <p className="text-[11px] text-on-surface-variant/80">
                        Pasteurización en línea con choque de vapor controlado que elimina microorganismos y estabiliza la humedad sin recurrir a conservantes químicos que devalúen la etiqueta limpia.
                      </p>
                    </div>
                  </div>

                  {/* PRECIO */}
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-yellow-600/10 rounded-2xl text-yellow-600">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant/40 font-bold uppercase">Pilar 02 • PRECIO</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-basil">Precio Premium y Valor Percibido</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      El precio de venta exportador B2B CIF Puerto Caucedo se fija en **$38.000 COP / kg** (aproximadamente **$9.50 USD / kg**). 
                      Esta estrategia de **precio por valor percibido** se sustenta en que el chef ejecutivo del resort reduce su costo operativo de mano de obra culinaria experta, mermas de masa e inventario perecedero. 
                      El simulador de exportación arroja una rentabilidad EBITDA muy saludable, superando la del mercado doméstico, ya que el costo local de producción puro en planta es de **$11.000 COP / kg**.
                    </p>
                    <div className="bg-surface-container p-4 rounded-xl grid grid-cols-2 gap-4 text-center">
                      <div>
                        <span className="block text-[10px] text-on-surface-variant/70 uppercase">Costo Planta COL</span>
                        <strong className="text-sm font-bold text-charcoal font-headline">$11.000 COP</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] text-on-surface-variant/70 uppercase">Precio CIF Venta</span>
                        <strong className="text-sm font-bold text-primary font-headline">$38.000 COP (~$9.5 USD)</strong>
                      </div>
                    </div>
                  </div>

                  {/* DISTRIBUCIÓN / PLAZA */}
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-600">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant/40 font-bold uppercase">Pilar 03 • PLAZA</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-basil">Canal Indirecto B2B: Alianza Estratégica</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      Il Castello penetrará en Punta Cana a través de un **canal indirecto corto B2B**. 
                      Firmaremos una **alianza estratégica** con un distribuidor local dominicano de cadena de frío que posea camiones refrigerados y una red de almacenes en Santo Domingo y Punta Cana. 
                      El distribuidor se encargará del acopio, cobro financiero y distribución capilar *just-in-time* diaria hacia las cocinas de resorts y hoteles de 5 estrellas de cadenas prestigiosas (Meliá, Barceló, Riu, Hard Rock Hotels).
                    </p>
                    <div className="bg-surface-container p-4 rounded-xl text-xs space-y-2">
                      <strong className="block text-primary text-[11px] uppercase tracking-wider">Criterio de Selección del Distribuidor:</strong>
                      <p className="text-[11px] text-on-surface-variant/80">
                        Presencia demostrada en el canal HORECA caribeño, flota frigorífica digitalizada de última generación y sistemas integrados de cobro en USD.
                      </p>
                    </div>
                  </div>

                  {/* COMERCIALIZACIÓN / PROMOCIÓN */}
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-red-700/10 rounded-2xl text-red-700">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant/40 font-bold uppercase">Pilar 04 • PROMOCIÓN</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-basil">Tácticas B2B y Comercialización</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      La venta B2B gastronómica exige una comercialización de **alta proximidad y relación consultiva**. 
                      Nuestra estrategia promocional consiste en: **Showrooms de Degustación Gourmet** dirigidos exclusivamente a Chefs Ejecutivos y directores de Alimentos & Bebidas (A&B) de los resorts dominicanos. 
                      Participación directa en la feria nacional de hostelería **Expolactea** y ferias gastronómicas en Santo Domingo. Campaña de marketing directo B2B digital en LinkedIn orientada a jefes de compras hoteleros.
                    </p>
                    <div className="bg-surface-container p-4 rounded-xl text-xs space-y-2">
                      <strong className="block text-primary text-[11px] uppercase tracking-wider">Kit de Entrada Gourmet:</strong>
                      <p className="text-[11px] text-on-surface-variant/80">
                        Muestras congeladas gratis de 2kg acompañadas de fichas técnicas de rendimiento térmico, videos de preparación rápida e infografías de inocuidad.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Interactive Buyer Personas Section */}
                <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
                  <div className="text-center max-w-2xl mx-auto mb-8">
                    <h4 className="font-headline text-2xl font-bold text-basil uppercase">Nuestros Clientes Clave (Buyer Personas)</h4>
                    <p className="text-xs text-on-surface-variant">Estructura interactiva que contrasta al decisor de compra B2B (Canal Indirecto) con el comensal internacional B2C (Consumidor Final).</p>
                  </div>

                  <div className="flex justify-center gap-4 mb-8">
                    <button
                      onClick={() => setActivePersona('alessandro')}
                      className={`px-5 py-2.5 rounded-xl text-xs font-headline font-bold uppercase tracking-wider transition-all ${
                        activePersona === 'alessandro' 
                          ? 'bg-primary text-white shadow-sm' 
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      Alessandro Vitiello • Decisor B2B
                    </button>
                    <button
                      onClick={() => setActivePersona('sarah')}
                      className={`px-5 py-2.5 rounded-xl text-xs font-headline font-bold uppercase tracking-wider transition-all ${
                        activePersona === 'sarah' 
                          ? 'bg-primary text-white shadow-sm' 
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      Sarah Jenkins • Consumidor B2C Final
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePersona}
                      initial={{ opacity: 0, x: activePersona === 'alessandro' ? -15 : 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: activePersona === 'alessandro' ? 15 : -15 }}
                      transition={{ duration: 0.25 }}
                      className="bg-surface-container p-6 md:p-10 rounded-[2rem] border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                      <div className="lg:col-span-1 space-y-4">
                        <div className="w-20 h-20 rounded-3xl bg-white border border-outline-variant/30 flex items-center justify-center text-4xl shadow-md">
                          {personas[activePersona].avatar}
                        </div>
                        <div>
                          <h5 className="font-headline font-bold text-xl text-primary leading-tight">{personas[activePersona].name}</h5>
                          <span className="text-[10px] text-on-surface-variant uppercase font-mono block tracking-wide mt-0.5">{personas[activePersona].role}</span>
                          <span className="text-[10px] text-on-surface-variant/60 block">{personas[activePersona].location} • Edad: {personas[activePersona].age} años</span>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-outline-variant/10">
                          <Quote className="w-5 h-5 text-primary opacity-30 mb-2" />
                          <p className="text-xs italic text-on-surface-variant leading-relaxed">
                            "{personas[activePersona].quote}"
                          </p>
                        </div>
                      </div>

                      <div className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 space-y-3">
                            <h6 className="font-headline font-bold text-xs uppercase tracking-widest text-red-800 flex items-center gap-2">
                              <ShieldAlert className="w-3.5 h-3.5" /> Dolores / Frustraciones
                            </h6>
                            <ul className="space-y-2 list-none m-0 p-0 text-xs">
                              {personas[activePersona].frustrations.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-on-surface-variant leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 space-y-3">
                            <h6 className="font-headline font-bold text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5" /> Necesidades / Objetivos
                            </h6>
                            <ul className="space-y-2 list-none m-0 p-0 text-xs">
                              {personas[activePersona].needs.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-on-surface-variant leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-primary text-white rounded-2xl p-6 shadow-sm border border-white/5 space-y-2">
                          <h6 className="font-headline font-bold text-xs uppercase tracking-widest text-wheat">Nuestra Propuesta de Valor (Solución Il Castello)</h6>
                          <p className="text-xs text-white/80 leading-relaxed">
                            {personas[activePersona].solution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            )}

            {/* 4. TEST DE SALIDA TAB */}
            {activeTab === 'exit-test' && (
              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h4 className="font-headline text-2xl font-bold text-basil uppercase">Test de Salida y Autoevaluación Comparativa</h4>
                  <p className="text-xs text-on-surface-variant">Contraste directo entre el nivel de entrada del equipo y los aprendizajes e impacto real consolidado en el núcleo de Aldea Global 2.</p>
                </div>

                {/* Interactive Member Switcher Slider */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-surface-container p-1 rounded-2xl max-w-3xl mx-auto">
                  {teamMembers.map((member, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMember(idx)}
                      className={`py-3.5 px-2 rounded-xl text-center text-xs font-bold font-headline uppercase tracking-wider transition-all duration-300 ${
                        activeMember === idx 
                          ? 'bg-primary text-white shadow' 
                          : 'text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {member.name.split(' ')[0]} {member.name.split(' ')[1] || ''}
                    </button>
                  ))}
                </div>

                {/* Selected Member Detail Comparison Card */}
                <div className="bg-white rounded-3xl p-6 md:p-10 border border-outline-variant/20 shadow-sm relative overflow-hidden">
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-outline-variant/20">
                    <div>
                      <span className="text-[10px] text-primary uppercase font-mono tracking-widest font-bold">Integrante Seleccionado</span>
                      <h4 className="font-headline text-2xl font-bold text-basil mt-0.5">{teamMembers[activeMember].name}</h4>
                      <p className="text-xs text-on-surface-variant/80 font-label uppercase tracking-widest">{teamMembers[activeMember].role}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Signature Container */}
                      <div className="text-center">
                        <span className="block text-[8px] text-on-surface-variant/40 font-mono uppercase tracking-widest mb-1">Firma Digital</span>
                        {teamMembers[activeMember].pending ? (
                          <div className="bg-surface-container border border-dashed border-outline-variant/40 px-4 py-2 rounded-xl text-[10px] italic text-on-surface-variant/40">Firma pendiente...</div>
                        ) : (
                          <div className="w-32 h-14 bg-surface-container rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                            <img 
                              src={teamMembers[activeMember].signature} 
                              alt={`Firma ${teamMembers[activeMember].name}`} 
                              className="max-h-full max-w-full object-contain filter contrast-125"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Pretest vs Posttest split screen */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Pre-Test Box */}
                    <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-[10px] font-mono uppercase tracking-wider font-bold">
                          Autoevaluación Pre-Test (Fase 1)
                        </span>
                        <p className="text-xs text-on-surface-variant leading-relaxed text-justify italic">
                          "{teamMembers[activeMember].pre}"
                        </p>
                      </div>

                      {teamMembers[activeMember].testImg && (
                        <div className="border-t border-outline-variant/20 pt-4 mt-4">
                          <span className="block text-[9px] text-on-surface-variant/60 font-mono uppercase tracking-widest mb-2">Evidencia de Resultado Pre-Test</span>
                          <div className="w-full h-32 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 bg-white p-1">
                            <img 
                              src={teamMembers[activeMember].testImg} 
                              alt={`Test pre de ${teamMembers[activeMember].name}`} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Post-Test Box */}
                    <div className="bg-gradient-to-br from-basil/5 to-primary/10 p-6 rounded-2xl border border-primary/20 space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-mono uppercase tracking-wider font-bold">
                          Autoevaluación Post-Test (Fase 6)
                        </span>
                        <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                          {teamMembers[activeMember].post}
                        </p>
                      </div>

                      <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-xs space-y-1">
                        <strong className="block text-primary text-[10px] uppercase tracking-wider">Impacto de Competencia CEIPA / ASU:</strong>
                        <p className="text-[10px] text-on-surface-variant leading-normal">
                          Dominio y rigor metodológico para cruzar variables externas complejas con la viabilidad comercial real de una pyme colombiana.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* 5. METODO CIENTIFICO TAB */}
            {activeTab === 'scientific' && (
              <div className="space-y-8">
                
                {/* Intro Scientific Method */}
                <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="p-4 bg-primary/10 rounded-3xl text-primary">
                      <BookOpen className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="font-headline text-2xl font-bold text-basil uppercase mb-2">Conclusiones Basadas en el Método Científico</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                        El proyecto de internacionalización de **Il Castello** ha sido desarrollado aplicando con total rigor el **Método Científico** exigido por los lineamientos del **CEIPA Business School**. Cada etapa del proceso representa una fase empírica y comprobada que disminuye la incertidumbre empresarial y construye una propuesta de internacionalización validable y con total sustento teórico-práctico.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Steps of Scientific Method Accordions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* F1-A2 OBSERVACION */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20 shadow-sm space-y-3">
                    <span className="block font-mono text-xs text-primary font-bold uppercase">Etapa 01 • Observación (F1-A2)</span>
                    <h5 className="font-headline font-bold text-base text-charcoal">Realidad de la Pyme y Diagnóstico de Exportación</h5>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      *Observación Empírica:* Se analizó la operación y el core de **Pasta Artesanal LG S.A.S** (fundada en 1983). Se identificaron sus ventajas competitivas domésticas: el secado lento de 14 horas, su alta fidelización en el canal HORECA doméstico y la ausencia de aditivos y conservantes químicos. Sin embargo, se observó que la pyme posee una considerable capacidad de planta ociosa (más de un 50% de capacidad libre en su túnel de ultracongelación por choque a -20°C). Esto genera la necesidad de buscar canales de exportación para rentabilizar la inversión tecnológica y mitigar el riesgo inflacionario nacional.
                    </p>
                  </div>

                  {/* F2-A2 FORMULACION HIPOTESIS */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20 shadow-sm space-y-3">
                    <span className="block font-mono text-xs text-primary font-bold uppercase">Etapa 02 • Formulación de Hipótesis (F2-A2)</span>
                    <h5 className="font-headline font-bold text-base text-charcoal">Establecimiento de Objetivos SMART</h5>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      *Hipótesis Formulada:* Si **Il Castello** diseña una estrategia de entrada B2B bajo el Incoterm CIF y firma una alianza de distribución capilar de cadena de frío en un mercado con alto PIB turístico y alto índice de indulgencia en el Caribe, entonces podrá colocar **2.000 kg mensuales de raviolis congelados premium** para el primer semestre de **2026**, logrando contratos estables y mitigando la dependencia del mercado doméstico. El objetivo SMART derivado es la experimentación que guía el análisis de entornos.
                    </p>
                  </div>

                  {/* F3-A3/A5 RECOPILACION Y ANALISIS DATOS */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20 shadow-sm space-y-3">
                    <span className="block font-mono text-xs text-primary font-bold uppercase">Etapa 03 • Experimentación y Datos (F3-A3/A5)</span>
                    <h5 className="font-headline font-bold text-base text-charcoal">Análisis del PESTEL e IED de los 5 Entornos</h5>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      *Fase Experimental:* Se contrastaron de forma rigurosa 15 variables cualitativas y cuantitativas para México, Panamá, El Salvador y República Dominicana. Se investigaron bases de datos oficiales (Banco Mundial, CEPAL, Hofstede Insights). Los datos demostraron que, si bien México posee un volumen demográfico masivo, **República Dominicana** ofrece una velocidad logística de **3 a 4 días marítimos**, un extraordinario **15.3% de PIB Turístico** y un puntaje de **95 en Indulgencia**, lo que valida la hipótesis B2B orientada al nicho de resorts premium en Punta Cana.
                    </p>
                  </div>

                  {/* F4/F5-A7 CONCLUSIONES */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20 shadow-sm space-y-3">
                    <span className="block font-mono text-xs text-primary font-bold uppercase">Etapa 04 • Conclusiones y Propuesta (F4/F5-A7)</span>
                    <h5 className="font-headline font-bold text-base text-charcoal">Propuesta Comercial del Plan Mix de Marketing 4P</h5>
                    <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                      *Conclusión Científica:* Se rechaza la dispersión de esfuerzos en múltiples países y se acepta la penetración única en **Punta Cana, República Dominicana** como la alternativa más rentable e inocua para Il Castello. El mix de marketing 4P (raviolis congelados con registro DIGEMAPS, empaque bilingüe, venta consultiva B2B y precio premium de **$38.000 COP / kg**) cierra el método científico comprobando que la pyme posee una ventaja tecnológica insustituible por los competidores industriales.
                    </p>
                  </div>

                </div>

                {/* Standard APA 7 Academic References */}
                <div className="bg-surface-container p-6 md:p-8 rounded-3xl border border-outline-variant/20">
                  <h4 className="font-headline text-lg font-bold text-basil uppercase mb-6 text-center">Referencias Académicas Formateadas (APA 7)</h4>
                  <div className="space-y-4 font-mono text-[10px] text-on-surface-variant/80 leading-relaxed text-justify">
                    <p className="pl-4 -indent-4">Banco Mundial. (2023). <span className="italic font-headline">Logistics Performance Index (LPI) 2023: Connecting to Compete</span>. World Bank Group. https://lpi.worldbank.org</p>
                    <p className="pl-4 -indent-4">CEPAL. (2023). <span className="italic font-headline">La Inversión Extranjera Directa en América Latina y el Caribe 2023</span>. Comisión Económica para América Latina y el Caribe. https://www.cepal.org</p>
                    <p className="pl-4 -indent-4">DIGEMAPS. (2024). <span className="italic font-headline">Manual de Requisitos y Procedimientos para la Emisión de Registro Sanitario de Alimentos y Bebidas Importados</span>. Ministerio de Salud Pública de la República Dominicana. https://msp.gob.do</p>
                    <p className="pl-4 -indent-4">Hofstede Insights. (2023). <span className="italic font-headline">Country Comparison Tool: Colombia, Mexico, Panama, and Dominican Republic</span>. Hofstede Insights. https://www.hofstede-insights.com</p>
                    <p className="pl-4 -indent-4">Osterwalder, A., & Pigneur, Y. (2010). <span className="italic font-headline">Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers</span>. John Wiley & Sons.</p>
                    <p className="pl-4 -indent-4">Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. <span className="italic font-headline">Harvard Business Review</span>, 86(1), 78-93.</p>
                    <p className="pl-4 -indent-4">WIPO. (2023). <span className="italic font-headline">Global Innovation Index 2023: Innovation in the face of uncertainty</span>. World Intellectual Property Organization. https://www.wipo.int</p>
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
