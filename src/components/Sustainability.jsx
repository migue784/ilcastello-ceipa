import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Leaf, HeartHandshake, TrendingUp } from 'lucide-react';

const Sustainability = () => {
  return (
    <div>
      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-basil)' }}>B5. Sostenibilidad</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <ScrollReveal direction="up" delay={0.1}>
          <div style={{ display: 'flex', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ color: 'var(--color-tomato)', paddingTop: '0.2rem' }}><HeartHandshake size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--color-charcoal)' }}>Sostenibilidad Social</h4>
              <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                La empresa centra su esfuerzo en la estabilidad laboral de largo plazo para sus 30 empleados. Evitan el crecimiento desmesurado para prevenir despidos futuros, mantienen salarios competitivos, y seleccionan ubicaciones para la fábrica (Sabaneta central) que garantizan seguridad y acceso a transporte público (Metro) pensando 100% en el bienestar del operario.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ display: 'flex', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ color: 'var(--color-wheat)', paddingTop: '0.2rem' }}><TrendingUp size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--color-charcoal)' }}>Sostenibilidad Económica</h4>
              <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Mantienen un cumplimiento presupuestal del 100%+ mensual. Su estrategia "Asset-Light" evita inmovilizar capital comprando bodegas (prefieren arrendar) para reinvertir toda su ganancia pura directamente en adquisición de maquinaria (secadoras y ultracongeladores) y expansión del core de negocio.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--color-cream-dark)', padding: '2rem', borderRadius: '8px', borderStyle: 'dashed', borderWidth: '2px', borderColor: 'var(--color-basil)' }}>
            <div style={{ color: 'var(--color-basil)', paddingTop: '0.2rem' }}><Leaf size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--color-charcoal)' }}>Sostenibilidad Ambiental</h4>
              <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                [Pendiente: Ingresar aquí cómo manejan los residuos, agua y uso de empaques, según la respuesta del gerente]
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Sustainability;
