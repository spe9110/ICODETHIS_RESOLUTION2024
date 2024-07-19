const quizData = [
    {
        question: "How many days do we have in a week?",
        a: "1",
        b: "4",
        c: "7",
        correct: "c"
    }, {
        question: "What is the top color in the rainbow?",
        a: "Pink",
        b: "Blue",
        c: "Red",
        correct: "c"
    }, {
        question: "How many weeks are there in one year?",
        a: "52",
        b: "54",
        c: "59",
        correct: "a"
    }, {
        question: "Which is the nearest star to planet earth?",
        a: "Moon",
        b: "Sun",
        c: "Mars",
        correct: "b"
    }, {
        question: "Which is the fastest animal on land?",
        a: "Cheetah",
        b: "Dog",
        c: "Elephant",
        correct: "a"
    }
]

const question = document.querySelector('.question')
const answers = document.querySelectorAll('.answer')
const optionA = document.querySelector('.optionA')
const optionB = document.querySelector('.optionB')
const optionC = document.querySelector('.optionC')
const sendBtn = document.querySelector('.sendBtn')
const ansLaterBtn = document.querySelector('.ansLaterBtn')
const questionNo = document.querySelector('.questionNo')
const remainingQues = document.querySelector('.remainingQues')
const correct = document.querySelector('.correct')
const wrong = document.querySelector('.wrong')
const quizContainer = document.querySelector('.quizContainer')
const btns = document.querySelector('.btns')
const correctResult = document.querySelector('.correctResult')
const wrongResult = document.querySelector('.wrongResult')
const percent = document.querySelector('.percent')
const restartQuiz = document.querySelector('.restartQuiz')
const resultContainer = document.querySelector('.resultContainer')


let currQues = 0;
let score = 0
let quesNo = 1
let remainingQuestions = 4
let wrongNo = 0

const deselectAnswers = () => {
    answers.forEach((answer) => {
        answer.checked = false;
    })
}

const loadQuiz = () => {
    deselectAnswers()
    let quizQues = quizData[currQues]

    correct.innerHTML = score;
    wrong.innerHTML = wrongNo;
    questionNo.innerHTML = quesNo
    remainingQues.innerHTML = remainingQuestions
    question.innerHTML = quizQues.question;
    optionA.innerHTML = quizQues.a;
    optionB.innerHTML = quizQues.b;
    optionC.innerHTML = quizQues.c;
}

loadQuiz()

let timeRemaining = 25 * 60; 
let timer;

const showResult = () => {
    quizContainer.classList.add('-translate-y-[1000px]')
    btns.classList.add('translate-y-[1000px]')
    percent.innerHTML = (score / quizData.length) * 100 + "%"
    correctResult.innerHTML = score
    wrongResult.innerHTML = wrongNo
    setTimeout(() => {
        resultContainer.classList.remove('scale-0')
    }, 300)
    resetTimer()
}

sendBtn.addEventListener("click", () => {
    let ans;

    answers.forEach(answer => {
        if (answer.checked) {
            ans = answer.value
        }
    })

    if (ans) {
        if (ans === quizData[currQues].correct) {
            score++
            correct.innerHTML = score
        } else {
            wrongNo++
            wrong.innerHTML = wrongNo

        }

        currQues++
        quesNo++
        remainingQuestions--

        if (currQues < quizData.length) {
            loadQuiz();
        } else {
            showResult()
        }
    }


})

ansLaterBtn.addEventListener("click", () => {
    currQues++;
    quesNo++;
    remainingQuestions--;
    if (currQues < quizData.length) {
        loadQuiz();
    } else {
        showResult()
    }

})

restartQuiz.addEventListener("click", () => {
    currQues = 0;
    score = 0
    quesNo = 1
    remainingQuestions = 4
    wrongNo = 0

    resultContainer.classList.add('scale-0')
    setTimeout(() => {
        quizContainer.classList.remove('-translate-y-[1000px]')
        btns.classList.remove('translate-y-[1000px]')
    }, 300)

    loadQuiz()
    startTimer()

})

const main = document.querySelector('.main')
const startText = document.querySelector('.startText')

setTimeout(() => {
    startText.classList.add('scale-0')
    setTimeout(() => {
        main.classList.remove('-translate-y-[110vh]')
    }, 300)
}, 1200)


let stopwatch = document.querySelector('.timer')

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    stopwatch.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(function () {
            timeRemaining--;
            if (timeRemaining < 0) {
                clearInterval(timer);
                timer = null;
                alert("Time's up!");
            } else {
                updateTimer();
            }

        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeRemaining = 25 * 60;
    updateTimer();
}

startTimer()
updateTimer();
