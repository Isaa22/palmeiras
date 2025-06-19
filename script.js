document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Carregar elenco dinamicamente
    const squadContainer = document.getElementById('squad-container');
    const players = [
        { name: 'Weverton', position: 'Goleiro', image: 'img/players/weverton.jpg' },
        { name: 'Marcos Rocha', position: 'Lateral Direito', image: 'img/players/marcos-rocha.jpg' },
        { name: 'Gustavo Gómez', position: 'Zagueiro', image: 'img/players/gustavo-gomez.jpg' },
        { name: 'Murilo', position: 'Zagueiro', image: 'img/players/murilo.jpg' },
        { name: 'Piquerez', position: 'Lateral Esquerdo', image: 'img/players/piquerez.jpg' },
        { name: 'Zé Rafael', position: 'Volante', image: 'img/players/ze-rafael.jpg' },
        { name: 'Gabriel Menino', position: 'Meia', image: 'img/players/gabriel-menino.jpg' },
        { name: 'Raphael Veiga', position: 'Meia', image: 'img/players/raphael-veiga.jpg' },
        { name: 'Dudu', position: 'Atacante', image: 'img/players/dudu.jpg' },
        { name: 'Rony', position: 'Atacante', image: 'img/players/rony.jpg' },
        { name: 'Endrick', position: 'Atacante', image: 'img/players/endrick.jpg' },
        { name: 'Abel Ferreira', position: 'Técnico', image: 'img/players/abel-ferreira.jpg' }
    ];
    
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        
        playerCard.innerHTML = `
            <div class="player-image" style="background-image: url('${player.image}')"></div>
            <div class="player-info">
                <h3>${player.name}</h3>
                <p>${player.position}</p>
            </div>
        `;
        
        squadContainer.appendChild(playerCard);
    });
    
    // Carregar notícias dinamicamente
    const newsContainer = document.getElementById('news-container');
    const news = [
        { 
            title: 'Palmeiras vence clássico e assume liderança', 
            date: '15/10/2023', 
            excerpt: 'O Palmeiras derrotou seu rival por 2-0 em jogo válido pelo Campeonato Brasileiro.', 
            image: 'img/news/news1.jpg'
        },
        { 
            title: 'Endrick é eleito revelação do Brasileirão', 
            date: '12/10/2023', 
            excerpt: 'Jovem atacante do Palmeiras recebe prêmio de melhor jogador jovem do campeonato.', 
            image: 'img/news/news2.jpg'
        },
        { 
            title: 'Clube anuncia renovação de contrato com técnico', 
            date: '08/10/2023', 
            excerpt: 'Abel Ferreira assina renovação e permanece no comando do Verdão por mais duas temporadas.', 
            image: 'img/news/news3.jpg'
        }
    ];
    
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        newsCard.innerHTML = `
            <div class="news-image" style="background-image: url('${item.image}')"></div>
            <div class="news-content">
                <p class="news-date">${item.date}</p>
                <h3>${item.title}</h3>
                <p>${item.excerpt}</p>
                <a href="#" class="read-more">Leia mais</a>
            </div>
        `;
        
        newsContainer.appendChild(newsCard);
    });
    
    // Efeito de scroll para header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
