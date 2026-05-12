// Add new recommendation
const form = document.getElementById("recommendationForm");
const input = document.getElementById("newRecommendation");
const list = document.getElementById("recommendation-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = input.value;
        list.appendChild(p);

        showPopup();
        input.value = "";
    }
});

// Popup function
function showPopup() {
    alert("Thank you! Your recommendation has been added.");
}

// Home button smooth scroll
function goHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
