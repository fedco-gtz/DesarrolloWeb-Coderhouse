timeLeft();

function timeLeft() {
    var now = new Date(); //Se puede probar el JS manual cargando una fecha y horario de la siguiente manera '2024-01-13 17:59:00'
    var dayWeek = now.getDay(); 
    var hours = now.getHours(); 

    if (dayWeek === 6 && hours < 15) {
        document.getElementById("countdown").innerText = "Hoje é a reunião";
    }

    else if (dayWeek === 6 && hours >= 15 && hours < 18) {
        document.getElementById("countdown").innerText = "Aproxime-se do Parque Ibirapuera (São Paulo) ¡esperamos por você!";
    }

    else if (dayWeek === 6 && hours >= 18) {
        document.getElementById("countdown").innerText = "Falta uma semana para a próxima reunião";
    }

    else {
        var remainingDays = 6 - dayWeek;
        if (remainingDays === 0) {
            document.getElementById("countdown").innerText = "Amanhã é o encontro, ¡esperamos por você!";
        } else {
            document.getElementById("countdown").innerText = "Restam " + remainingDays + " dias para a reunião";
        }
    }
}