const enter = document.getElementById("enter");
const input = document.getElementById("name");
const button = document.querySelectorAll(".quiz-name"); //get quiz categories
sessionStorage.removeItem("username");
let fullname;
enter.addEventListener("click", function (e) {
  //get username
  if (input.value) {
    fullname = input.value;
    sessionStorage.setItem("username", fullname);

    input.value = "";
  } else {
    alert("please enter correct name");
  }
});

// ---------------------------------------------------------------

function startQuiz(category) {
  fullname = input.value;
  sessionStorage.setItem("category", category);
  window.location.href = "quiz.html";
}
