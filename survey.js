/* =========================
   INIT
========================= */

const language = sessionStorage.getItem("language") || "lv";
document.documentElement.lang = language;
const texts = TEXTS[language];
const answers = JSON.parse(sessionStorage.getItem("answers") || "{}");
let currentKey = null;

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
  markSkipped(currentKey);
  goNext(true);
});

/* =========================
   CORE FUNCTIONS
========================= */

function renderCurrentQuestion() {
  if (currentIndex >= QUESTION_ORDER.length) {
    finishSurvey();
    return;
  }

  let key = QUESTION_ORDER[currentIndex];

  currentKey = key;

  while (key && !shouldShowQuestion(key)) {
    currentIndex++;
    key = QUESTION_ORDER[currentIndex];
  }

  if (!key) {
    finishSurvey();
    return;
  }

  const q = texts.questions[key];
  if (!q) {
    finishSurvey();
    return;
  }

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

function markSkipped(key) {
  if (!key) return;

  answers[key] = "skipped";

  answers[key + "_score"] = "skipped";

  if (key === "processes") {
    Object.keys(answers).forEach(k => {
      if (k.startsWith("process_")) {
        answers[k] = "skipped";
      }
    });
  }

  saveAnswers();
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
        const isSelected = btn.classList.toggle("selected");

        if (value !== "other") {
          const fieldKey = `process_${value}`;
          answers[fieldKey] = isSelected;
        }


        if (value === "other" && q.other_placeholder) {
          const existingInput = answersEl.querySelector(".other-input");

          if (isSelected && !existingInput) {
            renderOtherInput("process", q.other_placeholder, true);
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

        if (value === "other") {
          answers[key] = null;
        } else {
          selectSingle(key, value);
        }


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
  let updateQuickButtons = () => { };
  let isProgrammaticScroll = false;
  let programmaticEndTimer = null;

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

  const buttons = [];

  const spacerLeft = document.createElement("div");
  spacerLeft.className = "scale-spacer";
  scroll.appendChild(spacerLeft);

  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.className = "scale-btn";
    btn.textContent = i;
    btn.dataset.value = i;

    btn.addEventListener("click", () => {
      setActive(btn);
    });

    buttons.push(btn);
    scroll.appendChild(btn);
  }

  const spacerRight = document.createElement("div");
  spacerRight.className = "scale-spacer";
  scroll.appendChild(spacerRight);

  // === QUICK BUTTONS ===
  const quickButtons = [];

  if (q.quick_options) {
    const quickWrap = document.createElement("div");
    quickWrap.className = "scale-quick";

    q.quick_options.forEach(opt => {
      const qb = document.createElement("button");
      qb.className = "scale-quick-btn";
      qb.textContent = opt.label;
      qb.dataset.value = opt.value;
      
      qb.addEventListener("click", () => {
        const targetBtn = buttons[opt.value - 1];
        isProgrammaticScroll = true;
        centerButton(targetBtn);
      });

      quickButtons.push({ btn: qb, value: opt.value });
      quickWrap.appendChild(qb);
    });

    updateQuickButtons = value => {
      quickButtons.forEach(item => {
        let isActive = false;

        if (item.value === 1) {
          isActive = value <= 2;
        } else if (item.value === 3) {
          isActive = value >= 3 && value <= 4;
        } else if (item.value === 5) {
          isActive = value >= 5 && value <= 6;
        } else if (item.value === 8) {
          isActive = value >= 7 && value <= 8;
        } else if (item.value === 10) {
          isActive = value >= 9;
        }

        item.btn.classList.toggle("is-active", isActive);
      });
    };



    wrapper.appendChild(quickWrap);
  }

  const hint = document.createElement("div");
  hint.className = "scale-hint";
  hint.textContent = texts.common.scale_hint;

  const arrows = document.createElement("div");
  arrows.className = "scale-arrows";
  arrows.textContent = texts.common.scale_arrows;

  wrapper.appendChild(hint);
  wrapper.appendChild(arrows);
  wrapper.appendChild(scroll);
  wrapper.appendChild(labels);
  answersEl.appendChild(wrapper);

  // === INITIAL STATE ===
  const startValue = answers[key + "_score"] || 5;
  const startBtn = buttons[startValue - 1];

  requestAnimationFrame(() => {
    centerButton(startBtn);
    setActive(startBtn);
  });

  // === SCROLL HANDLING ===
  scroll.addEventListener("scroll", () => {
    if (!isScrollable(scroll)) return;

    clearTimeout(programmaticEndTimer);

    programmaticEndTimer = setTimeout(() => {
      isProgrammaticScroll = false;
      pickClosest();
    }, 140);
  });

  function pickClosest() {
    const paddingLeft = parseFloat(getComputedStyle(scroll).paddingLeft);
    const paddingRight = parseFloat(getComputedStyle(scroll).paddingRight);

    const visibleWidth =
      scroll.clientWidth - paddingLeft - paddingRight;

    const centerX =
      scroll.scrollLeft + paddingLeft + visibleWidth / 2;

    let closestBtn = null;
    let closestDist = Infinity;

    buttons.forEach(btn => {
      const btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
      const dist = Math.abs(centerX - btnCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestBtn = btn;
      }
    });

    if (closestBtn) setActive(closestBtn);
  }

  function setActive(btn) {
    buttons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const value = Number(btn.dataset.value);
    answers[key + "_score"] = value;
    saveAnswers();

    updateQuickButtons(value);
    nextBtn.disabled = false;
  }

  function centerButton(btn) {
    const scrollCenter =
      btn.offsetLeft -
      scroll.offsetWidth / 2 +
      btn.offsetWidth / 2;

    scroll.scrollTo({
      left: scrollCenter,
      behavior: "smooth"
    });
  }

  function isScrollable(el) {
    return el.scrollWidth > el.clientWidth;
  }
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


function renderOtherInput(key, placeholder, isMulti = false) {
  const existing = answersEl.querySelector(".other-input");
  if (existing) return;

  const input = document.createElement("input");
  input.type = "text";
  input.className = "other-input";
  input.placeholder = placeholder;

  if (isMulti) {
    input.value = answers[key + "_other"] || "";
  } else {
    input.value = "";
  }

  input.addEventListener("input", () => {
    if (isMulti) {
      answers[key + "_other"] = input.value;
    } else {
      answers[key] = input.value;
    }
    saveAnswers();
  });

  answersEl.appendChild(input);
}


function renderThankYou() {
  titleEl.textContent = "",
    answersEl.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "thankyou";

  const logo = document.createElement("img");
  logo.src = "icon/logo.png";
  logo.alt = "Logo";
  logo.className = "thankyou-logo";

  const title = document.createElement("h1");
  title.textContent = texts.common.thank_you_title;

  const text = document.createElement("p");
  text.textContent = texts.common.thank_you_text;

  wrapper.appendChild(logo);
  wrapper.appendChild(title);
  wrapper.appendChild(text);

  answersEl.appendChild(wrapper);

  document.querySelector(".actions").style.display = "none";
}




function saveAnswers() {
  sessionStorage.setItem("answers", JSON.stringify(answers));
}

function goNext(isSkip = false) {
  if (!isSkip && currentKey) {
    const q = texts.questions[currentKey];

    if (
      q?.type === "single" &&
      answers[currentKey] === null &&
      q.options?.other
    ) {
      answers[currentKey] = "other";
      saveAnswers();
    }
  }

  if (currentIndex >= QUESTION_ORDER.length - 1) {
    finishSurvey();
    return;
  }

  if (nextBtn.disabled && !isSkip) return;

  const app = document.querySelector(".app");

  app.classList.add("is-transitioning");

  setTimeout(() => {
    currentIndex++;
    renderCurrentQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    requestAnimationFrame(() => {
      app.classList.remove("is-transitioning");
    });
  }, 220);
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
  nextBtn.disabled = true;
  nextBtn.textContent = texts.common.sending;;
  skipBtn.style.display = "none";
  const payload = {
    ...answers,
    language,
    branch: sessionStorage.getItem("branch") || null,
    form_type: "parent"
  };

  fetch("https://script.google.com/macros/s/AKfycbxlRSb_qLXVmyyJP61DcTMVK6OqA4jppjsi0YrRpL2hCc3AgjiK2ZfZ8T2OdPFZMzOu/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(payload)
  })
    .then(() => {
      renderThankYou();
      sessionStorage.clear();
    })
    .catch(() => {
      renderThankYou();
      sessionStorage.clear();
    });
}


