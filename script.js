document.getElementById("contacto-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = document.getElementById("contacto-form");
  const gracias = document.getElementById("mensaje-gracias");
  const descripcion = document.getElementById("contacto-desc"); // <--- nuevo

  // Ocultamos el texto también
  descripcion.style.display = "none";

  // Animación del formulario
  form.classList.add("hidden");

  setTimeout(() => {
    form.style.display = "none";
    gracias.classList.add("visible");
  }, 400);
});


// ===== MENÚ HAMBURGUESA =====
const btn = document.getElementById("hamburguesa-btn");
const menu = document.getElementById("nav-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("activo");
  btn.classList.toggle("activo");
});
