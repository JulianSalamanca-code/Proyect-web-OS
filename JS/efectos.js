document.addEventListener("DOMContentLoaded", function() {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 
    });

    const elementosOcultos = document.querySelectorAll('.animar-scroll');
    elementosOcultos.forEach((el) => observador.observe(el));
});