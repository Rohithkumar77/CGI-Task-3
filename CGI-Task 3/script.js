const questions = [
    {
        id: 1,
        answer: 3,
        question: "Which was not one of Voldemort's Horcruxes?",
        options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"],
    },
    {
        id: 2,
        answer: 1,
        question: "Which of these are not one of Hagrid's many pets?",
        options: ["Grawp", "Fluffy", "Aragog", "Norberta"],
    },
    {
        id: 3,
        answer: 3,
        question: "Which class did Severus Snape always want to teach?",
        options: ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"],
    },
    {
        id: 4,
        answer: 3,
        question: "Which Hogwarts house did Moaning Myrtle belong in?",
        options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
    },
    {
        id: 5,
        answer: 2,
        question: "What class did Neville end up teaching at Hogwarts?",
        options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"],
    },
];

let score = 0;

const questionsContainer = document.querySelector(".questions-container");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit-button");
// ... (previous code)

function loadQuestions() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question-div"; // Add the "question-div" class
        questionDiv.innerHTML = `
            <p>${question.question}</p>
            <form class="options-form">
                <label><input type="radio" name="options-${index}" value="0"> ${question.options[0]}</label><br>
                <label><input type="radio" name="options-${index}" value="1"> ${question.options[1]}</label><br>
                <label><input type="radio" name="options-${index}" value="2"> ${question.options[2]}</label><br>
                <label><input type="radio" name="options-${index}" value="3"> ${question.options[3]}</label><br>
            </form>
        `;

        questionsContainer.appendChild(questionDiv);
    });
}

// ... (remaining code)

function calculateScore() {
    score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="options-${index}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = parseInt(selectedOption.value);
            if (selectedAnswer === question.answer) {
                score++;
            }
        }
    });

    scoreElement.textContent = `Score: ${score}/${questions.length}`;
}

submitButton.addEventListener("click", () => {
    calculateScore();
});

loadQuestions();
