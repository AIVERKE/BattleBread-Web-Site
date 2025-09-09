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
