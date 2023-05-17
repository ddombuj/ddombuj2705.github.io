document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('input');

  function validatePassword() {
    var password = this.value;
    var p1 = document.getElementById("contrasena1").value;
    var p2 = document.getElementById("contrasena2").value;
    var noValido = /\s/;
    var correo = document.getElementById("correo").value;

    // Validar longitud contraseña
    if (password.length >= 8 && password.length <= 16) {
      document.getElementById('length').classList.remove('invalid');
      document.getElementById('length').classList.add('valid');
    } else {
      document.getElementById('length').classList.remove('valid');
      document.getElementById('length').classList.add('invalid');
    }

    // Validar letra minúscula (al menos 2)
    if ((password.match(/[a-z]/g) || []).length >= 2) {
      document.getElementById('letter').classList.remove('invalid');
      document.getElementById('letter').classList.add('valid');
    } else {
      document.getElementById('letter').classList.remove('valid');
      document.getElementById('letter').classList.add('invalid');
    }

    // Validar letra mayúscula (al menos 2)
    if ((password.match(/[A-Z]/g) || []).length >= 2) {
      document.getElementById('capital').classList.remove('invalid');
      document.getElementById('capital').classList.add('valid');
    } else {
      document.getElementById('capital').classList.remove('valid');
      document.getElementById('capital').classList.add('invalid');
    }

    // Validar número (al menos 2)
    if ((password.match(/\d/g) || []).length >= 2) {
      document.getElementById('number').classList.remove('invalid');
      document.getElementById('number').classList.add('valid');
    } else {
      document.getElementById('number').classList.remove('valid');
      document.getElementById('number').classList.add('invalid');
    }

    // Validar carácter especial (al menos 1)
    if ((password.match(/[!@#$%^&*]/g) || []).length >= 1) {
      document.getElementById('special').classList.remove('invalid');
      document.getElementById('special').classList.add('valid');
    } else {
      document.getElementById('special').classList.remove('valid');
      document.getElementById('special').classList.add('invalid');
    }

  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', validatePassword);
    inputs[i].addEventListener('focus', function() {
      document.getElementById('pswd_info').style.display = 'block';
    });
    inputs[i].addEventListener('blur', function() {
      document.getElementById('pswd_info').style.display = 'none';
    });
  }
});
