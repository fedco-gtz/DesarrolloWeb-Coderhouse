var timeoutID;

function mostrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    timeoutID = setTimeout(cerrarPopup, 4000);
}

function cambiarIdioma(idioma) {
    clearTimeout(timeoutID); 
    var ruta;
    if (idioma === 'espanol') {
        ruta = '../index.html';
    } else if (idioma === 'ingles') {
        ruta = '../pages/english/indexenglish.html';
    } else if (idioma === 'portugues') {
        ruta = '../pages/portuguese/indexportuguese.html';
    }

    window.location.href = ruta;
}

function cerrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
