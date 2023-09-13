const ques = document.getElementById("ques");
const next = document.getElementById("next");
const displayScore = document.getElementById("score");
const answer = document.querySelectorAll(".answer"); //nodelist of answers
const time = document.getElementById("timer");

//answer options
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");

let questionNo = 0; //default questionNo =0 because array index srarts from 0
let quizArray = []; //for storing array of quiz questions
let score = 0,
  correctAnswers = 0,
  wrongAnswers = 0,
  attempt = 0;

//creating timer
let timerInterval; // Declare a variable to store the interval ID

function timer() {
  let seconds = 30;
  time.textContent = seconds;

  // Clear the previous timer, if any
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(function () {
    if (seconds > 0) {
      time.textContent = seconds;
      seconds--;
    } else {
      time.textContent = 30;
      seconds = 30;
      clearInterval(timerInterval); // Clear the timer when time's up
      // If time's up, call nextQuestion
      nextQuestion();
    }
  }, 1000);
}

// ------------------------------------------

// Get the category from sessionStorage
var category = sessionStorage.getItem("category");

// --------------------------------------------------

//function for displaying question
function displayQuestion(array, questionNumber) {
  SelectedButton();

  quizArray = array; //sets global array
  questionNo = questionNumber; //sets global question number variable
  document.querySelector(".question-no").textContent = `${questionNo + 1}/10`;

  ques.textContent = array[questionNumber].ques; //displays question
  //for displaying answer options
  A.textContent = array[questionNumber].a;
  B.textContent = array[questionNumber].b;
  C.textContent = array[questionNumber].c;
  D.textContent = array[questionNumber].d;

  //remove all prev selected option
  answer.forEach((btn) => {
    timer();
    btn.classList.remove("selected");
  });
}

//getting array of question(objects)

const questionLoad = (category) => {
  switch (category) {
    case "Pipes and cisterns":
      displayQuestion(questionPipes, questionNo);
      break;

    case "Probability":
      displayQuestion(questionProbability, questionNo);

      break;

    case "Problem on ages":
      displayQuestion(questionAges, questionNo);
      break;

    case "Profit and Loss":
      displayQuestion(questionPAndL, questionNo);
      break;
  }
};
questionLoad(category);

//next question after clicking on button 'next question'
const nextQuestion = () => {
  if (questionNo == 9) {
    nextPage();
  } else {
    displayQuestion(quizArray, ++questionNo);
    SelectedButton();
  }
};

next.addEventListener("click", function () {
  checkAnswer();
  nextQuestion();
});

//function for checking answer
function SelectedButton() {
  answer.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove any previously selected buttons
      answer.forEach((btn) => {
        btn.classList.remove("selected");
      });

      // Add the "selected" class to the clicked button
      button.classList.add("selected");
    });
  });
}

//check answer
function checkAnswer() {
  //button(i.e answer) clicked has class 'selected'
  const select = document.querySelector(".selected");
  if (!select) {
    console.log("no answer");
  } else {
    attempt++;
    if (select.id == quizArray[questionNo].correct) {
      score++;
      correctAnswers++;
    }
  }
  displayScore.textContent = `SCORE:${score}`;
}

//save details to localstorge before proceeding to next page
function nextPage() {
  window.open("result.html", "_self");
  sessionStorage.setItem("totalQuestions", 10);
  sessionStorage.setItem("score", score);
  sessionStorage.setItem("correct", correctAnswers);
  sessionStorage.setItem("attempt", attempt);
  sessionStorage.setItem("wrong", 10 - score);
  sessionStorage.setItem("loadQues", questionLoad());
}
