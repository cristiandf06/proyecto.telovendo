const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    let pNombre = document.getElementById('pNombre');
    let pEmail = document.getElementById('pEmail');
    let pMensaje = document.getElementById('pMensaje');

    if (nombre.value === null || nombre.value.trim() === '') {
        pNombre.textContent = 'Ingresa un nombre';
        nombre.style.borderColor = 'red';
    } else {
        pNombre.textContent = '';
        nombre.style.borderColor = 'green';
    }
    if (email.value === null || email.value.trim() === '') {
        pEmail.textContent = 'Ingresa un email';
        email.style.borderColor = 'red';
    } else {
        pEmail.textContent = '';
        email.style.borderColor = 'green';
    }
    if (mensaje.value === null || mensaje.value.trim() === '') {
        pMensaje.textContent = 'Ingresa un mensaje';
        mensaje.style.borderColor = 'red';
    } else {
        pMensaje.textContent = '';
        mensaje.style.borderColor = 'green';
    }

    if (nombre.value.length > 0 && email.value.length > 0 && mensaje.value.length > 0) {
        nombre.value = '';
        email.value = '';
        mensaje.value = '';
        nombre.style.borderColor = '';
        email.style.borderColor = '';
        mensaje.style.borderColor = '';
        alert('Mensaje enviado correctamente');
    }
    
});
