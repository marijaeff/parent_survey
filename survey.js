/* =========================
   INIT
========================= */

const language = sessionStorage.getItem("language") || "lv";
const texts = TEXTS[language];
const answers = JSON.parse(sessionStorage.getItem("answers") || "{}");

let currentIndex = 0;

/* =========================
   ORDER OF QUESTIONS
========================= */

const QUESTION_ORDER = [
  "relation_to_child",
  "age_group",
  "processes",
  "felt_overall",
  "environment_child_friendly",
  "rooms_overall",
  "felt_safe",
  "understood_process",
  "staff_attitude",
  "participated_in_interview", // nosacīti
  "interview_safeness",        // nosacīti
  "general_comment"
];

/* =========================
   DOM
========================= */

const titleEl = document.getElementById("questionTitle");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");

nextBtn.textContent = texts.common.next;
skipBtn.textContent = texts.common.skip;

/* =========================
   RENDER FLOW
========================= */

renderCurrentQuestion();

nextBtn.addEventListener("click", () => {
  saveAnswers();
  goNext();
});

skipBtn.addEventListener("click", () => {
  goNext();
});

/* =========================
   CORE FUNCTIONS
========================= */

function renderCurrentQuestion() {
  const key = QUESTION_ORDER[currentIndex];

  if (!shouldShowQuestion(key)) {
    goNext();
    return;
  }

  const q = texts.questions[key];
  if (!q) return;

  titleEl.textContent = q.text;
  answersEl.innerHTML = "";
  nextBtn.disabled = true;

  if (q.options) {
    renderOptions(key, q);
  } else if (q.scale) {
    renderScale(key, q);
  } else if (key === "participated_in_interview") {
    renderYesNo(key);
  } else if (key === "general_comment") {
    renderTextarea(key, q);
    nextBtn.disabled = false;
  }
}

// renderē atbilžu pogas (viena vai vairākas)

function renderOptions(key, q) {
  const isMulti = q.type === "multi";

  Object.entries(q.options).forEach(([value, label]) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = label;

    if (isMulti) {
      btn.classList.add("multi");
    }

    btn.addEventListener("click", () => {

      if (isMulti) {
        const fieldKey = `process_${value}`;
        const isSelected = btn.classList.toggle("selected");

        answers[fieldKey] = isSelected;

        if (value === "other" && q.other_placeholder) {
          const existingInput = answersEl.querySelector(".other-input");

          if (isSelected && !existingInput) {
            renderOtherInput(key, q.other_placeholder);
          }

          if (!isSelected && existingInput) {
            existingInput.remove();
            delete answers[key + "_other"];
          }
        }

      } else {
        answersEl.querySelectorAll(".answer-btn")
          .forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected");
        selectSingle(key, value);

        const existingInput = answersEl.querySelector(".other-input");
        if (existingInput) existingInput.remove();

        if (value === "other" && q.other_placeholder) {
          renderOtherInput(key, q.other_placeholder);
        }
      }

      saveAnswers();
      nextBtn.disabled = false;
    });

    answersEl.appendChild(btn);
  });
}




function renderScale(key, q) {
  const wrapper = document.createElement("div");
  wrapper.className = "scale-wrapper";

  const labels = document.createElement("div");
  labels.className = "scale-labels";

  const minLabel = document.createElement("span");
  minLabel.textContent = q.scale.min;

  const maxLabel = document.createElement("span");
  maxLabel.textContent = q.scale.max;

  labels.appendChild(minLabel);
  labels.appendChild(maxLabel);

  const scroll = document.createElement("div");
  scroll.className = "scale-scroll";

  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.className = "scale-btn";
    btn.textContent = i;

    btn.addEventListener("click", () => {
      selectSingle(key + "_score", i);
      scroll.querySelectorAll(".scale-btn")
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      nextBtn.disabled = false;
    });

    scroll.appendChild(btn);
  }

  wrapper.appendChild(labels);
  wrapper.appendChild(scroll);
  answersEl.appendChild(wrapper);
}



function renderYesNo(key) {
  ["yes", "no"].forEach(val => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = texts.common[val];

    btn.addEventListener("click", () => {
      selectSingle(key, val === "yes");
      btn.classList.add("selected");
      nextBtn.disabled = false;
    });

    answersEl.appendChild(btn);
  });
}

function renderTextarea(key, q) {
  const textarea = document.createElement("textarea");
  textarea.placeholder = q.placeholder || "";
  textarea.value = answers[key] || "";

  textarea.addEventListener("input", () => {
    answers[key] = textarea.value;
    saveAnswers();
  });

  answersEl.appendChild(textarea);
}

/* =========================
   HELPERS
========================= */

function selectSingle(key, value) {
  answers[key] = value;
  saveAnswers();
}


function renderOtherInput(key, placeholder) {
  const existing = answersEl.querySelector(".other-input");
  if (existing) return;

  const input = document.createElement("input");
  input.type = "text";
  input.className = "other-input";
  input.placeholder = placeholder;
  input.value = answers[key + "_other"] || "";

  input.addEventListener("input", () => {
    answers[key + "_other"] = input.value;
    saveAnswers();
  });

  answersEl.appendChild(input);
}


function saveAnswers() {
  sessionStorage.setItem("answers", JSON.stringify(answers));
}

function goNext() {
  currentIndex++;
  if (currentIndex < QUESTION_ORDER.length) {
    renderCurrentQuestion();
  } else {
    finishSurvey();
  }
}

/* =========================
   CONDITIONAL LOGIC
========================= */

function shouldShowQuestion(key) {
  if (key === "participated_in_interview") {
    return answers.process_investigative_interview === true;
  }

  if (key === "interview_safeness") {
    return answers.participated_in_interview === true;
  }

  return true;
}

/* =========================
   FINISH
========================= */

function finishSurvey() {
  console.log("DONE", answers);
// šeit būs nosūtīšana uz serveri un/vai pabeigšanas ekrāns
}
