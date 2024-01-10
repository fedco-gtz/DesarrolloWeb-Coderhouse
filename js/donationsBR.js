const ultimaDonacionElement = document.getElementById('ultimaDonacion');
const totalDonacionesElement = document.getElementById('totalDonaciones');
const fechaElement = document.getElementById('fecha');
const horaElement = document.getElementById('hora');
const mesElement = document.getElementById('mes');

const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function mostrarFecha() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('pt-BR', opcionesFecha);
    const mes = ahora.toLocaleDateString('pt-BR', { month: 'long' });
    fechaElement.textContent = `DINHEIRO RECEBIDO DE DOAÇÕES HOJE (${fecha})`;
    mesElement.textContent = `Total de doações em ${mes}`;
}

function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString('pt-BR');
    horaElement.textContent = `Última atualização feita às: ${hora}`;
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
