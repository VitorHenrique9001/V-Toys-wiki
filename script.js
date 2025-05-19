const personagens = [
  {
    nome: "V-Burguer",
    descricao: "O protagonista da turma, inspirado no próprio Vitor. Um hambúrguer completo e estiloso!",
    imagem: "imagens/v-burguer.png",
    categoria: "Aluno"
  },
  {
    nome: "V-Nimbus",
    descricao: "Uma nuvem fofa com asas douradas, óculos estilosos e um halo de anjo. Representa a gentileza e a leveza da sala!",
    imagem: "imagens/v-nimbus.png",
    categoria: "Aluno",
  },
  {
    nome: "V-9001",
    imagem: "imagens/v-9001.png",
    descricao: "Um robô inteligente com personalidade amigável. Representa a genialidade artificial e a criatividade dos projetos técnicos.",
    categoria: "Aluno"
  },
{
  nome: "V-Crochet",
  imagem: "imagens/v-crochet.png",
  descricao: "Um autorretrato em crochê! Representa a união entre criatividade artesanal e identidade pessoal.",
  categoria: "Aluno"
}


];

// Função para criar os cards
function exibirPersonagens(lista) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  lista.forEach(personagem => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${personagem.imagem}" alt="${personagem.nome}">
      <h3>${personagem.nome}</h3>
      <p>${personagem.descricao}</p>
      <small>${personagem.categoria}</small>
    `;

    container.appendChild(card);
  });
}

// Função de busca
function buscarPersonagem() {
  const termo = document.getElementById("searchInput").value.toLowerCase();
  const filtrados = personagens.filter(p => p.nome.toLowerCase().includes(termo));
  exibirPersonagens(filtrados);
}

// Eventos
window.addEventListener("DOMContentLoaded", () => {
  exibirPersonagens(personagens);

  const inputBusca = document.getElementById("searchInput");
  inputBusca.addEventListener("input", buscarPersonagem);
});
