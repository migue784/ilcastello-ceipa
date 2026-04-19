import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, AlertTriangle, MonitorPlay, CheckCircle2 } from 'lucide-react';

export default function ExportSimulator({ isOpen, onClose }) {
  const [fase, setFase] = useState('offline'); // offline | booting | dashboard | tracking
  const [volumen, setVolumen] = useState(2000); 
  const [incoterm, setIncoterm] = useState('CIF');
  const [trackingPhaseStatus, setTrackingPhaseStatus] = useState('INACTIVO');
  
  // Referencia al mapa para no re-inicializar
  const mapRef = useRef(null);

  useEffect(() => {
    if (isOpen && fase === 'offline') setFase('booting');
  }, [isOpen, fase]);

  useEffect(() => {
    if (fase === 'booting') {
      setTimeout(() => setFase('dashboard'), 1200); 
    }
  }, [fase]);

  // LOGICA LEAFLET NATIVA
  useEffect(() => {
    if (fase === 'tracking') {
      setTrackingPhaseStatus('FASE 1: TRASLADO MEDELLÍN -> CARTAGENA');
      // Asegurarse de que el CDN se cargó en window
      if (!window.L) {
         console.error("Leaflet NO cargó desde el CDN"); return;
      }
      
      const L = window.L;
      // Iniciar mapa
      if (mapRef.current) { mapRef.current.remove(); }
      
      const map = L.map('real-map-container', { zoomControl: false, scrollWheelZoom: false, dragging: false }).setView([6.2442, -75.5812], 7);
      mapRef.current = map;

      // Base CartoDB Clara corporativa
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(map);

      // Iconos Personalizados CSS
      const createIcon = (color, sizeStr, extraClass) => L.divIcon({
         className: 'bg-transparent',
         html: `<div class="w-${sizeStr} h-${sizeStr} rounded-full border-[3px] border-white shadow-lg flex items-center justify-center ${extraClass}" style="background-color: ${color}"></div>`,
         iconSize: [(parseInt(sizeStr)*4), (parseInt(sizeStr)*4)], iconAnchor: [(parseInt(sizeStr)*2), (parseInt(sizeStr)*2)]
      });

      const TIERRA_COLOR = '#111827'; // charcoal
      const MAR_COLOR = '#384a35'; // primary

      // Utils de animación coords
      const animMarker = (marker, startPos, endPos, durationMs, onFinish) => {
         const startTime = performance.now();
         const animate = (currTime) => {
            const elapsed = currTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // Ease in out
            const ease = progress < .5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
            const currentLat = startPos[0] + (endPos[0] - startPos[0]) * ease;
            const currentLng = startPos[1] + (endPos[1] - startPos[1]) * ease;
            
            marker.setLatLng([currentLat, currentLng]);
            
            if (progress < 1) requestAnimationFrame(animate);
            else if (onFinish) onFinish();
         };
         requestAnimationFrame(animate);
      };

      // == COORDENADAS RUTA ==
      const medellin = [6.2442, -75.5812];
      const cartagena = [10.3997, -75.5144];
      const ptoLimon = [9.9918, -83.0336]; // Costa Rica
      const sanJose = [9.9281, -84.0907];
      const guanacaste = [10.6346, -85.4407];
      const limonSur = [9.7, -82.8];

      // FASE 1: (0s) Camión Medellin -> Cartagena
      const truck = L.marker(medellin, {icon: createIcon(TIERRA_COLOR, '4', 'scale-75')}).addTo(map);
      
      // Dibujar linea tenue carretera
      L.polyline([medellin, cartagena], {color: TIERRA_COLOR, weight: 1, dashArray: '4,4', opacity: 0.5}).addTo(map);

      setTimeout(() => {
         // Zoom a zona caribe para ver el mar
         map.flyToBounds([cartagena, ptoLimon], { duration: 2, padding: [50,50] });
      }, 2500);

      animMarker(truck, medellin, cartagena, 2500, () => {
         // FIN FASE 1 -> START FASE 2: BARCO
         setTrackingPhaseStatus('FASE 2: TRÁNSITO INTERNACIONAL AL CARIBE');
         truck.remove(); // Desaparece camión, sale barco
         
         const ship = L.marker(cartagena, {icon: createIcon(MAR_COLOR, '5', 'shadow-primary')}).addTo(map);
         
         // Dibujar linea alta mar
         L.polyline([cartagena, ptoLimon], {color: MAR_COLOR, weight: 2, dashArray: '6,6', opacity: 0.7}).addTo(map);

         // Animar barco cruzando todo el mar (4 segundos calmos)
         animMarker(ship, cartagena, ptoLimon, 4000, () => {
            
            // FIN FASE 2 -> START FASE 3: DISTRIBUCIÓN NACIONAL
            setTrackingPhaseStatus('FASE 3: DISTRIBUCIÓN FINAL (HOTELERÍA B2B)');
            map.flyTo([10.2, -84.0], 7, { animate: true, duration: 1.5 }); // Enfocar solo Costa rica
            
            setTimeout(() => {
               ship.remove();
               // Salen multiples camiones The Last Mile
               const truck1 = L.marker(ptoLimon, {icon: createIcon(TIERRA_COLOR, '3', 'scale-50')}).addTo(map);
               const truck2 = L.marker(ptoLimon, {icon: createIcon(TIERRA_COLOR, '3', 'scale-50')}).addTo(map);
               const truck3 = L.marker(ptoLimon, {icon: createIcon(TIERRA_COLOR, '3', 'scale-50')}).addTo(map);
               
               L.polyline([ptoLimon, sanJose], {color: TIERRA_COLOR, weight: 1, dashArray: '2,4', opacity: 0.3}).addTo(map);
               L.polyline([ptoLimon, guanacaste], {color: TIERRA_COLOR, weight: 1, dashArray: '2,4', opacity: 0.3}).addTo(map);
               
               animMarker(truck1, ptoLimon, sanJose, 2000);
               animMarker(truck2, ptoLimon, guanacaste, 2500);
               animMarker(truck3, ptoLimon, limonSur, 1500, () => {
                  setTimeout(() => setTrackingPhaseStatus('COMPLETADO'), 1000);
               });
            }, 1600);
         });
      });

    }
    return () => { if (mapRef.current && fase !== 'tracking') { mapRef.current.remove(); mapRef.current = null; } }
  }, [fase]);

  // Limpieza
  const handleClose = () => { setFase('offline'); onClose(); };

  // Físicas Financieras
  const ingresosTotales = volumen * 35000;
  const costoProduccionLocal = volumen * 11000;
  const costoAduaneroCO = 4500000; 
  const costoFleteRefrigerado = incoterm === 'CIF' ? 12000000 + (volumen * 5500) : (volumen * 2000);
  const seguroIncoterm = incoterm === 'CIF' ? ingresosTotales * 0.02 : 0; 
  const arancelCostaRica = incoterm === 'CIF' ? ingresosTotales * 0.14 : 0; 
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
        <div className="w-full h-20 flex items-center justify-between border-b border-outline/20 px-6 py-4 bg-surface/90 backdrop-blur-md sticky top-0 z-50">
           <div className="flex items-center gap-3">
              <span className="font-headline font-bold text-2xl tracking-tight text-on-surface uppercase whitespace-nowrap">Estudio Logístico</span>
              <span className="hidden md:ml-4 md:flex text-xs uppercase tracking-widest text-on-surface-variant font-bold border-l border-outline/30 pl-4 py-1">
                 Simulador de Expansión Centroamérica
              </span>
           </div>
           
           <button onClick={handleClose} className="p-2 hover:bg-black/5 text-on-surface-variant hover:text-charcoal rounded-full font-label font-bold text-sm uppercase">Cerrar</button>
        </div>

        {fase === 'booting' && (
          <div className="flex-1 flex flex-col items-center justify-center bg-surface-container">
               <Cpu size={48} className="text-primary mb-6 animate-pulse" />
               <h2 className="font-headline text-3xl font-bold uppercase tracking-widest text-on-surface mb-2">Preparando Motor Comercial</h2>
               <p className="text-on-surface-variant font-label uppercase tracking-widest">Calculando tarifas y cadenas de frío aéreas / marítimas...</p>
          </div>
        )}

        {fase === 'dashboard' && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 p-6 md:p-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-10 border-r border-outline/20 pr-0 md:pr-12">
                <div>
                   <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight text-on-surface mb-4">Exportación a<br/><span className="text-primary text-6xl">Costa Rica</span></h1>
                   <p className="font-body text-base text-on-surface-variant leading-relaxed">Dimensionamiento táctico HORECA. Mueve el control de arrastre para simular el impacto en los fijos logísticos.</p>
                </div>
                {/* Inputs de Slider e Incoterm (Conservados) */}
                <div className="bg-surface-container-highest p-8 rounded-sm">
                   <div className="flex justify-between items-end pb-4 mb-6">
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Volumen Capacidad (KG)</span>
                      <span className="text-4xl font-headline font-bold text-on-surface">{volumen.toLocaleString()} <span className="text-base text-primary">kg/mes</span></span>
                   </div>
                   <input type="range" min="500" max="8000" step="100" value={volumen} onChange={(e) => setVolumen(Number(e.target.value))} className="w-full h-2 rounded-full outline-none accent-primary appearance-none bg-surface-dim cursor-ew-resize"/>
                </div>

                <div className="bg-surface-container-highest p-8 rounded-sm">
                   <div className="mb-6">
                      <span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block font-bold">Incoterms</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <button onClick={() => setIncoterm('FOB')} className={`py-4 border shadow-sm font-label text-sm uppercase font-bold transition-all ${incoterm === 'FOB' ? 'bg-charcoal border-charcoal text-white' : 'bg-surface border-outline/30 text-on-surface-variant hover:border-charcoal'}`}>FOB</button>
                      <button onClick={() => setIncoterm('CIF')} className={`py-4 border shadow-sm font-label text-sm uppercase font-bold transition-all ${incoterm === 'CIF' ? 'bg-primary border-primary text-white' : 'bg-surface border-outline/30 text-on-surface-variant hover:border-primary'}`}>CIF</button>
                   </div>
                   <div className="mt-6 p-4 bg-white/50 border border-outline/10 text-xs text-on-surface-variant">{incoterm === 'FOB' ? 'FOB: Responsabilidad hasta Puerto de Cartagena.' : 'CIF: Cubre flete y seguros hasta Puerto Limón, Costa Rica.'}</div>
                </div>
             </div>

             <div className="flex flex-col justify-center">
                <div className="p-10">
                   <h2 className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline/20 pb-4 mb-8">Auditoría Financiera Comercial</h2>
                   <ul className="space-y-6">
                      <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                        <span className="font-body text-sm text-on-surface">Ingreso Total HORECA Esperado</span>
                        <span className="font-headline font-bold text-xl">${(ingresosTotales/1000000).toFixed(1)} M</span>
                      </li>
                      <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                        <span className="font-body text-sm text-on-surface-variant">Costos de Flete y Seguro (Incoterm {incoterm})</span>
                        <span className="font-headline font-bold text-lg text-tomato">-${((costoFleteRefrigerado + seguroIncoterm)/1000000).toFixed(1)} M</span>
                      </li>
                   </ul>
                   <div className="pt-10 flex justify-between items-end mb-8">
                     <span className="font-label text-sm font-bold uppercase tracking-widest text-charcoal">EBITDA (Rentabilidad)</span>
                     <span className={`font-headline text-5xl font-bold tracking-tighter ${isRentable ? 'text-primary' : 'text-tomato'}`}>${(EBITDA/1000000).toFixed(1)} M</span>
                   </div>
                   <button disabled={!isRentable} onClick={() => setFase('tracking')} className={`w-full py-5 text-sm font-label uppercase tracking-widest font-bold transition-transform transform focus:scale-95 flex justify-center items-center gap-3 ${isRentable ? 'bg-primary text-white hover:bg-[#4a6347]' : 'bg-surface-dim text-on-surface-variant'}`}>{isRentable ? 'Simular Rutas Centroamericanas' : 'Bajo Nivel - No Rentable'}</button>
                </div>
             </div>
          </motion.div>
        )}

        {/* --- PANTALLA 3: MAPA LEAFLET NATIVO REAL --- */}
        {fase === 'tracking' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 w-full relative flex flex-col bg-charcoal">
             
             {/* Info Bar */}
             <div className="p-6 bg-surface shadow-md z-40 relative flex gap-8">
                <div><span className="block font-label text-[10px] uppercase font-bold text-on-surface-variant">Operación</span><span className="font-headline font-bold text-primary">{trackingPhaseStatus}</span></div>
                <div><span className="block font-label text-[10px] uppercase font-bold text-on-surface-variant">Transit Time</span><span className="font-headline font-bold text-charcoal">13 Días / Vía Marítima</span></div>
             </div>

             {/* Contenedor del Mapa Físico Inyectado */}
             <div id="real-map-container" className="flex-1 w-full bg-[#EAE5D9] relative z-0"></div>
             
             {/* Overlay de Completado superpuesto sutil */}
             <AnimatePresence>
                {trackingPhaseStatus === 'COMPLETADO' && (
                  <motion.div initial={{ opacity: 0, opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                     <div className="bg-surface p-12 shadow-2xl rounded-sm max-w-xl text-center border-t-8 border-primary">
                        <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-headline font-bold uppercase tracking-tight text-charcoal mb-4">Exportación Finalizada</h2>
                        <p className="text-on-surface-variant mb-8 text-sm">Los {volumen.toLocaleString()} kg de pasta desembarcaron intactos en suelo Centroamericano, y The Last Mile Logistics distribuyó en San José, Tamarindo y Guanacaste (Incoterm: {incoterm}).</p>
                        <button onClick={handleClose} className="px-8 py-3 bg-charcoal text-white font-label font-bold text-sm uppercase tracking-widest hover:bg-black">Finalizar Vista Completa</button>
                     </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
