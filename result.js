let score = parseInt(sessionStorage.getItem("score"));
let totalQuestions = parseInt(sessionStorage.getItem("totalQuestions"));
let correct = parseInt(sessionStorage.getItem("correct"));
let attempt = parseInt(sessionStorage.getItem("attempt"));
let wrong = parseInt(sessionStorage.getItem("wrong"));
let username = sessionStorage.getItem("username");
// if (username == null) {
//   username = " ";
// }
username == null ? (username = " ") : username;

document.getElementById("fname").textContent = `${username} Your Result Is:`;
document.getElementById(
  "total"
).textContent = `Total Questions: ${totalQuestions}`;
document.getElementById("attempt").textContent = `Attempted: ${attempt}`;
document.getElementById("right").textContent = `Correct: ${correct}`;
document.getElementById("wrong").textContent = `Wrong: ${wrong}`;

//load quiz page
function quiz() {
  window.location.href = "quiz.html";
}
//load homepage
function home() {
  window.location.href = "homepage.html";
}
