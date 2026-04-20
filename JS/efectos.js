
document.addEventListener("DOMContentLoaded", function () {

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px", 
    }
  );


  document.querySelectorAll(".animar-scroll").forEach((el) => {
    observador.observe(el);
  });

  const paginaActual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((a) => {
    if (a.getAttribute("href") === paginaActual) {
      a.classList.add("active");
    }
  });

  document.querySelectorAll(".os-sidebar").forEach((sidebar) => {
    const cards = sidebar.querySelectorAll(".info-card");
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${0.1 + i * 0.1}s`;
      card.classList.add("animar-scroll");
      observador.observe(card);
    });
  });

});
