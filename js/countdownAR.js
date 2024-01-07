timeLeft();

function timeLeft() {
    var now = new Date(); //Se puede probar el JS manual cargando una fecha y horario de la siguiente manera '2024-01-13 17:59:00'
    var dayWeek = now.getDay(); 
    var hours = now.getHours(); 

    if (dayWeek === 6 && hours < 15) {
        document.getElementById("countdown").innerText = "Hoy es el encuentro";
    }

    else if (dayWeek === 6 && hours >= 15 && hours < 18) {
        document.getElementById("countdown").innerText = "Acercate a Plaza Tte. Gral. Emilio Mitre (CABA) ¡Te esperamos!";
    }

    else if (dayWeek === 6 && hours >= 18) {
        document.getElementById("countdown").innerText = "Falta una semana para el próximo encuentro";
    }

    else {
        var remainingDays = 6 - dayWeek;
        if (remainingDays === 0) {
            document.getElementById("countdown").innerText = "Mañana es el encuentro ¡Te esperamos!";
        } else {
            document.getElementById("countdown").innerText = "Faltan " + remainingDays + " días para el encuentro";
        }
    }
}
