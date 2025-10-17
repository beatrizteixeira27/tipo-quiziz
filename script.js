const perguntas = [
    // Perguntas de Português
    { 
        pergunta: "Qual é a forma correta de escrever a palavra no plural?", 
        alternativas: ["amigos", "amigoses", "amigues", "amiguos"], 
        correta: 0 
    },
    { 
        pergunta: "Como se chama o acento usado em palavras como 'pássaro'?", 
        alternativas: ["Trema", "Acento agudo", "Acento circunflexo", "Acento grave"], 
        correta: 1 
    },
    // Adicionar outras 8 perguntas de Português aqui...
    
    // Perguntas de Matemática
    { 
        pergunta: "Quanto é 2 + 2?", 
        alternativas: ["3", "4", "5", "6"], 
        correta: 1 
    },
    { 
        pergunta: "Quanto é 5 - 3?", 
        alternativas: ["1", "2", "3", "4"], 
        correta: 1 
    },
    // Adicionar outras 8 perguntas de Matemática aqui...
];

let perguntaAtual = 0;
let nomeJogador = '';
let pontuacao = 0;
const ranking = [];

function iniciarQuiz() {
    nomeJogador = document.getElementById('nome').value;
    if (!nomeJogador) {
        alert('Por favor, insira seu nome.');
        return;
    }
    
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    carregarPergunta();
}

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('pergunta').innerText = pergunta.pergunta;
    
    const alternativasDiv = document.getElementById('alternativas');
    alternativasDiv.innerHTML = '';
    pergunta.alternativas.forEach((alternativa, index) => {
        const div = document.createElement('div');
        div.innerText = alternativa;
        div.onclick = () => verificarResposta(index);
        alternativasDiv.appendChild(div);
    });
}

function verificarResposta(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    const alternativasDiv = document.getElementById('alternativas').children;

    if (respostaEscolhida === pergunta.correta) {
        pontuacao++;
        document.body.style.backgroundColor = 'lightgreen'; // Cor de acerto
    } else {
        document.body.style.backgroundColor = 'lightcoral'; // Cor de erro
    }
    
    setTimeout(() => {
        document.body.style.backgroundColor = ''; // Resetar cor
        proximaPergunta();
    }, 1000);
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('ranking').style.display = 'block';
    
    ranking.push({ nome: nomeJogador, pontuacao: pontuacao });
    ranking.sort((a, b) => b.pontuacao - a.pontuacao);

    const rankingLista = document.getElementById('rankingLista');
    rankingLista.innerHTML = '';
    ranking.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerText = `${entry.nome}: ${entry.pontuacao} pontos`;
        rankingLista.appendChild(li);
    });
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    document.getElementById('ranking').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('nome').value = '';
}
