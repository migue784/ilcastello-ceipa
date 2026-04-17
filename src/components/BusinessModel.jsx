import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Target, Users, Truck, Heart, DollarSign, Settings, Key, Link, CreditCard } from 'lucide-react';

const BusinessModel = () => {
  const canvasItems = [
    {
      title: "Propuesta de Valor",
      icon: <Heart size={20} color="var(--color-tomato)" />,
      text: "Venta de tradición italiana auténtica y salud. Producto premium artesanal hecho con sémola de grano durum y huevo libre de conservantes, receta original de 1983."
    },
    {
      title: "Segmentos de Clientes",
      icon: <Users size={20} color="var(--color-basil)" />,
      text: "Horeca B2B (hoteles y restaurantes de alta gama) y Hogares B2C (familias y personas que buscan comida limpia y gourmet a domicilio)."
    },
    {
      title: "Canales",
      icon: <Truck size={20} color="var(--color-wheat)" />,
      text: "Venta directa (e-commerce y local Sabaneta), Domicilios/envíos nacionales, y Asesores comerciales para el rubro institucional."
    },
    {
      title: "Relación con el Cliente",
      icon: <Target size={20} color="var(--color-charcoal)" />,
      text: "Asesoría personalizada a dueños de restaurantes y fidelización digital para la comunidad B2C que valora lo artesanal."
    },
    {
      title: "Actividades Clave",
      icon: <Settings size={20} color="var(--color-tomato)" />,
      text: "Producción diaria artesanal, estricto control de calidad sin químicos y gestión logística comercial agresiva."
    },
    {
      title: "Recursos Clave",
      icon: <Key size={20} color="var(--color-basil)" />,
      text: "La marca Il Castello, receta heredada de Gianluigi G., maestros pasteros y la fábrica en Sabaneta."
    },
    {
      title: "Socios Clave (Aliados)",
      icon: <Link size={20} color="var(--color-wheat)" />,
      text: "Proveedores de harina durum y granjas, restaurantes aliados (como vitrina de calidad) y empresas de mensajería refrigerada."
    },
    {
      title: "Estructura de Costos",
      icon: <CreditCard size={20} color="var(--color-charcoal)" />,
      text: "Insumos premium, nómina del personal artesano, y altos costos operativos de mantenimiento de frío y logística."
    },
    {
      title: "Fuentes de Ingreso",
      icon: <DollarSign size={20} color="var(--color-tomato)" />,
      text: "Venta directa de productos individuales, contratos corporativos por volumen B2B y recargos logísticos."
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      
      {/* B1. Descripción */}
      <div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-tomato)' }}>B1. Descripción Empresarial</h3>
        <ScrollReveal direction="up">
          <div className="card-padding" style={{
            background: 'var(--color-cream-dark)',
            borderRadius: '12px',
            borderLeft: '5px solid var(--color-tomato)'
          }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>
              <strong>Il Castello (Pasta Artesanale G.L.G. SAS)</strong> es una fábrica de pastas artesanales italianas con sede en Sabaneta y restaurante propio en El Poblado, operando desde 1983. Fundada por Gianluigi G., se destaca por elaboraciones con sémola de durum y huevo.
              <br/><br/>
              Sus productos incluyen: <strong>Pasta Seca</strong> (Fettuccine, Spaghetti), <strong>Pasta Congelada Rellena</strong> (Raviolis 4 quesos, pollo, gnocchis), <strong>Bases de Pizza</strong>, línea <strong>Horeca (Institucional)</strong> y cobertura nacional a través de su e-commerce.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* B2. Canvas */}
      <div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-wheat)' }}>B2. Business Model Canvas</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          {canvasItems.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <div className="card-padding" style={{
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  {item.icon}
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-charcoal)' }}>{item.title}</h4>
                </div>
                <p style={{ opacity: 0.75, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BusinessModel;
