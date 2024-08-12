// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('¡Gracias por tu mensaje, ' + name + '! Me pondré en contacto contigo pronto.');
        // Aquí puedes enviar el formulario a través de AJAX o resetear el formulario
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});

// Animaciones al desplazarse
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 200) {
            section.classList.add('fade-in');
        }
    });
});

// Agrega la clase .fade-in a tus secciones para hacer la animación
