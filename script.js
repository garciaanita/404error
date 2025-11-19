document.addEventListener("DOMContentLoaded", () => {
  // ===== ESTRELLAS =====
  const starContainer = document.getElementById("stars");
  const STAR_COUNT = 160;

  if (starContainer) {
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("span");
      star.classList.add("star");

      const size = 1 + Math.random() * 2.2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = (0.25 + Math.random() * 0.75).toFixed(2);
      star.style.animationDelay = `${Math.random() * 4}s`;
      star.style.animationDuration = `${2 + Math.random() * 2.5}s`;

      starContainer.appendChild(star);
    }
  }

  // ===== PARALLAX CON RATÓN =====
  const parallaxLayers = document.querySelectorAll("[data-depth]");

  function handleParallax(event) {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX - innerWidth / 2) / innerWidth;
    const y = (event.clientY - innerHeight / 2) / innerHeight;

    parallaxLayers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth || "0");
      const translateX = -x * depth * 60;
      const translateY = -y * depth * 40;

      layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  }

  window.addEventListener("mousemove", handleParallax);

  // ===== BOTÓN LUCES =====
  const toggleLightsBtn = document.getElementById("toggle-lights");

  if (toggleLightsBtn) {
    toggleLightsBtn.addEventListener("click", () => {
      document.body.classList.toggle("lights-off");
    });
  }

  // ===== GLITCH ALEATORIO EN EL 404 =====
  const title404 = document.querySelector(".title-404");

  function triggerGlitch() {
    if (!title404) return;
    title404.classList.add("glitch");

    setTimeout(() => {
      title404.classList.remove("glitch");
    }, 260);
  }

  function scheduleGlitch() {
    const delay = 2600 + Math.random() * 3400; // entre ~2.6 y ~6s
    setTimeout(() => {
      triggerGlitch();
      scheduleGlitch();
    }, delay);
  }

  scheduleGlitch();
});
