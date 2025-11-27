// Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('ServiceFlow Landing Page Initialized');

    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isHidden = navLinks.style.display === 'none' || navLinks.style.display === '';
            navLinks.style.display = isHidden ? 'flex' : 'none';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--color-surface)'; // Use variable
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = 'var(--shadow-lg)';
            navLinks.style.zIndex = '1000';

            navActions.style.display = isHidden ? 'flex' : 'none';
            navActions.style.flexDirection = 'column';
            navActions.style.position = 'absolute';
            navActions.style.top = '280px'; // Approximate
            navActions.style.left = '0';
            navActions.style.width = '100%';
            navActions.style.background = 'var(--color-surface)';
            navActions.style.padding = '0 20px 20px';
            navActions.style.zIndex = '1000';
        });
    }

    // 2. Smooth Scroll
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

    // 3. ROI Calculator Logic
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

    // 4. Hero Parallax (Updated for new HTML)
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

    // 5. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
    }

    // Toggle event
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Update Icon
            if (themeIcon) {
                if (newTheme === 'dark') {
                    themeIcon.classList.replace('ph-moon', 'ph-sun');
                } else {
                    themeIcon.classList.replace('ph-sun', 'ph-moon');
                }
            }
        });
    }
});
