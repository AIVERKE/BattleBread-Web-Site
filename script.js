// Función para hacer scroll suave hacia una sección
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Loader animado: desvanecer y ocultar al cargar la página
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600); // esperar la transición antes de ocultar
  }
});

// Manejo del formulario de contacto
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que la página se recargue

    const formData = new FormData(form);
    const endpoint = form.action;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        alert("¡Mensaje enviado correctamente! 🤘🍞");
        form.reset();
      } else {
        alert("Error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      alert("Error de red. Intenta nuevamente.");
      console.error(error);
    }
  });
}
