// Code voor de panel heading change, maar dit is een fix voor de laatste panel. Het gaat om de padding van de header op de laaste panel.
// Bij deze oplossing voeg ik simpelweg wat padding toe. Op de originele site, gebruiken ze een rare manier met fixed position etc. Deze oplossing werkt simpeler.

document.addEventListener("DOMContentLoaded", function () {
  const panelOverlays = document.querySelectorAll(".panel-overlay");
  const lastPanelOverlay = panelOverlays[panelOverlays.length - 1];
  const stickyHeaderItem = document.querySelector('.sticky-heading-item');

  window.addEventListener("scroll", function () {
    const rect = lastPanelOverlay.getBoundingClientRect();
    if (rect.top <= 0) {
      stickyHeaderItem.classList.add("padding-bottom");
    } else {
      stickyHeaderItem.classList.remove("padding-bottom");
    }
  });
});
