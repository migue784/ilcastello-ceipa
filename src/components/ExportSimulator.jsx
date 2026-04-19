import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Route, AlertTriangle, MonitorPlay, XCircle } from 'lucide-react';

export default function ExportSimulator({ isOpen, onClose }) {
  // Estados de Fases Generales
  const [fase, setFase] = useState('offline'); // offline | booting | dashboard | tracking

  // Estados Logísticos (Inputs de Interfaz)
  const [volumen, setVolumen] = useState(2000); 
  const [incoterm, setIncoterm] = useState('CIF'); // FOB o CIF

  // Textos y barras de carga simuladas (Efecto Hacker/Terminal)
  const [loadingText, setLoadingText] = useState('Inicializando Motor de Cálculo Aduanero...');
  const [bootProgress, setBootProgress] = useState(0);

  // Animación del barco en SVG
  const [shipProgress, setShipProgress] = useState(0);

  useEffect(() => {
    if (isOpen && fase === 'offline') {
      setFase('booting');
    }
  }, [isOpen, fase]);

  // Fase 1: Efecto BOOTING (Terminal pesado)
  useEffect(() => {
    if (fase === 'booting') {
      let currentProgress = 0;
      const texts = [
        'Autenticando Permisos de Aduana (DIAN)...',
        'Validando Cadena de Frío a -20°C...',
        'Trazando Rutas Navieras Cartagena > Costa Rica...',
        'Consolidando Motor Financiero HORECA...'
      ];
      
      const interval = setInterval(() => {
        currentProgress += 2;
        setBootProgress(currentProgress);
        
        if (currentProgress === 10) setLoadingText(texts[0]);
        if (currentProgress === 40) setLoadingText(texts[1]);
        if (currentProgress === 70) setLoadingText(texts[2]);
        if (currentProgress === 90) setLoadingText(texts[3]);

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setFase('dashboard'), 600); // Entra al simulador real
        }
      }, 30);
      return () => clearInterval(interval);
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
          return prev + 0.005; // Velocidad del barco
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [fase]);

  // Limpieza total cuando se cierra
  const handleClose = () => {
    setFase('offline');
    setBootProgress(0);
    setShipProgress(0);
    onClose();
  };

  // --- MATEMÁTICAS / FÍSICAS DEL JUEGO ---
  const precioPorKilo = 35000;
  const ingresosTotales = volumen * precioPorKilo;
  
  // Si elegimos Incoterm CIF (Seguro y Flete hasta Costa Rica pagado por nosotros), es más costoso de nuestro bolsillo.
  // Si FOB (puesto en Colombia), cuesta menos la logística pero el precio de venta acordado suele ser menor. Para simplicidad:
  const costoAduaneroCO = 4500000; 
  const costoFleteRefrigerado = incoterm === 'CIF' ? 12000000 + (volumen * 5500) : (volumen * 2000);
  const arancelCostaRica = incoterm === 'CIF' ? ingresosTotales * 0.14 : 0; // Si es CIF nosotros cubrimos riesgo hasta allá.
  const costoProduccionLocal = volumen * 11000;

  const egresosTotales = costoProduccionLocal + costoAduaneroCO + costoFleteRefrigerado + arancelCostaRica;
  const EBITDA = ingresosTotales - egresosTotales;
  const isRentable = EBITDA > 0;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: {duration: 0.5} }}
        className="fixed inset-0 z-[999] bg-[#050505] text-[#e0e0e0] font-mono overflow-y-auto overflow-x-hidden flex flex-col selection:bg-green-500/30 selection:text-green-400"
      >
        
        {/* Cabecera del Sistema (Persistente) */}
        <div className="w-full flex items-center justify-between border-b border-[#1f1f1f] px-6 py-4 bg-[#0a0a0a]">
           <div className="flex items-center gap-3">
              <Terminal size={18} className="text-green-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] tracking-[0.2em] font-bold text-green-500 uppercase">SYS_LOGISTICS v9.4</span>
                 <span className="text-xs text-zinc-500 uppercase">Red HORECA Central / Admin</span>
              </div>
           </div>
           
           {/* El Botón Desconectar / Salir */}
           <button 
             onClick={handleClose} 
             className="flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors uppercase text-xs tracking-widest font-bold"
           >
             <XCircle size={16} /> Disconnect
           </button>
        </div>

        {/* --- PANTALLA 1: BOOTING LOADER --- */}
        {fase === 'booting' && (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg">
               <div className="flex items-center gap-2 mb-4 text-green-500">
                  <Cpu size={24} className="animate-pulse" />
                  <span className="text-sm uppercase tracking-widest">Ejecución Logística Central</span>
               </div>
               <div className="h-1 w-full bg-zinc-900 overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-green-500 shadow-[0_0_10px_#22c55e]"
                    style={{ width: `${bootProgress}%` }}
                  ></motion.div>
               </div>
               <div className="mt-4 flex justify-between items-center text-xs text-zinc-500">
                  <span className="animate-pulse">{loadingText}</span>
                  <span>{bootProgress}%</span>
               </div>
            </div>
          </div>
        )}

        {/* --- PANTALLA 2: DASHBOARD CALCULADORA --- */}
        {fase === 'dashboard' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="flex-1 p-6 md:p-12 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
             
             {/* Lado Izquierdo: Parámetros del Usuario */}
             <div className="lg:col-span-5 space-y-8">
                <div>
                   <h1 className="text-4xl font-bold uppercase tracking-tight text-white mb-2">Simulador Export</h1>
                   <p className="text-sm text-zinc-400 max-w-sm mb-10">
                     Ajusta variables termodinámicas y financieras para proyectar una exportación rentable al sector HORECA de Centroamérica (Costa Rica).
                   </p>
                </div>

                {/* Input de Kilos (Range Slider Neon) */}
                <div className="p-6 bg-[#0e0e0e] border border-[#1f1f1f] rounded-sm">
                   <div className="flex justify-between items-end border-b border-[#1f1f1f] pb-4 mb-6">
                      <span className="text-xs uppercase tracking-widest text-zinc-500">Volumen Despacho (KG)</span>
                      <span className="text-3xl font-bold text-white">{volumen.toLocaleString()} <span className="text-sm text-green-500">kg/mes</span></span>
                   </div>
                   <input 
                      type="range" 
                      min="500" 
                      max="8000" 
                      step="100"
                      value={volumen} 
                      onChange={(e) => setVolumen(Number(e.target.value))}
                      className="w-full h-[2px] bg-zinc-800 appearance-none cursor-ew-resize outline-none"
                      style={{
                        background: `linear-gradient(to right, #22c55e 0%, #22c55e ${(volumen-500)/75}%, #27272a ${(volumen-500)/75}%, #27272a 100%)`
                      }}
                   />
                   <div className="flex justify-between w-full mt-3 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                     <span>Bajo Riesgo</span> <span>Óptimo Escala</span> <span>Saturación (-20°C)</span>
                   </div>
                </div>

                {/* Input Incoterms (Switch Buttons) */}
                <div className="p-6 bg-[#0e0e0e] border border-[#1f1f1f] rounded-sm">
                   <div className="mb-6">
                      <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Incoterms y Aduana</span>
                      <span className="text-sm text-white">Selecciona método de transferencia de riesgos.</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setIncoterm('FOB')}
                        className={`py-4 border text-sm font-bold tracking-widest uppercase transition-all ${incoterm === 'FOB' ? 'bg-zinc-800 border-zinc-500 text-white' : 'bg-transparent border-[#1f1f1f] text-zinc-600 hover:text-zinc-300'}`}
                      >
                         FOB (Colombia)
                      </button>
                      <button 
                        onClick={() => setIncoterm('CIF')}
                        className={`py-4 border text-sm font-bold tracking-widest uppercase transition-all ${incoterm === 'CIF' ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-transparent border-[#1f1f1f] text-zinc-600 hover:text-zinc-300'}`}
                      >
                         CIF (Costa Rica)
                      </button>
                   </div>
                   <p className="mt-4 text-[11px] text-zinc-500 leading-relaxed italic">
                     {incoterm === 'FOB' 
                      ? 'Free On Board: Nuestra empresa deja la pasta refrigerada en el Puerto de Cartagena. Menor inversión pero nos quita el control logístico externo.'
                      : 'Cost, Insurance, Freight: Asumimos fletes, cadena de ultracongelación y seguros hasta Costa Rica. Mayor inversión pero dominio total del trayecto.'}
                   </p>
                </div>
             </div>

             {/* Lado Derecho: Calculadora HUD Financiera */}
             <div className="lg:col-span-7 flex flex-col justify-end">
                <div className="bg-[#111] border border-zinc-800 p-8 relative overflow-hidden">
                   
                   {/* Grid Falso al fondo para ambientación radar */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

                   <h2 className="text-xs tracking-[0.3em] font-bold text-zinc-500 uppercase border-b border-zinc-800 pb-4 mb-8">Auditoría Financiera - Proyección USD / COP</h2>

                   <div className="space-y-6 relative z-10 w-full md:w-3/4">
                      <div className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2">
                        <span className="text-sm text-zinc-400">Ingreso Esperado Bruto</span>
                        <span className="font-bold text-white text-lg">${(ingresosTotales/1000000).toFixed(1)} M</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2">
                        <span className="text-sm text-zinc-400">Costos Manufactura (11k/kg)</span>
                        <span className="text-zinc-500">-${(costoProduccionLocal/1000000).toFixed(1)} M</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2">
                        <span className="text-sm text-zinc-400">Flete Reef (-20°C) + Seguros</span>
                        <span className="text-red-400">-${(costoFleteRefrigerado/1000000).toFixed(1)} M</span>
                      </div>
                      {incoterm === 'CIF' && (
                        <div className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2">
                          <span className="text-sm text-zinc-400">Arancel Estimado Aduanas CRC</span>
                          <span className="text-red-400">-${(arancelCostaRica/1000000).toFixed(1)} M</span>
                        </div>
                      )}
                      
                      {/* EBITDA TOTAL */}
                      <div className="pt-4 flex justify-between items-end">
                        <span className="text-xs tracking-[0.2em] font-bold text-zinc-500 uppercase">EBITDA Net. Profit</span>
                        <span className={`text-4xl font-bold tracking-tighter ${isRentable ? 'text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]'}`}>
                          ${(EBITDA/1000000).toFixed(1)} M
                        </span>
                      </div>
                   </div>

                   {/* Avisos del sistema logístico */}
                   <div className="mt-8 relative z-10">
                     {!isRentable ? (
                       <div className="bg-red-500/10 border border-red-500/30 p-4 flex gap-4 items-center">
                         <AlertTriangle className="text-red-500 flex-shrink-0" />
                         <p className="text-xs text-red-400 font-bold uppercase tracking-widest leading-relaxed">
                           Aproximación Crítica. Los costos marítimos superan tu capacidad de venta actual. Escala el volumen para diluir el Flete REEFER.
                         </p>
                       </div>
                     ) : (
                       <div className="bg-green-500/10 border border-green-500/30 p-4 flex gap-4 items-center">
                         <ShieldAlert className="text-green-400 flex-shrink-0" />
                         <p className="text-xs text-green-400 font-bold uppercase tracking-widest leading-relaxed">
                           Simulación Rentable. Parámetros óptimos para despacho B2B Internacional confirmados.
                         </p>
                       </div>
                     )}
                   </div>

                   {/* Boton de accion (Comenzar Rastreo) */}
                   <button 
                     disabled={!isRentable}
                     onClick={() => setFase('tracking')}
                     className={`mt-10 w-full py-5 text-sm uppercase tracking-[0.3em] font-bold transition-all flex justify-center items-center gap-3 relative z-10 
                      ${isRentable ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 'bg-transparent border border-zinc-800 text-zinc-800 cursor-not-allowed'}`}
                   >
                     {isRentable ? <><MonitorPlay size={18}/> Iniciar Simulación GPS</> : 'Ajustes Requeridos'}
                   </button>
                </div>
             </div>

          </motion.div>
        )}

        {/* --- PANTALLA 3: ANIMACIÓN DE RASTREO SATELITAL (MAPA) --- */}
        {fase === 'tracking' && (
          <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
             className="flex-1 w-full bg-[#050505] relative flex items-center justify-center overflow-hidden"
          >
             {/* "Mapa Radar" abstracto fondo */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-black to-black pointer-events-none"></div>
             
             {/* Canvas donde sucederá el trayecto (Similitud Mar Caribe) */}
             <div className="relative w-full max-w-5xl aspect-[2/1] border border-[#1f1f1f] bg-[#0a0a0a] overflow-hidden rounded-md flex">
                
                {/* SVG Route Animation (Cartagena -> Limón Costa Rica) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 500">
                    {/* Línea rastro tenue */}
                    <path 
                      id="route-path"
                      d="M 800,450 C 650,450 500,200 200,250" 
                      fill="transparent" 
                      stroke="#1f1f1f" 
                      strokeWidth="2" 
                      strokeDasharray="5,5" 
                    />
                    {/* Línea Verde de GPS progresiva (Calculada matemáticamente del path) */}
                    <path 
                      d="M 800,450 C 650,450 500,200 200,250" 
                      fill="transparent" 
                      stroke="#22c55e" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      style={{
                         strokeDasharray: 900,
                         strokeDashoffset: 900 - (900 * shipProgress)
                      }}
                      className="drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                    />
                </svg>

                {/* Marcador Origen Colombia */}
                <div className="absolute bottom-[10%] right-[20%] transform translate-x-1/2 translate-y-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white] z-10 border-4 border-black"></div>
                    <div className="mt-2 bg-black border border-white/20 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider whitespace-nowrap">
                       <span className="text-zinc-500 mr-2">ORIGEN</span> Cartagena (COL)
                    </div>
                </div>

                {/* Marcador Destino Costa Rica */}
                <div className="absolute top-[50%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-black transition-all duration-1000 ${shipProgress > 0.95 ? 'bg-green-500 shadow-[0_0_20px_#22c55e]' : 'bg-zinc-800'}`}>
                       <Route size={10} className="text-black" />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: shipProgress > 0.95 ? 1 : 0.4 }}
                      className="mt-2 bg-black border border-green-500/30 text-green-400 text-[10px] uppercase font-bold px-2 py-1 tracking-wider whitespace-nowrap"
                    >
                       <span className="text-green-900 mr-2">DEST.</span> Puerto Limón (CRC)
                    </motion.div>
                </div>

                {/* El Barco navegando (Position atado al Progreso) */}
                {shipProgress < 1 && (
                  <motion.div 
                    className="absolute shadow-[0_0_20px_rgba(34,197,94,0.5)] bg-green-500 rounded-full w-2 h-2"
                    style={{
                      // Cálculo de curva de bézier aproximado usando motion
                      // De X: 80% (800) a 20% (200)
                      right: `${20 + (60 * (1 - shipProgress))}%`,
                      // De Y: 90% (450) sube a 40% (200) y baja a 50% (250). Usaremos una parabola sencilla math.sin para simular el bézier en Y.
                      bottom: `${10 + (40 * Math.sin(shipProgress * Math.PI)) + (40 * shipProgress)}%`,
                    }}
                  ></motion.div>
                )}
                
                {/* HUD de Coordenadas Tácticas arriba del mapa */}
                <div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none">
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest bg-black/50 px-2 py-1">HORECA Transit Visualizer</h3>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold bg-black/50 px-2 py-1 flex gap-4">
                       <span>SAT_LINK: Ackt</span>
                       <span>TEMP: -20°C Constante</span>
                       <span className="text-green-500 border-b border-green-500">INCOTERM: {incoterm}</span>
                    </div>
                </div>

                {/* Mensaje de finalización superpuesto */}
                {shipProgress >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                  >
                     <div className="w-20 h-20 bg-green-500 rounded-full mb-6 flex justify-center items-center shadow-[0_0_50px_#22c55e]">
                        <CheckCircle2 size={40} className="text-black" />
                     </div>
                     <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-2">Simulación Operativa Completa</h2>
                     <p className="max-w-md mx-auto text-zinc-400 text-sm leading-relaxed mb-10">
                        {volumen.toLocaleString()} KG de pasta Il Castello llegaron intactos a los Hoteles élite del Caribe (Puerto Limón, Costa Rica). La cadena de frío se mantuvo estable, generando un EBITDA neto de ${(EBITDA/1000000).toFixed(1)} Millones.
                     </p>
                     <button 
                       onClick={handleClose} 
                       className="px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold border border-zinc-700 hover:bg-white hover:text-black transition-colors"
                     >
                       Volver al Panel Administrativo
                     </button>
                  </motion.div>
                )}

             </div>
          </motion.div>
        )}

      </motion.div>
    </AnimatePresence>
  );
}
