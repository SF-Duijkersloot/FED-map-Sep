// Navigation bar scroll
let prevScrollPos = window.scrollY;

const alteredNav = document.querySelector('.altered-nav');

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        // Top of screen
        alteredNav.style.transform = 'translateY(-0%)';
    } else if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        alteredNav.style.transform = 'translateY(0%)';
    } else {
        // Scrolling down
        alteredNav.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;
});