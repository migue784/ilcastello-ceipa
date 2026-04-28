import React from 'react';
import ScrollReveal from './ScrollReveal';
import { LineChart, Percent, Coins, Scale, TrendingUp, DollarSign, ExternalLink } from 'lucide-react';

// ─── DATOS REALES DEL EXCEL "excel grupo 1.xlsx" (2020–2024) ─────────────────
// Todos los valores en porcentaje o unidad nativa según indicador
// Colombia = país de referencia (origen de Il Castello)

const indicators = [
  {
    title: "PIB (Crecimiento Económico)",
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-wheat)]" />,
    source: "Banco Mundial – Indicador NY.GDP.MKTP.KD.ZG / CEPAL 2024",
    data: {
      headers: ['País', '2020', '2021', '2022', '2023', '2024', 'Prom.'],
      rows: [
        ['🇨🇴 Colombia (ref.)', '-7.2%', '+10.8%', '+7.3%', '+0.7%', '+1.6%', '+2.6%'],
        ['🇲🇽 México',         '-8.4%', '+6.0%',  '+3.7%', '+3.4%', '+1.4%', '+1.2%'],
        ['🇸🇻 El Salvador',    '-7.9%', '+11.9%', '+3.0%', '+3.5%', '+2.6%', '+2.6%'],
        ['🇩🇴 Rep. Dominicana','-7.9%', '+14.0%', '+5.2%', '+2.2%', '+5.0%', '+3.7%'],
        ['🇵🇦 Panamá',        '-17.8%','+16.5%', '+11.0%','+7.2%', '+2.7%', '+3.9%'],
      ]
    },
    text: "El PIB refleja la capacidad de crecimiento económico de cada mercado destino. Colombia, país de origen, promedió 2.6% en 2020–2024, con una caída severa en 2020 (pandemia) y un rebote histórico en 2021 (+10.8%). Panamá lidera el grupo con promedio de 3.9%, impulsado por su recuperación post-COVID (+16.5% en 2021) y su rol como hub logístico regional. República Dominicana (3.7%) mantiene crecimiento sólido sostenido por el turismo. México registra el promedio más bajo (1.2%), afectado por su dependencia económica de EE.UU. y baja inversión doméstica. El Salvador muestra estabilidad relativa (2.6%) con crecimiento progresivo desde 2021. Para Il Castello, mercados con mayor PIB significan mayor gasto en gastronomía premium. Panamá y Rep. Dominicana son los mercados con mayor dinamismo económico.",
    ratings: { mx: 2, sv: 3, rd: 4, pa: 5 },
    winner: 'pa',
  },
  {
    title: "Inflación",
    icon: <Percent className="w-8 h-8 text-[var(--color-wheat)]" />,
    source: "FMI – World Economic Outlook / Bancos Centrales de cada país",
    data: {
      headers: ['País', '2020', '2021', '2022', '2023', '2024', 'Prom.'],
      rows: [
        ['🇨🇴 Colombia (ref.)',  '+2.5%', '+3.5%', '+10.2%','+11.7%','+6.6%', '+6.9%'],
        ['🇲🇽 México',          '+3.4%', '+5.7%', '+7.9%',  '+5.5%', '+4.7%', '+5.4%'],
        ['🇸🇻 El Salvador',     '-0.4%', '+3.5%', '+7.2%',  '+4.0%', '+0.9%', '+3.0%'],
        ['🇩🇴 Rep. Dominicana', '+3.8%', '+8.2%', '+8.8%',  '+4.8%', '+3.3%', '+5.8%'],
        ['🇵🇦 Panamá',         '-1.6%', '+1.6%', '+2.9%',  '+1.5%', '+0.7%', '+1.0%'],
      ]
    },
    text: "La inflación erosiona el poder adquisitivo de los clientes HORECA y encarece los insumos importados. Colombia (referencia) sufrió una de las peores inflaciones del grupo: 10.2% en 2022 y 11.7% en 2023, presionando significativamente los costos de exportación. Panamá registró la inflación más baja y estable del período (promedio 1.0%), gracias a su economía dolarizada sin banco central emisor. El Salvador, también dolarizado, promedió 3.0% con deflación en 2020. México (5.4%) y Rep. Dominicana (5.8%) presentan inflación moderada-alta con picos en 2022. Un entorno inflacionario bajo en el mercado destino favorece la competitividad del producto importado y la planificación de precios a largo plazo. Los mercados dolarizados —Panamá y El Salvador— ofrecen a Il Castello el entorno de precios más predecible y estable.",
    ratings: { mx: 3, sv: 4, rd: 3, pa: 5 },
    winner: 'pa',
  },
  {
    title: "Desempleo",
    icon: <Scale className="w-8 h-8 text-[var(--color-wheat)]" />,
    source: "OIT / INEC de cada país / Banco Mundial",
    data: {
      headers: ['País', '2020', '2021', '2022', '2023', '2024', 'Prom.'],
      rows: [
        ['🇨🇴 Colombia (ref.)', '15.6%','13.9%','10.5%', '9.6%', '9.6%', '11.8%'],
        ['🇲🇽 México',         ' 4.4%',' 4.0%',' 3.3%', '2.8%', '2.7%', ' 3.4%'],
        ['🇸🇻 El Salvador',    ' 5.0%',' 4.3%',' 3.0%', '3.0%', '3.3%', ' 3.7%'],
        ['🇩🇴 Rep. Dominicana',' 6.1%',' 7.7%',' 5.5%', '5.6%', '5.3%', ' 6.0%'],
        ['🇵🇦 Panamá',        '18.5%','11.3%',' 9.9%', '7.4%', '9.5%', '11.3%'],
      ]
    },
    text: "El desempleo impacta el consumo en restaurantes y hoteles premium: a mayor empleo, mayor gasto discrecional en gastronomía de lujo. Colombia (referencia) registra el desempleo más alto del grupo (promedio 11.8%), lo que refleja la vulnerabilidad del mercado doméstico. Panamá, pese a su alta tasa promedio (11.3%), explica dicha cifra por el impacto dramático de 2020 (18.5%) derivado del cierre total de su canal turístico; desde 2021 muestra recuperación progresiva. México y El Salvador lideran el grupo con los índices más bajos (3.4% y 3.7% respectivamente), lo que señala mercados laborales robustos. Rep. Dominicana (6.0%) mantiene tasas controladas. Para Il Castello, mercados con bajo desempleo garantizan consumidores con mayor capacidad de gasto en el segmento premium. México y El Salvador ofrecen la mejor posición en este indicador.",
    ratings: { mx: 5, sv: 4, rd: 3, pa: 2 },
    winner: 'mx',
  },
  {
    title: "Tasa de Interés",
    icon: <Coins className="w-8 h-8 text-[var(--color-wheat)]" />,
    source: "Bancos Centrales oficiales / FMI – International Financial Statistics",
    data: {
      headers: ['País', '2020', '2021', '2022', '2023', '2024', 'Prom.'],
      rows: [
        ['🇨🇴 Colombia (ref.)', '8.2%', '1.4%', '0.8%', '13.2%','9.8%', '6.7%'],
        ['🇲🇽 México',         '6.3%', '4.9%', '8.2%', '11.6%','11.2%','8.4%'],
        ['🇸🇻 El Salvador',    '4.5%', '4.0%', '5.5%', '6.5%', '5.5%', '5.2%'],
        ['🇩🇴 Rep. Dominicana','5.2%', '2.2%', '2.1%', '8.2%', '5.7%', '4.7%'],
        ['🇵🇦 Panamá',        '2.2%', '2.2%', '3.5%', '5.5%', '5.1%', '3.7%'],
      ]
    },
    text: "La tasa de interés determina el costo del crédito para negocios HORECA que financian inventarios, expansión y apertura de nuevos establecimientos. Colombia (referencia) vivió una volatilidad extrema: de 0.8% en 2022 saltó a 13.2% en 2023 para frenar la inflación, encareciendo severamente el crédito empresarial. México registra el promedio más alto del grupo (8.4%) con pico de 11.6% en 2023, frenando la inversión privada en el sector gastronómico. Panamá lidera con el promedio más bajo (3.7%): al no tener banco central, sus tasas se anclan a la Fed de EE.UU. y son históricamente estables y predecibles. Rep. Dominicana (4.7%) y El Salvador (5.2%) ofrecen condiciones moderadas favorables. Tasas bajas facilitan la expansión de restaurantes y hoteles —clientes potenciales de Il Castello—, haciendo de Panamá y Rep. Dominicana los mercados con mejores condiciones crediticias.",
    ratings: { mx: 2, sv: 4, rd: 4, pa: 5 },
    winner: 'pa',
  },
  {
    title: "Tipo de Cambio",
    icon: <DollarSign className="w-8 h-8 text-[var(--color-wheat)]" />,
    source: "Banco de la República Colombia / Banco Mundial / Bancos Centrales",
    data: {
      headers: ['País', '2020', '2021', '2022', '2023', '2024', 'Ref.'],
      rows: [
        ['🇨🇴 Colombia (ref.)', 'COP$3,693', 'COP$3,749', 'COP$4,260', 'COP$4,322', 'COP$4,081', 'Base'],
        ['🇲🇽 México (MXN/USD)',    '$172.06',   '$184.55',   '$211.79',  '$243.44',   '$222.85', 'Alta volatilidad'],
        ['🇸🇻 El Salvador',   'USD (fijo)', 'USD (fijo)', 'USD (fijo)','USD (fijo)','USD (fijo)','Sin riesgo camb.'],
        ['🇩🇴 Rep. Dom. (DOP/USD)','$65.75',    '$70.60',    '$78.45',   '$75.20',    '$72.80',  'Depreciación gradual'],
        ['🇵🇦 Panamá',        'USD (fijo)', 'USD (fijo)', 'USD (fijo)','USD (fijo)','USD (fijo)','Sin riesgo camb.'],
      ]
    },
    text: "El tipo de cambio determina el precio real de las exportaciones de Il Castello en el mercado destino y el nivel de riesgo financiero de la negociación. El peso colombiano (COP) se depreció un 10.5% entre 2020 y 2023 frente al dólar, lo que encarece las importaciones para los clientes destino. Panamá y El Salvador usan el dólar estadounidense como moneda oficial, eliminando completamente el riesgo cambiario: el precio pactado en USD no sufre fluctuaciones. Rep. Dominicana (DOP) muestra depreciación gradual y manejable (~2.5% anual promedio). México (MXN) es el más volátil del grupo: su peso se depreció 26% entre 2020 y 2023, dificultando la planificación de precios a largo plazo. La dolarización de Panamá y El Salvador representa la ventaja más significativa para la seguridad financiera de Il Castello en el proceso exportador.",
    ratings: { mx: 2, sv: 5, rd: 3, pa: 5 },
    winner: 'pa',
  },
];

