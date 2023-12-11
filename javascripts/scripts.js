// Asociar la función de validación al evento de clic en el botón de enviar
submitButton.addEventListener('click', validarFormulario);

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".navLinks").
                      classList.toggle("navLinksResponsive")})