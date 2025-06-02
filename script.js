document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const jogadoresContainer = document.querySelector('.jogadores');
    
   
    const elenco = [
        { nome: 'Weverton', posicao: 'Goleiro', numero: 21, foto: 'https://via.placeholder.com/150' },
        { nome: 'Gustavo Gómez', posicao: 'Zagueiro', numero: 15, foto: 'https://via.placeholder.com/150' },
        { nome: 'Raphael Veiga', posicao: 'Meia', numero: 23, foto: 'https://via.placeholder.com/150' },
        { nome: 'Endrick', posicao: 'Atacante', numero: 9, foto: 'https://via.placeholder.com/150' }
    ];
    
    elenco.forEach(jogador => {
        const card = document.createElement('div');
        card.className = 'jogador-card';
        card.innerHTML = `
            <img src="${jogador.foto}" alt="${jogador.nome}">
            <h3>${jogador.nome}</h3>
            <p>${jogador.posicao} | ${jogador.numero}</p>
        `;
        jogadoresContainer.appendChild(card);
    });
});

// Adicionar estilos dinâmicos para os cards de jogadores
const style = document.createElement('style');
style.textContent = `
    .jogadores {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
    }
    
    .jogador-card {
        background-color: white;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        width: 180px;
        transition: transform 0.3s;
    }
    
    .jogador-card:hover {
        transform: translateY(-10px);
    }
    
    .jogador-card img {
        width: 100%;
        border-radius: 50%;
        aspect-ratio: 1/1;
        object-fit: cover;
        margin-bottom: 1rem;
    }
    
    .jogador-card h3 {
        color: #006437;
        margin-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);
