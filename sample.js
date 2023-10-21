const flashcard = document.getElementById("flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

const flashcardData = [
    { question: "質問1", answer: "答え1" },
    { question: "質問2", answer: "答え2" },
    // 他の質問と答えを追加
];

let currentCard = 0;

function updateCard() {
    front.textContent = flashcardData[currentCard].question;
    back.textContent = flashcardData[currentCard].answer;
}

flashcard.addEventListener("click", function () {
    flashcard.style.transform = "rotateY(180deg)";
});

back.addEventListener("click", function (e) {
    e.stopPropagation();
    flashcard.style.transform = "rotateY(0deg)";
    currentCard = (currentCard + 1) % flashcardData.length;
    updateCard();
});

updateCard();
