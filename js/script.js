document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for elements
    const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .zoom-in, .fade-in-down');
    const sectionTitles = document.querySelectorAll('.section-title');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Element is 20% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('section-title')) {
                    entry.target.closest('.section').classList.add('active'); // Activate section title underline
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));
    sectionTitles.forEach(el => observer.observe(el)); // Observe section titles too for their specific animation

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'var(--bg-dark)'; // More solid background
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.6)';
        } else {
            header.style.backgroundColor = 'rgba(10, 25, 47, 0.9)'; // Semi-transparent
            header.style.boxShadow = '0 2px 10px var(--shadow-color)';
        }
    });

    // Simple typing animation for hero tagline (pure CSS is better for single use, but this demonstrates JS)
    // Removed to favor pure CSS solution in style.css for 'typing' class
});
