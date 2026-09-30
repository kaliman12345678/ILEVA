document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const btn = document.getElementById('mobileMenuBtn');
    const links = document.getElementById('navLinks');
    
    if(btn && links) {
        btn.addEventListener('click', () => links.classList.toggle('active'));
    }

    // Modals
    const triggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.modal-close');

    triggers.forEach(t => {
        t.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById(t.getAttribute('data-target'));
            if(modal) modal.classList.add('active');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(m => m.classList.remove('active'));
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]:not(.modal-trigger)').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                if(links.classList.contains('active')) links.classList.remove('active');
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
