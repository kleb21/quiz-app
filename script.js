const quizData = [
  {
    question: "how many presidents have been in USA?",
    a: "15",
    b: "30",
    c: "45",
    d: "50",
    correct: "c",
  },
  {
    question: "how old is Joe Biden?",
    a: "60",
    b: "79",
    c: "89",
    d: "69",
    correct: "b",
  },
  {
    question: "how many states are in USA ",
    a: "35",
    b: "62",
    c: "50",
    d: "43",
    correct: "c",
  },
  {
    question: "which is the expensive state in USA ",
    a: "New York",
    b: "California",
    c: "Massachusetts",
    d: "Vermont",
    correct: "a",
  },
  {
    question: "which is the cheapest state in USA ",
    a: "Arkansas",
    b: "Kansas",
    c: "Georgia",
    d: " Mississippi",
    correct: "d",
  },
];

const answersEls = document.querySelectorAll(".answers");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  noSelectedOption();

  const currentQuiz = quizData[currentQuestion];
  questionEl.innerText = currentQuiz.question;

  aText.innerText = currentQuiz.a;
  bText.innerText = currentQuiz.b;
  cText.innerText = currentQuiz.c;
  dText.innerText = currentQuiz.d;
}

function getSelected() {
  let answer = null;

  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });
  return answer;
}

function noSelectedOption() {
  answersEls.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>you score is ${score} of ${quizData.length}  </h2> 
      
      <button onclick=location.reload()>Reload</button>`;
      
    }
  }
});
