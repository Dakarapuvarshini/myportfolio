// Sticky Navbar Color Change on Scroll
window.onscroll = function() {
    let navbar = document.querySelector('.header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Scroll Reveal Effect for Sections
const sections = document.querySelectorAll('.about, .about-content, .skills, .projects, .certificates');
const observerOptions = {
    root: null,
    threshold: 0.5,
};

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const observer = new IntersectionObserver(revealSection, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Add CSS for Hidden/Visible Effect
document.styleSheets[0].insertRule(`
    .hidden {
        opacity: 0;
        transform: translateY(50px);
    }
    .visible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`);
