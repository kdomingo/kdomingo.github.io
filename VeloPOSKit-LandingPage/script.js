// VeloPOSKit Landing Page Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Glassmorphism Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Smooth Scroll Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Module Cards Micro-Interactions
    const modules = document.querySelectorAll('.module-box');
    modules.forEach(mod => {
        mod.addEventListener('mouseenter', () => {
            modules.forEach(m => m.classList.remove('active'));
            mod.classList.add('active');
        });
    });

    console.log("⚡ VeloPOSKit Landing Page Initialized — Commercial License");
});
