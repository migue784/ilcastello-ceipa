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

        {/* --- DESCANSO VISUAL 1 --- */}
        <section className="section bg-basil" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatedTitle text="DESCUBRE NUESTRA" className="section-gigante" style={{ top: '5%', color: 'rgba(255,255,255,0.05)' }} />
          <AnimatedTitle text="PASTA AL HUEVO" className="section-gigante" style={{ bottom: '5%', color: 'rgba(255,255,255,0.05)' }} />
          <div className="container" style={{ maxWidth: '900px' }}>
            <ScrollReveal direction="up">
              <div className="cinematic-placeholder">
                <span>[ ESPACIO PARA FOTO O VIDEO LIFESTYLE ]</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Realidad Empresarial - Canvas */}
        <section className="section" id="realidad-empresarial" style={{ minHeight: '150vh', justifyContent: 'flex-end', background: 'var(--color-cream-dark)' }}>
          <div className="container" style={{ maxWidth: '900px', marginRight: '0', paddingRight: '4rem' }}>
            <h2 className="section-gigante" style={{ position: 'absolute', top: 0, right: 0, textAlign: 'right', opacity: 0.1, zIndex: -1 }}>MODELO DE NEGOCIO</h2>
            <SectionTitle title="Realidad Empresarial" subtitle="Parte B" />
            <BusinessModel />
          </div>
        </section>

        {/* --- DESCANSO VISUAL 2 --- */}
        <section className="section bg-tomato" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatedTitle text="100% CERO QUÍMICOS" className="section-gigante" style={{ top: '35%', color: 'rgba(255,255,255,0.05)', textAlign: 'center', width: '100%' }} />
          <div className="container" style={{ maxWidth: '700px' }}>
            <ScrollReveal direction="up">
              <div className="cinematic-placeholder" style={{ aspectRatio: '16/10' }}>
                <span>[ ESPACIO PARA PROCESO DE PRODUCCIÓN ]</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DOFA y Estrategias */}
        <section className="section bg-cream" id="analisis-estrategico" style={{ minHeight: '200vh', flexDirection: 'column', alignItems: 'flex-start', padding: '10rem 4rem' }}>
          <h2 className="section-gigante" style={{ top: '5%', left: '5%', opacity: 0.1, color: 'var(--color-basil)', zIndex: 0 }}>ESTRATEGIA TOTAL</h2>
          <div style={{ maxWidth: '850px', zIndex: 10, position: 'relative' }}>
            <DofaAnalysis />
            <div style={{ margin: '8rem 0' }}></div>
            <Sustainability />
            <div style={{ margin: '8rem 0' }}></div>
            <StrategicCrosses />
          </div>
        </section>
        
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
