// 🔹 Neon pulsante no título
const titulo = document.querySelector('.titulo h1');
setInterval(() => {
  titulo.style.textShadow =
    titulo.style.textShadow ? '' : '0 0 12px rgba(255, 43, 43, 0.8)';
}, 800);

// 🔹 Glow animado no banner
const bannerImg = document.querySelector('.banner img');
let glowOn = false;
setInterval(() => {
  bannerImg.style.boxShadow = glowOn
    ? '0 0 35px rgba(255, 43, 43, 0.7)'
    : '0 0 25px rgba(255, 43, 43, 0.4)';
  glowOn = !glowOn;
}, 1000);
