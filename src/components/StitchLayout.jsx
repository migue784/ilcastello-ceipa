import React, { useState, useEffect } from 'react';
import FloatingProduct from './FloatingProduct';
import TeamAgreement from './TeamAgreement';
import HorizontalGallery from './HorizontalGallery';
import DofaAnalysis from './DofaAnalysis';
import Sustainability from './Sustainability';
import StrategicCrosses from './StrategicCrosses';
import ScrollReveal from './ScrollReveal';
import AnimatedTitle from './AnimatedTitle';
import ExportSimulator from './ExportSimulator';
import PotentialDiagnosis from './PotentialDiagnosis';
import PestelAnalysis from './PestelAnalysis';
import MacroAnalysis from './MacroAnalysis';

export default function StitchLayout({ scrollYProgress }) {
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('diag');

  const renderActiveContent = () => {
    switch (activeSection) {
      case 'diag': return <PotentialDiagnosis />;
      case 'pestel': return <PestelAnalysis />;
      case 'dofa': return <DofaAnalysis />;
      case 'tows': return <StrategicCrosses />;
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
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="text-xl font-black tracking-tighter text-basil font-headline uppercase">
          IL CASTELLO
        </div>
        <div className="hidden md:flex gap-8 items-center font-label text-sm uppercase tracking-wider ml-auto mr-12">
          <a className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300" href="#team">Acuerdos</a>
          <a className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300" href="#realidad">Empresa</a>
          <a className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300" href="#estrategia">Estrategia Total</a>
          <a className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300" href="#macro">Macroeconomía</a>
        </div>
        <div>
          <button 
            className="bg-primary text-on-primary px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-basil transition-colors duration-300 rounded-none"
            onClick={() => setSimulatorOpen(true)}
          >
            Simular Exportación
          </button>
        </div>
      </nav>

      {/* Hero (Portata) */}
      <header className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 pt-32 pb-16 relative overflow-hidden bg-surface">
        <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
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
      <section id="estrategia" className="py-24 bg-primary text-on-primary relative overflow-clip" style={{ zIndex: 20 }}>
        {/* Decoración de fondo dinámica */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-wheat)]/10 to-transparent rounded-full opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-full opacity-30 pointer-events-none transform -translate-x-1/4 translate-y-1/4 blur-[100px]"></div>

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-16 relative z-10 pt-16">
          
          {/* STICKY SIDEBAR (Navegación) */}
          <div className="w-full md:w-1/4 relative">
            <div className="md:sticky md:top-40 md:h-[calc(100vh-10rem)]">
              <h2 className="font-headline text-5xl md:text-6xl font-bold uppercase mb-4 text-on-primary leading-none">
                Estrategia <br className="hidden md:block" />
                <span className="text-[var(--color-wheat)]">Total</span>
              </h2>
              <p className="font-body text-base text-on-primary/80 mb-12 font-light border-l-2 border-[var(--color-wheat)]/30 pl-4">
                Análisis estructural y proyección sostenible hacia mercados internacionales.
              </p>
              
              <ul className="hidden md:flex flex-col space-y-3 mt-2">
                {[
                  { id: 'diag', label: 'Diagnóstico', num: '01' },
                  { id: 'pestel', label: 'PESTEL', num: '02' },
                  { id: 'dofa', label: 'Matriz DOFA', num: '03' },
                  { id: 'tows', label: 'Cruces TOWS', num: '04' },
                  { id: 'sost', label: 'Sostenibilidad', num: '05' }
                ].map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveSection(item.id);
                          document.getElementById('estrategia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`group flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left transition-all duration-400 focus:outline-none ${
                          isActive
                            ? 'bg-[var(--color-wheat)]/15 border border-[var(--color-wheat)]/30 shadow-[0_0_20px_rgba(227,184,90,0.15)]'
                            : 'bg-white/0 border border-transparent hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        <span className={`font-headline text-xs font-bold transition-colors duration-400 flex-shrink-0 ${isActive ? 'text-[var(--color-wheat)]' : 'text-white/20 group-hover:text-white/40'}`}>
                          {item.num}
                        </span>
                        <span className={`h-px flex-shrink-0 transition-all duration-400 ${isActive ? 'w-6 bg-[var(--color-wheat)]' : 'w-4 bg-white/20'}`} />
                        <span className={`font-headline text-sm uppercase tracking-wider transition-all duration-400 ${isActive ? 'text-[var(--color-wheat)] font-bold' : 'text-white/40 group-hover:text-white/60'}`}>
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

          {/* CONTENIDO PRINCIPAL (SOLO TAB ACTIVO) */}
          <div className="w-full md:w-3/4 flex flex-col md:pt-12 min-h-[80vh]">
            <div key={activeSection} className="w-full" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
               {renderActiveContent()}
            </div>
          </div>

        </div>
      </section>

      {/* Macro Analysis */}
      <section id="macro" className="py-32 px-8 md:px-16 bg-surface" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto">
          <MacroAnalysis />
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
        <div className="text-sm font-bold text-on-surface mb-8 font-headline">
          IL CASTELLO
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
