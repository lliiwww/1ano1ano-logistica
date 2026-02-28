document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista");
  if (!lista) return;

  const alunos = Array.from(lista.querySelectorAll("li"));

  alunos.sort((a, b) => {
    const nomeA = a.textContent.trim().toLowerCase();
    const nomeB = b.textContent.trim().toLowerCase();
    return nomeA.localeCompare(nomeB);
  });

  lista.innerHTML = "";
  alunos.forEach(aluno => lista.appendChild(aluno));
});
