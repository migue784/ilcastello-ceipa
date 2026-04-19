import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ScrollReveal from './components/ScrollReveal'
import SectionTitle from './components/SectionTitle'
import TeamAgreement from './components/TeamAgreement'
import BusinessModel from './components/BusinessModel'
import DofaAnalysis from './components/DofaAnalysis'
import Sustainability from './components/Sustainability'
import StrategicCrosses from './components/StrategicCrosses'
import FloatingDecorations from './components/FloatingDecorations'
import FloatingProduct from './components/FloatingProduct'
import AnimatedTitle from './components/AnimatedTitle'
import HorizontalGallery from './components/HorizontalGallery'

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="scrolly-container">
      
      {/* 1. CAPA DE FONDO: EL PRODUCTO FLOTANTE FIJO */}
      <FloatingProduct scrollYProgress={scrollYProgress} />

      {/* 2. CAPA DE CONTENIDO: LAS SECCIONES QUE HACEN SCROLL POR ENCIMA */}
      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* Hero Section */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <FloatingDecorations />
          
          <AnimatedTitle text="IL CASTELLO" style={{ position: 'absolute', top: '10%' }} />
          <AnimatedTitle text="PREMIUM" className="section-gigante" style={{ bottom: '10%', right: '2rem', left: 'auto', textAlign: 'right', color: 'rgba(0,0,0,0.03)' }} />

          <motion.div 
            style={{ 
              textAlign: 'center', 
              position: 'relative', 
              zIndex: 10,
              background: 'rgba(255,251,242,0.85)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              marginTop: '40vh',
              maxWidth: '600px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <span style={{ color: 'var(--color-tomato)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '600', fontSize: '0.9rem' }}>
              Aldea Global 2 • Fase 1
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginTop: '1.5rem', color: 'var(--color-charcoal)', opacity: 0.9 }}>
              Estudio de la realidad empresarial y potencial de internacionalización de pasta artesanal premium.
            </p>
          </motion.div>
        </section>

        {/* Acuerdo de Equipo */}
        <section className="section" id="acuerdo-equipo" style={{ minHeight: '150vh', justifyContent: 'flex-start' }}>
          <div className="container" style={{ maxWidth: '800px', marginLeft: '0', paddingLeft: '4rem' }}>
            <h2 className="section-gigante" style={{ position: 'absolute', top: '10%', left: 0, opacity: 0.1, zIndex: -1 }}>CONVIVENCIA</h2>
            <SectionTitle title="Acuerdo de Equipo" subtitle="Parte A" />
            <TeamAgreement />
          </div>
        </section>

        {/* --- DESCANSO VISUAL Y CAMBIO DE INTERACCIÓN --- */}
        <div className="section bg-basil" style={{ padding: 0 }}>
          <AnimatedTitle text="ESTRATEGIA SMART" className="section-gigante" style={{ top: '15%', color: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
          
          <HorizontalGallery>
            
            {/* ELEMENTO 1 DEL SLIDER: DOFA OVERVIEW */}
            <div style={{ width: '85vw', maxWidth: '850px', flexShrink: 0, marginTop: '10vh', maxHeight: '80vh', overflowY: 'auto', paddingRight: '1rem' }} className="dofa-slider-card">
              <SectionTitle title="Análisis Estratégico" subtitle="DOFA" style={{ color: 'var(--color-cream)' }} />
              <DofaAnalysis />
            </div>

            {/* ELEMENTO 2 DEL SLIDER: SOSTENIBILIDAD */}
            <div style={{ width: '85vw', maxWidth: '800px', flexShrink: 0, marginTop: '20vh', maxHeight: '80vh', overflowY: 'auto', paddingRight: '1rem' }} className="dofa-slider-card">
               <Sustainability />
            </div>

            {/* ELEMENTO 3 DEL SLIDER: CRUCES ESTRATÉGICOS */}
            <div style={{ width: '85vw', maxWidth: '850px', flexShrink: 0, marginTop: '10vh', maxHeight: '80vh', overflowY: 'auto', paddingRight: '1rem' }} className="dofa-slider-card">
               <StrategicCrosses />
            </div>

            {/* ELEMENTO 4: ESPACIO VACIO AL FINAL PARA DEJAR RESPIRAR EL ULTIMO COMPONENTE */}
            <div style={{ width: '400px', flexShrink: 0 }}></div>

          </HorizontalGallery>
        </div>
        
        {/* Referencias APA */}
        <section className="section" id="referencias" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionTitle title="Referencias Bibliográficas" />
            <ScrollReveal direction="up">
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '8px',
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                lineHeight: '1.8',
                boxShadow: '0 5px 20px rgba(0,0,0,0.03)'
              }}>
                <p style={{ paddingLeft: '2rem', textIndent: '-2rem', marginBottom: '1rem' }}>
                  CEIPA Business School. (2026). <span style={{ fontStyle: 'italic' }}>Aldea Global 2 | Actividades Grupales – Método Científico</span>.
                </p>
                <p style={{ paddingLeft: '2rem', textIndent: '-2rem', marginBottom: '1rem' }}>
                  Gavenzi, L., & Saúl, H. (2026). <span style={{ fontStyle: 'italic' }}>Entrevista sobre la Realidad Empresarial de Il Castello</span> [Entrevista grabada]. Sabaneta, Antioquia.
                </p>
                <p style={{ paddingLeft: '2rem', textIndent: '-2rem', marginBottom: '1rem' }}>
                  Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. <span style={{ fontStyle: 'italic' }}>Harvard Business Review, 86</span>(1), 78-93.
                </p>
                <p style={{ paddingLeft: '2rem', textIndent: '-2rem', marginBottom: '1rem' }}>
                  Osterwalder, A., & Pigneur, Y. (2010). <span style={{ fontStyle: 'italic' }}>Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers</span>. Wiley.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <footer style={{
          background: 'var(--color-charcoal)',
          color: 'var(--color-cream)',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 20
        }}>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
            CEIPA Aldea Global 2 • Proyecto Grupal 2026
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App
