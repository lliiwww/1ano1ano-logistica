const quiz = [
  { pergunta: "O que é logística?", resposta: "Planejar, organizar e controlar produtos e informações" },
  { pergunta: "Por que logística é importante?", resposta: "Para que produtos cheguem no lugar certo, na hora certa" }
];

quiz.forEach((q, i) => {
  const card = document.createElement('div');
  card.className = 'neon-card';
  card.innerHTML = `<h2 class="neon-title">Pergunta ${i+1}</h2><p>${q.pergunta}</p><input placeholder="Sua resposta"/><button>Responder</button>`;
  document.querySelector('main').appendChild(card);
  
  const input = card.querySelector('input');
  const button = card.querySelector('button');
  button.addEventListener('click', () => {
    if(input.value.toLowerCase() === q.resposta.toLowerCase()) {
      alert('✅ Correto!');
    } else {
      alert('❌ Tente novamente!');
    }
  });
});
