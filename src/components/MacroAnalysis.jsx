import React from 'react';
import ScrollReveal from './ScrollReveal';
import { LineChart, Percent, Coins, Scale, TrendingUp, DollarSign, ExternalLink } from 'lucide-react';

const MacroAnalysis = () => {
  const indicators = [
    {
      title: "PIB (Crecimiento Económico)",
      icon: <TrendingUp className="w-8 h-8 text-[var(--color-wheat)]" />,
      source: "Banco Mundial (World Bank Data)",
      text: "El PIB mide la variación porcentual anual del valor de bienes y servicios producidos en cada país. Para Il Castello, cuyo modelo de exportación está dirigido al canal HORECA premium, el crecimiento económico del mercado destino define directamente la capacidad de inversión en gastronomía de alto nivel. Panamá (promedio 2020–2024: 4.8%) y República Dominicana (5.2%) lideran el crecimiento regional, impulsados por turismo internacional y desarrollo inmobiliario, lo que amplía la base de hoteles cinco estrellas y restaurantes de lujo. Costa Rica (3.6%) mantiene crecimiento estable respaldado por su consolidada industria del turismo. México (2.4%) y El Salvador (2.8%) muestran expansión más moderada. Un mayor PIB implica mayor gasto discrecional en gastronomía de lujo, lo que favorece la demanda de pasta artesanal premium. Los mercados más dinámicos —Panamá y República Dominicana— ofrecen condiciones más favorables para el ingreso inicial del producto.",
      ratings: {
        cr: 4, mx: 3, sv: 3, pa: 5, rd: 5
      }
    },
    {
      title: "Inflación",
      icon: <Percent className="w-8 h-8 text-[var(--color-wheat)]" />,
      source: "Fondo Monetario Internacional (IMF)",
      text: "La inflación erosiona el poder adquisitivo de los consumidores y encarece los costos operativos del canal HORECA, incluyendo materias primas, energía y logística. Para Il Castello, exportar a mercados con alta inflación reduce el margen real de sus clientes restauranteros y hoteleros, quienes transfieren presión sobre el precio de los insumos importados. Panamá, al ser una economía dolarizada sin banco central emisor, registró la inflación más baja y estable del periodo analizado (promedio 2020–2024: 1.8%), ofreciendo el entorno de precios más predecible para negociación a largo plazo. El Salvador, también dolarizado, promedió 3.4%. Costa Rica (4.2%) y República Dominicana (7.1%) presentan inflación moderada a alta con picos importantes en 2022. México encabeza la presión inflacionaria del grupo (6.2%), generando incertidumbre en la fijación de precios de exportación. Los mercados dolarizados garantizan mayor estabilidad para Il Castello.",
      ratings: {
        cr: 3, mx: 2, sv: 4, pa: 5, rd: 3
      }
    },
    {
      title: "Desempleo",
      icon: <Scale className="w-8 h-8 text-[var(--color-wheat)]" />,
      source: "Organización de las Naciones Unidas (ONU)",
      text: "El desempleo afecta indirectamente la exportación de Il Castello al impactar el consumo en restaurantes y hoteles premium. Altas tasas de desempleo reducen el gasto discrecional en gastronomía fina y contraen la demanda HORECA. Costa Rica presentó la tasa más alta del grupo, con valores cercanos al 20% en 2020-2021 producto de la crisis por COVID-19 y la afectación al turismo, aunque con recuperación sostenida hacia 2023-2024 (9.8%). República Dominicana logró reducciones progresivas, con tasas cercanas al 5.9% en 2024, respaldadas por el dinamismo turístico. Panamá (promedio 8.1%) y El Salvador (7.2%) muestran estabilidad relativa con mercados laborales en recuperación. México registra tasas bajas oficialmente (2.8%), aunque la informalidad laboral subyacente es estructuralmente alta y limita el consumo real. Para Il Castello, mercados con desempleo controlado y clase media estable son los más atractivos: República Dominicana lidera este indicador.",
      ratings: {
        cr: 2, mx: 3, sv: 3, pa: 3, rd: 4
      }
    },
    {
      title: "Tasa de Interés",
      icon: <Coins className="w-8 h-8 text-[var(--color-wheat)]" />,
      source: "Páginas Oficiales Bancos Centrales",
      text: "La tasa de interés determina el costo del crédito para los negocios HORECA: restaurantes y hoteles que financian inventarios, remodelaciones o expansión. Tasas altas desincentivan la inversión y la apertura de nuevos establecimientos, contrayendo potencialmente la demanda de proveedores premium como Il Castello. Panamá y El Salvador, al operar con el dólar estadounidense como moneda oficial, adoptan indirectamente la política de la Reserva Federal de EE.UU., ofreciendo tasas relativamente estables y predecibles históricamente entre 3% y 5.5%. Costa Rica registró tasas de política monetaria elevadas (entre 7.5% y 9% durante 2022-2023) para combatir la inflación local, encareciendo el crédito empresarial. México mantuvo tasas históricamente altas en el mismo período (hasta 11.25%), frenando significativamente la inversión privada en el sector gastronómico. República Dominicana presentó tasa moderada (6.5% promedio) con cierta volatilidad. Los mercados dolarizados son nuevamente los más favorables.",
      ratings: {
        cr: 3, mx: 2, sv: 5, pa: 5, rd: 3
      }
    },
    {
      title: "Tipo de Cambio",
      icon: <DollarSign className="w-8 h-8 text-[var(--color-wheat)]" />,
      source: "Banco Mundial (World Bank Data)",
      text: "El tipo de cambio es crítico para Il Castello, ya que determina el precio real de sus exportaciones en el mercado destino y el nivel de riesgo financiero en la negociación. Una depreciación de la moneda local frente al dólar encarece el producto importado, reduciendo su competitividad frente a la oferta local. Panamá y El Salvador usan el dólar estadounidense como moneda oficial, eliminando completamente el riesgo cambiario: el precio pactado en USD es el precio final sin necesidad de ajustes por fluctuaciones. Costa Rica (Colón, CRC) mostró una tendencia de depreciación durante 2015-2022, seguida de apreciación significativa en 2023-2024, mejorando la posición del importador. República Dominicana (Peso Dominicano, DOP) registró depreciación gradual pero manejable (~5% anual). México (Peso Mexicano, MXN) es el más volátil del grupo, con fluctuaciones que dificultan la planificación financiera a largo plazo. Panamá y El Salvador ofrecen el entorno más seguro.",
      ratings: {
        cr: 3, mx: 2, sv: 5, pa: 5, rd: 3
      }
    }
  ];

  return (
    <div className="w-full relative">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="/productos/FETTUCCINE_1_e701b431-b306-43ec-a4a6-39662090f2bc_503x.png" 
          alt="" 
          className="absolute -top-10 -right-40 w-[400px] opacity-[0.03] rotate-[20deg] blur-sm mix-blend-screen"
        />
        <img 
          src="/productos/PAPPARDELLE_1_503x.png" 
          alt="" 
          className="absolute top-1/2 -left-48 w-[500px] opacity-[0.03] -rotate-[15deg] blur-md mix-blend-screen"
        />
        <img 
          src="/productos/RAVIOLICARNE_1_503x.png" 
          alt="" 
          className="absolute bottom-10 -right-20 w-[350px] opacity-[0.04] rotate-[45deg] blur-sm mix-blend-screen"
        />
      </div>

      <div className="mb-20 relative z-10">
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase mb-4 text-on-surface">
          Análisis <span className="text-primary">Macroeconómico</span>
        </h2>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl font-light">
          Evaluación comparativa de cinco mercados internacionales potenciales para la expansión de Il Castello, analizando indicadores clave del periodo 2020-2024.
        </p>
      </div>

      {/* DASHBOARD DE POWER BI */}
      <ScrollReveal direction="up">
        <div className="mb-24 w-full relative z-10 bg-surface-container-highest p-4 md:p-8 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <LineChart className="w-8 h-8 text-primary" />
            <h3 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tight">Dashboard Interactivo</h3>
          </div>
          
          <div className="w-full relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-white aspect-[16/9] min-h-[600px]">
            {/* IFRAME DE POWER BI PROPORCIONADO POR EL USUARIO */}
            <iframe 
              title="Dashboard Economico" 
              className="absolute top-0 left-0 w-full h-full"
              src="https://app.powerbi.com/reportEmbed?reportId=7f5bbf38-648a-49f2-b7c9-83ef2bae1ab2&autoAuth=true&ctid=71d3a24e-4f62-4dea-9b25-73fe3906000e&actionBarEnabled=true" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>
          </div>
          <p className="mt-4 text-right text-sm text-on-surface-variant opacity-70 italic font-body">
            * Interactúa con los filtros para explorar el comportamiento de cada indicador por país.
          </p>
        </div>
      </ScrollReveal>

      {/* TARJETAS DE INDICADORES */}
      <div className="mb-24 space-y-12 relative z-10">
        <h3 className="font-headline text-4xl font-bold text-on-surface uppercase mb-12">Detalle por <span className="text-primary">Indicador</span></h3>
        
        {indicators.map((indicator, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
            <div className="bg-surface-container-highest p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:bg-surface-dim transition-colors duration-400 border-l-4 border-primary">
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Info Textual */}
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      {indicator.icon}
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-on-surface tracking-wide">{indicator.title}</h4>
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-primary mb-6">
                    Fuente: {indicator.source}
                  </div>
                  <p className="font-body text-base md:text-lg leading-relaxed text-on-surface-variant text-justify">
                    {indicator.text}
                  </p>
                </div>
                
                {/* Calificaciones */}
                <div className="md:w-1/3 bg-black/5 dark:bg-white/5 rounded-xl p-6 flex flex-col justify-center">
                  <h5 className="font-headline text-lg font-bold text-on-surface text-center mb-6 uppercase tracking-wider">Impacto por País</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm font-semibold">🇨🇷 Costa Rica</span>
                      <span className="bg-surface px-3 py-1 rounded-full font-bold text-primary shadow-sm">{indicator.ratings.cr}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm font-semibold">🇲🇽 México</span>
                      <span className="bg-surface px-3 py-1 rounded-full font-bold text-primary shadow-sm">{indicator.ratings.mx}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm font-semibold">🇸🇻 El Salvador</span>
                      <span className="bg-surface px-3 py-1 rounded-full font-bold text-primary shadow-sm">{indicator.ratings.sv}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm font-semibold">🇵🇦 Panamá</span>
                      <span className="bg-surface px-3 py-1 rounded-full font-bold text-primary shadow-sm">{indicator.ratings.pa}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm font-semibold">🇩🇴 Rep. Dominicana</span>
                      <span className="bg-surface px-3 py-1 rounded-full font-bold text-primary shadow-sm">{indicator.ratings.rd}/5</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* TABLA DE RESUMEN Y CONCLUSIÓN */}
      <ScrollReveal direction="up">
        <div className="bg-primary text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl z-10">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full opacity-30 pointer-events-none transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          
          <h3 className="font-headline text-4xl font-bold uppercase mb-12 relative z-10">Matriz de <span className="text-[var(--color-wheat)]">Evaluación</span></h3>
          
          <div className="overflow-x-auto relative z-10 mb-12 rounded-xl border border-white/20">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/20 text-[var(--color-wheat)] font-headline uppercase tracking-wider text-sm">
                  <th className="p-5 border-b border-white/20 whitespace-nowrap">Indicador</th>
                  <th className="p-5 border-b border-white/20 text-center">🇨🇷 Costa Rica</th>
                  <th className="p-5 border-b border-white/20 text-center">🇲🇽 México</th>
                  <th className="p-5 border-b border-white/20 text-center">🇸🇻 El Salvador</th>
                  <th className="p-5 border-b border-white/20 text-center">🇵🇦 Panamá</th>
                  <th className="p-5 border-b border-white/20 text-center">🇩🇴 Rep. Dom.</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm md:text-base">
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold">PIB (crecimiento)</td>
                  <td className="p-5 text-center">4</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold">Inflación</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center">2</td>
                  <td className="p-5 text-center">4</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                  <td className="p-5 text-center">3</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold">Desempleo</td>
                  <td className="p-5 text-center">2</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">4</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold">Tasa de interés</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center">2</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                  <td className="p-5 text-center">3</td>
                </tr>
                <tr className="border-b border-white/20 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold">Tipo de cambio</td>
                  <td className="p-5 text-center">3</td>
                  <td className="p-5 text-center">2</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                  <td className="p-5 text-center font-bold text-[var(--color-wheat)]">5</td>
                  <td className="p-5 text-center">3</td>
                </tr>
                <tr className="bg-black/30 font-headline text-lg font-bold text-[var(--color-wheat)]">
                  <td className="p-5 uppercase tracking-wider">TOTAL</td>
                  <td className="p-5 text-center">15</td>
                  <td className="p-5 text-center">12</td>
                  <td className="p-5 text-center">20</td>
                  <td className="p-5 text-center text-xl bg-[var(--color-wheat)]/20 rounded-lg">23</td>
                  <td className="p-5 text-center">18</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="relative z-10 bg-black/20 p-8 rounded-xl border border-[var(--color-wheat)]/30 backdrop-blur-sm">
            <h4 className="font-headline text-2xl font-bold uppercase mb-4 text-[var(--color-wheat)]">Conclusión Final</h4>
            <p className="font-body text-lg leading-relaxed text-white opacity-90">
              <strong className="text-white">Panamá</strong> resulta ser el mercado macroeconómico más favorable <strong className="text-[var(--color-wheat)]">(23/25)</strong> para la internacionalización de Il Castello, seguido de <strong>El Salvador (20/25)</strong>. Ambos países, al ser economías dolarizadas, eliminan el riesgo cambiario y mantienen tasas de interés estables. Adicionalmente, el sostenido crecimiento económico de Panamá y su consolidado turismo HORECA de alto nivel representan el entorno más seguro y rentable para el ingreso de pasta artesanal premium. Por el contrario, México presenta las condiciones más adversas (12/25) debido a su alta volatilidad cambiaria, presión inflacionaria y elevadas tasas de interés, lo cual incrementaría significativamente el riesgo financiero de la exportación en este momento.
            </p>
          </div>

          {/* Botón Excel de Datos en Bruto */}
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
