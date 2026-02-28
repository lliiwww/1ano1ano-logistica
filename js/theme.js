const btn = document.getElementById("toggleTheme");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️ Modo claro";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️ Modo claro";
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙 Modo escuro";
  }
});
