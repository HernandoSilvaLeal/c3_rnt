// =============================================
// COTIZADOR RNT — Motor de Cálculo
// Lógica validada con Fabián (RNT) en ago 2025
// =============================================
(function () {
  'use strict';

  window.RNT_Cotizador = {

    // ── FUNCIÓN PRINCIPAL ──────────────────────────────────
    calcular: function (p) {
      const T = window.RNT_TARIFARIO;
      if (!T) return { error: 'Tarifario no disponible. Recarga la página.' };

      // Validar campos
      if (!p.unidades || p.unidades < 1)   return { error: 'Ingresa el número de unidades.' };
      if (!p.peso || p.peso <= 0)           return { error: 'Ingresa el peso por unidad.' };
      if (!p.largo || p.largo <= 0)         return { error: 'Ingresa el largo en cm.' };
      if (!p.ancho || p.ancho <= 0)         return { error: 'Ingresa el ancho en cm.' };
      if (!p.alto || p.alto <= 0)           return { error: 'Ingresa el alto en cm.' };
      if (!p.valor || p.valor <= 0)         return { error: 'Ingresa el valor de la mercancía.' };
      if (!p.origenId)                      return { error: 'Selecciona la ciudad de origen.' };
      if (!p.destino || !p.destino.trim())  return { error: 'Ingresa la ciudad de destino.' };

      // Resolver destino (homologadas → capital)
      const nombreDestino = p.destino.trim();
      const destinoReal   = T.homologadas[nombreDestino] || nombreDestino;
      const destinoData   = T.destinos[destinoReal];
      if (!destinoData) {
        return {
          error: `Ciudad "${nombreDestino}" no encontrada. Verifica el nombre o consulta por WhatsApp.`
        };
      }

      // Resolver origen
      const origenObj = T.origenes.find(o => o.id === p.origenId);
      if (!origenObj) return { error: 'Origen no válido.' };
      const tarifaKg = destinoData.tarifas[origenObj.col];
      if (!tarifaKg || tarifaKg === 0) {
        return { error: 'Ruta sin tarifa disponible. Consulta por WhatsApp.' };
      }

      // Cálculos
      const pesoVol    = (p.largo * p.ancho * p.alto) / 2500;
      const pesoUnd    = Math.max(p.peso, pesoVol, 30);
      const pesoTotal  = pesoUnd * p.unidades;
      const fleteBase  = pesoTotal * tarifaKg;
      const fleteMarkup = fleteBase * 1.10;
      const fleteMin   = T.minimos.nacional * p.unidades;
      const fleteFinal = Math.max(fleteMarkup, fleteMin);
      const seguro     = Math.max(p.valor * 0.01, 5500);
      const total      = fleteFinal + seguro;

      const nota = pesoVol > p.peso
        ? `Peso volumétrico (${pesoVol.toFixed(1)} kg) mayor al real — se cobra por volumen`
        : pesoUnd === 30 && p.peso < 30
          ? `Peso real (${p.peso} kg) menor a 30 kg — se aplica mínimo de 30 kg por unidad`
          : `Se cobra por peso real (${p.peso} kg/und)`;

      return {
        ok: true,
        // Entrada
        unidades: p.unidades,
        pesoReal: p.peso,
        pesoVol: +pesoVol.toFixed(2),
        pesoUnd: +pesoUnd.toFixed(2),
        pesoTotal: +pesoTotal.toFixed(2),
        // Ruta
        origenLabel: origenObj.label,
        destinoInput: nombreDestino,
        destinoReal,
        depto: destinoData.depto,
        // Cálculo
        tarifaKg,
        fleteBase: Math.round(fleteBase),
        fleteMarkup: Math.round(fleteMarkup),
        fleteMin,
        fleteFinal: Math.round(fleteFinal),
        seguro: Math.round(seguro),
        total: Math.round(total),
        nota
      };
    },

    // ── FORMATEO COP ──────────────────────────────────────
    fmt: function (n) {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
      }).format(n);
    },

    // ── INIT FORMULARIO ──────────────────────────────────
    init: function () {
      const T = window.RNT_TARIFARIO;
      if (!T || !document.getElementById('rntForm')) return;

      // Llenar select de orígenes
      const selOrigen = document.getElementById('rntOrigen');
      if (selOrigen) {
        T.origenes.forEach(o => {
          const opt = document.createElement('option');
          opt.value = o.id;
          opt.textContent = o.label;
          selOrigen.appendChild(opt);
        });
      }

      // Llenar datalist de destinos (ciudades + homologadas)
      const dl = document.getElementById('rntDestinosList');
      if (dl) {
        const ciudades = [
          ...Object.keys(T.destinos),
          ...Object.keys(T.homologadas)
        ].sort();
        ciudades.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c;
          dl.appendChild(opt);
        });
      }

      // Submit
      document.getElementById('rntForm').addEventListener('submit', e => {
        e.preventDefault();
        RNT_Cotizador.ejecutar();
      });

      // Feedback en tiempo real
      ['rntUnidades','rntPeso','rntLargo','rntAncho','rntAlto'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', RNT_Cotizador.actualizarInfo);
      });
    },

    // ── FEEDBACK TIEMPO REAL ─────────────────────────────
    actualizarInfo: function () {
      const unidades = parseInt(document.getElementById('rntUnidades')?.value) || 1;
      const peso = parseFloat(document.getElementById('rntPeso')?.value) || 0;
      const largo = parseFloat(document.getElementById('rntLargo')?.value) || 0;
      const ancho = parseFloat(document.getElementById('rntAncho')?.value) || 0;
      const alto = parseFloat(document.getElementById('rntAlto')?.value) || 0;

      const infoEl = document.getElementById('rntPesoInfo');
      if (!infoEl || peso === 0 || largo === 0 || ancho === 0 || alto === 0) return;

      const pesoVol = (largo * ancho * alto) / 2500;
      const pesoFact = Math.max(peso, pesoVol, 30);
      const usandoVol = pesoVol > peso;
      const usandoMin = pesoFact === 30 && peso < 30;

      infoEl.innerHTML = `
        <small class="text-muted">
          📦 Vol. calculado: <strong>${pesoVol.toFixed(1)} kg</strong> | 
          Peso real: <strong>${peso} kg</strong> | 
          <span class="text-primary">Peso facturable por und: <strong>${pesoFact.toFixed(1)} kg</strong></span>
          ${usandoVol ? ' ⚠️ Se cobra por volumen' : ''}
          ${usandoMin ? ' ⚠️ Se aplica mínimo 30 kg' : ''}
        </small>`;
    },

    // ── EJECUTAR COTIZACIÓN ──────────────────────────────
    ejecutar: function () {
      const params = {
        unidades: parseInt(document.getElementById('rntUnidades')?.value) || 1,
        peso: parseFloat(document.getElementById('rntPeso')?.value) || 0,
        largo: parseFloat(document.getElementById('rntLargo')?.value) || 0,
        ancho: parseFloat(document.getElementById('rntAncho')?.value) || 0,
        alto: parseFloat(document.getElementById('rntAlto')?.value) || 0,
        valor: parseFloat(document.getElementById('rntValor')?.value?.replace(/\D/g,'')) || 0,
        origenId: document.getElementById('rntOrigen')?.value,
        destino: document.getElementById('rntDestino')?.value?.trim()
      };

      const resultado = RNT_Cotizador.calcular(params);
      RNT_Cotizador.mostrarResultado(resultado);
    },

    // ── MOSTRAR RESULTADO ────────────────────────────────
    mostrarResultado: function (res) {
      const contenedor = document.getElementById('rntResultado');
      if (!contenedor) return;

      if (res.error) {
        contenedor.innerHTML = `<div class="alert alert-warning"><i class="bi bi-exclamation-triangle"></i> ${res.error}</div>`;
        contenedor.style.display = 'block';
        return;
      }

      const fmt = RNT_Cotizador.fmt;
      contenedor.innerHTML = `
        <div class="cotizacion-resultado">
          <h5 class="resultado-titulo">
            <i class="bi bi-calculator"></i> Cotización Estimada
          </h5>
          <div class="resultado-ruta">
            <strong>${res.origenLabel}</strong> → <strong>${res.destinoInput}</strong>
            <span class="badge bg-secondary ms-2">${res.depto}</span>
          </div>
          <div class="resultado-desglose">
            <div class="desglose-item">
              <span>Peso facturable (${res.unidades} ud × ${res.pesoUnd} kg)</span>
              <span>${res.pesoTotal} kg</span>
            </div>
            <div class="desglose-item">
              <span>Tarifa por kg (${res.origenLabel} → ${res.destinoReal})</span>
              <span>${fmt(res.tarifaKg)}</span>
            </div>
            <div class="desglose-item">
              <span>Flete (incluye margen de negociación)</span>
              <span>${fmt(res.fleteFinal)}</span>
            </div>
            <div class="desglose-item">
              <span>Seguro / Costo de manejo (1% valor declarado, mín. $5.500)</span>
              <span>${fmt(res.seguro)}</span>
            </div>
            <div class="desglose-total">
              <span>TOTAL ESTIMADO</span>
              <span>${fmt(res.total)}</span>
            </div>
          </div>
          <p class="resultado-nota"><small>⚠️ ${res.nota}. Esta cotización es un estimado. El valor final puede variar según condiciones de empaque y verificación en punto de entrega. Tarifas vigentes 2024-2025.</small></p>
          <div class="resultado-cta">
            <a href="https://wa.me/573124376616?text=Hola%2C%20quiero%20confirmar%20una%20cotización%20de%20${encodeURIComponent(res.origenLabel)}%20a%20${encodeURIComponent(res.destinoInput)}%20por%20${fmt(res.total)}" 
               class="btn btn-success" target="_blank">
              <i class="bi bi-whatsapp"></i> Confirmar por WhatsApp
            </a>
            <a href="contact.html" class="btn btn-outline-primary ms-2">
              <i class="bi bi-envelope"></i> Solicitar recogida
            </a>
          </div>
        </div>`;
      contenedor.style.display = 'block';
      contenedor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

  };

  // Auto-inicializar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('rntForm')) {
      RNT_Cotizador.init();
    }
  });

})();
