function validarForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }
    return true;
  }


  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validación básica de campos vacíos
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // Validación de formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido");
        return false;
    }

    // Puedes agregar más validaciones según tus requisitos

    return true; // Envía el formulario si pasa todas las validaciones
}