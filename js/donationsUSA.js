const ultimaDonacionElement = document.getElementById('ultimaDonacion');
const totalDonacionesElement = document.getElementById('totalDonaciones');
const fechaElement = document.getElementById('fecha');
const horaElement = document.getElementById('hora');
const mesElement = document.getElementById('mes');

const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function mostrarFecha() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('en-US', opcionesFecha);
    const mes = ahora.toLocaleDateString('en-US', { month: 'long' });
    fechaElement.textContent = `MONEY RECEIVED FROM DONATIONS TODAY (${fecha})`;
    mesElement.textContent = `Total donations in ${mes}`;
}

function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString('en-US');
    horaElement.textContent = `Last update made at: ${hora}`;
}

function actualizarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const numeroActual = parseInt(localStorage.getItem('numeroActual')) || 0;
    const numeroTotal = parseInt(localStorage.getItem('numeroTotal')) || 0;

    const nuevoNumero = numeroActual + numeroAleatorio;
    localStorage.setItem('numeroActual', nuevoNumero);
    localStorage.setItem('numeroTotal', numeroTotal + numeroAleatorio);

    ultimaDonacionElement.textContent = numeroAleatorio;
    totalDonacionesElement.textContent = numeroTotal;
    mostrarFecha();
    mostrarHora();
}

function reiniciarNumero() {
    const ahora = new Date();
    if (ahora.getHours() === 0 && ahora.getMinutes() === 0 && ahora.getSeconds() === 0) {
        localStorage.setItem('numeroActual', '0');
    }
}

actualizarNumero();
setInterval(actualizarNumero, 1 * 60 * 1000);

reiniciarNumero();
setInterval(reiniciarNumero, 1000);
