// Code voor de rollover van 2 tekst lines op de homepage.
// Bron: beetje hulp van ChatGPT

document.addEventListener("DOMContentLoaded", function () {
    // standaard posities
    const initialTranslateX1 = -250;
    const initialTranslateX2 = -130;
  
    const rolloverTextWrap = document.querySelector('.rollover-text-wrap');
    const rolloverTextElements = document.querySelectorAll('.rollover-text');
  
    // op bsis van de scrollprogress, beide teksten op de x axis bewegen
    function updateTransform(scrollProgress) {
      //beide x translations gaan andere kant op d.m.v. "-" & "+" 
      const translateX1 = initialTranslateX1 - scrollProgress * 150;
      const translateX2 = initialTranslateX2 + scrollProgress * 150;

      // translation values toepassen
      rolloverTextElements[0].style.transform = `translateX(${translateX1}px)`;
      rolloverTextElements[1].style.transform = `translateX(${translateX2}px)`;
    }
  
    // intersection observer options
    const observerOptions = {
      threshold: [0, 1], // begin als het hele element is de viewport is en eindig als het helemaal buiten is
    };
  
    // intersection observer
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const scrollProgress = entry.intersectionRatio; // intersectionRatio gebruiken voor de scrollProgress
      updateTransform(scrollProgress);
    }, observerOptions);
  
    // rollover tekst observen
    observer.observe(rolloverTextWrap);
  
    // scroll listener maken
    window.addEventListener('scroll', () => {
      const scrollPosition = rolloverTextWrap.getBoundingClientRect().bottom / window.innerHeight;
      const scrollProgress = Math.min(Math.max(scrollPosition, 0), 1);
      updateTransform(scrollProgress);
    });
  
    // eerste update van de transform op basis van scrollpositie
    window.dispatchEvent(new Event('scroll'));
  });
  
