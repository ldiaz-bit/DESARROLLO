// ValidarCorreo.js
function validarFormulario() {
    var email = document.getElementById("email").value.trim();
    var emailError = document.getElementById("emailError");

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Por favor, ingrese un correo electrónico válido.";
        return false;
    } else {
        emailError.innerHTML = "";
        // Puedes agregar más validaciones aquí según sea necesario
        // Si todas las validaciones pasan, el formulario se enviará
        alert("Formulario enviado exitosamente!");
        return true;
    }
}
