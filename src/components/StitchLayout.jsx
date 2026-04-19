import React from 'react';
import FloatingProduct from './FloatingProduct';
import TeamAgreement from './TeamAgreement';
import HorizontalGallery from './HorizontalGallery';
import DofaAnalysis from './DofaAnalysis';
import Sustainability from './Sustainability';
import StrategicCrosses from './StrategicCrosses';
import ScrollReveal from './ScrollReveal';
import AnimatedTitle from './AnimatedTitle';

export default function StitchLayout({ scrollYProgress }) {
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
          <a className="text-primary dark:text-primary-container border-b-2 border-primary pb-1" href="#realidad">Empresa</a>
          <a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-400" href="#estrategia">Estrategia Total</a>
        </div>
        <div>
          <button 
            className="bg-primary text-on-primary px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-primary-container transition-colors duration-400 rounded-none transform hover:scale-105"
            onClick={() => {
              alert("¡Bienvenido al mundo de la pasta artesanal Premium! Nuestro equipo gerencial te espera.");
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            Descubre Más
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
          <div className="relative z-10 w-full max-w-5xl aspect-video bg-inverse-surface flex items-center justify-center shadow-2xl border-4 border-surface-dim/20 rounded-xl overflow-hidden">
            <span className="font-label text-on-secondary/50 uppercase tracking-[0.2em] text-lg">[ EL VIDEO LIFESTYLE VA ACÁ ]</span>
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2000&auto=format&fit=crop')" }}></div>
          </div>
        </ScrollReveal>
      </section>

      {/* Company Reality */}
      <section id="realidad" className="py-32 px-8 md:px-16 bg-surface" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface uppercase leading-tight sticky top-32">
              Realidad <br />
              <span className="text-primary text-6xl">Empresarial</span>
            </h2>
          </div>
          <div className="md:w-3/4 flex flex-wrap lg:flex-nowrap gap-6">
            
            <div className="bg-surface-container-highest p-8 flex flex-col justify-between w-full lg:w-1/4 min-h-[300px] border-t-4 border-primary group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Entidad</div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Pasta Artesanal LG S.A.S</h3>
              <p className="font-body text-sm text-on-surface-variant flex-grow">Establecida en 1983, es un referente de la tradición italiana en Colombia. Evitan la dependencia corporativa inyectando sus utilidades en tecnología europea, apostando por ser 100% ágiles y sostenibles.</p>
            </div>
            
            <div className="bg-surface-container-highest p-8 flex flex-col justify-between w-full lg:w-1/4 min-h-[300px] border-t-4 border-primary group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Producto Core</div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Ravioli Ultracongelado</h3>
              <p className="font-body text-sm text-on-surface-variant flex-grow">Preservación absoluta de la frescura. Congelado por choque a -20°C tras amasado manual, elimina patógenos sin el uso del controversial químico 'Potasio' común en supermercados.</p>
            </div>
            
            <div className="bg-surface-container-highest p-8 flex flex-col justify-between w-full lg:w-1/4 min-h-[300px] border-t-4 border-primary group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Proceso Lento</div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Secado 14 Horas</h3>
              <p className="font-body text-sm text-on-surface-variant flex-grow">En contraste a la industria global, Il Castello emplea secaderos estáticos europeos, deshidratando su pasta 100% durum pausadamente para mantener texturas excepcionales.</p>
            </div>
            
            <div className="bg-surface-container-highest p-8 flex flex-col justify-between w-full lg:w-1/4 min-h-[300px] border-t-4 border-primary group hover:bg-surface-dim transition-all duration-400">
              <div className="font-label text-xs uppercase tracking-widest text-primary mb-4">Targeting</div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Canal HORECA Premium</h3>
              <p className="font-body text-sm text-on-surface-variant flex-grow">Principal fuente del 90% de sus ingresos. Suplen a restaurantes élite, quitándoles la carga operativa de la cocina artesanal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Strategy (DOFA & Sustainability) via Horizontal Gallery */}
      <section id="estrategia" className="bg-primary relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tertiary/20 to-transparent pointer-events-none"></div>
         
         {/* Título Estático Superior */}
         <div className="pt-32 px-8 max-w-7xl mx-auto relative z-10 w-full">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-primary uppercase mb-4">Estrategia <span className="text-secondary-fixed-dim">Total</span></h2>
            <p className="font-body text-on-primary/70 max-w-2xl text-lg mb-10">Análisis estructural y proyección sostenible hacia mercados internacionales.</p>
         </div>

         {/* Contenedor del Carrusel Custom en vez del Grid aburrido de Stitch */}
         <HorizontalGallery>
            
            {/* ITEM 1: DOFA (Tailwind Glass Style basado en Stitch) */}
            <div style={{ width: '90vw', maxWidth: '1600px', flexShrink: 0, marginTop: '2vh', paddingRight: '2rem', position: 'relative', zIndex: 20 }}>
               <h3 className="font-headline text-3xl font-bold text-on-primary uppercase mb-8 ml-4">Matriz DOFA</h3>
               <DofaAnalysis />
            </div>

            {/* ITEM 2: TOWS (Cruces) */}
            <div style={{ width: '90vw', maxWidth: '1500px', flexShrink: 0, marginTop: '8vh', paddingRight: '2rem', position: 'relative', zIndex: 20 }}>
               <StrategicCrosses />
            </div>

            {/* ITEM 3: SOSTENIBILIDAD */}
            <div style={{ width: '85vw', maxWidth: '800px', flexShrink: 0, marginTop: '5vh', paddingRight: '2rem', position: 'relative', zIndex: 20 }}>
              <Sustainability />
            </div>
         </HorizontalGallery>
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
    </div>
  );
}
