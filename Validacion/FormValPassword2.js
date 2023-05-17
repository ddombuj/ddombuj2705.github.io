document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

function verificar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var p1 = document.getElementById("contrasena1").value;
    var p2 = document.getElementById("contrasena2").value;
    var terminos = document.getElementById("terminos");

    // Campos vacios
    if (nombre === '' || apellido === '' || correo.value === '' || p1 === '' || p2 === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.',
        });
        return false;
    } else if (!document.getElementById('correo').checkValidity()) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El formato de correo no es valido',
        });
        return false;
    }  else if (!document.getElementById('contrasena1').checkValidity()) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña no cumple con los requisitos',
        });
        return false;
    } else if (p1 !== p2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden. Por favor, verifica tus contraseñas.',
        });
        return false;
    } else if (!terminos.checked){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes aceptar los términos y condiciones.',
        });
        return false;
    }

    var jsonData = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: p1,
    };

    var json = JSON.stringify(jsonData);

    Swal.fire({
        icon: 'success',
        title: 'Registro completado',
        text: 'JSON: ' + json,
    });
}

verificar();
});
