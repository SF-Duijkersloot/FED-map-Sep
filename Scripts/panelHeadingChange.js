// Code voor de panel animations, wanneer een nieuwe panel in het scherm is, dan moet de de header/counter veranderen

// Bron: beetje hulp van ChatGPT

document.addEventListener("DOMContentLoaded", function () {
  const panels = document.querySelectorAll('.panel-overlay');
  const headers = document.querySelector('.sticky-heading-item');
  const stickyHeadingWrapper = document.querySelector('.sticky-heading-wrapper')
  const panelPositions = Array.from(panels).map(panel => {
    const rect = panel.getBoundingClientRect();
    const headerHeight = headers.getBoundingClientRect().height;
    return rect.top - headerHeight + window.scrollY;
  });
  let currentIndex = -1;

  const updateIndex = () => {
    const scrollPosition = window.scrollY;
  
    for (let i = panelPositions.length - 1; i >= 0; i--) {
      if (scrollPosition >= panelPositions[i]) {
        if (currentIndex !== i) {
          currentIndex = i;
          console.log('Current Index:', currentIndex);
  
          if (currentIndex === 0) {
            stickyHeadingWrapper.style.transform = "translateY(-10%)";
          }
          if (currentIndex === 1) {
            stickyHeadingWrapper.style.transform = "translateY(-135%)";
          }
          if (currentIndex === 2) {
            stickyHeadingWrapper.style.transform = "translateY(-260%)";
          }
        }
        break;
      }
    }
  };
  
  window.addEventListener('scroll', updateIndex);
  window.addEventListener('resize', () => {
    panelPositions.length = 0;
    panels.forEach(panel => {
      const rect = panel.getBoundingClientRect();
      const headerHeight = headers.getBoundingClientRect().height;
      panelPositions.push(rect.top - headerHeight + window.scrollY);
    });
    updateIndex();
  });

  updateIndex();
});
