function validarEmail(email) {
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return regex.test(email);
}

// Ejemplo de uso:
const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', function () {
    const email = emailInput.value;
    const resultado = document.getElementById('resultado');

    if (validarEmail(email)) {
        resultado.textContent = ''; // Correo válido
    } else {
        resultado.textContent = 'Correo inválido';
    }
});