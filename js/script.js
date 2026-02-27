// popup.js

// Pega os elementos do HTML
const openBtn = document.getElementById('openCredits');
const closeBtn = document.getElementById('closeCredits');
const popup = document.getElementById('creditsPopup');
const overlay = document.getElementById('overlay');

// Abre o pop-up quando clica no botão
openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

// Fecha o pop-up ao clicar no botão "Fechar"
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

// Fecha o pop-up ao clicar no fundo escuro
overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});
