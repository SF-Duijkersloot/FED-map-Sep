// De site heeft 2 navigation bars. De één is de standard, deze zie je als je aan de bovenkant van de pagina zit
// Daarnaast is een een alternate navbar. Deze is te zien als je omhoog scrolled

// scroll position aanmaken
let prevScrollPos = window.scrollY;

// const regularNav = document.querySelector('.regular-nav'); // grayed out omdat regularNav al in de mobileMenu code wordt aangemaakt. dit staat hier voor de context
const alteredNav = document.querySelector('.altered-nav');

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY; //huidige scroll position bijhouden

    if (currentScrollPos === 0) {
        // bovenkant van de pagina
        regularNav.style.transform = 'translateY(0)'; // naar standaar pos. zetten
        alteredNav.style.transform = 'translateY(-100%)'; // altered nav uit de weg schuiven
    } else if (prevScrollPos > currentScrollPos) {
        // omhoog scrollen
        regularNav.style.transform = 'translateY(-100%)';
        alteredNav.style.transform = 'translateY(0)';
    } else {
        // naar beneden scrollen
        regularNav.style.transform = 'translateY(-100%)';
        alteredNav.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;
});
