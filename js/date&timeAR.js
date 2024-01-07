document.addEventListener('DOMContentLoaded', function() {
    mostrarHoraFecha();
    setInterval(mostrarHoraFecha, 1000);
  });
  
  function mostrarHoraFecha() {
    var lugarHoraFecha = document.getElementById('timeDate');
    var fechaHora = new Date();
    var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  
    var fechaActual = fechaHora.toLocaleDateString('es-AR', opcionesFecha);
    var horaActual = fechaHora.toLocaleTimeString('es-AR', opcionesHora);
  
    lugarHoraFecha.innerHTML = fechaActual + ' - ' + horaActual;
  }