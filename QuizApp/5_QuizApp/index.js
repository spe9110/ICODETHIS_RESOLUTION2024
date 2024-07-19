// selectors
const btnStart = document.querySelector("#btn-start");
const btnNext = document.querySelector("#btn-next");
const btnScore = document.querySelector("#btn-score");
const btnRestart = document.querySelector("#btn-restart");
const panelQuestions = document.querySelector("#panel-questions");
const panelSelect = document.querySelector("#panel-select");
const panelMsg = document.querySelector("#panel-msg");

const answerButtonElement = document.querySelector("#answers");
const questionElement = document.querySelector("#question");
const catSelectList = document.querySelector("#quiz-cat-id");
const counterQuestionNumber = document.querySelector("#question-num");
const counterQuestionRemaining = document.querySelector("#question-remaining");
const tallyCorrect = document.querySelector("#answers-correct");
const tallyInCorrect = document.querySelector("#answers-incorrect");


let countCorrect = 0;
let countInCorrect = 0;
// dev questions to reduce load on api while developing
const DEV_QUESTIONS = [
    {
        "category": "Entertainment%3A%20Books",
        "type": "multiple",
        "difficulty": "easy",
        "question": "George%20Orwell%20wrote%20this%20book%2C%20which%20is%20often%20considered%20a%20statement%20on%20government%20oversight.",
        "correct_answer": "1984",
        "incorrect_answers": [
            "The%20Old%20Man%20and%20the%20Sea",
            "Catcher%20and%20the%20Rye",
            "To%20Kill%20a%20Mockingbird"
        ]
    },
    {
        "category": "Entertainment%3A%20Books",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How%20many%20books%20are%20in%20the%20Chronicles%20of%20Narnia%20series%3F",
        "correct_answer": "7",
        "incorrect_answers": [
            "6",
            "8",
            "5"
        ]
    },
]




// define number of questions to get
const numQuestions = 10;

let currentQuestionIndex, correctAnswer, shuffleAnswers, answerScore, txtPoints;

let questions = [];
let userScore = 0;
let possibleScore = 0;

// get api token to send with api fetch to avoid getting the same questions
let apiToken = "";
// API - get token
(async () => {
  async function getToken() {
    const url = "https://opentdb.com/api_token.php?command=request";

    const response = await fetch(url);
    const data = await response.json();
    apiToken = data.token;
  }
  await getToken();
})();

// start button - start/restart game
btnStart.addEventListener("click", startGame);

// next button - increase question index and set question
btnNext.addEventListener("click", () => {
  currentQuestionIndex++;
  btnNext.disabled = true;
  //btnNext.classList.add("opacity-0");
  setNextQuestion();
});
// show score button (visible at end of quiz)
btnScore.addEventListener("click", showScore);

// start game
function startGame() {
  // hidden elements - used when starting again

  panelSelect.classList.remove("translate-y-0")


  //addClass(panelSelect, "hidden");
  panelMsg.classList.add("scale-0");
  questionElement.innerText = "";
  answerButtonElement.innerText = "";

  btnNext.disabled = true;
  //btnNext.classList.add("opacity-0");

  // get cat id for api url
  const catId = catSelectList.value; // I wanted to get the list of categories via the api but it appears that many of the categories no longer work

  // define selected cat title for car header
  const catTitle = catSelectList.options[catSelectList.selectedIndex].text;
  //quizCatTitleElement.innerText = catTitle;

  // define apu url with cat, number of questions and token
  const urlQuiz = `https://opentdb.com/api.php?amount=${numQuestions}&encode=url3986&category=${catId}&token=${apiToken}`;

  // set current question index to 0 for new quiz
  currentQuestionIndex = 0;


    //questions = DEV_QUESTIONS
    //setNextQuestion();

  // fetch questions via api
  (async () => {
    async function getQuestions() {
      const url = `${urlQuiz}`;

      const response = await fetch(url);
      const repositories = await response.json();
      //console.log(repositories);
      questions = [...repositories.results];
       // console.log(questions);
      // set up first question
      setNextQuestion();
    }
    await getQuestions();
  })();
  
}

