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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    const sections = ['diag', 'pestel', 'dofa', 'tows', 'sost'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-primary selection:text-on-primary">
      
      {/* Nuestro Floating Product en el espacio Global Absolute o Fixed */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 10, pointerEvents: 'none' }}>
        <FloatingProduct scrollYProgress={scrollYProgress} />
      </div>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl shadow-none">
        <div className="text-2xl font-black tracking-tighter text-primary dark:text-primary-container font-headline uppercase">
          IL CASTELLO
        </div>
        <div className="hidden md:flex gap-8 items-center font-label text-sm uppercase tracking-wider">
          <a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-400" href="#team">Acuerdos</a>
          <a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-400" href="#realidad">Empresa</a>
          <a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-400" href="#estrategia">Estrategia Total</a>
          <a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-400" href="#macro">Macroeconomía</a>
        </div>
        <div>
          <button 
            className="bg-primary text-on-primary px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-primary-container transition-colors duration-400 rounded-none transform hover:scale-105"
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
              
              <ul className="hidden md:flex flex-col space-y-6 font-headline uppercase tracking-widest text-sm">
                {[
                  { id: 'diag', label: '1. Diagnóstico' },
                  { id: 'pestel', label: '2. PESTEL' },
                  { id: 'dofa', label: '3. Matriz DOFA' },
                  { id: 'tows', label: '4. Cruces TOWS' },
                  { id: 'sost', label: '5. Sostenibilidad' }
                ].map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id} className="transition-all duration-500 ease-in-out">
                      <a 
                        href={`#${item.id}`} 
                        className={`flex items-center gap-3 transition-all duration-500 group ${
                          isActive 
                            ? 'text-[var(--color-wheat)] font-bold scale-105 origin-left opacity-100' 
                            : 'text-white/30 hover:text-white/60 hover:scale-100 opacity-50'
                        }`}
                      >
                        <span className={`h-[1px] transition-all duration-500 ${
                          isActive 
                            ? 'w-16 bg-[var(--color-wheat)] shadow-[0_0_8px_rgba(227,184,90,0.6)]' 
                            : 'w-8 bg-white/20 group-hover:w-12 group-hover:bg-white/40'
                        }`}></span>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* CONTENIDO PRINCIPAL SCROLLABLE */}
          <div className="w-full md:w-3/4 flex flex-col space-y-40 pb-32 md:pt-12">
            {/* ITEM 1: DIAGNÓSTICO Y OBJETIVO SMART */}
            <div id="diag" className="scroll-mt-32 w-full">
               <PotentialDiagnosis />
            </div>

            {/* ITEM 2: PESTEL */}
            <div id="pestel" className="scroll-mt-32 w-full">
               <PestelAnalysis />
            </div>

            {/* ITEM 3: DOFA (Tailwind Glass Style) */}
            <div id="dofa" className="scroll-mt-32 w-full">
               <DofaAnalysis />
            </div>

            {/* ITEM 4: TOWS (Cruces) */}
            <div id="tows" className="scroll-mt-32 w-full">
               <StrategicCrosses />
            </div>

            {/* ITEM 5: SOSTENIBILIDAD */}
            <div id="sost" className="scroll-mt-32 w-full">
              <Sustainability />
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
