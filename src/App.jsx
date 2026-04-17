import React from 'react'
import ScrollReveal from './components/ScrollReveal'
import SectionTitle from './components/SectionTitle'
import TeamAgreement from './components/TeamAgreement'
import BusinessModel from './components/BusinessModel'

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
          
          <TeamAgreement />
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
              <BusinessModel />

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
