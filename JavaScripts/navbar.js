// Asociar la función de validación al evento de clic en el botón de enviar
document.querySelector("button.buttonMenuToggle")
    .addEventListener("click", function() {
           document.querySelector(".navLinks").
                      classList.toggle("navLinksResponsive")})