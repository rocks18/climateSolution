// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('ServiceFlow Landing Page Initialized');

    // 1. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. ROI Calculator Logic
    const slider = document.getElementById('tech-slider');
    const savingsDisplay = document.getElementById('savings-amount');
    const techCount = document.getElementById('tech-count');

    if (slider && savingsDisplay) {
        slider.addEventListener('input', (e) => {
            const techs = e.target.value;
            // Formula: Techs * $250 (avg savings per tech/mo)
            const savings = techs * 250;
            savingsDisplay.textContent = savings.toLocaleString();
            if (techCount) techCount.textContent = techs;
        });
    }

    // 3. Hero Parallax
    const heroSection = document.querySelector('.hero-section');
    const mockupContainer = document.querySelector('.mockup-container');

    if (heroSection && mockupContainer) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 40;
            const y = (window.innerHeight / 2 - e.clientY) / 40;
            // Subtle rotation
            mockupContainer.style.transform = `rotateY(${-5 + x}deg) rotateX(${5 - y}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            mockupContainer.style.transform = `rotateY(-5deg) rotateX(5deg)`;
        });
    }
});
