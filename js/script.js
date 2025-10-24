document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  // Si no encuentra las imágenes o botones, no hace nada
  if (!slides || images.length === 0) {
    console.error("No se encontraron imágenes o contenedor de slides.");
    return;
  }

  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prev?.addEventListener('click', () => showSlide(index - 1));
  next?.addEventListener('click', () => showSlide(index + 1));

  // Cambio automático cada 3 segundos
  setInterval(() => showSlide(index + 1), 3000);
});
