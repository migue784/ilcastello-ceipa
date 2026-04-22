import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Leaf, HeartHandshake, TrendingUp } from 'lucide-react';

const Sustainability = () => {
  return (
    <div>
      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-wheat)' }}>B5. Sostenibilidad</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex-stack card-padding card-glass-dark">
            <div style={{ color: 'var(--color-tomato)', paddingTop: '0.2rem' }}><HeartHandshake size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Sostenibilidad Social</h4>
              <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                La empresa centra su esfuerzo en la estabilidad laboral de largo plazo para sus 30 empleados. Evitan el crecimiento desmesurado para prevenir despidos futuros, mantienen salarios competitivos, y seleccionan ubicaciones para la fábrica (Sabaneta central) que garantizan seguridad y acceso a transporte público (Metro) pensando 100% en el bienestar del operario.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex-stack card-padding card-glass-dark">
            <div style={{ color: 'var(--color-wheat)', paddingTop: '0.2rem' }}><TrendingUp size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Sostenibilidad Económica</h4>
              <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Mantienen un cumplimiento presupuestal del 100%+ mensual. Su estrategia "Asset-Light" evita inmovilizar capital comprando bodegas (prefieren arrendar) para reinvertir toda su ganancia pura directamente en adquisición de maquinaria (secadoras y ultracongeladores) y expansión del core de negocio.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex-stack card-padding card-glass-dark" style={{ borderStyle: 'dashed' }}>
            <div style={{ color: 'var(--color-cream)', paddingTop: '0.2rem' }}><Leaf size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Sostenibilidad Ambiental</h4>
              <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                Il Castello justifica una base ambiental intrínsecamente positiva gracias al uso de <strong>ingredientes simples y naturales</strong>, sin conservantes químicos que contaminen el ciclo del agua, y su fuerte línea de <strong>pasta seca</strong>, la cual reduce drásticamente la huella de carbono al no requerir la intensiva cadena de frío (refrigeración) que exige la pasta fresca. 
              </p>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem' }}>
                 <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    <li><strong>Manejo de Residuos Sólidos y Orgánicos:</strong> Implementación de compostaje industrial para residuos orgánicos derivados del huevo y recortes de sémola de trigo. La merma física sensorial es redirigida a granjas locales para alimentación animal (Economía Circular).</li>
                    <li><strong>Eficiencia Hídrica en Planta:</strong> Sistemas cerrados de recirculación de agua en la fase de enfriamiento térmico de la maquinaria (pasteurizadores y ultracongeladores), reduciendo el desperdicio de agua potable en un 40% mensual.</li>
                    <li><strong>Optimización Energética (Reefer):</strong> Planeación logística estricta para garantizar contenedores llenos y evitar fletes parciales (LCL), mitigando emisiones de CO2. En planta, uso de iluminación LED y aislamiento térmico optimizado para cuartos fríos a -20°C.</li>
                    <li><strong>Transición de Empaques (Packaging):</strong> Migración progresiva de empaques plásticos multicapa hacia películas biodegradables y bolsas de papel Kraft con barreras antihumedad orgánicas para la línea seca exportable, reduciendo los plásticos de un solo uso.</li>
                 </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Sustainability;
