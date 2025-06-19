// main.js - Código básico para o site do Palmeiras

document.addEventListener('DOMContentLoaded', function() {
    // ============ MENU MOBILE ============
    const btnMobile = document.querySelector('.btn-mobile');
    const mainNav = document.querySelector('.main-nav');
    
    btnMobile.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // ============ HEADER SCROLL EFFECT ============
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============ CARROSSEL DE NOTÍCIAS ============
    if (document.querySelector('.news-slider')) {
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

        // Simulação de notícias
        const newsData = [
            {
                title: 'Palmeiras vence clássico',
                date: '15/06/2023',
                excerpt: 'Vitória importante no campeonato brasileiro',
                image: 'img/news1.jpg'
            },
            {
                title: 'Novo reforço anunciado',
                date: '14/06/2023',
                excerpt: 'Clube apresenta nova contratação para a temporada',
                image: 'img/news2.jpg'
            },
            {
                title: 'Jogador se recupera de lesão',
                date: '13/06/2023',
                excerpt: 'Atleta volta aos treinos após período de tratamento',
                image: 'img/news3.jpg'
            }
        ];

        const swiperWrapper = document.querySelector('.swiper-wrapper');
        
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
            swiperWrapper.appendChild(slide);
        });

        newsSwiper.update();
    }

    // ============ PRÓXIMOS JOGOS ============
    if (document.getElementById('games-container')) {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                       'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        const currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();
        
        const currentMonthElement = document.getElementById('current-month');
        const prevMonthBtn = document.getElementById('prev-month');
        const nextMonthBtn = document.getElementById('next-month');
        const gamesContainer = document.getElementById('games-container');
        
        function updateMonthDisplay() {
            currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`;
            loadGames();
        }
        
        function loadGames() {
            gamesContainer.innerHTML = '<div class="loader"></div>';
            
            // Simulação de dados de API
            setTimeout(() => {
                const gamesData = [
                    {
                        date: '18/06/2023',
                        time: '16:00',
                        home: 'Palmeiras',
                        away: 'Corinthians',
                        competition: 'Brasileirão',
                        homeLogo: 'img/logo-palmeiras.png',
                        awayLogo: 'img/logo-corinthians.png',
                        compLogo: 'img/logo-brasileirao.png'
                    },
                    {
                        date: '21/06/2023',
                        time: '21:30',
                        home: 'Flamengo',
                        away: 'Palmeiras',
                        competition: 'Libertadores',
                        homeLogo: 'img/logo-flamengo.png',
                        awayLogo: 'img/logo-palmeiras.png',
                        compLogo: 'img/logo-libertadores.png'
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
                                <img src="${game.homeLogo}" alt="${game.home}">
                                <span>${game.home}</span>
                            </div>
                            <div class="game-vs">VS</div>
                            <div class="game-team">
                                <img src="${game.awayLogo}" alt="${game.away}">
                                <span>${game.away}</span>
                            </div>
                        </div>
                        <div class="game-info">
                            <div class="game-competition">
                                <img src="${game.compLogo}" alt="${game.competition}">
                                <span>${game.competition}</span>
                            </div>
                            <a href="#" class="game-tickets">Ingressos</a>
                        </div>
                    `;
                    gamesContainer.appendChild(gameCard);
                });
            }, 800);
        }
        
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
        
        updateMonthDisplay();
    }

    // ============ ELENCO ============
    if (document.getElementById('team-grid')) {
        const teamData = [
            { id: 1, name: 'Weverton', number: 21, position: 'Goleiro', positionCode: 'goleiro', image: 'img/players/weverton.jpg' },
            { id: 2, name: 'Gustavo Gómez', number: 15, position: 'Zagueiro', positionCode: 'defesa', image: 'img/players/gomez.jpg' },
            { id: 3, name: 'Piquerez', number: 22, position: 'Lateral', positionCode: 'defesa', image: 'img/players/piquerez.jpg' },
            { id: 4, name: 'Zé Rafael', number: 8, position: 'Volante', positionCode: 'meio', image: 'img/players/zerafael.jpg' },
            { id: 5, name: 'Raphael Veiga', number: 23, position: 'Meia', positionCode: 'meio', image: 'img/players/veiga.jpg' },
            { id: 6, name: 'Dudu', number: 7, position: 'Atacante', positionCode: 'ataque', image: 'img/players/dudu.jpg' }
        ];

        const teamGrid = document.getElementById('team-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
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
                    </div>
                `;
                teamGrid.appendChild(playerCard);
            });
        }
        
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
        
        renderTeam(teamData);
    }

    // ============ LINHA DO TEMPO ============
    if (document.querySelector('.timeline')) {
        const timelineData = [
            { year: '1914', title: 'Fundação', description: 'Fundado como Palestra Itália' },
            { year: '1942', title: 'Mudança de nome', description: 'Passa a se chamar Palmeiras' },
            { year: '1999', title: 'Primeira Libertadores', description: 'Conquista da América' },
            { year: '2020', title: 'Segunda Libertadores', description: 'Título contra o Santos' }
        ];

        const timeline = document.querySelector('.timeline');
        
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

    // ============ ANIMAÇÕES SIMPLES ============
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });
});
