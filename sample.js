const flashcard = document.getElementById("flashcard");
const flipButton = document.getElementById("flip-button");

flipButton.addEventListener("click", function () {
    flashcard.style.transform = flashcard.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
});
