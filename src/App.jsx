import React from 'react'
import ScrollReveal from './components/ScrollReveal'
import SectionTitle from './components/SectionTitle'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        backgroundImage: 'linear-gradient(to bottom, rgba(253, 251, 247, 0.3), var(--color-cream))',
      }}>
        <ScrollReveal direction="up" delay={0.2} style={{ textAlign: 'center' }}>
          <span style={{
            color: 'var(--color-tomato)',
            fontFamily: 'var(--font-sans)',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}>
            Aldea Global 2 • Fase 1
          </span>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            marginTop: '1rem',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            Il Castello
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            maxWidth: '600px',
            color: 'var(--color-charcoal)',
            opacity: 0.8
          }}>
            Estudio de la realidad empresarial y potencial de internacionalización de pasta artesanal premium.
          </p>
        </ScrollReveal>
      </section>

      {/* Acuerdo de Equipo */}
      <section className="section bg-cream-dark" id="acuerdo-equipo">
        <div className="container">
          <SectionTitle 
            title="Acuerdo de Equipo" 
            subtitle="Parte A"
          />
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {/* Aquí irán las tarjetas de los integrantes y los compromisos */}
            <ScrollReveal direction="up" delay={0.1}>
              <div style={{
                background: 'var(--color-cream)',
                padding: '2rem',
                borderRadius: '8px',
                borderTop: '4px solid var(--color-tomato)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Compromisos y Convivencia</h3>
                <p style={{ opacity: 0.8 }}>[Esperando contenido del equipo...]</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <div style={{
                background: 'var(--color-cream)',
                padding: '2rem',
                borderRadius: '8px',
                borderTop: '4px solid var(--color-basil)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Nuestro Equipo</h3>
                <p style={{ opacity: 0.8 }}>[Esperando nombres e info del equipo...]</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Realidad Empresarial */}
      <section className="section" id="realidad-empresarial">
        <div className="container">
          <SectionTitle 
            title="Realidad Empresarial" 
            subtitle="Parte B"
          />

          <ScrollReveal direction="up">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4rem'
            }}>
              {/* B1 */}
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-tomato)' }}>B1. Descripción</h3>
                <p style={{ fontSize: '1.1rem', maxWidth: '800px', opacity: 0.8 }}>
                  [Aquí pondremos la información de Il Castello, su propuesta de valor...]
                </p>
              </div>

              {/* B2 */}
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-wheat)' }}>B2. Business Model Canvas</h3>
                <div style={{
                  height: '300px',
                  background: 'var(--color-cream-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed rgba(0,0,0,0.2)',
                  borderRadius: '8px'
                }}>
                  <p style={{ opacity: 0.6, fontStyle: 'italic' }}>Espacio reservado para el Canvas interactivo</p>
                </div>
              </div>

              {/* B4 DOFA */}
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>B4. Análisis DOFA</h3>
                <p style={{ opacity: 0.8 }}>[Fortalezas, Oportunidades, Debilidades, Amenazas...]</p>
              </div>
              
              {/* B5 Sostenibilidad */}
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-basil)' }}>B5. Sostenibilidad</h3>
                <p style={{ opacity: 0.8 }}>[Social, Ambiental, Económico...]</p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <footer style={{
        background: 'var(--color-charcoal)',
        color: 'var(--color-cream)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          CEIPA Aldea Global 2 • Proyecto Grupal 2026
        </p>
      </footer>
    </>
  )
}

export default App
