// Función para hacer scroll suave hacia una sección
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Manejo del formulario de contacto (solo ejemplo, sin backend)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto 🤘🍞");
  this.reset();
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // evita que la página se recargue

  const formData = new FormData(form);
  const endpoint = form.action;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('¡Mensaje enviado correctamente!');
      form.reset();
    } else {
      alert('Error al enviar el mensaje. Intenta nuevamente.');
    }
  } catch (error) {
    alert('Error de red. Intenta nuevamente.');
  }
});
