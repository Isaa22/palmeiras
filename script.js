// main.js - Código principal do site do Palmeiras

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const btnMobile = document.querySelector('.btn-mobile');
    const mainNav = document.querySelector('.main-nav');
    
    btnMobile.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Inicializar Swiper (Carrossel de Notícias)
    const newsSwiper = new Swiper('.news-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
    
    // Carregar Notícias (simulação)
    loadNews();
    
    // Carregar Jogos (simulação)
    loadGames();
    
    // Carregar Elenco (simulação)
    loadTeam();
    
    // Carregar Linha do Tempo (simulação)
    loadTimeline();
    
    // Animação GSAP
    setupAnimations();
});

// Função para carregar notícias
function loadNews() {
    const newsSlider = document.querySelector('.swiper-wrapper');
    
    // Dados simulados - na prática, você buscaria de uma API
    const newsData = [
        {
            id: 1,
            date: '15/06/2023',
            title: 'Palmeiras vence clássico e segue na liderança',
            excerpt: 'Em jogo emocionante, Verdão supera rival por 2x1 no Allianz Parque.',
            image: 'img/news1.jpg'
        },
        {
            id: 2,
            date: '12/06/2023',
            title: 'Novo reforço é apresentado no CT do Palmeiras',
            excerpt: 'Atacante chega para reforçar o elenco na temporada 2023.',
            image: 'img/news2.jpg'
        },
        {
            id: 3,
            date: '10/06/2023',
            title: 'Palmeiras avança na Copa Libertadores',
            excerpt: 'Vitória por 3x0 garante classificação antecipada para as oitavas.',
            image: 'img/news3.jpg'
        },
        {
            id: 4,
            date: '08/06/2023',
            title: 'Base do Palmeiras conquista título internacional',
            excerpt: 'Jovens da Academia brilham em torneio na Europa.',
            image: 'img/news4.jpg'
        }
    ];
    
    newsData.forEach(news => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="news-card">
                <div class="news-image">
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <div class="news-content">
                    <span class="news-date">${news.date}</span>
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-excerpt">${news.excerpt}</p>
                    <a href="#" class="news-link">Ler mais</a>
                </div>
            </div>
        `;
        newsSlider.appendChild(slide);
    });
    
    // Atualizar Swiper após adicionar slides
    newsSwiper.update();
}

// Função para carregar jogos
function loadGames() {
    const gamesContainer = document.getElementById('games-container');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    // Data atual
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // Atualizar mês exibido
    function updateMonthDisplay() {
        const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        loadGamesForMonth();
    }
    
    // Carregar jogos para o mês atual (simulação)
    function loadGamesForMonth() {
        gamesContainer.innerHTML = '<div class="loader"></div>';
        
        // Simular carregamento assíncrono
        setTimeout(() => {
            // Dados simulados - na prática, você buscaria de uma API
            const gamesData = [
                {
                    id: 1,
                    date: '18/06/2023',
                    time: '16:00',
                    homeTeam: 'Palmeiras',
                    awayTeam: 'Corinthians',
                    competition: 'Brasileirão',
                    competitionLogo: 'img/logo-brasileirao.png',
                    homeLogo: 'img/logo-palmeiras.png',
                    awayLogo: 'img/logo-corinthians.png'
                },
                {
                    id: 2,
                    date: '21/06/2023',
                    time: '21:30',
                    homeTeam: 'Flamengo',
                    awayTeam: 'Palmeiras',
                    competition: 'Libertadores',
                    competitionLogo: 'img/logo-libertadores.png',
                    homeLogo: 'img/logo-flamengo.png',
                    awayLogo: 'img/logo-palmeiras.png'
                },
                {
                    id: 3,
                    date: '25/06/2023',
                    time: '18:00',
                    homeTeam: 'Palmeiras',
                    awayTeam: 'São Paulo',
                    competition: 'Brasileirão',
                    competitionLogo: 'img/logo-brasileirao.png',
                    homeLogo: 'img/logo-palmeiras.png',
                    awayLogo: 'img/logo-saopaulo.png'
                }
            ];
            
            gamesContainer.innerHTML = '';
            
            gamesData.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                gameCard.innerHTML = `
                    <div class="game-date">${game.date} • ${game.time}</div>
                    <div class="game-teams">
                        <div class="game-team">
                            <img src="${game.homeLogo}" alt="${game.homeTeam}">
                            <span class="game-team-name">${game.homeTeam}</span>
                        </div>
                        <div class="game-vs">VS</div>
                        <div class="game-team">
                            <img src="${game.awayLogo}" alt="${game.awayTeam}">
                            <span class="game-team-name">${game.awayTeam}</span>
                        </div>
                    </div>
                    <div class="game-info">
                        <div class="game-competition">
                            <img src="${game.competitionLogo}" alt="${game.competition}">
                            <span>${game.competition}</span>
                        </div>
                        <a href="#" class="game-tickets">Ingressos</a>
                    </div>
                `;
                gamesContainer.appendChild(gameCard);
            });
            
            // Se não houver jogos
            if (gamesData.length === 0) {
                gamesContainer.innerHTML = `
                    <div class="no-games">
                        <i class="fas fa-calendar-times"></i>
                        <p>Nenhum jogo agendado para este mês</p>
                    </div>
                `;
            }
        }, 800);
    }
    
    // Event listeners para navegação entre meses
    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateMonthDisplay();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateMonthDisplay();
    });
    
    // Inicializar
    updateMonthDisplay();
}

// Função para carregar elenco
function loadTeam() {
    const teamGrid = document.getElementById('team-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Dados simulados - na prática, você buscaria de uma API
    const teamData = [
        { id: 1, name: 'Weverton', number: 21, position: 'Goleiro', positionCode: 'goleiro', image: 'img/players/weverton.jpg', goals: 0, assists: 0, matches: 25 },
        { id: 2, name: 'Gustavo Gómez', number: 15, position: 'Zagueiro', positionCode: 'defesa', image: 'img/players/gomez.jpg', goals: 3, assists: 1, matches: 22 },
        { id: 3, name: 'Piquerez', number: 22, position: 'Lateral', positionCode: 'defesa', image: 'img/players/piquerez.jpg', goals: 1, assists: 5, matches: 20 },
        { id: 4, name: 'Zé Rafael', number: 8, position: 'Volante', positionCode: 'meio', image: 'img/players/zerafael.jpg', goals: 2, assists: 4, matches: 18 },
        { id: 5, name: 'Raphael Veiga', number: 23, position: 'Meia', positionCode: 'meio', image: 'img/players/veiga.jpg', goals: 12, assists: 7, matches: 24 },
        { id: 6, name: 'Dudu', number: 7, position: 'Atacante', positionCode: 'ataque', image: 'img/players/dudu.jpg', goals: 8, assists: 10, matches: 23 },
        { id: 7, name: 'Rony', number: 10, position: 'Atacante', positionCode: 'ataque', image: 'img/players/rony.jpg', goals: 9, assists: 4, matches: 21 },
        { id: 8, name: 'Endrick', number: 9, position: 'Atacante', positionCode: 'ataque', image: 'img/players/endrick.jpg', goals: 5, assists: 2, matches: 15 }
    ];
    
    // Carregar todos os jogadores inicialmente
    renderTeam(teamData);
    
    // Filtro por posição
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            if (filter === 'all') {
                renderTeam(teamData);
            } else {
                const filteredTeam = teamData.filter(player => player.positionCode === filter);
                renderTeam(filteredTeam);
            }
        });
    });
    
    // Função para renderizar o elenco
    function renderTeam(players) {
        teamGrid.innerHTML = '';
        
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.innerHTML = `
                <div class="player-image">
                    <img src="${player.image}" alt="${player.name}">
                    <div class="player-number">${player.number}</div>
                </div>
                <div class="player-info">
                    <h3 class="player-name">${player.name}</h3>
                    <p class="player-position">${player.position}</p>
                    <div class="player-stats">
                        <div class="stat-item">
                            <span class="stat-value">${player.goals}</span>
                            <span>Gols</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${player.assists}</span>
                            <span>Assist.</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${player.matches}</span>
                            <span>Jogos</span>
                        </div>
                    </div>
                </div>
            `;
            teamGrid.appendChild(playerCard);
        });
    }
}

// Função para carregar linha do tempo
function loadTimeline() {
    const timeline = document.querySelector('.timeline');
    
    // Dados simulados - na prática, você buscaria de uma API
    const timelineData = [
        {
            year: '1914',
            title: 'Fundação do Palestra Itália',
            description: 'Em 26 de agosto, o clube é fundado por imigrantes italianos como Palestra Itália.'
        },
        {
            year: '1942',
            title: 'Mudança para Palmeiras',
            description: 'Durante a Segunda Guerra Mundial, o clube muda seu nome para Sociedade Esportiva Palmeiras.'
        },
        {
            year: '1951',
            title: 'Primeiro título do Torneio Rio-São Paulo',
            description: 'O Verdão conquista seu primeiro título importante no futebol brasileiro.'
        },
        {
            year: '1993',
            title: 'Primeira Copa do Brasil',
            description: 'Palmeiras vence a Copa do Brasil pela primeira vez em sua história.'
        },
        {
            year: '1999',
            title: 'Primeira Libertadores',
            description: 'Time liderado por Felipão e com destaque para Marcos, Alex e Evair conquista a América.'
        },
        {
            year: '2020',
            title: 'Segunda Libertadores',
            description: 'Após 21 anos, o Palmeiras volta a conquistar a Libertadores, com gol de Breno Lopes no final.'
        },
        {
            year: '2021',
            title: 'Tricampeonato da Libertadores',
            description: 'Em apenas um ano, o Verdão conquista seu terceiro título continental, batendo o Flamengo na final.'
        }
    ];
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-desc">${item.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Função para configurar animações com GSAP
function setupAnimations() {
    // Animação do hero
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    // Animação das seções com ScrollTrigger
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
    
    // Animação dos cards de jogadores
    gsap.utils.toArray('.player-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Animação da linha do tempo
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Efeito parallax no hero
    const parallax = document.querySelector('.hero-parallax');
    if (parallax) {
        gsap.to(parallax, {
            scrollTrigger: {
                scrub: true
            },
            y: 100,
            ease: 'none'
        });
    }
}
