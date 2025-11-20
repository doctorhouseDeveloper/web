document.addEventListener("DOMContentLoaded", () => {
  // FORMULARIO
  const form = document.getElementById("contacto-form");
  const gracias = document.getElementById("mensaje-gracias");
  const descripcion = document.getElementById("contacto-desc");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    descripcion.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => {
      form.style.display = "none";
      gracias.classList.add("visible");
    }, 400);
  });

  // MENÚ HAMBURGUESA
  const btn = document.getElementById("hamburguesa-btn");
  const menu = document.getElementById("nav-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");  
    btn.classList.toggle("activa");   
  });
});
