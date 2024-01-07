timeLeft();

function timeLeft() {
    var now = new Date(); //Se puede probar el JS manual cargando una fecha y horario de la siguiente manera '2024-01-13 17:59:00'
    var dayWeek = now.getDay(); 
    var hours = now.getHours(); 

    if (dayWeek === 6 && hours < 15) {
        document.getElementById("countdown").innerText = "Today is the meeting";
    }

    else if (dayWeek === 6 && hours >= 15 && hours < 18) {
        document.getElementById("countdown").innerText = "Come to Marcus Garvey Park (New York). We are waiting for you!";
    }

    else if (dayWeek === 6 && hours >= 18) {
        document.getElementById("countdown").innerText = "One week left until the next event";
    }

    else {
        var remainingDays = 6 - dayWeek;
        if (remainingDays === 0) {
            document.getElementById("countdown").innerText = "Tomorrow is the meeting. We are waiting for you!";
        } else {
            document.getElementById("countdown").innerText = "There are " + remainingDays + " days left until the meeting";
        }
    }
}
