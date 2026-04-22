

document.addEventListener('DOMContentLoaded', () => {
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

    if (profilePicInput) {
        profilePicInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    tempPicData = event.target.result; 
                    uploadPreview.innerHTML = `<img src="${tempPicData}" alt="Sua Foto">`;
                };
                reader.readAsDataURL(file); 
            }
        });
    }

    
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


    const savedTheme = localStorage.getItem('interpretaTheme') || 'light';
    applyTheme(savedTheme);


    function checkLogin() {
        const user = localStorage.getItem('interpretaUser');
        if (user) {
           
            displayUsername.textContent = `Olá, ${user}`;
   
            const userPic = localStorage.getItem('interpretaUserPic');
            if (userPic && appAvatar) {
                appAvatar.innerHTML = `<img src="${userPic}" alt="Foto de Perfil">`;
            } else if (appAvatar) {
                appAvatar.innerHTML = `<span class="material-icons-round">face</span>`;
            }
            loginScreen.classList.add('hidden');
            loginScreen.style.display = 'none';  
            mainApp.classList.remove('hidden');
            loadCards(); 
        } else {
         
            loginScreen.classList.remove('hidden');
            loginScreen.style.display = 'flex';
            mainApp.classList.add('hidden');
        }
    }

    
    enterAppBtn.addEventListener('click', () => {
        const name = usernameInput.value.trim();
        if (name !== "") {
            localStorage.setItem('interpretaUser', name);
            
            if (tempPicData) {
                localStorage.setItem('interpretaUserPic', tempPicData);
            }
          
            if(!localStorage.getItem('interpretaProgress')) {
                localStorage.setItem('interpretaProgress', JSON.stringify({ s1: 0, s2: 0 }));
            }
            checkLogin(); 
        } else {
            alert("Por favor, digite seu nome para começar a jornada!");
        }
    });

   
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('interpretaUser');
        usernameInput.value = '';
        
       
    
        checkLogin();
    });
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

    checkLogin();
});

window.abrirSecao = function(idSecao) {
    window.location.href = `quiz.html?secao=${idSecao}`;
};
