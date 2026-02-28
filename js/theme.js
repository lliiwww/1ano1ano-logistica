document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleTheme");

  // 🔹 aplicar tema salvo
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️ Modo claro";
  } else {
    btn.textContent = "🌙 Modo escuro";
  }

  // 🔹 botão de troca
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("tema", "dark");
      btn.textContent = "☀️ Modo claro";
    } else {
      localStorage.setItem("tema", "light");
      btn.textContent = "🌙 Modo escuro";
    }
  });

  // 🔹 animação de entrada dos cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.15}s`;
    card.classList.add("show");
  });
});
