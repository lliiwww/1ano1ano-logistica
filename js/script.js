// popup.js

const openBtn = document.getElementById('openCredits');
const closeBtn = document.getElementById('closeCredits');
const popup = document.getElementById('creditsPopup');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});
