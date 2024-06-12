const allQuestions = [
    {
        questionStatement: "When RCB is going to Win an IPL Trophy?",
        allOptions: ["2025", "Never", "Next Birth", "E sala cup kbhi na Namde"],
        correctAnswer: "E sala cup kbhi na Namde",
    },
    {
        questionStatement: "What is the capital of Germany?",
        allOptions: ["Berlin", "Hamburg", "Cologne", "Frankfurt"],
        correctAnswer: "Berlin",
    },
    {
        questionStatement: "What is the capital of France?",
        allOptions: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        questionStatement: "What is the capital of Italy?",
        allOptions: ["Rome", "Venice", "Milan", "Florence"],
        correctAnswer: "Rome",
    },
    {
        questionStatement: "What is the capital of Spain?",
        allOptions: ["Madrid", "Barcelona", "Valencia", "Seville"],
        correctAnswer: "Madrid",
    },
];

window.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");
    const question = document.getElementById("question");
    const allAnswers = document.getElementById("allAnswers");
    const btnReAppear = document.getElementById("btnReAppear");

    let questionIndex = 0;
    let score = 0;

    function loadQuestion() {
        question.innerHTML = allQuestions[questionIndex].questionStatement;

        // Clear previous answers
        allAnswers.innerHTML = '';

        // Create buttons for each answer option
        allQuestions[questionIndex].allOptions.forEach((oneOption) => {
            const button = document.createElement("button");
            button.innerHTML = oneOption;

            // Add click event listener to each button
            button.addEventListener("click", () => {
                selectOption(oneOption);
            });

            // Append the button to the answers container
            allAnswers.appendChild(button);
        });
    }

    function selectOption(selectedOption) {
        if (allQuestions[questionIndex].correctAnswer === selectedOption) {
            score++;
        }
        questionIndex++;
        if (questionIndex < allQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        btnReAppear.style.display = "block";
        result.innerText = `Your score is ${score} out of ${allQuestions.length} correct!`;

        // Clear the answers and question
        allAnswers.innerHTML = ""
        question.innerHTML = ""

        btnReAppear.addEventListener("click", () => {
            btnReAppear.style.display = "none"
            result.innerText = ""

            questionIndex = 0 
            score = 0
            loadQuestion()
        })
    }

    // Initial load of the first question
    loadQuestion();
});
