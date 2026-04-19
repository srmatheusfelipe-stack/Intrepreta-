// script.js - Lógica Principal (Home e Login)

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELEÇÃO DE ELEMENTOS ---
    const profilePicInput = document.getElementById('profilePicInput');
    const uploadPreview = document.getElementById('uploadPreview');
    const appAvatar = document.getElementById('appAvatar');
    let tempPicData = null; // Guarda a foto temporariamente antes de entrar
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    const enterAppBtn = document.getElementById('enterAppBtn');
    const usernameInput = document.getElementById('usernameInput');
    const displayUsername = document.getElementById('displayUsername');
    const logoutBtn = document.getElementById('logoutBtn');
    
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const loginThemeToggleBtn = document.getElementById('loginThemeToggleBtn');
    const loginThemeIcon = document.getElementById('loginThemeIcon');
    const cardsContainer = document.getElementById('cardsContainer');

    // --- LÓGICA DE UPLOAD DE FOTO ---
    if (profilePicInput) {
        profilePicInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    tempPicData = event.target.result; // O código da imagem
                    uploadPreview.innerHTML = `<img src="${tempPicData}" alt="Sua Foto">`;
                };
                reader.readAsDataURL(file); // Transforma em texto para o localStorage aceitar
            }
        });
    }

    // --- 2. LÓGICA DO TEMA (UNIFICADA) ---
    function applyTheme(theme) {
        const isDark = theme === 'dark';
        if (isDark) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
        
        const iconName = isDark ? 'light_mode' : 'dark_mode';
        if (themeIcon) themeIcon.textContent = iconName;
        if (loginThemeIcon) loginThemeIcon.textContent = iconName;
        
        localStorage.setItem('interpretaTheme', theme);
    }

    function toggleThemeAction() {
        const currentTheme = localStorage.getItem('interpretaTheme') || 'light';
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        applyTheme(newTheme);
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleThemeAction);
    if (loginThemeToggleBtn) loginThemeToggleBtn.addEventListener('click', toggleThemeAction);

    // Aplica o tema salvo logo no início
    const savedTheme = localStorage.getItem('interpretaTheme') || 'light';
    applyTheme(savedTheme);


    // --- 3. SISTEMA DE LOGIN ---
    function checkLogin() {
        const user = localStorage.getItem('interpretaUser');
        if (user) {
            // Se o usuário existe, mostra o App e esconde o Login
            displayUsername.textContent = `Olá, ${user}`;
            // Mostra a foto no painel se existir
            const userPic = localStorage.getItem('interpretaUserPic');
            if (userPic && appAvatar) {
                appAvatar.innerHTML = `<img src="${userPic}" alt="Foto de Perfil">`;
            } else if (appAvatar) {
                appAvatar.innerHTML = `<span class="material-icons-round">face</span>`;
            }
            loginScreen.classList.add('hidden'); // Garante que some
            loginScreen.style.display = 'none';  // Força o sumiço
            mainApp.classList.remove('hidden');
            loadCards(); // Gera os módulos na tela
        } else {
            // Se não existe, mostra o Login e esconde o App
            loginScreen.classList.remove('hidden');
            loginScreen.style.display = 'flex';
            mainApp.classList.add('hidden');
        }
    }

    // Evento do botão "Entrar no App"
    enterAppBtn.addEventListener('click', () => {
        const name = usernameInput.value.trim();
        if (name !== "") {
            localStorage.setItem('interpretaUser', name);
            // Salva a foto no banco de dados do navegador, se tiver escolhido
            if (tempPicData) {
                localStorage.setItem('interpretaUserPic', tempPicData);
            }
            // Inicia progresso zerado se não existir
            if(!localStorage.getItem('interpretaProgress')) {
                localStorage.setItem('interpretaProgress', JSON.stringify({ s1: 0, s2: 0 }));
            }
            checkLogin(); // Atualiza a tela
        } else {
            alert("Por favor, digite seu nome para começar a jornada!");
        }
    });

    // Evento de Sair (Logout)
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('interpretaUser');
        usernameInput.value = '';
        
        // Limpando a foto de perfil ao sair
        localStorage.removeItem('interpretaUserPic');
        tempPicData = null;
        if (uploadPreview) {
            uploadPreview.innerHTML = `<span class="material-icons-round">add_a_photo</span>`;
        }

        checkLogin();
    });



    // --- 4. GERAÇÃO DOS CARDS (MÓDULOS) ---
    function loadCards() {
        if (!cardsContainer) return;
        cardsContainer.innerHTML = ''; 
        
        const progresso = JSON.parse(localStorage.getItem('interpretaProgress')) || { s1: 0, s2: 0 };

        appData.secoes.forEach(secao => {
            const totalQuizzes = 10;
            const quizzesFeitos = progresso[secao.id] || 0;
            const porcentagem = (quizzesFeitos / totalQuizzes) * 100;

            const cardHTML = `
                <article class="course-card" onclick="abrirSecao('${secao.id}')">
                    <img src="${secao.imagemCover}" alt="${secao.titulo}" class="card-img">
                    <div class="card-content">
                        <h3>${secao.titulo}</h3>
                        <p>${secao.descricao}</p>
                        <div class="progress-wrapper">
                            <div class="progress-stats">
                                <span>Progresso</span>
                                <span>${quizzesFeitos}/${totalQuizzes}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${porcentagem}%"></div>
                            </div>
                        </div>
                    </div>
                </article>
            `;
            cardsContainer.innerHTML += cardHTML;
        });
    }

    // Inicializa verificando se já está logado
    checkLogin();
});

// Função Global de redirecionamento (fora do DOMContentLoaded para o onclick funcionar)
window.abrirSecao = function(idSecao) {
    window.location.href = `quiz.html?secao=${idSecao}`;
};