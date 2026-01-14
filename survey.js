const QUESTIONS = [
  {
    key: "overall",
    text: "Kopumā, kā Jūs vērtējat Bērna mājas apmeklējumu?",
    options: [
      "Ļoti labi",
      "Drīzāk labi",
      "Drīzāk slikti",
      "Ļoti slikti"
    ]
  },
  {
    key: "information",
    text: "Vai Jums tika sniegta saprotama informācija par procesu?",
    options: [
      "Pilnībā saprotama",
      "Daļēji saprotama",
      "Grūti saprotama",
      "Netika sniegta"
    ]
  }
];

let state = {
  index: 0,
  answers: {}
};

const questionTitle = document.getElementById("questionTitle");
const answersWrap = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function renderQuestion() {
  const q = QUESTIONS[state.index];

  questionTitle.textContent = q.text;
  answersWrap.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".answer-btn")
        .forEach(b => b.classList.remove("selected"));

      btn.classList.add("selected");
      state.answers[q.key] = option;
      nextBtn.disabled = false;
    });

    answersWrap.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  state.index++;

  if (state.index < QUESTIONS.length) {
    renderQuestion();
  } else {
    console.log("Gatavs!", state.answers);
    alert("Paldies par aizpildīšanu!");
  }
});

renderQuestion();
