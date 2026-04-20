// efectos.js — Portal Consola · Segundo Corte

// ─── Scroll reveal con IntersectionObserver ───
document.addEventListener("DOMContentLoaded", function () {

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          // Una vez visible, dejamos de observar (no se re-anima)
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px", // Dispara un poco antes del borde inferior
    }
  );

  // Observar todos los elementos animables
  document.querySelectorAll(".animar-scroll").forEach((el) => {
    observador.observe(el);
  });


  // ─── Marcar nav-link activo según la URL ───
  const paginaActual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((a) => {
    if (a.getAttribute("href") === paginaActual) {
      a.classList.add("active");
    }
  });


  // ─── Stagger de cards dentro de un .os-layout visible ───
  // Aplica un pequeño delay secuencial a cada info-card dentro del sidebar
  document.querySelectorAll(".os-sidebar").forEach((sidebar) => {
    const cards = sidebar.querySelectorAll(".info-card");
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${0.1 + i * 0.1}s`;
      card.classList.add("animar-scroll");
      observador.observe(card);
    });
  });

});
