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