/**
 * RNT - Sistema de Rastreo
 * Consulta el estado de guías en el sistema de RNT
 * CP4 - MVP
 */

window.RNT_Rastreo = {
  /**
   * URL del sistema de rastreo de RNT
   */
  URL_BASE: 'https://mail.rednacionaldetransportes.com/rastreo/lista_rastreo.php',

  /**
   * Buscar una guía en el sistema de rastreo
   * @param {string} numeroGuia - Número de guía a consultar
   * @returns {boolean} - true si se abrió nueva ventana
   */
  buscar: function(numeroGuia) {
    // Limpiar espacios
    numeroGuia = (numeroGuia || '').trim();
    
    // Validar que tenga contenido
    if (!numeroGuia) {
      alert('Por favor ingresa el número de guía');
      return false;
    }

    // Validar formato básico (números y guiones)
    if (!/^[0-9\-]+$/.test(numeroGuia)) {
      alert('El número de guía solo puede contener números y guiones');
      return false;
    }

    // Construir URL con parámetro de guía
    const url = `${this.URL_BASE}?guia=${encodeURIComponent(numeroGuia)}`;
    
    // Abrir en nueva ventana
    window.open(url, '_blank', 'width=1000,height=700');
    
    return true;
  },

  /**
   * Inicializar el formulario de rastreo en el DOM
   */
  init: function() {
    const form = document.getElementById('rntRastreoForm');
    if (!form) return;

    const input = document.getElementById('rntGuia');
    const btn = document.getElementById('rntRastrearBtn');

    if (!input || !btn) return;

    // Manejar envío del formulario
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.buscar(input.value);
    });

    // También al hacer clic en el botón
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.buscar(input.value);
    });

    // Enter en el input
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.buscar(input.value);
      }
    });
  }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.RNT_Rastreo.init();
  });
} else {
  window.RNT_Rastreo.init();
}
