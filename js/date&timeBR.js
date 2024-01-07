document.addEventListener('DOMContentLoaded', function() {
  mostrarHoraFecha();
  setInterval(mostrarHoraFecha, 1000);
});

function mostrarHoraFecha() {
  var lugarHoraFecha = document.getElementById('timeDate');
  var fechaHora = new Date();
  
  var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  
  var fechaActual = fechaHora.toLocaleDateString('pt-BR', opcionesFecha); 
  var horaActual = fechaHora.toLocaleTimeString('pt-BR', opcionesHora); 
  
  lugarHoraFecha.innerHTML = fechaActual + ' - ' + horaActual;
}