const ratingColor = (v) => {
  if (v >= 5) return 'text-emerald-400 bg-emerald-400/10';
  if (v >= 4) return 'text-[var(--color-wheat)] bg-[var(--color-wheat)]/10';
  if (v >= 3) return 'text-blue-300 bg-blue-300/10';
  return 'text-red-400 bg-red-400/10';
};

const MacroAnalysis = () => {
  const totals = {
    mx: indicators.reduce((s, i) => s + i.ratings.mx, 0),
    sv: indicators.reduce((s, i) => s + i.ratings.sv, 0),
    rd: indicators.reduce((s, i) => s + i.ratings.rd, 0),
    pa: indicators.reduce((s, i) => s + i.ratings.pa, 0),
  };

  return (
    <div className="w-full relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img src="/productos/FETTUCCINE_1_e701b431-b306-43ec-a4a6-39662090f2bc_503x.png" alt=""
          className="absolute -top-10 -right-40 w-[400px] opacity-[0.03] rotate-[20deg] blur-sm mix-blend-screen" />
        <img src="/productos/PAPPARDELLE_1_503x.png" alt=""
          className="absolute top-1/2 -left-48 w-[500px] opacity-[0.03] -rotate-[15deg] blur-md mix-blend-screen" />
      </div>

      {/* Encabezado */}
      <div className="mb-16 relative z-10">
        <p className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-3">Entrega 4 · Análisis Comparativo</p>
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase mb-4 text-on-surface">
          Análisis <span className="text-primary">Macroeconómico</span>
        </h2>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
          Evaluación comparativa de cinco indicadores económicos (2020–2024) para identificar el mercado
          con mayor estabilidad y potencial de internacionalización para <strong>Il Castello</strong>.
          Colombia se presenta como país de referencia (origen).
        </p>
      </div>

      {/* POWER BI */}
      <ScrollReveal direction="up">
        <div className="mb-20 w-full relative z-10 bg-surface-container-highest p-4 md:p-8 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <LineChart className="w-8 h-8 text-primary" />
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface uppercase tracking-tight">Dashboard Interactivo – Power BI</h3>
              <p className="font-body text-sm text-on-surface-variant">Fuente: excel grupo 1.xlsx · Banco Mundial · FMI · Bancos Centrales</p>
            </div>
          </div>
          <div className="w-full relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-white aspect-[16/9] min-h-[541px]">
            <iframe
              title="actividad equipo 1"
              className="absolute top-0 left-0 w-full h-full"
              src="https://app.powerbi.com/reportEmbed?reportId=906d9556-1c0b-4c14-ac5e-5037ef40e679&autoAuth=true&ctid=71d3a24e-4f62-4dea-9b25-73fe3906000e"
              frameBorder="0"
              allowFullScreen={true}>
            </iframe>
          </div>
          <p className="mt-4 text-right text-sm text-on-surface-variant opacity-70 italic font-body">
            * Usa los filtros para explorar el comportamiento de cada indicador por país y año.
          </p>
        </div>
      </ScrollReveal>

      {/* INDICADORES */}
      <div className="mb-20 space-y-10 relative z-10">
        <h3 className="font-headline text-4xl font-bold text-on-surface uppercase mb-8">
          Detalle por <span className="text-primary">Indicador</span>
        </h3>

        {indicators.map((ind, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden border-l-4 border-primary group hover:bg-surface-dim transition-colors duration-300">
              {/* Header del indicador */}
              <div className="px-8 pt-8 pb-4 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">{ind.icon}</div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-on-surface">{ind.title}</h4>
                  <p className="font-label text-xs uppercase tracking-widest text-primary mt-1">Fuente: {ind.source}</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-0">
                {/* Tabla de datos */}
                <div className="lg:w-3/5 px-8 pb-6">
                  <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/10">
                          {ind.data.headers.map((h, i) => (
                            <th key={i} className={`px-3 py-2 font-headline uppercase tracking-wider text-xs text-on-surface ${i === 0 ? 'text-left' : 'text-center'}`}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="font-body">
                        {ind.data.rows.map((row, ri) => (
                          <tr key={ri} className={`border-t border-outline-variant/20 ${ri === 0 ? 'bg-primary/5 font-semibold' : 'hover:bg-surface/50'}`}>
                            {row.map((cell, ci) => (
                              <td key={ci} className={`px-3 py-2.5 ${ci === 0 ? 'text-left font-semibold text-on-surface' : 'text-center text-on-surface-variant'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Texto + calificaciones */}
                <div className="lg:w-2/5 px-8 pb-8 flex flex-col gap-6">
                  <p className="font-body text-base leading-relaxed text-on-surface-variant text-justify">
                    {ind.text}
                  </p>
                  <div className="bg-black/5 rounded-xl p-5">
                    <h5 className="font-headline text-sm font-bold text-on-surface uppercase tracking-wider mb-4">
                      Calificación de Impacto (1–5)
                    </h5>
                    <div className="space-y-2.5">
                      {[
                        { key: 'mx', label: '🇲🇽 México' },
                        { key: 'sv', label: '🇸🇻 El Salvador' },
                        { key: 'rd', label: '🇩🇴 Rep. Dominicana' },
                        { key: 'pa', label: '🇵🇦 Panamá' },
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center justify-between gap-4">
                          <span className="font-body text-sm font-medium text-on-surface">{label}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-primary transition-all duration-700"
                                style={{ width: `${(ind.ratings[key] / 5) * 100}%` }}
                              />
                            </div>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ratingColor(ind.ratings[key])}`}>
                              {ind.ratings[key]}/5
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* MATRIZ DE EVALUACIÓN + CONCLUSIÓN */}
      <ScrollReveal direction="up">
        <div className="bg-primary text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

          <h3 className="font-headline text-4xl font-bold uppercase mb-10 relative z-10">
            Matriz de <span className="text-[var(--color-wheat)]">Evaluación</span>
          </h3>

          <div className="overflow-x-auto relative z-10 mb-12 rounded-xl border border-white/20">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/20 text-[var(--color-wheat)] font-headline uppercase tracking-wider text-sm">
                  <th className="p-5 border-b border-white/20 whitespace-nowrap">Indicador</th>
                  <th className="p-5 border-b border-white/20 text-center">🇲🇽 México</th>
                  <th className="p-5 border-b border-white/20 text-center">🇸🇻 El Salvador</th>
                  <th className="p-5 border-b border-white/20 text-center">🇩🇴 Rep. Dom.</th>
                  <th className="p-5 border-b border-white/20 text-center">🇵🇦 Panamá</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm md:text-base">
                {indicators.map((ind, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-5 font-semibold">{ind.title}</td>
                    {['mx', 'sv', 'rd', 'pa'].map(k => (
                      <td key={k} className={`p-5 text-center font-bold ${ind.ratings[k] === 5 ? 'text-[var(--color-wheat)]' : ''}`}>
                        {ind.ratings[k]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-black/30 font-headline text-lg font-bold text-[var(--color-wheat)]">
                  <td className="p-5 uppercase tracking-wider">TOTAL /25</td>
                  {['mx', 'sv', 'rd', 'pa'].map(k => (
                    <td key={k} className={`p-5 text-center text-xl ${totals[k] === Math.max(...Object.values(totals)) ? 'bg-[var(--color-wheat)]/20 rounded-lg' : ''}`}>
                      {totals[k]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="relative z-10 bg-black/20 p-8 rounded-xl border border-[var(--color-wheat)]/30 backdrop-blur-sm">
            <h4 className="font-headline text-2xl font-bold uppercase mb-4 text-[var(--color-wheat)]">Conclusión Final</h4>
            <p className="font-body text-lg leading-relaxed text-white opacity-90">
              Con base en el análisis de cinco indicadores macroeconómicos (2020–2024), <strong className="text-white">Panamá</strong>{' '}
              resulta el mercado más favorable para la internacionalización de Il Castello{' '}
              <strong className="text-[var(--color-wheat)]">({totals.pa}/25)</strong>, seguido de{' '}
              <strong>El Salvador ({totals.sv}/25)</strong>. Ambas economías dolarizadas eliminan el riesgo cambiario,
              registran inflación históricamente baja (Panamá promedio 1.0%; El Salvador 3.0%) y tasas de interés
              moderadas que facilitan la expansión del canal HORECA. Panamá además lidera en crecimiento de PIB
              (3.9%) con un sector turístico de alta gama en plena expansión. Colombia (referencia) muestra alta
              inflación estructural (6.9% promedio) y el mayor desempleo del grupo (11.8%), condiciones que
              refuerzan la urgencia de diversificar mercados. <strong>México presenta los indicadores más adversos</strong>{' '}
              ({totals.mx}/25): alta tasa de interés (8.4%), mayor volatilidad cambiaria y bajo crecimiento (1.2%).
            </p>
          </div>

          <div className="mt-8 relative z-10 flex justify-end">
            <a
              href="https://ceipaeduco-my.sharepoint.com/:x:/g/personal/miguel_loperaar_virtual_ceipa_edu_co/IQCpC9kl6KlVRIiZVFrv2RqgAaR11Jg2DgJsJykCnHnT8Yc?e=6MF8EZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-wider text-white/50 hover:text-[var(--color-wheat)] transition-colors border border-white/10 hover:border-[var(--color-wheat)]/50 px-4 py-2 rounded-full"
            >
              <ExternalLink className="w-3 h-3" />
              Ver datos en bruto (Excel)
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default MacroAnalysis;
