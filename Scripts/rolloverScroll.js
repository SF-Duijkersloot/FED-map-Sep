// Bron: beetje hulp van ChatGPT

document.addEventListener("DOMContentLoaded", function () {
    // Calculate initial translateX values
    const initialTranslateX1 = -250;
    const initialTranslateX2 = -130;
  
    // Get references to the elements
    const rolloverTextWrap = document.querySelector('.rollover-text-wrap');
    const rolloverTextElements = document.querySelectorAll('.rollover-text');
  
    // Function to update the transform property of rollover-text elements
    function updateTransform(scrollProgress) {
      const translateX1 = initialTranslateX1 - scrollProgress * 150;
      const translateX2 = initialTranslateX2 + scrollProgress * 150;
  
      rolloverTextElements[0].style.transform = `translateX(${translateX1}px)`;
      rolloverTextElements[1].style.transform = `translateX(${translateX2}px)`;
    }
  
    // Options for the Intersection Observer
    const observerOptions = {
      threshold: [0, 1], // Trigger the observer when the element enters or exits the viewport
    };
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const scrollProgress = entry.intersectionRatio; // Use intersectionRatio directly
      updateTransform(scrollProgress);
    }, observerOptions);
  
    // Observe the rolloverTextWrap element
    observer.observe(rolloverTextWrap);
  
    // Attach scroll event listener
    window.addEventListener('scroll', () => {
      const scrollPosition = rolloverTextWrap.getBoundingClientRect().bottom / window.innerHeight;
      // Ensure scroll progress is between 0 and 1
      const scrollProgress = Math.min(Math.max(scrollPosition, 0), 1);
      updateTransform(scrollProgress);
    });
  
    // Initial update of the transform based on scroll position
    window.dispatchEvent(new Event('scroll'));
  });
  