// reset state
function resetState() {
  // show "next" button
  //addClass(btnNext);
  // remove old answers
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

// prepare next question
function setNextQuestion() {
  resetState();
  // show question
  showQuestion(currentQuestionIndex);
}

const LETTERS = ["A", "B","C", "D"];

function showQuestion(index) {
  //console.log(`showQuestion: ${questions}`);

  answerButtonElement.innerHTML = '';
  questionElement.innerText = '';
  questionElement.classList.add("opacity-0");

  let delay = 500;


    const question = questions[index];
    counterQuestionNumber.innerText = index + 1;
    counterQuestionRemaining.innerText = numQuestions - index -1;
  if (!question) {
    alert("no question");
  } else {
    // add question
    setTimeout(() => questionElement.innerText = decodeURIComponent(question.question), 240);
    setTimeout(() => questionElement.classList.remove("opacity-0"), delay)
    delay += 600;

    // get value of correct answer to be able to check against selected answer - ideally we would use an id rather than the text value
    correctAnswer = decodeURIComponent(question.correct_answer);

    // need to combine answers (wrong + correct) into an array
    const answers = [...question.incorrect_answers];
    // add correct answer
    answers.push(correctAnswer);

    // random sort so that correct answer is not always last
    shuffleAnswers = answers.sort(() => Math.random() - 0.5);

    //console.log(shuffleAnswers);
    
    // add answers
    shuffleAnswers.forEach((answer,idx) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.className = "sr-only";
      input.value = decodeURIComponent(answer);
      input.name = 'answer';
      input.id = `answer-${idx}`;
      
      const label = document.createElement("label");
      label.className = "opacity-0";
      label.setAttribute("for", `answer-${idx}`);
      label.innerHTML=`<span>${LETTERS[idx]}</span> ${decodeURIComponent(answer)}`;
      //button.innerHTML = decodeURIComponent(answer);
    
      input.addEventListener("change", selectAnswer);

      answerButtonElement.appendChild(input);
      answerButtonElement.appendChild(label);

      setTimeout(() => label.classList.remove("opacity-0"), delay)
      delay += 300;
    });

    // show question container
    panelQuestions.classList.add("!translate-y-0")

    // show next button
    //removeClass(btnNext, "hidden");
  }
}
function selectAnswer(e) {
  //const selectedButton = e.target;
  btnNext.disabled = false;
  //btnNext.classList.remove("opacity-0");
  
  const a = e.target.value;
  const label = e.target.nextElementSibling;
  if (a === correctAnswer) {
        // mark LABEL as correct
    
      addClass(label, "correct");

      // add score to userScore total
      //addScore(answerScore);

      // show correct answers tally
      tallyCorrect.innerText = ++countCorrect;
  } else {
        // mark as incorrect
      addClass(label, "wrong");
        tallyInCorrect.innerText = ++countInCorrect;
    }
    // remove event from buttons to avoid clicking again
    Array.from(answerButtonElement.children).forEach((button) => {
        if (button.textContent.includes(correctAnswer)) {
            // show correct answer
            setStatusClass(button, "correct");
        }
        // remove event
        button.removeEventListener("click", selectAnswer);

        // disable to avoid focus
        button.disabled = true;
    });
    // show next button if we have more questions
    if (questions.length > currentQuestionIndex + 1) {
        //removeClass(btnNext, "hidden");
    } else {
      //btnNext.classList.add("opacity-0");
      btnNext.classList.add("hidden");
      btnScore.classList.remove("hidden");
        // show message to indicate that the user has finished
       // levelElement.innerText = "You have finished";
    }
}

function setStatusClass(el, correct) {
  clearStatusClass(el);
  if (correct) {
    el.classList.add("correct");
  } else {
    el.classList.add("wrong");
  }
}

function clearStatusClass(el) {
 // el.classList.remove("correct", "wrong", "easy", "medium", "hard");
}

// show user score and button to restart
function showScore() {
  //console.log(panelMsg);
  
  panelMsg.querySelector("#score-final").innerText = countCorrect;
  panelMsg.querySelector("#score-total").innerText = questions.length;
 
  panelQuestions.classList.remove("!translate-y-0");
  setTimeout(() => panelMsg.classList.remove("scale-0"), 500)
  
}

// add  class to element
function addClass(el, className = "hidden") {
  //console.log(el);
  el.classList.add(`${className}`);
}
// remove class from element
function removeClass(el, className = "hidden") {
  el.classList.remove(`${className}`);
}
const addScore = (score) => (userScore = userScore + score);


// restart quiz from selector
btnRestart.addEventListener("click", () => {
  countCorrect = 0;
  countInCorrect = 0;
  tallyCorrect.innerText = 0;
  tallyInCorrect.innerText = 0;
  btnScore.classList.add("hidden");
  panelMsg.classList.add("scale-0");
  panelSelect.classList.add("translate-y-0");
  btnNext.classList.remove("hidden");
})
// ​​result from api:
// category: "Geography"
// correct_answer: "Jakarta"
// difficulty: "easy"
// incorrect_answers: Array(3) [ "Bandung", "Medan", "Palembang" ]
// question: "What is the capital of Indonesia?"
// type: "multiple"
