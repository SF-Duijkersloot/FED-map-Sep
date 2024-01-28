// FAQ click handler //
const questionItems = document.querySelectorAll(".question-wrapper");

// simpele code om de faq sub items te openen en sluiten
questionItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        const questionSubitems = item.querySelector(".question-subitems");
        if (questionSubitems) {
            questionSubitems.style.maxHeight = item.classList.contains("open") ? questionSubitems.scrollHeight + "px" : "0";
        }
    });
});


// Pricing method code //
const monthlyButton = document.querySelector(".monthly-button");
const yearlyButton = document.querySelector(".yearly-button");
const backgroundDiv = document.querySelector(".button-background");
const starterPrice = document.querySelector(".starter-price");
const scalePrice = document.querySelector(".scale-price");

// code om de tekst te veranderen voor de monthly pricing scheme
monthlyButton.addEventListener("click", (e) => {
    e.preventDefault(); // default behavior van de <a> tag stoppen
    starterPrice.innerHTML = '<p class="starter-price">$1,299 <span>/ month</span></p>';
    scalePrice.innerHTML = '<p class="scale-price">$2,999 <span>/ month</span></p>';
    backgroundDiv.classList.remove("translate-right");  // class voor de switch animation
});

// code om de tekst te veranderen voor de yearly pricing scheme
yearlyButton.addEventListener("click", (e) => {
    e.preventDefault(); // default behavior van de <a> tag stoppen
    starterPrice.innerHTML = '<p class="starter-price">$14,388 <span>/ year</span></p>';
    scalePrice.innerHTML = '<p class="scale-price">$32,388 <span>/ year</span></p>';
    backgroundDiv.classList.add("translate-right"); // class voor de switch animation
});
