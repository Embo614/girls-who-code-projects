var acousticScore = 0;
var electricScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click",acoustic);
q1a2.addEventListener("click",electric);

q2a1.addEventListener("click",electric);
q2a2.addEventListener("click",acoustic);

q3a1.addEventListener("click",electric);
q3a2.addEventListener("click",acoustic);

let showResultButton = document.getElementById("showResult");
showResultButton.addEventListener("click", updateResult);

restart.addEventListener("click",restartQuiz);

function acoustic() {
  acousticScore += 1;
  questionCount += 1;

    console.log("questionCount = " + questionCount + " acousticScore = " + acousticScore); 
  
if (questionCount == 3) {
  console.log("The quiz is done!")
}
}



function electric() {
  electricScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " electricScore = " + electricScore);

  if (questionCount == 3) { 
  console.log("The quiz is done!")
}
}

function updateResult() {
  if (acousticScore >= 2) {
    result.innerHTML = "You are an Acoustic Guitar Person!";
    console.log("You are an Acoustic Guitar person!");
  } else if (electricScore >= 2) {
    result.innerHTML = "You are an Electric Guitar Person!";
    console.log("You are an Electric Guitar person!");
  }
}

function restartQuiz() {
  result.innerHTML = "You are an...";

  questionCount = 0;
  acousticScore = 0;
  electricScore = 0;

  console.log("Quiz restarted!")
  console.log("questionCount = " + questionCount)
}
