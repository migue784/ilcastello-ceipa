import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, AlertTriangle, MonitorPlay, CheckCircle2 } from 'lucide-react';

export default function ExportSimulator({ isOpen, onClose }) {
  const [fase, setFase] = useState('offline'); // offline | booting | dashboard | tracking
  const [volumen, setVolumen] = useState(2000);
  const [incoterm, setIncoterm] = useState('CIF');
  const [trackingPhaseStatus, setTrackingPhaseStatus] = useState('INACTIVO');
  const [diasTranscurridos, setDiasTranscurridos] = useState(0);

  const mapRef = useRef(null);

  useEffect(() => {
    if (isOpen && fase === 'offline') {
      setFase('booting');
      setDiasTranscurridos(0);
    }
  }, [isOpen, fase]);

  useEffect(() => {
    if (fase === 'booting') {
      setTimeout(() => setFase('dashboard'), 1200);
    }
  }, [fase]);

  // LOGICA LEAFLET NATIVA
  useEffect(() => {
    if (fase === 'tracking') {
      setTrackingPhaseStatus('FASE 1: TRASLADO MEDELLÍN -> PUERTO CARTAGENA');

      let dias = 0;
      const daysInterval = setInterval(() => {
        dias += 0.05;
        if (dias <= 15) setDiasTranscurridos(dias);
      }, 50);

      if (!window.L) {
        console.error("Leaflet NO cargó desde el CDN"); return;
      }

      const L = window.L;
      if (mapRef.current) { mapRef.current.remove(); }

      const map = L.map('real-map-container', { zoomControl: false, scrollWheelZoom: false, dragging: false });
      mapRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO'
      }).addTo(map);

      // Iconos Personalizados en SVG puro
      // Cambiamos el bg a negro absoluto (bg-black) y borde oscuro para que contraste en cualquier mapa claro u oscuro
      const truckSVG = `<div class="bg-black text-white rounded-full p-2 border-[3px] border-white shadow-2xl flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14v10h1"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg></div>`;
      const shipSVG = `<div class="bg-primary text-white rounded-full p-3 border-[3px] border-white shadow-2xl flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 3.2-1.2 5.5-1.2 2.3 0 3 1.2 5.5 1.2 2.3 0 3-1.2 5.5-1.2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/></svg></div>`;
      const endPinSVG = `<div class="bg-tomato text-white rounded-full w-4 h-4 border-2 border-white shadow-lg mx-auto"></div>`;

      const iconCamion = L.divIcon({ className: 'bg-transparent', html: truckSVG, iconSize: [40, 40], iconAnchor: [20, 20] });
      const iconBarco = L.divIcon({ className: 'bg-transparent', html: shipSVG, iconSize: [50, 50], iconAnchor: [25, 25] });
      const iconPunto = L.divIcon({ className: 'bg-transparent', html: endPinSVG, iconSize: [16, 16], iconAnchor: [8, 8] });

      const TIERRA_COLOR = '#111827';
      const MAR_COLOR = '#384a35';

      // Utils de animación coords
      const animMarker = (marker, startPos, endPos, durationMs, onFinish) => {
        const startTime = performance.now();
        const animate = (currTime) => {
          const elapsed = currTime - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          const ease = progress < .5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
          marker.setLatLng([startPos[0] + (endPos[0] - startPos[0]) * ease, startPos[1] + (endPos[1] - startPos[1]) * ease]);

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

      // FASE 1 INIT: Ajustar encuadre para que se vean Medellín y Cartagena simultáneamente.
      map.fitBounds([medellin, cartagena], { padding: [100, 100] });

      L.marker(medellin, { icon: iconPunto }).addTo(map);
      const truck = L.marker(medellin, { icon: iconCamion }).addTo(map);
      L.polyline([medellin, cartagena], { color: TIERRA_COLOR, weight: 2, dashArray: '4,4', opacity: 0.5 }).addTo(map);

      // FASE 1: LENTA (5 Segundos)
      animMarker(truck, medellin, cartagena, 6000, () => {

        // FASE 2: BARCO (Zoom Out)
        setTrackingPhaseStatus('FASE 2: TRÁNSITO INTERNACIONAL AL CARIBE');
        truck.remove();
        L.marker(cartagena, { icon: iconPunto }).addTo(map);

        // Ajusta vista para ver Cartagena y Costa Rica
        map.flyToBounds([cartagena, ptoLimon], { duration: 2.5, padding: [60, 60] });

        const ship = L.marker(cartagena, { icon: iconBarco }).addTo(map);
        L.polyline([cartagena, ptoLimon], { color: MAR_COLOR, weight: 3, dashArray: '6,6', opacity: 0.7 }).addTo(map);

        setTimeout(() => {
          // Animar barco super lento cruzando el mar (9 segundos)
          animMarker(ship, cartagena, ptoLimon, 9000, () => {

            // FASE 3: DISTRIBUCIÓN NACIONAL
            setTrackingPhaseStatus('FASE 3: DISTRIBUCIÓN FINAL HORECA');
            map.flyToBounds([ptoLimon, guanacaste], { animate: true, duration: 2, padding: [40, 40] });

            setTimeout(() => {
              ship.remove();
              L.marker(ptoLimon, { icon: iconPunto }).addTo(map);

              const truck1 = L.marker(ptoLimon, { icon: iconCamion }).addTo(map);
              const truck2 = L.marker(ptoLimon, { icon: iconCamion }).addTo(map);
              const truck3 = L.marker(ptoLimon, { icon: iconCamion }).addTo(map);

              L.polyline([ptoLimon, sanJose], { color: TIERRA_COLOR, weight: 2, dashArray: '2,4', opacity: 0.3 }).addTo(map);
              L.polyline([ptoLimon, guanacaste], { color: TIERRA_COLOR, weight: 2, dashArray: '2,4', opacity: 0.3 }).addTo(map);

              animMarker(truck1, ptoLimon, sanJose, 3500);
              animMarker(truck2, ptoLimon, guanacaste, 4000);
              animMarker(truck3, ptoLimon, limonSur, 2500, () => {
                setTimeout(() => {
                  setTrackingPhaseStatus('COMPLETADO');
                  clearInterval(daysInterval);
                  setDiasTranscurridos(15);
                }, 1000);
              });
            }, 2000);
          });
        }, 1000);
      });

      return () => { clearInterval(daysInterval); }
    }
    return () => { if (mapRef.current && fase !== 'tracking') { mapRef.current.remove(); mapRef.current = null; } }
  }, [fase]);

  const handleClose = () => { setFase('offline'); onClose(); };

  // Físicas Financieras Reales basadas en DOFA Il Castello
  const ingresosTotales = volumen * 35000;
  const costoProduccionLocal = volumen * 11000;
  const costoAduaneroCO = 4500000;
  const costoFleteRefrigerado = incoterm === 'CIF' ? 12000000 + (volumen * 5500) : (volumen * 2000); // Refrigeracion Ransa y Marina
  const seguroIncoterm = incoterm === 'CIF' ? ingresosTotales * 0.02 : 0;
  const arancelCostaRica = incoterm === 'CIF' ? ingresosTotales * 0.14 : 0;
  const egresosTotales = costoProduccionLocal + costoAduaneroCO + costoFleteRefrigerado + arancelCostaRica + seguroIncoterm;
  const EBITDA = ingresosTotales - egresosTotales;
  const margenNeto = (EBITDA / ingresosTotales) * 100;
  const isRentable = EBITDA > 0;

  // Lógica de generación del PDF Dinámico
  const handleDownloadReport = () => {
    // Si jsPDF no ha cargado, usamos el fallback
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("La librería de PDFs está cargando, por favor reintenta en un segundo.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Colores corporativos
    const primaryColor = [56, 74, 53];    // #384a35
    const darkCharcoal = [17, 24, 39];    // #111827
    const redColor = [239, 68, 68];       // tomato / red-500

    // --- PORTADA Y HEADER ---
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 30, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("IL CASTELLO", 14, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Master Plan Logístico y Financiero - HORECA Centroamérica", 65, 20);

    // Metadata técnica
    doc.setTextColor(...darkCharcoal);
    doc.setFontSize(10);
    const today = new Date();
    doc.text(`Fecha de Simulación: ${today.toLocaleDateString()}`, 14, 40);
    doc.text(`ID de Auditoría: EXP-${Math.floor(Math.random() * 90000) + 10000}-CRC`, 14, 46);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("1. PARÁMETROS DE EXPORTACIÓN TÉRMICA", 14, 60);

    // Draw Line
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(14, 62, 196, 62);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const params = [
      `Mercado Destino: Puertos CRC y Zonas de Hotelería Interior (San José, Tamarindo).`,
      `Volumen Bruto Despachado: ${volumen.toLocaleString()} KG.`,
      `Incoterm pactado: ${incoterm} (Asignación de responsabilidad B2B).`,
      `Tiempo de Tránsito Marítimo Estimado: 13 Días.`,
      `Cadena de Ultracongelación Mantenida: -20°C mediante contenedores Reefer.`,
      `Porcentaje de Mermas Termodinámicas: 0.0% (Viabilidad Táctica de Calidad).`
    ];
    params.forEach((line, i) => doc.text(`• ${line}`, 14, 70 + (i * 6)));

    // --- SECCIÓN FINANCIERA (TABLAS) ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("2. AUDITORÍA FINANCIERA: COSTOS VS RENDIMIENTOS", 14, 115);
    doc.line(14, 117, 196, 117);

    // AutoTable Datos
    const tableData = [
      ["Ingreso Total Proyectado (Ventas B2B)",
        "",
        `$ ${(ingresosTotales / 1000000).toFixed(1)} M COP`],

      ["Costos Operativos de Producción (IL Castello Locales)",
        `-$ ${(costoProduccionLocal / 1000000).toFixed(1)} M`,
        ""],

      ["Gastos Aduaneros Nacionales (DIAN / Soc. Portuaria)",
        `-$ ${(costoAduaneroCO / 1000000).toFixed(1)} M`,
        ""],

      [`Flete Reefer Internacional Oceánico (-20°C)`,
        `-$ ${(costoFleteRefrigerado / 1000000).toFixed(1)} M`,
        ""],

      [`Seguro Internacional de Mercancía (${incoterm})`,
      `-$ ${(seguroIncoterm / 1000000).toFixed(1)} M`,
        ""],

      [`Aranceles de Nacionalización CRC (${incoterm})`,
      `-$ ${(arancelCostaRica / 1000000).toFixed(1)} M`,
        ""]
    ];

    if (window.jspdf && window.jspdf.jsPDF && doc.autoTable) {
      doc.autoTable({
        startY: 125,
        head: [['Concepto Contable', 'Egresos (Gastos)', 'Ingresos (Retorno)']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: primaryColor, textColor: 255 },
        columnStyles: {
          0: { cellWidth: 100 },
          1: { cellWidth: 40, textColor: redColor, halign: 'right' },
          2: { cellWidth: 40, halign: 'right', fontStyle: 'bold' }
        }
      });
    }

    // --- RESULTADOS Y GRÁFICO EBITDA ---
    let finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 15 : 200;

    // Si la tabla no funcionó, seteamos manual
    if (!doc.lastAutoTable) finalY = 190;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(isRentable ? primaryColor[0] : redColor[0], isRentable ? primaryColor[1] : redColor[1], isRentable ? primaryColor[2] : redColor[2]);
    doc.text(`RESULTADO EBITDA: $ ${(EBITDA / 1000000).toFixed(1)} M COP`, 14, finalY);

    doc.setFontSize(12);
    doc.text(`MARGEN OPERATIVO: ${margenNeto.toFixed(1)}%`, 14, finalY + 8);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...darkCharcoal);
    doc.setFontSize(10);
    const conclMessage = isRentable
      ? `CONCLUSIÓN: Bajo las condiciones actuales de negociación mediante el Incoterm ${incoterm},\nla exportación de ${volumen.toLocaleString()} KG logra romper exitosamente la barrera de costos fijos internacionales.\nSe consolida como modelo altamente rentable para el proyecto corporativo (TOWS).`
      : `ALERTA CRÍTICA TÁCTICA: Bajo el Incoterm ${incoterm}, la exportación de tan solo ${volumen.toLocaleString()} KG\nes arruinada por los costos inamovibles del flete naviero (-20°C). Se exige ampliar sustancialmente el aforo.`;

    const splitMsg = doc.splitTextToSize(conclMessage, 180);
    doc.text(splitMsg, 14, finalY + 20);

    // Simulación de barra tipo GANTT/Progreso al fondo del documento
    doc.setDrawColor(200, 200, 200);
    doc.rect(14, finalY + 35, 180, 8); // Barra vacía Gris

    // Si hay rentabilidad llenar parte de la barra verde
    if (isRentable) {
      doc.setFillColor(...primaryColor);
      // Margen como porcentaje del ancho de barra (hasta un 100%)
      let fillWidth = Math.min((margenNeto / 100) * 180, 180);
      // Asegurar min bar
      if (fillWidth < 5) fillWidth = 5;
      doc.rect(14, finalY + 35, fillWidth, 8, 'F');
    } else {
      // Perdiendo plata, se llena de rojo un poquito para denotar alerta
      doc.setFillColor(...redColor);
      doc.rect(14, finalY + 35, 20, 8, 'F');
    }

    doc.setFontSize(8);
    doc.text("REPRESENTACIÓN DE RIESGO DE INVERSIÓN (VERDE: VIABLE | GRIS: RIESGO | ROJO: PÉRDIDA)", 14, finalY + 47);

    // Firmas
    doc.text("Firmado Computacionalmente por Sistema HORECA - La Última Milla", 14, 280);

    doc.save(`IlCastello_Export_Analysis_${incoterm}.pdf`);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-[100] bg-surface text-on-surface font-body overflow-y-auto overflow-x-hidden flex flex-col"
      >
        <div className="w-full h-20 flex items-center justify-between border-b border-outline/20 px-6 py-4 bg-surface/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="font-headline font-bold text-2xl tracking-tight text-on-surface uppercase whitespace-nowrap">Estudio Logístico</span>
            <span className="hidden md:ml-4 md:flex text-xs uppercase tracking-widest text-on-surface-variant font-bold border-l border-outline/30 pl-4 py-1">
              Simulador de Expansión Centroamérica
            </span>
          </div>

          <button onClick={handleClose} className="p-2 hover:bg-black/5 text-charcoal rounded-full font-label font-bold text-sm uppercase">X Cerrar Simulación</button>
        </div>

        {fase === 'dashboard' && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 p-6 md:p-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10 border-r border-outline/20 pr-0 md:pr-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight text-on-surface mb-2">Exportación a<br /><span className="text-primary text-6xl">Costa Rica</span></h1>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-4">
                  Dimensionamiento táctico HORECA. Mueve el control de arrastre para simular el impacto en los fijos logísticos de la ultracongelación.
                </p>
                <div className="bg-surface-dim p-4 border-l-4 border-primary text-sm text-on-surface">
                  Según el análisis <strong>TOWS</strong> de la pasta Il Castello, requerimos alcanzar un umbral mínimo de exportación internacional para diluir el alto consto dependiente del transporte refrigerado.
                </div>
              </div>

              {/* Input de Kilos */}
              <div className="bg-surface-container-highest p-8 rounded-xl shadow-sm border border-outline/10">
                <div className="flex justify-between items-end pb-4 mb-6 border-b border-outline/10">
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Volumen Capacidad (KG)</span>
                  <span className="text-4xl font-headline font-bold text-on-surface">{volumen.toLocaleString()} <span className="text-base text-primary">kg/mes</span></span>
                </div>
                <input type="range" min="500" max="8000" step="100" value={volumen} onChange={(e) => setVolumen(Number(e.target.value))} className="w-full h-2 rounded-full outline-none accent-primary appearance-none bg-surface-dim cursor-ew-resize" />
              </div>

              <div className="bg-surface-container-highest p-8 rounded-xl shadow-sm border border-outline/10">
                <div className="mb-6 border-b border-outline/10 pb-4">
                  <span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block font-bold">Incoterms</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setIncoterm('FOB')}
                    className={`py-4 shadow-sm font-label text-sm uppercase font-bold transition-all ${incoterm === 'FOB' ? 'bg-primary text-white rounded-sm border-2 border-primary' : 'bg-surface border border-outline/30 text-on-surface-variant hover:border-primary'}`}
                  >
                    FOB
                  </button>
                  <button
                    onClick={() => setIncoterm('CIF')}
                    className={`py-4 shadow-sm font-label text-sm uppercase font-bold transition-all ${incoterm === 'CIF' ? 'bg-primary text-white rounded-sm border-2 border-primary' : 'bg-surface border border-outline/30 text-on-surface-variant hover:border-primary'}`}
                  >
                    CIF
                  </button>
                </div>
                <div className="mt-6 p-4 bg-white/50 border border-outline/10 text-xs text-on-surface-variant leading-relaxed">
                  {incoterm === 'FOB' ? 'FOB (Free On Board): Minimiza la carga de gastos porque Il Castello solo asume la logística desde Medellín hasta que el contenedor sube al barco en Cartagena. Reduce costo de flete.' : 'CIF (Cost, Insurance & Freight): La jugada maestra B2B. Proveemos el contenedor refrigerado hasta el puerto de Moín en Limón, Costa Rica, absorbiendo altos costos fijos pero controlando la cadena física de temperatura a -20°C.'}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-10 bg-surface-container/30 rounded-xl">
                <h2 className="font-label font-bold text-xs uppercase tracking-widest text-charcoal border-b border-charcoal/20 pb-4 mb-8">Auditoría Financiera Comercial Acumulada</h2>

                <ul className="space-y-6">
                  <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                    <span className="font-body text-sm text-on-surface">Proyección de Ingreso B2B (Mdo. Caribe)</span>
                    <span className="font-headline font-bold text-xl">${(ingresosTotales / 1000000).toFixed(1)} M</span>
                  </li>
                  <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                    <span className="font-body text-sm text-on-surface-variant font-light">Costos de Producción Local (Trigo y Huevo)</span>
                    <span className="font-headline font-bold text-lg text-on-surface-variant">-${(costoProduccionLocal / 1000000).toFixed(1)} M</span>
                  </li>
                  <li className="flex justify-between items-end border-b border-outline/10 pb-2 mt-4 pt-4 relative">
                    <div className="absolute inset-0 bg-tomato/5 -mx-4 -my-2 pointer-events-none rounded-md"></div>
                    <span className="font-body text-sm text-tomato font-bold relative z-10">Flete Marítimo Reef (-20°C) + Seguros</span>
                    <span className="font-headline font-bold text-lg text-tomato relative z-10">-${((costoFleteRefrigerado + seguroIncoterm) / 1000000).toFixed(1)} M</span>
                  </li>

                  {incoterm === 'CIF' && (
                    <li className="flex justify-between items-end border-b border-outline/10 pb-2">
                      <span className="font-body text-sm text-tomato font-bold">Aranceles Aduana Costa Rica</span>
                      <span className="font-headline text-lg text-tomato font-bold">-${(arancelCostaRica / 1000000).toFixed(1)} M</span>
                    </li>
                  )}
                </ul>

                <div className="pt-12 flex justify-between items-end mb-8 relative">
                  <span className="font-label text-sm font-bold uppercase tracking-widest text-charcoal">EBITDA <br /><span className="text-[10px] text-on-surface-variant font-normal">Ganancia Operativa Neta</span></span>
                  <div className="text-right">
                    <span className={`block font-headline text-5xl font-bold tracking-tighter ${isRentable ? 'text-primary' : 'text-tomato'}`}>${(EBITDA / 1000000).toFixed(1)} M</span>
                    <span className={`text-sm font-bold ${isRentable ? 'text-primary' : 'text-tomato'}`}>{margenNeto.toFixed(1)}% Margen Operativo</span>
                  </div>
                </div>
                <button disabled={!isRentable} onClick={() => setFase('tracking')} className={`w-full py-5 text-sm font-label uppercase tracking-widest font-bold transition-transform shadow-lg transform focus:scale-95 flex justify-center items-center gap-3 ${isRentable ? 'bg-primary text-white hover:bg-[#4a6347]' : 'bg-surface-dim text-on-surface-variant'}`}>{isRentable ? 'Confirmar Expansión y Rastrear' : 'Proyección No Rentable - Corrija Volumen'}</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- PANTALLA 3: MAPA CINEMÁTICO LEAFLET --- */}
        {fase === 'tracking' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 w-full relative flex flex-col bg-charcoal">

            {/* Info Bar Táctica (Modificada con Contador Días) */}
            <div className="p-6 bg-surface shadow-lg z-40 relative flex gap-8 items-center border-b-[4px] border-primary justify-between">
              <div className="flex gap-8">
                <div><span className="block font-label text-[10px] uppercase font-bold text-on-surface-variant">Estado Operativo de Carga</span><span className="font-headline font-bold text-primary">{trackingPhaseStatus}</span></div>
                <div><span className="block font-label text-[10px] uppercase font-bold text-on-surface-variant">Modalidad Exportación</span><span className="font-headline font-bold text-charcoal">{incoterm} B2B</span></div>
              </div>

              {/* HUD Reloj Viaje */}
              <div className="bg-surface-container px-6 py-2 rounded-sm border border-outline/20">
                <span className="block font-label text-[10px] uppercase font-bold text-on-surface-variant text-center">Tiempo Logístico</span>
                <span className="font-headline font-bold text-2xl text-charcoal">Día {Math.floor(diasTranscurridos)} <span className="text-sm font-light text-on-surface-variant tracking-wider">/ 15</span></span>
              </div>
            </div>

            {/* Contenedor del Mapa Físico Inyectado */}
            <div id="real-map-container" className="flex-1 w-full bg-[#EAE5D9] relative z-0"></div>

            {/* Overlay de Completado - Resumen Ejecutivo Mejorado */}
            <AnimatePresence>
              {trackingPhaseStatus === 'COMPLETADO' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                  <div className="bg-surface p-12 shadow-2xl rounded-xl max-w-3xl w-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-3 bg-primary"></div>

                    <div className="flex items-center gap-4 mb-8 border-b border-outline/10 pb-6 w-full mt-4">
                      <CheckCircle2 size={40} className="text-primary flex-shrink-0" />
                      <div>
                        <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-charcoal mb-0">Ruta Internacional Exitosa</h2>
                        <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest font-bold">Llegada Confirmada: Centrales Hoteleras B2B Costa Rica</p>
                      </div>
                    </div>

                    <ul className="text-sm text-charcoal space-y-4 mb-8 font-body leading-relaxed divide-y divide-outline/10">
                      <li className="py-2 flex justify-between">
                        <span className="text-on-surface-variant">Volumen Entregado Intacto:</span>
                        <span className="font-bold text-xl">{volumen.toLocaleString()} KG Raviolis</span>
                      </li>
                      <li className="py-2 flex justify-between">
                        <span className="text-on-surface-variant">Eficacia Cadena Frío (-20°C):</span>
                        <span className="font-bold text-primary font-headline text-lg">100% SIN MERMAS TÉRMICAS</span>
                      </li>
                      <li className="py-2 flex justify-between">
                        <span className="text-on-surface-variant">Capital Adquirido Bruto:</span>
                        <span className="font-bold text-on-surface">${(ingresosTotales / 1000000).toFixed(1)} Millones COP</span>
                      </li>
                      <li className="py-2 flex justify-between bg-surface-dim -mx-6 px-6 relative mt-4">
                        <span className="text-charcoal font-bold mt-2 uppercase text-xs tracking-widest">EBITDA Total (Líquida):</span>
                        <span className="font-bold text-primary text-3xl font-headline mt-1">${(EBITDA / 1000000).toFixed(1)} Millones COP</span>
                      </li>
                    </ul>

                    <button onClick={handleDownloadReport} className="w-full px-8 py-5 bg-primary text-white font-label font-bold text-sm uppercase tracking-widest hover:bg-[#384a35] transition-colors rounded-sm shadow-md flex items-center justify-center gap-2">
                      <Terminal size={18} /> Descargar Manifiesto y Salir
                    </button>
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
