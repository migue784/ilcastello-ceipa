import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Users, FileWarning, MessageCircle, Calendar, Handshake } from 'lucide-react';

const agreements = [
  {
    title: "Compromisos de Convivencia",
    icon: <Users size={24} color="var(--color-tomato)" />,
    text: "Nuestro principal compromiso es la responsabilidad y el respeto. Esto implica cumplir con las tareas asignadas en los tiempos acordados. Mantendremos comunicación constante (mínimo 1 día de anticipación en caso de ausencia) y todo cambio de última hora en entregas será consultado por todos para mantener la armonía."
  },
  {
    title: "Sanciones por Incumplimiento",
    icon: <FileWarning size={24} color="var(--color-tomato)" />,
    text: "Si alguien falla, se aplicarán sanciones progresivas: primero, el diálogo. Si reincide, multas económicas de $2.000 COP para cada integrante. En casos extremos, no será incluido en la entrega (nota: 0.0). Si la convivencia es imposible, se procederá a expulsión por acuerdo total."
  },
  {
    title: "Canales de Comunicación",
    icon: <MessageCircle size={24} color="var(--color-tomato)" />,
    text: "Para que todo fluya, decidimos usar un grupo de WhatsApp para la comunicación diaria, Microsoft Teams para reuniones virtuales cuando sean necesarias y encuentros físicos en la universidad."
  },
  {
    title: "Cronograma de Trabajo",
    icon: <Calendar size={24} color="var(--color-tomato)" />,
    text: "Teniendo en cuenta que el día autónomo es el jueves, distribuiremos tareas lunes o martes. Los jueves nos reuniremos para finalizar detalles y dejar la entrega lista el viernes. Los fines de semana solo se usarán en casos extremos, asegurando la calidad solicitada en Canva."
  },
  {
    title: "Resolución de Conflictos",
    icon: <Handshake size={24} color="var(--color-tomato)" />,
    text: "La regla de oro es el diálogo antes de tomar otras decisiones. Ante una inconformidad, nos reuniremos con la persona involucrada para escuchar razones y recordarle los valores pactados. Priorizaremos la comunicación anticipada y el respeto por decisiones conjuntas."
  }
];

const TeamAgreement = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    }}>
      {agreements.map((item, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
          <div style={{
            background: 'var(--color-cream)',
            padding: '2.5rem',
            borderRadius: '12px',
            borderTop: '5px solid var(--color-tomato)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                background: 'rgba(177, 42, 34, 0.1)',
                padding: '0.8rem',
                borderRadius: '50%'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{item.title}</h3>
            </div>
            <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.7' }}>
              {item.text}
            </p>
          </div>
        </ScrollReveal>
      ))}

      {/* Tarjeta de Integrantes y Firmas */}
      <ScrollReveal direction="up" delay={0.5} style={{ gridColumn: '1 / -1' }}>
          <div className="card-padding" style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
            width: '100%'
          }}>
            <h3 style={{ margin: '0 0 2.5rem 0', color: 'var(--color-basil)', fontSize: '1.8rem', textAlign: 'center' }}>Nuestros Integrantes y Análisis del Test</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
              
              {/* Miguel Angel Lopera */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-tomato)' }}>Miguel Angel Lopera</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                  <strong>Test de entrada:</strong> [A la espera del resumen del test para Miguel...]
                </p>
                <div style={{ marginTop: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img src="/firmas/firma1.jpeg" alt="Firma Miguel" style={{ maxHeight: '80px', objectFit: 'contain' }} />
                </div>
              </div>

              {/* Samuel Ossa */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-tomato)' }}>Samuel Ossa</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                  <strong>Test de entrada:</strong> [A la espera del resumen del test para Samuel...]
                </p>
                <div style={{ marginTop: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img src="/firmas/firma2.jpeg" alt="Firma Samuel" style={{ maxHeight: '80px', objectFit: 'contain' }} />
                </div>
              </div>

              {/* Pablo Rodrigo */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-tomato)' }}>Pablo Rodrigo</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                  <strong>Test de entrada:</strong> [A la espera del resumen del test para Pablo...]
                </p>
                <div style={{ marginTop: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img src="/firmas/firma3.jpeg" alt="Firma Pablo" style={{ maxHeight: '80px', objectFit: 'contain' }} />
                </div>
              </div>

              {/* Emmanuel Ramirez */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-tomato)' }}>Emmanuel Ramirez</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                  <strong>Test de entrada:</strong> [A la espera del resumen del test para Emmanuel...]
                </p>
                <div style={{ marginTop: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center', minHeight: '80px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', opacity: 0.4, fontStyle: 'italic' }}>Firma pendiente...</span>
                </div>
              </div>

            </div>
          </div>
      </ScrollReveal>
    </div>
  );
};

export default TeamAgreement;
