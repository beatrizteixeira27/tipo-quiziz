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
    { 
        pergunta: "Qual das palavras está escrita corretamente?", 
        alternativas: ["médico", "medico", "medico", "médico"], 
        correta: 0 
    },
    { 
        pergunta: "Qual a forma correta do plural de 'cão'?", 
        alternativas: ["cões", "cãoes", "caes", "cães"], 
        correta: 3 
    },
    { 
        pergunta: "Como se chama a palavra que tem o mesmo significado que outra?", 
        alternativas: ["Antônimo", "Homônimo", "Sinônimo", "Parônimo"], 
        correta: 2 
    },
    { 
        pergunta: "Qual é a forma verbal correta para 'Eu ____ de sair agora.'?", 
        alternativas: ["preciso", "precisei", "preciso", "precisava"], 
        correta: 0 
    },
    { 
        pergunta: "Escolha a frase corretamente pontuada:", 
        alternativas: ["Você viu isso?", "Você viu, isso?", "Você viu isso", "Você, viu isso?"], 
        correta: 0 
    },
    { 
        pergunta: "Qual a palavra correta no contexto: 'Os alunos _______ ao pátio.'?", 
        alternativas: ["foram", "foi", "fomos", "vai"], 
        correta: 0 
    },
    { 
        pergunta: "Como se chama o tipo de texto que narra um evento?", 
        alternativas: ["Narrativo", "Argumentativo", "Expositivo", "Descritivo"], 
        correta: 0 
    },
    { 
        pergunta: "Qual é o plural de 'arroz'?", 
        alternativas: ["arroz", "arrozes", "arroses", "arrozados"], 
        correta: 0 
    },

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
    { 
        pergunta: "Quanto é 3 x 4?", 
        alternativas: ["10", "12", "14", "16"], 
        correta: 1 
    },
    { 
        pergunta: "Quanto é 8 ÷ 2?", 
        alternativas: ["2", "3", "4", "5"], 
        correta: 2 
    },
    { 
        pergunta: "Quanto é 7 + 3?", 
        alternativas: ["8", "9", "10", "11"], 
        correta: 2 
    },
    { 
        pergunta: "Quanto é 9 - 6?", 
        alternativas: ["2", "3", "4", "5"], 
        correta: 1 
    },
    { 
        pergunta: "Quanto é 6 x 5?", 
        alternativas: ["30", "31", "32", "33"], 
        correta: 0 
    },
    { 
        pergunta: "Quanto é 15 ÷ 5?", 
        alternativas: ["2", "3", "4", "5"], 
        correta: 1 
    },
    { 
        pergunta: "Quanto é 11 + 7?", 
        alternativas: ["18", "19", "20", "21"], 
        correta: 1 
    },
    { 
        pergunta: "Quanto é 4 x 6?", 
        alternativas: ["24", "25", "26", "27"], 
        correta: 0 
    }
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

    if (respostaEscolhida === pergunta.c
