// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const btnMobile = document.querySelector('.btn-mobile');
    const mainNav = document.querySelector('.main-nav');
    
    btnMobile.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            btnMobile.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize Swiper for news slider
    const newsSwiper = new Swiper('.news-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
    
    // Load news dynamically
    loadNews();
    
    // Load games from API
    loadGames();
    
    // Load team players
    loadTeam();
    
    // Load timeline history
    loadTimeline();
    
    // Initialize GSAP animations
    initAnim
