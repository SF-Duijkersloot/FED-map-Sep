// FAQ click handler
const questionItems = document.querySelectorAll(".question-wrapper");

questionItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        const questionSubitems = item.querySelector(".question-subitems");
        if (questionSubitems) {
            questionSubitems.style.maxHeight = item.classList.contains("open") ? questionSubitems.scrollHeight + "px" : "0";
        }
    });
});

// Pricing method code
const monthlyButton = document.querySelector(".monthly-button");
const yearlyButton = document.querySelector(".yearly-button");
const backgroundDiv = document.querySelector(".button-background");
const starterPrice = document.querySelector(".starter-price");
const scalePrice = document.querySelector(".scale-price");

monthlyButton.addEventListener("click", (e) => {
    e.preventDefault();
    starterPrice.innerHTML = '<p class="starter-price">$1,299 <span>/ month</span></p>';
    scalePrice.innerHTML = '<p class="scale-price">$2,999 <span>/ month</span></p>';
    backgroundDiv.classList.remove("translate-right");
});

yearlyButton.addEventListener("click", (e) => {
    e.preventDefault();
    starterPrice.innerHTML = '<p class="starter-price">$14,388 <span>/ year</span></p>';
    scalePrice.innerHTML = '<p class="scale-price">$32,388 <span>/ year</span></p>';
    backgroundDiv.classList.add("translate-right");
});
