// Navigation bar scroll
let prevScrollPos = window.scrollY;

// const regularNav = document.querySelector('.regular-nav');
const alteredNav = document.querySelector('.altered-nav');

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        // Top of screen
        regularNav.style.transform = 'translateY(0)';
        alteredNav.style.transform = 'translateY(-100%)';
    } else if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        regularNav.style.transform = 'translateY(-100%)';
        alteredNav.style.transform = 'translateY(0)';
    } else {
        // Scrolling down
        regularNav.style.transform = 'translateY(-100%)';
        alteredNav.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;
});
