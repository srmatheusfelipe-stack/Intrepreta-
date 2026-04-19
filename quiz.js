
// quiz.js - Lógica pesada da página de Quiz

document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA INTELIGENTE DO BOTÃO VOLTAR ---
    const backBtn = document.getElementById('backBtn');
    
    backBtn.addEventListener('click', () => {
        // Se a tela de Quiz Ativo ou a de Resultado estiverem aparecendo...
        if (!activeView.classList.contains('hidden') || !resultView.classList.contains('hidden')) {
            // Volta para a lista de módulos da seção
            activeView.classList.add('hidden');
            resultView.classList.add('hidden');
            listView.classList.remove('hidden');
            
            // Restaura o título da Seção no cabeçalho
            headerTitle.textContent = secaoAtual.titulo;
        } else {
            // Se já estiver na lista de módulos, volta para a Home (index.html)
            window.location.href = 'index.html';
        }
    });
    
    // --- MANTER O TEMA ESCURO (Sincronização entre páginas) ---
    if(localStorage.getItem('interpretaTheme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // Pega o ID da seção pela URL (ex: quiz.html?secao=s1)
    const urlParams = new URLSearchParams(window.location.search);
    const secaoId = urlParams.get('secao');

    // Se acessar sem seção, volta pra home
    if (!secaoId) { 
        window.location.href = 'index.html'; 
        return; 
    }

    const secaoAtual = appData.secoes.find(s => s.id === secaoId);
    let progressoGlobal = JSON.parse(localStorage.getItem('interpretaProgress')) || { s1: 0, s2: 0 };
    
    // Variáveis de Estado do Jogo
    let quizAtivo = null;
    let perguntaAtualIndex = 0;
    let acertos = 0;

    // --- ELEMENTOS DOM ---

    // --- ELEMENTOS DOM ---
    const headerTitle = document.getElementById('headerTitle');
    const listView = document.getElementById('quizListView');
    const activeView = document.getElementById('activeQuizView');
    const resultView = document.getElementById('resultView');
    const quizListContainer = document.getElementById('quizListContainer');

    // Inicialização da Tela de Lista
    function initSecao() {
        headerTitle.textContent = secaoAtual.titulo;
        atualizarBarraSecao();
        renderizarListaQuizzes();
    }

    function atualizarBarraSecao() {
        const quizzesCompletos = progressoGlobal[secaoId] || 0;
        const total = 10; // Fixo 10 por seção
        document.getElementById('sectionProgressText').textContent = `${quizzesCompletos}/${total}`;
        document.getElementById('sectionProgressBar').style.width = `${(quizzesCompletos / total) * 100}%`;
    }

    function renderizarListaQuizzes() {
        quizListContainer.innerHTML = '';
        const quizzesCompletos = progressoGlobal[secaoId] || 0;

        // Renderiza os quizzes reais do data.js (e cria placeholders travados para completar os 10)
        for (let i = 0; i < 10; i++) {
            const quiz = secaoAtual.quizzes[i];
            const estaDesbloqueado = i <= quizzesCompletos; 
            const statusClass = estaDesbloqueado ? '' : 'locked';
            const icon = estaDesbloqueado ? 'play_circle' : 'lock';
            
            // Se o grupo ainda não criou o quiz no data.js, mostra "Em Breve"
            const tituloExibicao = quiz ? quiz.titulo : `Quiz ${i+1} (Em Breve)`;
            const onClickAttr = (estaDesbloqueado && quiz) ? `onclick="iniciarQuiz(${i})"` : '';

            const itemHTML = `
                <div class="quiz-item ${statusClass}" ${onClickAttr}>
                    <span class="quiz-item-title">${tituloExibicao}</span>
                    <span class="material-icons-round quiz-status-icon">${icon}</span>
                </div>
            `;
            quizListContainer.innerHTML += itemHTML;
        }
    }

    // --- LÓGICA DO JOGO ---
    window.iniciarQuiz = function(index) {
        quizAtivo = secaoAtual.quizzes[index];
        perguntaAtualIndex = 0;
        acertos = 0;
        
        listView.classList.add('hidden');
        activeView.classList.remove('hidden');
        headerTitle.textContent = quizAtivo.titulo;
        
        carregarPergunta();
    };

    function carregarPergunta() {
        const pergunta = quizAtivo.perguntas[perguntaAtualIndex];
        const totalPerguntas = quizAtivo.perguntas.length;

        // Atualiza Barra de Progresso do Quiz
        document.getElementById('questionCounter').textContent = `Pergunta ${perguntaAtualIndex + 1} de ${totalPerguntas}`;
        document.getElementById('quizProgressBar').style.width = `${((perguntaAtualIndex) / totalPerguntas) * 100}%`;

        // Carrega Mídia (Imagem ou Texto) apenas na primeira pergunta ou deixa visível
        const mediaContainer = document.getElementById('mediaContainer');
        const textContainer = document.getElementById('textContainer');
        
        if (quizAtivo.tipo === 'imagem') {
            document.getElementById('quizImage').src = quizAtivo.conteudoMedia;
            mediaContainer.classList.remove('hidden');
            textContainer.classList.add('hidden');
        } else {
            document.getElementById('quizText').textContent = quizAtivo.conteudoTexto;
            textContainer.classList.remove('hidden');
            mediaContainer.classList.add('hidden');
        }

        // Carrega Texto da Pergunta e Botões
        document.getElementById('questionText').textContent = pergunta.pergunta;
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        pergunta.opcoes.forEach((opcao, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opcao;
            btn.onclick = () => verificarResposta(idx, btn);
            optionsContainer.appendChild(btn);
        });
    }

    function verificarResposta(idxSelecionado, btnClicado) {
        const pergunta = quizAtivo.perguntas[perguntaAtualIndex];
        const botoes = document.querySelectorAll('.option-btn');
        
        // Bloqueia todos os botões após o clique
        botoes.forEach(b => b.classList.add('disabled'));

        if (idxSelecionado === pergunta.respostaCorreta) {
            btnClicado.classList.add('correct');
            acertos++;
        } else {
            btnClicado.classList.add('wrong');
            // Mostra qual era a certa
            botoes[pergunta.respostaCorreta].classList.add('correct');
        }

        // Aguarda 1.5 segundos e vai para a próxima ou finaliza
        setTimeout(() => {
            perguntaAtualIndex++;
            if (perguntaAtualIndex < quizAtivo.perguntas.length) {
                carregarPergunta();
            } else {
                finalizarQuiz();
            }
        }, 1500);
    }

    function finalizarQuiz() {
        activeView.classList.add('hidden');
        resultView.classList.remove('hidden');
        headerTitle.textContent = "Resultado";

        const total = quizAtivo.perguntas.length;
        const porcentagem = acertos / total;

        document.getElementById('scoreText').textContent = `${acertos}/${total}`;

        // Lógica Foda de Resultado Dinâmico
        const resultEmoji = document.getElementById('resultEmoji');
        const resultTitle = document.getElementById('resultTitle');
        const resultMessage = document.getElementById('resultMessage');

        if (porcentagem === 1) {
            resultEmoji.textContent = "🔥";
            resultTitle.textContent = "Estrategista Perfeito!";
            resultMessage.textContent = "Sua leitura de mundo e interpretação são impecáveis.";
        } else if (porcentagem >= 0.6) {
            resultEmoji.textContent = "👍";
            resultTitle.textContent = "Bom Trabalho!";
            resultMessage.textContent = "Você entendeu a mensagem principal, mas pode refinar os detalhes.";
        } else {
            resultEmoji.textContent = "📚";
            resultTitle.textContent = "Continue Treinando!";
            resultMessage.textContent = "Analfabetismo funcional se combate com prática. Tente novamente!";
        }

        // Salvar Progresso (Desbloqueia o próximo apenas se tirar uma nota boa, ou sempre. Vamos fazer sempre para o exemplo fluir)
        let indiceQuizAtual = secaoAtual.quizzes.findIndex(q => q.id === quizAtivo.id);
        
        // Se este era o último quiz destravado, avança o progresso
        if (indiceQuizAtual === progressoGlobal[secaoId] && progressoGlobal[secaoId] < 9) {
            progressoGlobal[secaoId]++;
            localStorage.setItem('interpretaProgress', JSON.stringify(progressoGlobal));
        }

        document.getElementById('btnNextAction').onclick = () => {
            // Volta para a lista atualizada
            resultView.classList.add('hidden');
            listView.classList.remove('hidden');
            initSecao(); 
        };
    }

    // Chama a inicialização quando a página carrega
    initSecao();
});