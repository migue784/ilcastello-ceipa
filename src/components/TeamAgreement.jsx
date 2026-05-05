import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Users, FileWarning, MessageCircle, Calendar, Handshake, ChevronDown, ChevronUp } from 'lucide-react';

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
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              
              {/* Integrante Dinámico */}
              {[
                { 
                  name: "Miguel Angel Lopera", 
                  img: "/firmas/firma1.jpeg",
                  testImg: "/tests/miguel_test.png",
                  testText: "Viendo los resultados de este pretest de Aldea Global, arranco con toda. Sacar casi un 90% en general me da mucha confianza, y ver ese 100% en estrategia y plan de mercadeo me confirma que las bases de mi carrera en negocios internacionales están súper sólidas. Pero esta foto es sobre todo un recordatorio para no relajarme: tengo que meterle mucha más ficha a la hora de decidir a qué países entrar, porque en \"selección de mercados internacionales\" tuve mi nota más baja (77%). De nada sirve tener el mejor plan si no elijo bien el mercado, así que ahí es donde tengo que enfocarme para sacarle todo el provecho al curso."
                },
                { 
                  name: "Samuel Ossa", 
                  img: "/firmas/firma3.jpeg",
                  testImg: "/tests/samuel_test.png",
                  testText: "Al ver mis resultados, siento que voy bien, pero no lo suficiente como para destacar todavía. Tengo una base sólida (79%), pero estoy por debajo del promedio de selección, lo que me deja claro que puedo dar más. Hay temas donde me va muy bien, como en plan de mercadeo y selección de mercados, pero también tengo bajones fuertes en otros, especialmente en análisis y argumentación. Eso me hace ver que mi problema no es falta de capacidad, sino falta de constancia y profundidad. Si logro ser más parejo en mi rendimiento y mejorar mi pensamiento crítico, sé que puedo subir ese nivel y acercarme a el promedio más alto."
                },
                { 
                  name: "Pablo Restrepo", 
                  img: "/firmas/firma2.jpeg",
                  testImg: "/tests/pablo_test.png",
                  testText: "Según el test voy por un buen camino y tengo unas bases sólidas, entiendo lo que hago y cuando me enfoco cumplo bien con lo que me toca hacer, sobre todo en el plan de mercadeo, donde más me siento seguro. También analizo bien el entorno y no actúo por impulso, pero todavía puedo mejorar en la parte estratégica, especialmente al elegir mercados y definir el rumbo. No es que esté mal, pero puedo mejorar y ser más seguro en ese tema. Lo siguiente sería confiar más en mi criterio y elegir mejor."
                },
                { 
                  name: "Emmanuel Ramirez", 
                  img: null, 
                  pending: true,
                  testImg: "/tests/emmanuel_test.png",
                  testText: "Antes de empezar este núcleo, considero que tengo una base buena sobre varios temas, especialmente en lo relacionado con el análisis de mercados, la entrada a otros países, las estrategias de mercadeo y la importancia de estudiar el entorno antes de tomar decisiones. El resultado que obtuve me demuestra que sí tengo conocimientos previos importantes y que entiendo gran parte de los conceptos. Mi fortaleza es poder relacionar la teoría con situaciones prácticas.\n\nTambién me sirvió para darme cuenta de que hay cosas que debo reforzar: en algunas preguntas fallé por no analizar con suficiente detalle o por demorarme demasiado. Entiendo que todavía necesito mejorar en precisión, agilidad y en conceptos más específicos. Empiezo este proceso con la conciencia de organizar mejor mi tiempo para obtener un mejor desempeño."
                }
              ].map((member, i) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <div key={i} style={{ 
                    border: '1px solid rgba(0,0,0,0.05)', 
                    borderRadius: '12px', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    flexDirection: 'column',
                    background: 'var(--color-cream)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ fontSize: '1.3rem', color: 'var(--color-tomato)', margin: 0, fontFamily: 'var(--font-serif)' }}>{member.name}</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.6 }}>Análisis Metodológico</p>
                      </div>
                      
                      <div style={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {member.pending ? (
                          <span style={{ fontSize: '0.8rem', opacity: 0.4, fontStyle: 'italic' }}>Firma pendiente...</span>
                        ) : (
                          <div style={{ 
                            width: '180px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <img 
                              src={member.img} 
                              alt={`Firma ${member.name}`} 
                              style={{ 
                                maxHeight: '100%', 
                                maxWidth: '100%',
                                objectFit: 'contain',
                                transform: member.name !== "Miguel Angel Lopera" ? 'rotate(-90deg)' : 'none'
                              }} 
                            />
                          </div>
                        )}
                      </div>

                      <div style={{ flex: '1 1 150px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button 
                          className="btn-accordion" 
                          style={{ color: 'var(--color-tomato)', background: 'transparent', border: '1px solid var(--color-tomato)', maxWidth: '180px' }}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {isOpen ? 'Ocultar Test' : 'Ver Test'}
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    <div style={{ 
                      maxHeight: isOpen ? '2500px' : '0', 
                      overflow: 'hidden', 
                      transition: 'all 0.4s ease-in-out',
                      marginTop: isOpen ? '1.5rem' : '0'
                    }}>
                      <div style={{ padding: '1.2rem', background: 'white', borderRadius: '8px', borderLeft: '4px solid var(--color-tomato)' }}>
                        <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: '1.7', margin: 0, whiteSpace: 'pre-line' }}>
                          <strong>Autoevaluación Pretest:</strong><br/><br/>
                          {member.testText}
                        </p>
                        {member.testImg && (
                          <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                            <img src={member.testImg} alt={`Resultado test de ${member.name}`} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </ScrollReveal>
    </div>
  );
};

export default TeamAgreement;
