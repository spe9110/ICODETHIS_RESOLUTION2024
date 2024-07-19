const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Orlando Stadium can be found in which big city?",
        options: ["Johannesburg", "Cape Town", "Durban"],
        correctAnswer: "Johannesburg"
    },
    {
        question: "How much water does Earth consist of?",
        options: ["71%", "75%", "60%"],
        correctAnswer: "71%"
    },
    {
        question: "Which element is the lightest?",
        options: ["Hydrogen", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo"],
        correctAnswer: "Tokyo"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Mars", "Venus"],
        correctAnswer: "Earth"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
        correctAnswer: "Leonardo da Vinci"
    }
];

const quiz = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    timer: null,
    skippedQuestions: 0,
    totalQuestions: questions.length,
    quizStarted: false,
};

document.querySelector('.submit').addEventListener('click', submitAnswer);
document.querySelector('.later').addEventListener('click', skipQuestion);

const beginElement = document.querySelector('.begin');
const quizElement = document.getElementById('quiz');
const start = document.querySelector('.start');

start.addEventListener('click', () => {
    beginElement.style.display = 'none';
    quizElement.style.display = 'block';
    startQuiz();
});

function startQuiz() {
    loadQuestion();
    startTimer();
}

function resetTimer() {
    clearInterval(quiz.timer);
    document.getElementById('time-elapsed').textContent = '0:30';
}

function loadQuestion() {
    const currentQuestion = questions[quiz.currentQuestionIndex];
    const questionNumberElement = document.getElementById('question-number');
    const questionTextElement = document.getElementById('question-text');
    const answerOptionsElement = document.getElementById('answer-options');

    questionNumberElement.textContent = quiz.currentQuestionIndex + 1;
    questionTextElement.textContent = currentQuestion.question;

    answerOptionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('form-group');

        const label = document.createElement('label');
        label.setAttribute('for', `answer${index}`);
        label.innerHTML = `${String.fromCharCode(65 + index)}. ${option}`;

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.id = `answer${index}`;
        radioInput.onclick = () => selectAnswer(index);

        optionContainer.appendChild(label);
        optionContainer.appendChild(radioInput);
        answerOptionsElement.appendChild(optionContainer);
    });

    resetTimer();
}

function updateRemainingQuestions() {
    const remainingQuestionsElement = document.getElementById('remaining-questions');
    const answeredQuestions = quiz.currentQuestionIndex + 1 - quiz.skippedQuestions;
    const remainingQuestions = quiz.totalQuestions - answeredQuestions;

    remainingQuestionsElement.innerHTML = ` (${remainingQuestions} remaining)`;

    const questionNumberElement = document.getElementById('question-number');
    questionNumberElement.textContent = answeredQuestions;
}

function selectAnswer(index) {
    const options = document.getElementsByName('answer');
    options[index].checked = true;

    document.querySelectorAll('.form-group label').forEach(label => {
        label.classList.remove('selected');
    });

    document.querySelector(`[for=answer${index}]`).classList.add('selected');

    submitAnswer();
}

function handleTimeout() {
    clearInterval(quiz.timer);

    const currentQuestion = questions[quiz.currentQuestionIndex];
    currentQuestion.skipped = false;
    quiz.wrongAnswers++;

    updateScore();
    alert("Time's up! Moving to the next question.");
    loadNextQuestion();
}

function startTimer() {
    let seconds = 30;

    quiz.timer = setInterval(() => {
        seconds--;

        if (seconds <= 0) {
            handleTimeout();
        }

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        document.getElementById('time-elapsed').textContent = formattedTime;
    }, 1000);
}

function submitAnswer() {
    clearInterval(quiz.timer);

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.id.substring(6);
        const currentQuestion = questions[quiz.currentQuestionIndex];

        if (currentQuestion.correctAnswer === currentQuestion.options[userAnswer]) {
            quiz.correctAnswers++;
        } else {
            quiz.wrongAnswers++;
        }

        updateScore();
        setTimeout(loadNextQuestion, 1000);
    } else {
        alert("Please select an answer before submitting.");
    }
}

function skipQuestion() {
    clearInterval(quiz.timer);
    markCurrentQuestionAsSkipped();
    quiz.skippedQuestions++;
    updateScore();
    loadNextQuestion();
    updateRemainingQuestions();
}

function markCurrentQuestionAsSkipped() {
    questions[quiz.currentQuestionIndex].skipped = true;
}

function updateScore() {
    const correctScoreElement = document.querySelector('.correct');
    const mistakeScoreElement = document.querySelector('.mistake');
    const skippedScoreElement = document.querySelector('.skipped');

    correctScoreElement.innerHTML = `<span class="icon"><i class="bi bi-check-lg"></i></span> ${quiz.correctAnswers} Correct`;
    mistakeScoreElement.innerHTML = `<span class="icon"><i class="bi bi-x"></i></span> ${quiz.wrongAnswers} Wrong`;
    skippedScoreElement.innerHTML = `<span class="icon"><i class="bi bi-arrow-right-short"></i></span> ${quiz.skippedQuestions} Skipped`;
}

function loadNextQuestion() {
    quiz.currentQuestionIndex++;
    const remainingSkippedQuestions = questions.slice(quiz.currentQuestionIndex).filter(q => q.skipped);

    if (remainingSkippedQuestions.length > 0) {
        quiz.currentQuestionIndex = questions.indexOf(remainingSkippedQuestions[0]);
        loadQuestion();
        startTimer();
        updateRemainingQuestions();
    } else if (quiz.currentQuestionIndex < questions.length) {
        loadQuestion();
        startTimer();
        updateRemainingQuestions();
    } else {
        finishQuiz();
    }
}

function showSkippedQuestions() {
    const skippedQuestionsList = questions.filter(q => q.skipped);

    if (skippedQuestionsList.length > 0) {
        for (const skippedQuestion of skippedQuestionsList) {
            alert(`Skipped Question:\n${skippedQuestion.question}`);
        }
    } else {
        alert('No more skipped questions.');
    }
}

function finishQuiz() {
    clearInterval(quiz.timer);
    showSkippedQuestions();
    alert(`Quiz Completed!\nCorrect Answers: ${quiz.correctAnswers}\nWrong Answers: ${quiz.wrongAnswers}\nSkipped Questions: ${quiz.skippedQuestions}`);

    // Reset quiz object properties
    quiz.currentQuestionIndex = 0;
    quiz.correctAnswers = 0;
    quiz.wrongAnswers = 0;
    quiz.skippedQuestions = 0;

    // Reset the skipped flag for all questions
    questions.forEach(q => q.skipped = false);

    updateScore();  // Reset the score display

    beginElement.style.display = 'block';
    quizElement.style.display = 'none';

    resetTimer();
}
