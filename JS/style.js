const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;

// Función para alternar el tema oscuro/claro
toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Cambia el texto del botón según el tema
    if (body.classList.contains('dark-theme')) {
        toggleThemeBtn.textContent = 'Cambiar a Tema Claro';
    } else {
        toggleThemeBtn.textContent = 'Cambiar a Tema Oscuro';
    }
});
