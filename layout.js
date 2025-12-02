/**
 * layout.js
 * Handles dynamic injection of Header and Footer to ensure consistency across pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();
    initMobileMenu();
    highlightActiveLink();
});

function injectHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Determine correct paths for links based on current page
    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const pricingLink = isHome ? '#pricing' : 'index.html#pricing';
    const benefitsLink = isHome ? '#benefits' : 'index.html#benefits';

    header.innerHTML = `
        <div class="container">
            <a href="index.html" style="text-decoration:none;">
                <div class="logo">Service<span class="highlight">Flow</span></div>
            </a>
            <ul class="nav-links">
                <li><a href="features.html">Features</a></li>
                <li><a href="${benefitsLink}">Benefits</a></li>
                <li><a href="${pricingLink}">Pricing</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
            <div class="nav-actions">
                <a href="demo.html" class="btn btn-primary">Start Free Trial</a>
            </div>
            <button class="mobile-menu-toggle"><i class="ph ph-list"></i></button>
        </div>
    `;
}

function injectFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2024 ServiceFlow Inc.</p>
                <div>
                    <a href="support.html" style="margin-right:20px; color:var(--color-text-light); text-decoration:none;">Help Center</a>
                    <a href="privacy.html" style="margin-right:20px; color:var(--color-text-light); text-decoration:none;">Privacy</a>
                    <a href="terms.html" style="color:var(--color-text-light); text-decoration:none;">Terms</a>
                </div>
            </div>
        </div>
    `;
}

function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check: if current path contains the href (e.g. /features.html contains features.html)
        if (href !== '#' && href.includes('.html') && currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
}
