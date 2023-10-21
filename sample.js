const flashcard = document.getElementById("flashcard");
const flipButton = document.getElementById("flip-button");

const flashcardData = [
    { word: "Apple", meaning: "A fruit that grows on trees and is typically red or green." },
    { word: "Dog", meaning: "A domesticated carnivorous mammal." },
    // 他の単語と意味を追加
];

let currentCard = 0;

function updateCard() {
    flashcard.querySelector('.front').textContent = flashcardData[currentCard].word;
    flashcard.querySelector('.back').textContent = flashcardData[currentCard].meaning;
}

flipButton.addEventListener("click", function () {
    flashcard.style.transform = flashcard.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
});

flipButton.addEventListener("click", function () {
    currentCard = (currentCard + 1) % flashcardData.length;
    updateCard();
});

updateCard();
