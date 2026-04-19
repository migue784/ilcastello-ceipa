import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ship, Truck, ThermometerSnowflake, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export default function ExportSimulator({ isOpen, onClose }) {
  const [volumen, setVolumen] = useState(2000); // Kilos iniciales, basados en el objetivo SMART.
  const [fase, setFase] = useState('calculadora'); // 'calculadora', 'track'
  const [progress, setProgress] = useState(0);

  // Costos simulados
  const precioPorKilo = 35000;
  const logisticaBase = 12000000; // Costo base refrigerado
  const logisticaVariable = volumen * 4500; // Costo por kilo extra en cadena fría
  
  const ingresosTotales = volumen * precioPorKilo;
  const costosLogistica = logisticaBase + logisticaVariable;
  const ebitda = ingresosTotales - costosLogistica - (volumen * 12000); // 12k costo prod
  
  const isRentable = ebitda > 15000000;

  useEffect(() => {
    if (!isOpen) { 
        setTimeout(() => setFase('calculadora'), 500);
        setProgress(0);
        return; 
    }
    
    // Si entramos a fase track, simular progreso de la barra y las postas
    if (fase === 'track') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [fase, isOpen]);

  // Bloqueo de scroll global cuando el modal está abierto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen) return null;

  const bgModalProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-black/60",
    onClick: onClose
  };

  const containerProps = {
    initial: { scale: 0.9, opacity: 0, y: 50 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.95, opacity: 0, y: 20 },
    transition: { type: "spring", damping: 25, stiffness: 300 },
    className: "bg-surface-container-highest border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative text-on-surface shadow-2xl rounded-sm",
    onClick: (e) => e.stopPropagation()
  };

  return (
    <AnimatePresence>
      <motion.div {...bgModalProps}>
        <motion.div {...containerProps}>
          
          {/* Encabezado */}
          <div className="flex justify-between items-center p-6 border-b border-primary/20 bg-surface-dim">
            <div>
              <h2 className="text-2xl font-headline font-bold text-primary uppercase">
                 {fase === 'calculadora' ? 'Laboratorio HORECA' : 'Rastreo Logístico de Frío'}
              </h2>
              <p className="text-sm text-on-surface-variant font-body">Análisis en vivo de Exportación B2B</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-on-surface-variant hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Cuerpo */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar">
            {fase === 'calculadora' ? (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                
                {/* Panel Izquierdo: Controles */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-headline text-xl text-wheat mb-2">Paso 1: Capacidad Instalada</h3>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Arrastra para decidir cuántos kilos de pasta premium ultracongelada exportarás mensualmente a los Hoteles de Punta Cana, República Dominicana.</p>
                    
                    <div className="mb-4 flex justify-between items-end">
                      <span className="text-xs text-primary tracking-widest uppercase font-bold">Volumen:</span>
                      <span className="text-3xl font-headline font-bold text-white">{volumen.toLocaleString()} <span className="text-lg text-on-surface-variant">KG</span></span>
                    </div>
                    
                    <input 
                      type="range" 
                      min="500" 
                      max="5000" 
                      step="100"
                      value={volumen} 
                      onChange={(e) => setVolumen(Number(e.target.value))}
                      className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-2 text-xs text-on-surface-variant">
                      <span>Riesgo (500)</span>
                      <span>Objetivo (2k)</span>
                      <span>Cap. Max (5k)</span>
                    </div>
                  </div>

                  <div className="bg-surface p-4 border-l-4 border-tomato">
                    <div className="flex gap-3 mb-2 items-start text-tomato">
                      <ThermometerSnowflake size={20} />
                      <h4 className="font-bold text-sm">Advertencia de Frío (DOFA)</h4>
                    </div>
                    <p className="text-xs text-on-surface-variant opacity-80 leading-relaxed">Transportar a -20°C a nivel marítimo involucra altísimos costos fijos logísticos estructurales. Volúmenes bajos destruyen la rentabilidad.</p>
                  </div>
                </div>

                {/* Panel Derecho: Dashboard Financiero */}
                <div className="card-glass-dark p-6 rounded-sm bg-black/20 flex flex-col justify-between">
                  <div>
                     <h3 className="text-xs uppercase tracking-widest text-[var(--color-wheat)] mb-6 font-bold">Proyección Contable (COP)</h3>
                     
                     <div className="space-y-4 mb-8">
                       <div className="flex justify-between items-center border-b border-white/5 pb-2">
                         <span className="text-sm text-on-surface-variant">Ingresos HORECA (+35k/kg)</span>
                         <span className="font-mono text-green-400">${(ingresosTotales/1000000).toFixed(1)} M</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-white/5 pb-2">
                         <span className="text-sm text-on-surface-variant">Logística Reef (Carga Refrigerada)</span>
                         <span className="font-mono text-tomato">-${(costosLogistica/1000000).toFixed(1)} M</span>
                       </div>
                       <div className="flex justify-between items-center pb-2">
                         <span className="text-sm font-bold text-white">EBITDA Estimado</span>
                         <span className={`font-mono font-bold text-lg ${isRentable ? 'text-green-400' : 'text-tomato'}`}>
                            ${(ebitda/1000000).toFixed(1)} M
                         </span>
                       </div>
                     </div>

                     {!isRentable ? (
                       <div className="text-xs text-tomato flex items-center gap-2 font-bold mb-4">
                         <AlertTriangle size={14}/> Volumen muy bajo. Los costos logísticos te devoran.
                       </div>
                     ) : (
                       <div className="text-xs text-green-400 flex items-center gap-2 font-bold mb-4">
                         <TrendingUp size={14}/> Zona de rentabilidad y economías de escala logradas.
                       </div>
                     )}
                  </div>
                  
                  <button 
                    disabled={!isRentable}
                    onClick={() => setFase('track')}
                    className={`w-full py-4 font-headline uppercase tracking-wider font-bold transition-all ${isRentable ? 'bg-primary text-white hover:bg-[#4a6347]' : 'bg-surface-dim text-on-surface-variant cursor-not-allowed border border-white/5'}`}
                  >
                    Embarcar al Caribe (Simular Ruta)
                  </button>

                </div>

              </motion.div>
            ) : (
              // FASE 2: RASTREO
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} 
                className="flex flex-col items-center justify-center py-10"
              >
                 <div className="w-full relative py-20 px-4 md:px-10">
                    
                    {/* Hilo conector principal base */}
                    <div className="absolute top-1/2 left-10 right-10 h-1 bg-charcoal -translate-y-1/2 z-0"></div>
                    
                    {/* Hilo progreso cargado */}
                    <div className="absolute top-1/2 left-10 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-300 ease-out" style={{ width: `calc(${progress}% - 2.5rem)` }}></div>
                    
                    {/* Los nodos de aduana (Flex) */}
                    <div className="relative z-10 flex justify-between items-center w-full">
                       
                       {/* Punto 1: Fábrica */}
                       <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${progress >= 0 ? 'bg-primary border-primary/20 text-white shadow-[0_0_20px_rgba(56,74,53,0.8)]' : 'bg-surface border-charcoal text-on-surface-variant'} transition-all duration-500 delay-100`}>
                             <ThermometerSnowflake size={20} />
                          </div>
                          <p className="text-xs font-bold uppercase mt-4 text-white">Medellín (-20°C)</p>
                          <p className="text-[10px] text-on-surface-variant">Congelación Rápida</p>
                       </div>

                       {/* Punto 2: Puerto CO */}
                       <div className="flex flex-col items-center relative -top-6">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${progress >= 40 ? 'bg-wheat border-wheat/20 text-surface shadow-[0_0_20px_rgba(202,171,114,0.6)]' : 'bg-surface border-charcoal text-on-surface-variant'} transition-all duration-500 delay-100`}>
                             <Truck size={20} />
                          </div>
                          <p className="text-xs font-bold uppercase mt-4 text-white">PTO Cartagena</p>
                          <p className="text-[10px] text-on-surface-variant">Aforo Ransa Logística</p>
                       </div>

                       {/* Punto 3: Travesía Marítima */}
                       <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${progress >= 70 ? 'bg-primary border-primary/20 text-white shadow-[0_0_20px_rgba(56,74,53,0.8)]' : 'bg-surface border-charcoal text-on-surface-variant'} transition-all duration-500 delay-100`}>
                             <Ship size={20} />
                          </div>
                          <p className="text-xs font-bold uppercase mt-4 text-white">Alta Mar</p>
                          <p className="text-[10px] text-on-surface-variant">Contenedor REEFER</p>
                       </div>

                       {/* Punto 4: Destino Punta Cana */}
                       <div className="flex flex-col items-center relative -top-6">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 ${progress >= 100 ? 'bg-green-500 border-green-500/20 text-white shadow-[0_0_30px_rgba(34,197,94,0.8)]' : 'bg-surface border-charcoal text-on-surface-variant'} transition-all duration-500 delay-100`}>
                             <CheckCircle2 size={24} />
                          </div>
                          <p className={`text-xs font-bold uppercase mt-4 ${progress >= 100 ? 'text-green-400' : 'text-white'}`}>Punta Cana (Horeca)</p>
                          <p className="text-[10px] text-on-surface-variant">Cadenas Hoteleras B2B</p>
                       </div>

                    </div>
                 </div>

                 {progress === 100 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-4">
                       <h3 className="font-headline text-2xl text-white mb-2">¡Exportación Exitosa!</h3>
                       <p className="text-sm border border-green-500/30 bg-green-500/10 text-green-400 py-2 px-6 rounded-full inline-block">
                          {volumen} Kilos de raviolis íntegros llegaron a la mesa del Caribe.
                       </p>
                    </motion.div>
                 )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
