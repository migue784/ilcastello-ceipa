import ScrollReveal from './components/ScrollReveal'
import SectionTitle from './components/SectionTitle'
import TeamAgreement from './components/TeamAgreement'
import BusinessModel from './components/BusinessModel'
import DofaAnalysis from './components/DofaAnalysis'
import Sustainability from './components/Sustainability'
import StrategicCrosses from './components/StrategicCrosses'

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

              <DofaAnalysis />
              
              {/* B5 Sostenibilidad */}
              <Sustainability />

              {/* B6 y B7 Cruces Estratégicos y Objetivo SMART */}
              <StrategicCrosses />

            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Referencias APA */}
      <section className="section bg-cream-dark" id="referencias">
        <div className="container" style={{ maxWidth: '800px' }}>
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
