import React, { useState, useEffect } from 'react';
import FloatingProduct from './FloatingProduct';
import TeamAgreement from './TeamAgreement';
import HorizontalGallery from './HorizontalGallery';
import DofaAnalysis from './DofaAnalysis';
import Sustainability from './Sustainability';
import StrategicCrosses from './StrategicCrosses';
import ScrollReveal from './ScrollReveal';
import AnimatedTitle from './AnimatedTitle';
import EnvironmentAnalysis from './EnvironmentAnalysis';
import ExportSimulator from './ExportSimulator';
import PotentialDiagnosis from './PotentialDiagnosis';
import PestelAnalysis from './PestelAnalysis';
import MacroAnalysis from './MacroAnalysis';
import InternationalizationPlan from './InternationalizationPlan';
import { DollarSign, BarChart3, TrendingUp } from 'lucide-react';

export default function StitchLayout({ scrollYProgress }) {
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('diag');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveContent = () => {
    switch (activeSection) {
      case 'diag': return <PotentialDiagnosis />;
      case 'pestel': return <PestelAnalysis />;
      case 'dofa': return <DofaAnalysis />;
      case 'tows': return <StrategicCrosses />;
      case 'macro': return <MacroAnalysis />;
      case 'sost': return <Sustainability />;
      default: return <PotentialDiagnosis />;
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-primary selection:text-on-primary">
      
      {/* Nuestro Floating Product en el espacio Global Absolute o Fixed */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 10, pointerEvents: 'none' }}>
        <FloatingProduct scrollYProgress={scrollYProgress} />
      </div>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <img src="/logo.png" alt="Il Castello Logo" className="h-8 md:h-9 w-auto object-contain" />
          </div>

          {/* Centered Desktop Menu Links */}
          <div className="hidden lg:flex gap-5 xl:gap-8 items-center font-label text-xs uppercase tracking-widest text-on-surface-variant/80 ml-auto mr-8">
            <a className="hover:text-primary border-b border-transparent hover:border-primary/30 pb-1 transition-all duration-300" href="#realidad">Empresa</a>
            <a className="hover:text-primary border-b border-transparent hover:border-primary/30 pb-1 transition-all duration-300" href="#estrategia">Estrategia</a>
            <a 
              href="#economico" 
              className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 px-4 py-2 font-bold uppercase tracking-widest transition-all duration-300 rounded-full flex items-center gap-1.5 shadow-sm"
            >
              <DollarSign className="w-3.5 h-3.5" />
              Económico
            </a>
            <a className="hover:text-primary border-b border-transparent hover:border-primary/30 pb-1 transition-all duration-300" href="#analisis-entornos">Internacionalización</a>
            <a className="hover:text-primary border-b border-transparent hover:border-primary/30 pb-1 transition-all duration-300" href="#plan-a7">Plan Marketing</a>
          </div>

          {/* Action Button & Hamburger Toggle */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-basil transition-all duration-300 hover:shadow-md active:scale-95 rounded-none"
              onClick={() => setSimulatorOpen(true)}
            >
              Simular Exportación
            </button>

            {/* Hamburger Button */}
            <button
              className="lg:hidden text-on-surface hover:text-primary p-2 focus:outline-none transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer (Slide-down overlay with high-end style) */}
      <div 
        className={`fixed inset-0 z-[100] bg-surface flex flex-col justify-between p-8 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-12">
            <img src="/logo.png" alt="Il Castello Logo" className="h-8 w-auto object-contain" />
            <button
              className="text-on-surface hover:text-primary p-2 focus:outline-none transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-6 font-headline text-3xl uppercase tracking-wider text-on-surface pl-2">
            <a 
              className="hover:text-primary transition-colors w-fit" 
              href="#realidad"
              onClick={() => setMobileMenuOpen(false)}
            >
              Empresa
            </a>
            <a 
              className="hover:text-primary transition-colors w-fit" 
              href="#estrategia"
              onClick={() => setMobileMenuOpen(false)}
            >
              Estrategia
            </a>
            <a 
              className="flex items-center gap-2 hover:text-primary transition-colors w-fit border border-primary/20 bg-primary/5 px-5 py-2.5 rounded-full text-2xl font-bold uppercase tracking-wider shadow-sm" 
              href="#economico"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DollarSign className="w-5 h-5 text-primary" />
              Económico
            </a>
            <a 
              className="hover:text-primary transition-colors w-fit" 
              href="#analisis-entornos"
              onClick={() => setMobileMenuOpen(false)}
            >
              Internacionalización
            </a>
            <a 
              className="hover:text-primary transition-colors w-fit" 
              href="#plan-a7"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan Marketing
            </a>
          </div>
        </div>

        {/* Drawer Footer Call To Action */}
        <div className="space-y-6">
          <button 
            className="w-full bg-primary text-on-primary py-4 text-sm font-bold uppercase tracking-widest hover:bg-basil transition-colors duration-300 rounded-none shadow-md"
            onClick={() => {
              setMobileMenuOpen(false);
              setSimulatorOpen(true);
            }}
          >
            Simular Exportación
          </button>
          <div className="text-center font-mono text-[9px] uppercase tracking-widest text-on-surface-variant/40">
            © 2026 PROYECTO UNIVERSITARIO ESTUDIANTES CEIPA.
          </div>
        </div>
      </div>

      {/* Hero (Portata) */}
      <header className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 pt-32 pb-16 relative overflow-hidden bg-surface">
        <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center w-fit mb-2">
              <img src="/logo.png" alt="Il Castello Logo" className="h-8 md:h-9 w-auto object-contain" />
            </div>
            <p className="font-label text-primary uppercase tracking-[0.3em] text-sm font-bold">Aldea Global 2 • Fase 1</p>
            <h1 className="font-headline text-6xl md:text-[7rem] leading-[0.85] font-black tracking-tighter text-on-surface uppercase relative z-20">
              IL CASTELLO <br />
              <span className="text-primary">PREMIUM</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mt-8 relative z-20">
              Estudio de la realidad empresarial y potencial de internacionalización de pasta artesanal premium.
            </p>
          </div>
          
          <div className="flex-1 w-full h-[512px] min-h-[400px] relative flex items-center justify-center p-8">
             {/* Área que usará FlotingProduct para "entrar" desde el centro */}
          </div>
        </div>
      </header>

      {/* Convivencia (Agreements) */}
      <section id="team" className="py-32 px-8 md:px-16 bg-surface-container-low" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface uppercase mb-6">Acuerdos de <br /><span className="text-primary">Convivencia</span></h2>
          </div>
          
          <div className="mt-8">
            <TeamAgreement />
          </div>
        </div>
      </section>

      {/* Interlude / Animaciones */}
      <section className="py-40 relative bg-tertiary overflow-hidden flex items-center justify-center" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <AnimatedTitle text="PASTA AL HUEVO" className="font-headline text-[15vw] font-black text-on-tertiary whitespace-nowrap uppercase tracking-tighter" />
        </div>
        <ScrollReveal direction="up">
          <div className="relative z-10 w-full max-w-[400px] aspect-[9/16] bg-black flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 rounded-2xl overflow-hidden">
            <video 
              src="/videos/Video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Company Reality */}
      <section id="realidad" className="py-32 px-8 md:px-16 bg-surface" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface uppercase leading-tight sticky top-32">
              Realidad <br />
              <span className="text-primary text-6xl">Empresarial</span>
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-surface-container-highest p-10 flex flex-col justify-between aspect-square group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Entidad</div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Pasta Artesanal LG S.A.S</h3>
              <p className="font-body text-sm lg:text-base text-on-surface-variant flex-grow pt-2">Establecida en 1983, es un referente de la tradición italiana en Colombia. Evitan la dependencia corporativa inyectando sus utilidades en tecnología europea, apostando por ser ágiles y sostenibles.</p>
            </div>
            
            <div className="bg-surface-container-highest p-10 flex flex-col justify-between aspect-square group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Producto Core</div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Ravioli Ultracongelado</h3>
              <p className="font-body text-sm lg:text-base text-on-surface-variant flex-grow pt-2">Preservación absoluta de la frescura. Congelado por choque a -20°C tras amasado manual, elimina patógenos sin el uso del controversial químico 'Potasio' usado en los supermercados.</p>
            </div>
            
            <div className="bg-surface-container-highest p-10 flex flex-col justify-between aspect-square group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Proceso Lento</div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Secado 14 Horas</h3>
              <p className="font-body text-sm lg:text-base text-on-surface-variant flex-grow pt-2">En contraste a la industria global, Il Castello emplea secaderos estáticos europeos, deshidratando su pasta 100% durum pausadamente para mantener todas las texturas excepcionales del huevo.</p>
            </div>
            
            <div className="bg-surface-container-highest p-10 flex flex-col justify-between aspect-square group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Targeting</div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Canal HORECA Premium</h3>
              <p className="font-body text-sm lg:text-base text-on-surface-variant flex-grow pt-2">Principal fuente del 90% de sus ingresos fijos. Suplen a los restaurantes élite y cadenas de Hoteles de cinco estrellas, quitándoles la carga pesada y operativa de la cocina artesanal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Strategy (DOFA & Sustainability) */}
      <section id="estrategia" className="bg-primary text-on-primary relative overflow-clip" style={{ zIndex: 20 }}>
        {/* Decoración de fondo dinámica */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-wheat)]/10 to-transparent rounded-full opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-full opacity-30 pointer-events-none transform -translate-x-1/4 translate-y-1/4 blur-[100px]"></div>

        {/* ── CABECERA FULL-WIDTH ── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-28 pb-16 border-b border-white/10">
          <p className="font-label text-xs uppercase tracking-[0.4em] text-[var(--color-wheat)]/60 mb-4">Análisis Estratégico</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase leading-none text-on-primary">
              Estrategia <span className="text-[var(--color-wheat)]">Total</span>
            </h2>
            <p className="font-body text-base text-on-primary/60 max-w-sm border-l-2 border-[var(--color-wheat)]/30 pl-4 leading-relaxed">
              Análisis estructural y proyección sostenible hacia mercados internacionales.
            </p>
          </div>
        </div>

        {/* ── DOS COLUMNAS: SIDEBAR + CONTENIDO ── */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-12 relative z-10 py-12">

          {/* STICKY SIDEBAR (sólo nav) */}
          <div className="w-full md:w-56 flex-shrink-0">
            <div className="md:sticky md:top-28">
              <ul className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {[
                  { id: 'diag',     label: 'Diagnóstico',     num: '01' },
                  { id: 'pestel',   label: 'PESTEL',          num: '02' },
                  { id: 'dofa',     label: 'Matriz DOFA',     num: '03' },
                  { id: 'tows',     label: 'Cruces TOWS',     num: '04' },
                  { id: 'macro',    label: 'Macroeconomía',   num: '05' },
                  { id: 'sost',     label: 'Sostenibilidad',  num: '06' }
                ].map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id} className="flex-shrink-0 md:flex-shrink">
                      <button
                        onClick={() => {
                          setActiveSection(item.id);
                          document.getElementById('estrategia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`group flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left transition-all duration-300 focus:outline-none ${
                          isActive
                            ? 'bg-[var(--color-wheat)]/15 border border-[var(--color-wheat)]/40'
                            : 'border border-transparent hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        <span className={`font-headline text-xs font-bold flex-shrink-0 ${isActive ? 'text-[var(--color-wheat)]' : 'text-white/25 group-hover:text-white/50'}`}>
                          {item.num}
                        </span>
                        <span className={`h-px flex-shrink-0 transition-all duration-300 ${isActive ? 'w-5 bg-[var(--color-wheat)]' : 'w-3 bg-white/20'}`} />
                        <span className={`font-headline text-sm uppercase tracking-wide whitespace-nowrap ${isActive ? 'text-[var(--color-wheat)] font-bold' : 'text-white/40 group-hover:text-white/60'}`}>
                          {item.label}
                        </span>
                        {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-wheat)] animate-pulse flex-shrink-0" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="flex-1 min-h-[70vh]">
            <div key={activeSection} style={{ animation: 'fadeIn 0.4s ease-in-out' }}>
              {renderActiveContent()}
            </div>
          </div>

        </div>
      </section>

      {/* Viabilidad Económica y Financiera */}
      <section id="economico" className="py-32 px-8 md:px-16 bg-surface" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 max-w-3xl">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Viabilidad Financiera</p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface uppercase mb-6">
              Análisis Económico <br />
              <span className="text-primary">y Estructura de Margen</span>
            </h2>
            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
              La viabilidad de exportación de Il Castello se fundamenta en un modelo de **alto valor percibido (Premium Pricing)**. A continuación se desglosan las variables de costos de producción, gastos logísticos internacionales y retornos proyectados bajo el Incoterm CIF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Tarjeta 1: Unit Economics */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-basil">Estructura Unitaria (Unit Economics)</h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Evaluación del costo puro en planta frente al precio de venta internacional CIF en el puerto destino de Caucedo.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant/80">Costo Planta Colombia:</span>
                    <strong className="text-charcoal font-headline font-bold">$11.000 COP / kg</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant/80">Precio Venta CIF Exportación:</span>
                    <strong className="text-primary font-headline font-bold">$38.000 COP / kg (~$9.5 USD)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-primary font-bold">Margen Bruto de Contribución:</span>
                    <strong className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">71.05%</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: EBITDA y Punto de Equilibrio */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-600/10 text-yellow-600 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-basil">EBITDA y Rentabilidad Operativa</h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Proyección financiera mensual basada en un volumen objetivo inicial de exportación B2B de **2.000 kg/mes**.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant/80">Ingresos Proyectados (2.000 kg):</span>
                    <strong className="text-charcoal font-headline font-bold">$76.000.000 COP</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant/80">Egresos Totales (Planta + Flete + Arancel):</span>
                    <strong className="text-tomato font-headline font-bold">$31.020.000 COP</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-primary font-bold">EBITDA Mensual Estimado (RD):</span>
                    <strong className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">~$44.980.000 COP</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Mitigación de Pérdidas y ROI */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-basil">Retorno sobre la Inversión (ROI)</h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Variables de protección de valor y tasa de retorno estimada para la pyme en el primer año de operación.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant/80">Margen Neto Operativo (RD):</span>
                    <strong className="text-emerald-800 font-bold font-headline">59.18%</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant/80">Punto de Equilibrio de Volumen:</span>
                    <strong className="text-charcoal font-headline font-bold">816 kg / Mes B2B</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant/80">Amortización de Inversión Inicial:</span>
                    <strong className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">Menor a 6 Meses</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Caja Llamada al Simulador */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-basil to-charcoal text-white shadow-xl overflow-hidden border border-white/5 relative flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(227,184,90,0.1),transparent_50%)] pointer-events-none"></div>
            <div className="relative z-10 space-y-4 max-w-2xl">
              <h4 className="font-headline text-2xl md:text-3xl font-bold text-white uppercase leading-tight">
                Simulador Financiero de Exportación Interactivo
              </h4>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed text-justify">
                Como negociante, entendemos que las tasas arancelarias, los seguros de transporte y los costos de fletes varían constantemente. Use nuestra herramienta interactiva para calcular escenarios dinámicos para **Panamá, México, El Salvador y República Dominicana**, y descargue el informe ejecutivo en PDF.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <button
                onClick={() => setSimulatorOpen(true)}
                className="bg-primary hover:bg-basil text-on-primary px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border-2 border-white/20"
              >
                Abrir Simulador Económico
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* New Section: Environment Analysis (Internacionalización) */}
      <section id="analisis-entornos" className="py-32 px-8 md:px-16 bg-surface-container-low" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto">
          <EnvironmentAnalysis />
        </div>
      </section>

      {/* Actividad 7: Plan de Internacionalización y Marketing Gourmet */}
      <section id="plan-a7" className="py-32 px-8 md:px-16 bg-surface" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto">
          <InternationalizationPlan />
        </div>
      </section>

      {/* References */}
      <section className="py-24 px-8 md:px-16 bg-surface-dim" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-label text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-12">Referencias Académicas</h2>
          <div className="space-y-6 font-body text-sm text-on-surface-variant/80">
            <p>Osterwalder, A., & Pigneur, Y. (2010). <i className="font-headline">Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers</i>. Wiley.</p>
            <p>Porter, M. E. (2008). <i className="font-headline">The Five Competitive Forces That Shape Strategy. Harvard Business Review, 86(1)</i>, 78-93.</p>
            <p>CEIPA Business School. (2026). <i className="font-headline">Aldea Global 2 | Actividades Grupales – Método Científico</i>.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-20 px-12 text-center bg-surface-dim dark:bg-black font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed relative z-20">
        <div className="flex items-center justify-center mb-8">
          <img src="/logo.png" alt="Il Castello Logo" className="h-9 md:h-10 w-auto object-contain" />
        </div>
        <div className="text-on-surface/60 opacity-60">
          © 2026 PROYECTO UNIVERSITARIO ESTUDIANTES CEIPA.
        </div>
      </footer>
      {/* Simulador Exportación */}
      <ExportSimulator isOpen={simulatorOpen} onClose={() => setSimulatorOpen(false)} />

    </div>
  );
}
