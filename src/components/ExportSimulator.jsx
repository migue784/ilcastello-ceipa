import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Route, AlertTriangle, MonitorPlay, XCircle, CheckCircle2 } from 'lucide-react';

export default function ExportSimulator({ isOpen, onClose }) {
  // Estados de Fases Generales
  const [fase, setFase] = useState('offline'); // offline | booting | dashboard | tracking

  // Estados Logísticos (Inputs de Interfaz)
  const [volumen, setVolumen] = useState(2000); 
  const [incoterm, setIncoterm] = useState('CIF'); // FOB o CIF

  // Animación del barco en SVG
  const [shipProgress, setShipProgress] = useState(0);

  useEffect(() => {
    if (isOpen && fase === 'offline') {
      setFase('booting');
    }
  }, [isOpen, fase]);

  // Fase 1: Efecto LOADING LIMPIO
  useEffect(() => {
    if (fase === 'booting') {
      setTimeout(() => setFase('dashboard'), 1200); // Entra al simulador real rápido
    }
  }, [fase]);

  // Fase 3: Efecto TRACKING MAP (El Barco hacia Costa Rica)
  useEffect(() => {
    if (fase === 'tracking') {
      const interval = setInterval(() => {
        setShipProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.003; // Velocidad del barco (más lento en modo premium)
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [fase]);

  // Limpieza total cuando se cierra
  const handleClose = () => {
    setFase('offline');
    setShipProgress(0);
    onClose();
  };

  // --- MATEMÁTICAS / FÍSICAS DEL JUEGO ---
  const precioPorKilo = 35000;
  const ingresosTotales = volumen * precioPorKilo;
  
  // Si elegimos Incoterm CIF (Seguro y Flete hasta Costa Rica pagado por nosotros), es más costoso de nuestro bolsillo.
  // Si FOB (puesto en Colombia), cuesta menos la logística.
  const costoAduaneroCO = 4500000; 
  // Fletes Internacionales refrigerados promedio base
  const costoFleteRefrigerado = incoterm === 'CIF' ? 12000000 + (volumen * 5500) : (volumen * 2000);
  const seguroIncoterm = incoterm === 'CIF' ? ingresosTotales * 0.02 : 0; 
  const arancelCostaRica = incoterm === 'CIF' ? ingresosTotales * 0.14 : 0; // Aranceles de nacionalización
  const costoProduccionLocal = volumen * 11000;

  const egresosTotales = costoProduccionLocal + costoAduaneroCO + costoFleteRefrigerado + arancelCostaRica + seguroIncoterm;
  const EBITDA = ingresosTotales - egresosTotales;
  const isRentable = EBITDA > 0;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: {duration: 0.5} }}
        className="fixed inset-0 z-[100] bg-surface text-on-surface font-body overflow-y-auto overflow-x-hidden flex flex-col"
      >
        
        {/* Cabecera Corporativa */}
        <div className="w-full h-20 flex items-center justify-between border-b border-outline/20 px-6 py-4 bg-surface/90 backdrop-blur-md sticky top-0 z-50">
           <div className="flex items-center gap-3">
              <span className="font-headline font-bold text-2xl tracking-tight text-on-surface uppercase">Estudio Logístico</span>
              <span className="hidden md:ml-4 md:flex text-xs uppercase tracking-widest text-on-surface-variant font-bold border-l border-outline/30 pl-4 py-1">
                 Simulador de Expansión Centroamérica
              </span>
           </div>
           
           <button 
             onClick={handleClose} 
             className="flex items-center gap-2 p-2 hover:bg-black/5 text-on-surface-variant hover:text-charcoal rounded-full transition-colors font-label font-bold text-sm uppercase"
           >
             Cerrar Simulación
           </button>
        </div>

        {/* --- PANTALLA 1: BOOTING LOADER (Clásico) --- */}
        {fase === 'booting' && (
          <div className="flex-1 flex flex-col items-center justify-center bg-surface-container">
               <Cpu size={48} className="text-primary mb-6 animate-pulse" />
               <h2 className="font-headline text-3xl font-bold uppercase tracking-widest text-on-surface mb-2">Preparando Motor Comercial</h2>
               <p className="text-on-surface-variant font-label uppercase tracking-widest">Calculando tarifas y cadenas de frío aéreas / marítimas...</p>
          </div>
        )}

        {/* --- PANTALLA 2: DASHBOARD CALCULADORA (Brand Colors) --- */}
        {fase === 'dashboard' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="flex-1 p-6 md:p-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          >
             
             {/* Lado Izquierdo: Parámetros del Usuario */}
             <div className="space-y-10 border-r border-outline/20 pr-0 md:pr-12">
                <div>
                   <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight text-on-surface mb-4">Exportación a<br/><span className="text-primary text-6xl">Costa Rica</span></h1>
                   <p className="font-body text-base text-on-surface-variant leading-relaxed">
                     Dimensionamiento táctico HORECA. Mueve el control de arrastre para calcular si el volumen mensual alcanza para romper los fijos logísticos y generar utilidades al exportar.
                   </p>
                </div>

                {/* Input de Kilos (Slider Premium) */}
                <div className="bg-surface-container-highest p-8 rounded-sm">
                   <div className="flex justify-between items-end pb-4 mb-6">
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Volumen Capacidad (KG)</span>
                      <span className="text-4xl font-headline font-bold text-on-surface">{volumen.toLocaleString()} <span className="text-base text-primary">kg/mes</span></span>
                   </div>
                   <input 
                      type="range" 
                      min="500" 
                      max="8000" 
                      step="100"
                      value={volumen} 
                      onChange={(e) => setVolumen(Number(e.target.value))}
                      className="w-full h-2 rounded-full outline-none accent-primary appearance-none bg-surface-dim cursor-ew-resize"
                   />
                   <div className="flex justify-between w-full mt-4 text-[11px] text-on-surface-variant font-bold uppercase tracking-tight">
                     <span>Pérdidas Lógicas</span> <span>Volumen Meta</span> <span>Saturación Frío</span>
                   </div>
                </div>

                {/* Input Incoterms (Switch Buttons Blancos) */}
                <div className="bg-surface-container-highest p-8 rounded-sm">
                   <div className="mb-6">
                      <span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block font-bold">Términos de Negociación Internacional</span>
                      <span className="font-body text-sm text-on-surface">Asignación de riesgo y cobertura logística hasta el destino.</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setIncoterm('FOB')}
                        className={`py-4 border shadow-sm font-label text-sm uppercase tracking-widest font-bold transition-all ${incoterm === 'FOB' ? 'bg-charcoal border-charcoal text-white' : 'bg-surface border-outline/30 text-on-surface-variant hover:border-charcoal'}`}
                      >
                         FOB
                      </button>
                      <button 
                        onClick={() => setIncoterm('CIF')}
                        className={`py-4 border shadow-sm font-label text-sm uppercase tracking-widest font-bold transition-all ${incoterm === 'CIF' ? 'bg-primary border-primary text-white' : 'bg-surface border-outline/30 text-on-surface-variant hover:border-primary'}`}
                      >
                         CIF
                      </button>
                   </div>
                   <div className="mt-6 p-4 bg-white/50 border border-outline/10 text-xs text-on-surface-variant leading-relaxed">
                     {incoterm === 'FOB' 
                      ? 'Free On Board (FOB): Il Castello asume responsabilidad solo hasta montar la pasta en buque (Medellín -> Puerto Cartagena). Menor inversión pero nos deja vulnerables al control del frío por terceros.'
                      : 'Cost, Insurance, Freight (CIF): La empresa cubre transporte y seguros hasta el puerto de destino (Puerto Limón, Costa Rica). Carga en los costos iniciales pero blinda la cadena de ultracongelación -20°C de fábrica a destino.'}
                   </div>
                </div>
             </div>

             {/* Lado Derecho: Calculadora HUD Financiera Corporativa */}
             <div className="flex flex-col justify-center">
                <div className="p-10 relative">
                   
                   <h2 className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline/20 pb-4 mb-8">Auditoría Financiera - Proyección Comercial B2B</h2>

                   <ul className="space-y-6">
                      <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                        <span className="font-body text-sm text-on-surface">Ingreso Total HORECA Esperado</span>
                        <span className="font-headline font-bold text-xl">${(ingresosTotales/1000000).toFixed(1)} M</span>
                      </li>
                      <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                        <span className="font-body text-sm text-on-surface-variant">Costos Manufactura (COP 11k/kg)</span>
                        <span className="font-headline font-bold text-lg text-on-surface-variant">-${(costoProduccionLocal/1000000).toFixed(1)} M</span>
                      </li>
                      <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                        <span className="font-body text-sm text-charcoal font-bold">Logística REEFER Marítima</span>
                        <span className="font-headline font-bold text-lg text-tomato">-${(costoFleteRefrigerado/1000000).toFixed(1)} M</span>
                      </li>
                      {incoterm === 'CIF' && (
                        <>
                          <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                            <span className="font-body text-sm text-on-surface-variant">Arancel CIF Aduana Costa Rica</span>
                            <span className="font-headline text-lg text-tomato">-${(arancelCostaRica/1000000).toFixed(1)} M</span>
                          </li>
                          <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                            <span className="font-body text-sm text-on-surface-variant">Seguro Carga Internacional</span>
                            <span className="font-headline text-lg text-on-surface-variant">-${(seguroIncoterm/1000000).toFixed(1)} M</span>
                          </li>
                        </>
                      )}
                   </ul>
                      
                   {/* EBITDA TOTAL */}
                   <div className="pt-10 flex justify-between items-end mb-8">
                     <span className="font-label text-sm font-bold uppercase tracking-widest text-charcoal">EBITDA (Rentabilidad)</span>
                     <span className={`font-headline text-5xl font-bold tracking-tighter ${isRentable ? 'text-primary' : 'text-tomato'}`}>
                       ${(EBITDA/1000000).toFixed(1)} M
                     </span>
                   </div>

                   {/* Avisos del sistema logístico */}
                   <div className="mb-10">
                     {!isRentable ? (
                       <div className="bg-tomato/10 border-l-4 border-tomato p-4 text-sm font-body text-charcoal">
                         <strong>Aproximación Crítica.</strong> Para contenedores de refrigeración extrema los fijos aduaneros causan pérdida operativa neta en tu pyme comercial. Debes inyectar más volumen urgente.
                       </div>
                     ) : (
                       <div className="bg-primary/10 border-l-4 border-primary p-4 text-sm font-body text-charcoal">
                         <strong>Viable Económicamente.</strong> Logras diluir la infraestructura naviera y obtienes flujo de caja internacional. Escalar más aforo multiplicaría los retornos operativos.
                       </div>
                     )}
                   </div>

                   {/* Boton de accion (Comenzar Rastreo) */}
                   <button 
                     disabled={!isRentable}
                     onClick={() => setFase('tracking')}
                     className={`w-full py-5 text-sm font-label uppercase tracking-widest font-bold transition-transform transform focus:scale-95 flex justify-center items-center gap-3 
                      ${isRentable ? 'bg-primary hover:bg-[#4a6347] text-white shadow-lg' : 'bg-surface-dim text-on-surface-variant cursor-not-allowed border border-outline/20'}`}
                   >
                     {isRentable ? 'Simular Rutas Centroamericanas' : 'Bajo Nivel para Exportación'}
                   </button>
                </div>
             </div>

          </motion.div>
        )}

        {/* --- PANTALLA 3: ANIMACIÓN DE MAPA CARTOGRÁFICO CORPORATIVO --- */}
        {fase === 'tracking' && (
          <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
             className="flex-1 w-full bg-surface-container relative flex flex-col"
          >
             
             {/* Cabecera Info Fija */}
             <div className="p-8 border-b border-outline/10 bg-surface flex flex-wrap gap-8 z-10 shadow-sm relative">
                <div>
                   <span className="block font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">Ruta Naviera</span>
                   <span className="font-headline text-lg font-bold text-charcoal">Cartagena (COL) ➔ Pto. Limón (CRC)</span>
                </div>
                <div>
                   <span className="block font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">Embarcación Transit Time</span>
                   <span className="font-headline text-lg font-bold text-primary">~ 13 Días Marítimo</span>
                </div>
                <div>
                   <span className="block font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">Control Atmosférico Integral</span>
                   <span className="font-headline text-lg font-bold text-on-surface">-20°C Cadena Cerrada</span>
                </div>
             </div>

             {/* Area del Mapa Satelital Claro */}
             <div className="flex-1 relative overflow-hidden bg-[#EAE5D9]">
                
               {/* Mapa base visual SVG dibujando Centroamérica rudimentario en wireframes (Simulado Claro) */}
               <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full object-cover opacity-60">
                  {/* Surámerica Costa (Colombia/Panama) */}
                  <path d="M700 600 L800 400 L850 350 L950 300 L1000 350 L1000 600 Z" fill="#D3C9AD" stroke="#BCA37F" strokeWidth="2" />
                  {/* Centroamérica (Costa Rica) */}
                  <path d="M400 200 L500 250 L450 350 L300 280 L200 250 L250 150 Z" fill="#D3C9AD" stroke="#BCA37F" strokeWidth="2" />
               </svg>

               <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>

               {/* Render Animación Dinámica Barco */}
               <div className="absolute inset-0">
                  {/* Curva Bézier Náutica */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 600">
                    <path 
                      id="route-path-light"
                      d="M 850,350 C 700,200 600,200 450,250" 
                      fill="transparent" 
                      stroke="var(--color-outline)" 
                      strokeWidth="2" 
                      strokeDasharray="8,8" 
                    />
                    <path 
                      d="M 850,350 C 700,200 600,200 450,250" 
                      fill="transparent" 
                      stroke="var(--color-primary)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      style={{
                         strokeDasharray: 900,
                         strokeDashoffset: 900 - (900 * shipProgress)
                      }}
                    />
                  </svg>

                  {/* Marcador Origen Colombia */}
                  <div className="absolute top-[58%] right-[15%] transform flex flex-col items-center">
                      <div className="w-5 h-5 bg-white rounded-full shadow-lg z-10 border-4 border-charcoal"></div>
                      <div className="mt-2 text-charcoal font-headline font-bold text-sm bg-white/80 backdrop-blur px-3 py-1 shadow-sm rounded-sm">
                         Cartagena
                      </div>
                  </div>

                  {/* Marcador Destino Costa Rica */}
                  <div className="absolute top-[41%] left-[45%] transform flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-4 border-white transition-all duration-1000 shadow-md ${shipProgress > 0.95 ? 'bg-primary' : 'bg-surface-dim'}`}>
                         <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: shipProgress > 0.95 ? 1 : 0.6 }}
                        className="mt-2 text-charcoal font-headline font-bold text-sm bg-white/80 backdrop-blur px-3 py-1 shadow-sm rounded-sm"
                      >
                         Puerto Limón (Costa Rica)
                      </motion.div>
                  </div>

                  {/* El Barco navegando transparente */}
                  {shipProgress < 1 && (
                    <motion.div 
                      className="absolute shadow-[0_4px_10px_rgba(56,74,53,0.3)] bg-primary border-2 border-white rounded-full w-4 h-4"
                      style={{
                        right: `${15 + (40 * (1 - shipProgress))}%`, // De 15 a 55 (45 left approx)
                        top: `${41 + (22 * Math.sin(shipProgress * Math.PI)) + (17 * (1 - shipProgress))}%`, // curva suave calculada
                      }}
                    ></motion.div>
                  )}
               </div>

                {/* Mensaje de finalización Pop Up corporativo claro */}
                {shipProgress >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-surface/50 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-50"
                  >
                     <div className="bg-white p-16 shadow-2xl rounded-sm max-w-2xl w-full flex flex-col items-center">
                         <div className="w-20 h-20 bg-primary/10 rounded-full mb-6 flex justify-center items-center text-primary">
                            <CheckCircle2 size={48} />
                         </div>
                         <h2 className="text-3xl font-headline font-bold uppercase tracking-tight text-charcoal mb-4">Exportación Existosa Hacia HORECA</h2>
                         
                         <p className="text-on-surface-variant font-body mb-8">
                           <strong>Fact Favorable:</strong> Transportar {volumen.toLocaleString()} kilos usando Incoterm <strong>{incoterm}</strong> nos asegura liquidez sin romper la costosa cadena logística de frío. El producto premium llegó resguardado a mesa.
                         </p>

                         <div className="grid grid-cols-2 gap-4 w-full mb-10 text-left">
                            <div className="p-4 bg-surface-dim rounded-sm">
                               <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Retorno Esperado</p>
                               <p className="text-2xl font-headline font-bold text-primary">${(EBITDA/1000000).toFixed(1)} M</p>
                            </div>
                            <div className="p-4 bg-surface-dim rounded-sm">
                               <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Mermas por Calentamiento</p>
                               <p className="text-2xl font-headline font-bold text-on-surface">0.0%</p>
                            </div>
                         </div>

                         <button 
                           onClick={handleClose} 
                           className="w-full px-8 py-4 bg-charcoal text-white font-label text-sm uppercase tracking-widest font-bold hover:bg-black transition-colors"
                         >
                           Finalizar Visualización
                         </button>
                     </div>
                  </motion.div>
                )}

             </div>
          </motion.div>
        )}

      </motion.div>
    </AnimatePresence>
  );
}
